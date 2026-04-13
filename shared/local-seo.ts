export interface GeoService {
  slug: string
  name: string
  shortName: string
  summary: string
  localIntent: string
}

export interface GeoCity {
  slug: string
  name: string
  region: string
  province: string
  lat: number
  lng: number
  strategicNote: string
}

export interface GeoDistrict {
  slug: string
  name: string
  localAngle: string
}

export const GEO_PRIMARY_CITY = 'brescia'

export const GEO_SERVICES: GeoService[] = [
  {
    slug: 'trasporti-nazionali',
    name: 'Trasporti Nazionali',
    shortName: 'Nazionale',
    summary: 'Consegne industriali su tutto il territorio italiano con coordinamento operativo dedicato.',
    localIntent: 'ritiri rapidi e finestre di consegna programmabili',
  },
  {
    slug: 'trasporti-internazionali',
    name: 'Trasporti Internazionali',
    shortName: 'Internazionale',
    summary: 'Rotte europee consolidate con gestione documentale e doganale interna.',
    localIntent: 'partenze regolari verso hub europei e tracciamento continuo',
  },
  {
    slug: 'trasporti-eccezionali',
    name: 'Trasporti Eccezionali',
    shortName: 'Eccezionali',
    summary: 'Movimentazione carichi fuori sagoma e fuori massa con pianificazione tecnica.',
    localIntent: 'autorizzazioni locali e percorso dedicato al carico speciale',
  },
  {
    slug: 'gru-movimentazioni',
    name: 'Gru e Movimentazioni',
    shortName: 'Gru',
    summary: 'Sollevamenti e movimentazioni industriali con mezzi fino a 1000 tonnellate.',
    localIntent: 'sopralluoghi tecnici e finestre operative coordinate con il cantiere',
  },
  {
    slug: 'logistica-dogana',
    name: 'Logistica e Dogana',
    shortName: 'Logistica',
    summary: 'Stoccaggio, distribuzione e pratiche doganali in un unico flusso operativo.',
    localIntent: 'integrazione tra magazzino locale e distribuzione territoriale',
  },
]

export const GEO_CITIES: GeoCity[] = [
  {
    slug: 'brescia',
    name: 'Brescia',
    region: 'Lombardia',
    province: 'BS',
    lat: 45.5416,
    lng: 10.2118,
    strategicNote: 'area primaria con base operativa e copertura industriale estesa',
  },
  {
    slug: 'milano',
    name: 'Milano',
    region: 'Lombardia',
    province: 'MI',
    lat: 45.4642,
    lng: 9.19,
    strategicNote: 'domanda elevata su logistica urbana e distribuzione multi-sede',
  },
  {
    slug: 'verona',
    name: 'Verona',
    region: 'Veneto',
    province: 'VR',
    lat: 45.4384,
    lng: 10.9916,
    strategicNote: 'snodo interregionale con alto volume su tratte nord-est',
  },
  {
    slug: 'bergamo',
    name: 'Bergamo',
    region: 'Lombardia',
    province: 'BG',
    lat: 45.6983,
    lng: 9.6773,
    strategicNote: 'cluster manifatturiero e richieste frequenti di carichi speciali',
  },
]

export const GEO_DISTRICTS: Record<string, GeoDistrict[]> = {
  brescia: [
    { slug: 'centro', name: 'Centro', localAngle: 'finestre operative con accessi urbani pianificati' },
    { slug: 'zona-industriale', name: 'Zona Industriale', localAngle: 'gestione ritiri multipli in area produttiva' },
  ],
  milano: [
    { slug: 'lambrate', name: 'Lambrate', localAngle: 'collegamenti rapidi verso dorsali est della citta' },
    { slug: 'bicocca', name: 'Bicocca', localAngle: 'supporto logistico a poli direzionali e produttivi' },
  ],
  verona: [
    { slug: 'zai', name: 'ZAI', localAngle: 'operativita su area intermodale e traffico merci' },
    { slug: 'borgo-roma', name: 'Borgo Roma', localAngle: 'servizio puntuale per cantieri e poli sanitari' },
  ],
  bergamo: [
    { slug: 'dalmine', name: 'Dalmine', localAngle: 'copertura del comparto industriale bergamasco ovest' },
    { slug: 'grumello', name: 'Grumello', localAngle: 'tratte locali integrate con corridoio autostradale A4' },
  ],
}

export function getGeoService(slug: string) {
  return GEO_SERVICES.find(s => s.slug === slug)
}

export function getGeoCity(slug: string) {
  return GEO_CITIES.find(c => c.slug === slug)
}

export function getGeoDistrict(citySlug: string, districtSlug?: string | null) {
  if (!districtSlug) return undefined
  return (GEO_DISTRICTS[citySlug] || []).find(d => d.slug === districtSlug)
}

export function getCityDistricts(citySlug: string) {
  return GEO_DISTRICTS[citySlug] || []
}

export function buildGeoLocalPath(serviceSlug: string, citySlug: string, districtSlug?: string) {
  if (!districtSlug) return `/servizi/${serviceSlug}/${citySlug}`
  return `/servizi/${serviceSlug}/${citySlug}/${districtSlug}`
}

export function buildGeoServiceRootPath(serviceSlug: string) {
  return `/servizi/${serviceSlug}`
}

export const GEO_SERVICE_ROOT_PATHS = GEO_SERVICES.map(service =>
  buildGeoServiceRootPath(service.slug),
)

export const GEO_LOCAL_PATHS = GEO_SERVICES.flatMap(service =>
  GEO_CITIES.flatMap(city => {
    const cityPath = buildGeoLocalPath(service.slug, city.slug)
    const districtPaths = getCityDistricts(city.slug).map(d =>
      buildGeoLocalPath(service.slug, city.slug, d.slug),
    )
    return [cityPath, ...districtPaths]
  }),
)
