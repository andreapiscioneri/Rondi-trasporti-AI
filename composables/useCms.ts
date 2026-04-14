/**
 * useCms — frontend-only CMS store backed by localStorage.
 *
 * Features:
 *  - Authentication  (SHA-256 password hash via Web Crypto API)
 *  - User management (admin can create / delete users)
 *  - Media library   (upload images as base64, max 2 MB each)
 *  - Content editor  (editable key-value pairs)
 *
 * All state is shared app-wide via Nuxt's useState().
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export interface CmsUser {
  id: string
  name: string
  email: string
  passwordHash: string
  role: 'admin' | 'user'
  createdAt: string
}

export interface CmsMedia {
  id: string
  originalName: string
  size: number
  type: string
  dataUrl: string
  uploadedBy: string
  createdAt: string
}

export interface CmsContentItem {
  label: string
  value: string
}

export interface CmsSession {
  userId: string
  name: string
  email: string
  role: 'admin' | 'user'
}

// ── Storage keys ──────────────────────────────────────────────────────────────

const K = {
  users:   'rondi_cms_users',
  media:   'rondi_cms_media',
  content: 'rondi_cms_content',
  session: 'rondi_cms_session',
}

// ── Default content catalogue ─────────────────────────────────────────────────

const DEFAULT_CONTENT: Record<string, CmsContentItem> = {
  home_hero_tag:      { label: 'Home · Hero Tag',          value: 'Trasporto Industriale Specializzato' },
  home_hero_title:    { label: 'Home · Titolo Hero',       value: "Il trasporto che muove l'industria" },
  home_hero_subtitle: { label: 'Home · Sottotitolo Hero',  value: 'Soluzioni di trasporto eccezionale, movimentazioni industriali e logistica integrata dal 1998.' },
  contatti_indirizzo: { label: 'Contatti · Indirizzo',     value: 'Via Industriale, 1 – 25030 Brescia (BS)' },
  contatti_telefono:  { label: 'Contatti · Telefono',      value: '+39 030 000 0000' },
  contatti_email:     { label: 'Contatti · Email',         value: 'info@trasportirondi.it' },
  footer_tagline:     { label: 'Footer · Tagline',         value: 'Trasporto industriale dal 1998' },
}

// ── Helpers ───────────────────────────────────────────────────────────────────

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

function lsLoad<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch { return fallback }
}

function lsSave(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    if ((e as DOMException).name === 'QuotaExceededError') {
      throw new Error('Spazio di archiviazione esaurito. Elimina alcune immagini e riprova.')
    }
    throw e
  }
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload  = () => resolve(reader.result as string)
    reader.onerror = () => reject(new Error('Lettura file fallita'))
    reader.readAsDataURL(file)
  })
}

// ── Composable ────────────────────────────────────────────────────────────────

export function useCms() {
  const users        = useState<CmsUser[]>('cms_users',   () => [])
  const media        = useState<CmsMedia[]>('cms_media',  () => [])
  const contentStore = useState<Record<string, CmsContentItem>>('cms_content', () => ({ ...DEFAULT_CONTENT }))
  const session      = useState<CmsSession | null>('cms_session', () => null)
  const ready        = useState<boolean>('cms_ready', () => false)

  // ── Init ────────────────────────────────────────────────────────────────────

  async function init() {
    if (!import.meta.client || ready.value) return

    // Load persisted data
    users.value   = lsLoad<CmsUser[]>(K.users, [])
    media.value   = lsLoad<CmsMedia[]>(K.media, [])

    const saved = lsLoad<Record<string, CmsContentItem>>(K.content, {})
    const merged: Record<string, CmsContentItem> = {}
    for (const [key, def] of Object.entries(DEFAULT_CONTENT)) {
      merged[key] = { label: def.label, value: saved[key]?.value ?? def.value }
    }
    contentStore.value = merged

    // Restore session
    const savedSession = lsLoad<CmsSession | null>(K.session, null)
    if (savedSession) {
      const still = users.value.find(u => u.id === savedSession.userId)
      session.value = still ? savedSession : null
    }

    // Seed admin (Rondi / rondi@gmail.com / Rondi123)
    if (!users.value.find(u => u.email.toLowerCase() === 'rondi@gmail.com')) {
      const admin: CmsUser = {
        id: uid(),
        name: 'Rondi',
        email: 'rondi@gmail.com',
        passwordHash: await sha256('Rondi123'),
        role: 'admin',
        createdAt: new Date().toISOString(),
      }
      users.value = [admin, ...users.value]
      lsSave(K.users, users.value)
    }

    ready.value = true
  }

  // ── Auth ────────────────────────────────────────────────────────────────────

  async function login(email: string, password: string) {
    const hash = await sha256(password)
    const user = users.value.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === hash,
    )
    if (!user) throw new Error('Credenziali non valide')
    const sess: CmsSession = { userId: user.id, name: user.name, email: user.email, role: user.role }
    session.value = sess
    lsSave(K.session, sess)
  }

  function logout() {
    session.value = null
    localStorage.removeItem(K.session)
  }

  // ── Users ───────────────────────────────────────────────────────────────────

  async function createUser(data: { name: string; email: string; password: string; role: 'admin' | 'user' }) {
    if (!data.name.trim() || !data.email.trim() || !data.password.trim()) {
      throw new Error('Tutti i campi sono obbligatori')
    }
    if (users.value.find(u => u.email.toLowerCase() === data.email.toLowerCase())) {
      throw new Error('Email già registrata')
    }
    const user: CmsUser = {
      id: uid(),
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      passwordHash: await sha256(data.password),
      role: data.role,
      createdAt: new Date().toISOString(),
    }
    users.value = [...users.value, user]
    lsSave(K.users, users.value)
  }

  function deleteUser(id: string) {
    if (session.value?.userId === id) throw new Error('Non puoi eliminare il tuo stesso account')
    users.value = users.value.filter(u => u.id !== id)
    lsSave(K.users, users.value)
  }

  // ── Media ───────────────────────────────────────────────────────────────────

  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
  const MAX_BYTES = 2 * 1024 * 1024 // 2 MB

  async function uploadMedia(file: File) {
    if (!ALLOWED_TYPES.includes(file.type)) {
      throw new Error('Formato non supportato. Usa JPG, PNG, WebP, GIF o SVG.')
    }
    if (file.size > MAX_BYTES) {
      throw new Error('File troppo grande. Massimo 2 MB per immagine.')
    }
    const dataUrl = await fileToDataUrl(file)
    const item: CmsMedia = {
      id: uid(),
      originalName: file.name,
      size: file.size,
      type: file.type,
      dataUrl,
      uploadedBy: session.value?.name ?? 'sconosciuto',
      createdAt: new Date().toISOString(),
    }
    const next = [item, ...media.value]
    media.value = next
    lsSave(K.media, next) // throws if quota exceeded
  }

  function deleteMedia(id: string) {
    media.value = media.value.filter(m => m.id !== id)
    lsSave(K.media, media.value)
  }

  // ── Content ─────────────────────────────────────────────────────────────────

  function saveContent(updates: Record<string, string>) {
    const next = { ...contentStore.value }
    for (const [key, value] of Object.entries(updates)) {
      if (next[key]) next[key] = { ...next[key], value }
    }
    contentStore.value = next
    lsSave(K.content, next)
  }

  // ── Helpers ─────────────────────────────────────────────────────────────────

  function formatBytes(b: number): string {
    if (b < 1024) return b + ' B'
    if (b < 1_048_576) return (b / 1024).toFixed(1) + ' KB'
    return (b / 1_048_576).toFixed(1) + ' MB'
  }

  const isAdmin   = computed(() => session.value?.role === 'admin')
  const isLoggedIn = computed(() => !!session.value)

  return {
    // state
    users,
    media,
    contentStore,
    session,
    ready,
    isAdmin,
    isLoggedIn,
    // methods
    init,
    login,
    logout,
    createUser,
    deleteUser,
    uploadMedia,
    deleteMedia,
    saveContent,
    formatBytes,
  }
}
