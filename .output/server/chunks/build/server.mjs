import { hasInjectionContext, getCurrentInstance, computed, defineComponent, shallowRef, h, resolveComponent, ref, useSSRContext, inject, Suspense, Fragment, createApp, watch, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, provide, shallowReactive, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, reactive, effectScope, toRef, defineAsyncComponent, getCurrentScope, isReadonly, isRef, isShallow, isReactive, toRaw } from 'vue';
import { p as parseQuery, h as getContext, i as hasProtocol, k as joinURL, w as withQuery, l as isScriptProtocol, m as withTrailingSlash, n as withoutTrailingSlash, s as sanitizeStatusCode, $ as $fetch, o as createHooks, c as createError$1, q as executeAsync, t as toRouteMatcher, r as createRouter$1, v as defu } from '../nitro/nitro.mjs';
import { b as baseURL } from '../routes/renderer.mjs';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import { Moon, Sun, X, Menu } from 'lucide-vue-next';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const translations = {
  it: {
    nav: {
      home: "Home",
      servizi: "Servizi",
      sostenibilita: "Sostenibilit\xE0",
      storia: "La Nostra Storia",
      lavora: "Lavora con Noi",
      whistleblowing: "Whistleblowing",
      contatti: "Contatti",
      langSwitch: "EN",
      menu: "Menu"
    },
    hero: {
      tag: "Dal 1998 \xB7 Eccellenza nel Trasporto Industriale",
      title: "La Forza del Trasporto.\nLa Visione del Futuro.",
      subtitle: "Trasporti nazionali, internazionali ed eccezionali. Logistica integrata e servizi gru per l'industria italiana.",
      cta: "Richiedi un Preventivo",
      ctaSecondary: "Scopri i Servizi"
    },
    services: {
      tag: "I Nostri Servizi",
      title: "Soluzioni Complete per la Logistica Moderna",
      subtitle: "Cinque aree di eccellenza per rispondere ad ogni esigenza del trasporto industriale",
      items: [
        {
          title: "Trasporti Nazionali",
          desc: "Copertura capillare su tutto il territorio italiano con tracciamento GPS in tempo reale e consegne H24."
        },
        {
          title: "Trasporti Internazionali",
          desc: "Rotte affidabili verso 30+ paesi con gestione completa della documentazione doganale interna."
        },
        {
          title: "Trasporti Eccezionali",
          desc: "Specialisti in carichi fuori sagoma e fuori massa con autorizzazioni ministeriali e scorte dedicate."
        },
        {
          title: "Gru e Movimentazioni",
          desc: "Sollevamento industriale di precisione con gru fino a 1000t e operatori certificati."
        },
        {
          title: "Logistica e Dogana",
          desc: "Gestione integrata di magazzino, distribuzione e pratiche doganali import/export."
        }
      ],
      cta: "Scopri Tutti i Servizi"
    },
    sustainability: {
      tag: "Sostenibilit\xE0",
      title: "Green Logistics per un Futuro Migliore",
      subtitle: "L'impegno ambientale non \xE8 un'opzione: \xE8 la nostra strategia.",
      desc: "Trasporti Rondi ha scelto un percorso concreto verso la neutralit\xE0 carbonica: energia fotovoltaica nelle sedi operative, flotta progressivamente rinnovata con veicoli Euro 6, e un sistema di monitoraggio delle emissioni CO\u2082 in ogni spedizione.",
      cta: "Scopri il Nostro Impegno",
      certTitle: "Le Nostre Certificazioni",
      certs: ["ISO 9001:2015", "ISO 14001:2015", "ADR", "SQAS"]
    },
    stats: {
      tag: "I Numeri Parlano",
      title: "Dati Reali, Trasparenza Totale",
      items: [
        { value: "1998", label: "Anno di Fondazione" },
        { value: "150+", label: "Automezzi in Flotta" },
        { value: "30+", label: "Paesi Serviti" },
        { value: "2.5M+", label: "Km Percorsi / Anno" },
        { value: "200+", label: "Professionisti del Settore" },
        { value: "25+", label: "Anni di Esperienza" }
      ]
    },
    ctaBanner: {
      title: "Pronto a ottimizzare la tua catena logistica?",
      subtitle: "Richiedi un preventivo personalizzato. Risposta garantita entro 24 ore.",
      cta: "Contattaci Ora"
    },
    serviziPage: {
      hero: {
        tag: "Servizi",
        title: "Ogni Trasporto \xE8 una Missione.",
        subtitle: "Competenza specializzata per ogni esigenza industriale."
      },
      items: [
        {
          id: "nazionali",
          tag: "Trasporti Nazionali",
          title: "Connettere l'Italia, punto per punto.",
          desc: "La nostra rete capillare raggiunge ogni angolo del territorio nazionale con una flotta moderna e sistemi di tracciamento avanzati. Garantiamo puntualit\xE0, sicurezza e flessibilit\xE0 operativa 24/7.",
          features: [
            "Tracciamento GPS in tempo reale",
            "Consegne programmabili H24/7",
            "Assicurazione cargo su ogni spedizione",
            "Documenti di trasporto digitali (CMR)",
            "Gestione carichi ADR"
          ]
        },
        {
          id: "internazionali",
          tag: "Trasporti Internazionali",
          title: "Oltre i Confini, con la Stessa Precisione.",
          desc: "Operiamo su rotte consolidate verso oltre 30 paesi europei ed extraeuropei. Il nostro ufficio interno gestisce tutta la documentazione doganale, garantendo transiti rapidi e conformi.",
          features: [
            "30+ paesi serviti regolarmente",
            "Gestione interna pratiche doganali",
            "Rotte TIR e Conventional",
            "Corrispondenti verificati in ogni paese",
            "Monitoraggio in tempo reale"
          ]
        },
        {
          id: "eccezionali",
          tag: "Trasporti Eccezionali",
          title: "Dove gli Altri si Fermano, Noi Continuiamo.",
          desc: "Siamo specialisti nel trasporto di carichi fuori sagoma, fuori massa e indivisibili. Dalla progettazione del percorso all'ottenimento delle autorizzazioni, gestiamo ogni aspetto del trasporto eccezionale.",
          features: [
            "Veicoli modulari e semirimorchi speciali",
            "Progettazione percorsi personalizzati",
            "Autorizzazioni Ministeriali e Prefettizie",
            "Servizi di scorta tecnica e Polizia",
            "Sollevamenti e posizionamenti industriali"
          ]
        },
        {
          id: "gru",
          tag: "Gru e Movimentazioni",
          title: "Potenza di Sollevamento, Precisione Millimetrica.",
          desc: "Il nostro parco gru copre un range di portate da 50 a 1000 tonnellate. Operatori certificati e attrezzatura di ultima generazione per ogni tipo di intervento industriale.",
          features: [
            "Gru fino a 1000t di portata",
            "Operatori con patentino ministeriale",
            "Pianificazione tecnica del sollevamento",
            "Smontaggio, trasporto e rimontaggio",
            "Disponibilit\xE0 H24 per emergenze"
          ]
        },
        {
          id: "logistica",
          tag: "Logistica e Dogana",
          title: "La Tua Supply Chain, Ottimizzata.",
          desc: "Offriamo servizi di logistica integrata: stoccaggio in magazzini certificati, distribuzione last-mile, e gestione completa delle pratiche doganali per import/export. Un unico interlocutore per tutta la filiera.",
          features: [
            "Magazzini coperti e all'aperto certificati",
            "Software WMS per la gestione stock",
            "Sdoganamento import/export",
            "Dichiarazioni doganali EX/IM",
            "Consulenza regimi doganali speciali"
          ]
        }
      ],
      cta: "Richiedi Preventivo"
    },
    sostenibilitaPage: {
      hero: {
        tag: "Sostenibilit\xE0 & Certificazioni",
        title: "La Responsabilit\xE0 \xE8 nel DNA di Trasporti Rondi.",
        subtitle: "Un impegno concreto per la riduzione dell'impatto ambientale."
      },
      sections: [
        {
          tag: "Energia Rinnovabile",
          title: "Pannelli Fotovoltaici",
          desc: "Le nostre sedi operative sono alimentate da impianti fotovoltaici ad alta efficienza. L'energia prodotta copre il fabbisogno degli uffici e delle officine, riducendo drasticamente le emissioni legate al consumo energetico stazionario."
        },
        {
          tag: "Flotta Green",
          title: "Veicoli Euro 6 e Oltre",
          desc: "Il progressivo rinnovo della flotta con veicoli conformi alla normativa Euro 6 ha ridotto le emissioni di particolato e NOx del 45% rispetto alla flotta precedente. Obiettivo: 100% veicoli a basse emissioni entro il 2030."
        },
        {
          tag: "Monitoraggio Emissioni",
          title: "CO\u2082 sotto Controllo",
          desc: "Ogni spedizione \xE8 accompagnata da un calcolo preciso delle emissioni CO\u2082 generate. I dati sono disponibili in tempo reale per i nostri clienti attraverso il portale dedicato, garantendo trasparenza e responsabilit\xE0 condivisa."
        }
      ],
      certs: {
        title: "Certificazioni e Conformit\xE0",
        subtitle: "Ogni certificazione \xE8 la prova di un impegno verificato da terze parti indipendenti.",
        items: [
          {
            code: "ISO 9001:2015",
            name: "Sistema di Gestione Qualit\xE0",
            desc: "Garanzia di processi standardizzati e miglioramento continuo."
          },
          {
            code: "ISO 14001:2015",
            name: "Sistema di Gestione Ambientale",
            desc: "Impegno certificato nella riduzione dell'impatto ambientale."
          },
          {
            code: "ADR",
            name: "Merci Pericolose",
            desc: "Abilitazione al trasporto di sostanze pericolose in conformit\xE0 ADR."
          },
          {
            code: "SQAS",
            name: "Safety Quality Assessment",
            desc: "Standard internazionale per sicurezza e qualit\xE0 nella logistica chimica."
          }
        ]
      },
      envStats: [
        { value: "-45%", label: "Emissioni NOx vs. flotta precedente" },
        { value: "100%", label: "Energia fotovoltaica nelle sedi" },
        { value: "2030", label: "Target flotta a basse emissioni" },
        { value: "0", label: "Incidenti ambientali (ultimi 5 anni)" }
      ]
    },
    storiaPage: {
      hero: {
        tag: "La Nostra Storia",
        title: "25 Anni di Strade Percorse.",
        subtitle: "Un viaggio che ha trasformato una piccola impresa familiare in un leader del trasporto industriale italiano."
      },
      timeline: [
        {
          year: "1998",
          title: "La Fondazione",
          desc: "Trasporti Rondi nasce come impresa familiare con due automezzi e una visione chiara: affidabilit\xE0 e qualit\xE0 nel trasporto nazionale."
        },
        {
          year: "2002",
          title: "Espansione Internazionale",
          desc: "Avvio delle prime rotte internazionali verso Germania e Francia. La flotta cresce a 15 veicoli e si apre l'ufficio spedizioni dedicato."
        },
        {
          year: "2006",
          title: "Trasporti Eccezionali",
          desc: "Acquisizione delle prime autorizzazioni ministeriali per il trasporto di carichi eccezionali. Ingresso in un segmento altamente specializzato."
        },
        {
          year: "2010",
          title: "Certificazione ISO 9001",
          desc: "Ottenimento della prima certificazione ISO 9001, a conferma dell'impegno nella standardizzazione e nel miglioramento continuo dei processi."
        },
        {
          year: "2014",
          title: "Energia Fotovoltaica",
          desc: "Installazione dei primi impianti fotovoltaici nelle sedi operative. Riduzione del 60% del consumo energetico da fonti fossili."
        },
        {
          year: "2018",
          title: "Nuovo Hub Logistico",
          desc: "Inaugurazione del nuovo hub logistico con magazzini certificati e sistema WMS integrato. La capacit\xE0 di stoccaggio triplica."
        },
        {
          year: "2022",
          title: "ISO 14001 e Rinnovo Flotta",
          desc: "Certificazione ambientale ISO 14001:2015 e avvio del piano di rinnovo flotta con veicoli Euro 6. Riduzione del 45% delle emissioni NOx."
        },
        {
          year: "2024",
          title: "Leader del Settore",
          desc: "Trasporti Rondi si afferma come riferimento nel trasporto eccezionale con oltre 150 automezzi, 200+ professionisti e 30 paesi serviti."
        }
      ],
      cta: "Fai Parte della Storia"
    },
    lavoraPage: {
      hero: {
        tag: "Lavora con Noi",
        title: "Costruisci il Futuro del Trasporto con Noi.",
        subtitle: "Cerchiamo professionisti che condividano la nostra passione per l'eccellenza operativa."
      },
      perks: [
        {
          title: "Formazione Continua",
          desc: "Programmi di aggiornamento professionale e certificazioni finanziate dall'azienda."
        },
        {
          title: "Ambiente Dinamico",
          desc: "Un team internazionale in crescita con opportunit\xE0 reali di avanzamento di carriera."
        },
        {
          title: "Benefits Competitivi",
          desc: "Retribuzione sopra la media di settore, buoni pasto e assicurazione sanitaria integrativa."
        },
        {
          title: "Tecnologia Avanzata",
          desc: "Flotte moderne, sistemi GPS di ultima generazione e software gestionali all'avanguardia."
        }
      ],
      positions: {
        title: "Posizioni Aperte",
        apply: "Candidati",
        items: [
          {
            title: "Autista di Linea Nazionale",
            type: "Full-time",
            location: "Brescia / Italia",
            desc: "Guida di veicoli pesanti (patente CE + CQC) su rotte nazionali. Esperienza minima 2 anni."
          },
          {
            title: "Autista Internazionale",
            type: "Full-time",
            location: "Brescia / Europa",
            desc: "Rotte internazionali verso Francia, Germania, Spagna e oltre. Conoscenza base dell'inglese."
          },
          {
            title: "Addetto Logistica e Magazzino",
            type: "Full-time",
            location: "Brescia",
            desc: "Gestione magazzino, inventario WMS, coordinamento spedizioni in entrata e uscita."
          },
          {
            title: "Impiegato Ufficio Spedizioni",
            type: "Full-time",
            location: "Brescia",
            desc: "Pianificazione trasporti, gestione documenti CMR e doganali. Conoscenza software TMS."
          },
          {
            title: "Meccanico Officina Pesante",
            type: "Full-time",
            location: "Brescia",
            desc: "Manutenzione e riparazione di veicoli pesanti. Diploma tecnico e esperienza nel settore."
          }
        ]
      },
      form: {
        title: "Candidatura Spontanea",
        subtitle: "Non trovi la posizione adatta? Inviaci la tua candidatura spontanea.",
        name: "Nome e Cognome",
        email: "Email",
        phone: "Telefono",
        position: "Posizione di Interesse",
        message: "Presentati e descrivi la tua esperienza",
        cv: "Allega Curriculum Vitae",
        privacy: "Ho letto e accetto la Privacy Policy",
        submit: "Invia Candidatura"
      }
    },
    whistlePage: {
      hero: {
        tag: "Whistleblowing",
        title: "Segnalazioni in Totale Sicurezza.",
        subtitle: "Un canale riservato per segnalare irregolarit\xE0 in conformit\xE0 al D.Lgs. 24/2023."
      },
      info: {
        title: "Cos'\xE8 il Whistleblowing?",
        desc: "Il whistleblowing \xE8 il sistema che consente a dipendenti, collaboratori e terze parti di segnalare, in modo riservato e protetto, condotte illecite o violazioni delle normative aziendali, nel rispetto del D.Lgs. 24/2023 di recepimento della Direttiva UE 2019/1937.",
        guarantees: [
          "Anonimato garantito per il segnalante",
          "Nessuna forma di ritorsione o penalizzazione",
          "Gestione delle segnalazioni da parte del Responsabile dedicato",
          "Risposta entro 90 giorni dalla ricezione della segnalazione"
        ]
      },
      form: {
        title: "Invia una Segnalazione",
        subtitle: "Compila il modulo seguente. La segnalazione sar\xE0 trattata con la massima riservatezza.",
        category: "Categoria della Segnalazione",
        categories: [
          "Corruzione e Frode",
          "Sicurezza sul Lavoro",
          "Violazioni Normative",
          "Conflitto di Interessi",
          "Altro"
        ],
        description: "Descrizione della Segnalazione",
        descPlaceholder: "Descrivi l'irregolarit\xE0 in modo dettagliato, indicando date, luoghi e soggetti coinvolti ove possibile...",
        anonymous: "Invia in modo Anonimo",
        name: "Nome (opzionale)",
        email: "Email (opzionale, per ricevere aggiornamenti)",
        attachments: "Aggiungi Allegati (opzionale)",
        submit: "Invia Segnalazione",
        disclaimer: "La presente segnalazione sar\xE0 trattata in conformit\xE0 al D.Lgs. 24/2023 e al Regolamento UE 2016/679 (GDPR)."
      }
    },
    contattiPage: {
      hero: {
        tag: "Contatti",
        title: "Siamo Qui per Te.",
        subtitle: "Tre sedi operative per rispondere ad ogni esigenza con rapidit\xE0 e professionalit\xE0."
      },
      offices: [
        {
          id: "bs",
          name: "Sede Legale e Operativa",
          address: "Via dell'Industria, 42\n25121 Brescia (BS) \u2014 Italia",
          phone: "+39 030 123 4567",
          email: "info@trasportirondi.it",
          hours: "Lun\u2013Ven: 08:00\u201318:00"
        },
        {
          id: "vr",
          name: "Sede Operativa Nord-Est",
          address: "Via Logistica, 15\n37122 Verona (VR) \u2014 Italia",
          phone: "+39 045 123 4567",
          email: "verona@trasportirondi.it",
          hours: "Lun\u2013Ven: 07:00\u201319:00"
        },
        {
          id: "mi",
          name: "Hub Logistico Milano",
          address: "Via del Commercio, 8\n20099 Sesto San Giovanni (MI) \u2014 Italia",
          phone: "+39 02 123 4567",
          email: "milano@trasportirondi.it",
          hours: "Lun\u2013Ven: 07:00\u201319:00"
        }
      ],
      form: {
        title: "Invia un Messaggio",
        name: "Nome e Cognome",
        company: "Azienda",
        email: "Email",
        phone: "Telefono",
        subject: "Oggetto",
        subjects: [
          "Richiesta Preventivo",
          "Trasporti Nazionali",
          "Trasporti Internazionali",
          "Trasporti Eccezionali",
          "Gru e Movimentazioni",
          "Logistica e Dogana",
          "Altro"
        ],
        message: "Messaggio",
        privacy: "Ho letto e accetto la Privacy Policy",
        submit: "Invia Messaggio"
      }
    },
    footer: {
      tagline: "Leader nel trasporto industriale dal 1998.",
      columns: [
        {
          title: "Servizi",
          links: [
            { label: "Trasporti Nazionali", href: "/servizi#nazionali" },
            { label: "Trasporti Internazionali", href: "/servizi#internazionali" },
            { label: "Trasporti Eccezionali", href: "/servizi#eccezionali" },
            { label: "Gru e Movimentazioni", href: "/servizi#gru" },
            { label: "Logistica e Dogana", href: "/servizi#logistica" }
          ]
        },
        {
          title: "Azienda",
          links: [
            { label: "La Nostra Storia", href: "/storia" },
            { label: "Sostenibilit\xE0", href: "/sostenibilita" },
            { label: "Lavora con Noi", href: "/lavora-con-noi" },
            { label: "Whistleblowing", href: "/whistleblowing" },
            { label: "Contatti", href: "/contatti" }
          ]
        },
        {
          title: "Network",
          links: [
            { label: "Gruppo Rondi S.p.A.", href: "#" },
            { label: "Rondi Logistics S.r.l.", href: "#" },
            { label: "Rondi Crane Services", href: "#" }
          ]
        },
        {
          title: "Legale",
          links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Cookie Policy", href: "#" },
            { label: "Note Legali", href: "#" },
            { label: "Codice Etico", href: "#" }
          ]
        }
      ],
      legal: "\xA9 2024 Trasporti Rondi S.p.A. \xB7 P.IVA 01234567890 \xB7 REA BS-123456 \xB7 Cap. Soc. \u20AC500.000 i.v."
    }
  },
  en: {
    nav: {
      home: "Home",
      servizi: "Services",
      sostenibilita: "Sustainability",
      storia: "Our History",
      lavora: "Careers",
      whistleblowing: "Whistleblowing",
      contatti: "Contact",
      langSwitch: "IT",
      menu: "Menu"
    },
    hero: {
      tag: "Since 1998 \xB7 Excellence in Industrial Transport",
      title: "The Power of Transport.\nThe Vision of the Future.",
      subtitle: "National, international and exceptional transport. Integrated logistics and crane services for Italian industry.",
      cta: "Request a Quote",
      ctaSecondary: "Discover Our Services"
    },
    services: {
      tag: "Our Services",
      title: "Complete Solutions for Modern Logistics",
      subtitle: "Five areas of excellence for every industrial transport requirement",
      items: [
        {
          title: "National Transport",
          desc: "Extensive coverage across Italy with real-time GPS tracking and 24/7 delivery options."
        },
        {
          title: "International Transport",
          desc: "Reliable routes to 30+ countries with full in-house customs documentation management."
        },
        {
          title: "Exceptional Transport",
          desc: "Specialists in oversize and overweight loads with dedicated permits and escorts."
        },
        {
          title: "Crane & Handling",
          desc: "Industrial precision lifting with cranes up to 1000t and certified operators."
        },
        {
          title: "Logistics & Customs",
          desc: "Integrated warehouse management, distribution and customs clearance for import/export."
        }
      ],
      cta: "View All Services"
    },
    sustainability: {
      tag: "Sustainability",
      title: "Green Logistics for a Better Future",
      subtitle: "Environmental commitment is not an option: it's our strategy.",
      desc: "Trasporti Rondi has chosen a concrete path towards carbon neutrality: photovoltaic energy at operational sites, a fleet progressively renewed with Euro 6 vehicles, and a CO\u2082 emissions monitoring system for every shipment.",
      cta: "Discover Our Commitment",
      certTitle: "Our Certifications",
      certs: ["ISO 9001:2015", "ISO 14001:2015", "ADR", "SQAS"]
    },
    stats: {
      tag: "Numbers Speak",
      title: "Real Data, Total Transparency",
      items: [
        { value: "1998", label: "Year Founded" },
        { value: "150+", label: "Vehicles in Fleet" },
        { value: "30+", label: "Countries Served" },
        { value: "2.5M+", label: "Km Driven / Year" },
        { value: "200+", label: "Industry Professionals" },
        { value: "25+", label: "Years of Experience" }
      ]
    },
    ctaBanner: {
      title: "Ready to optimize your logistics chain?",
      subtitle: "Request a personalized quote. Response guaranteed within 24 hours.",
      cta: "Contact Us Now"
    },
    serviziPage: {
      hero: {
        tag: "Services",
        title: "Every Transport is a Mission.",
        subtitle: "Specialized expertise for every industrial requirement."
      },
      items: [
        {
          id: "nazionali",
          tag: "National Transport",
          title: "Connecting Italy, point by point.",
          desc: "Our extensive network reaches every corner of Italy with a modern fleet and advanced tracking systems. We guarantee punctuality, safety and 24/7 operational flexibility.",
          features: [
            "Real-time GPS tracking",
            "Scheduled H24/7 deliveries",
            "Cargo insurance on every shipment",
            "Digital transport documents (CMR)",
            "ADR cargo management"
          ]
        },
        {
          id: "internazionali",
          tag: "International Transport",
          title: "Beyond Borders, with the Same Precision.",
          desc: "We operate on established routes to over 30 European and non-European countries. Our in-house office manages all customs documentation, ensuring fast and compliant transits.",
          features: [
            "30+ countries served regularly",
            "In-house customs documentation",
            "TIR and Conventional routes",
            "Verified correspondents in every country",
            "Real-time monitoring"
          ]
        },
        {
          id: "eccezionali",
          tag: "Exceptional Transport",
          title: "Where Others Stop, We Continue.",
          desc: "We are specialists in the transport of oversize, overweight and indivisible loads. From route design to obtaining permits, we manage every aspect of exceptional transport.",
          features: [
            "Modular vehicles and special semi-trailers",
            "Custom route design",
            "Ministerial and Prefectural permits",
            "Technical escort and Police escort services",
            "Industrial lifts and positioning"
          ]
        },
        {
          id: "gru",
          tag: "Crane & Handling",
          title: "Lifting Power, Millimeter Precision.",
          desc: "Our crane fleet covers a range from 50 to 1000 tonnes. Certified operators and state-of-the-art equipment for every type of industrial intervention.",
          features: [
            "Cranes up to 1000t capacity",
            "Operators with ministerial licence",
            "Technical lifting planning",
            "Disassembly, transport and reassembly",
            "H24 availability for emergencies"
          ]
        },
        {
          id: "logistica",
          tag: "Logistics & Customs",
          title: "Your Supply Chain, Optimized.",
          desc: "We offer integrated logistics services: storage in certified warehouses, last-mile distribution, and complete customs clearance for import/export. One partner for the entire supply chain.",
          features: [
            "Certified covered and open warehouses",
            "WMS software for stock management",
            "Import/export clearance",
            "EX/IM customs declarations",
            "Special customs regime consulting"
          ]
        }
      ],
      cta: "Request a Quote"
    },
    sostenibilitaPage: {
      hero: {
        tag: "Sustainability & Certifications",
        title: "Responsibility is in the DNA of Trasporti Rondi.",
        subtitle: "A concrete commitment to reducing environmental impact."
      },
      sections: [
        {
          tag: "Renewable Energy",
          title: "Photovoltaic Panels",
          desc: "Our operational sites are powered by high-efficiency photovoltaic systems. The energy produced covers the needs of offices and workshops, drastically reducing emissions from stationary energy consumption."
        },
        {
          tag: "Green Fleet",
          title: "Euro 6 Vehicles and Beyond",
          desc: "The progressive renewal of the fleet with Euro 6 compliant vehicles has reduced particulate and NOx emissions by 45% compared to the previous fleet. Target: 100% low-emission vehicles by 2030."
        },
        {
          tag: "Emissions Monitoring",
          title: "CO\u2082 Under Control",
          desc: "Every shipment is accompanied by a precise calculation of the CO\u2082 emissions generated. Data is available in real time for our clients through the dedicated portal, ensuring shared transparency and responsibility."
        }
      ],
      certs: {
        title: "Certifications & Compliance",
        subtitle: "Every certification is proof of a commitment verified by independent third parties.",
        items: [
          {
            code: "ISO 9001:2015",
            name: "Quality Management System",
            desc: "Guarantee of standardized processes and continuous improvement."
          },
          {
            code: "ISO 14001:2015",
            name: "Environmental Management System",
            desc: "Certified commitment to reducing environmental impact."
          },
          {
            code: "ADR",
            name: "Dangerous Goods",
            desc: "Authorization for transport of dangerous substances in ADR compliance."
          },
          {
            code: "SQAS",
            name: "Safety Quality Assessment",
            desc: "International standard for safety and quality in chemical logistics."
          }
        ]
      },
      envStats: [
        { value: "-45%", label: "NOx emissions vs. previous fleet" },
        { value: "100%", label: "Photovoltaic energy at sites" },
        { value: "2030", label: "Low-emission fleet target" },
        { value: "0", label: "Environmental incidents (last 5 years)" }
      ]
    },
    storiaPage: {
      hero: {
        tag: "Our History",
        title: "25 Years of Roads Traveled.",
        subtitle: "A journey that transformed a small family business into a leader in Italian industrial transport."
      },
      timeline: [
        {
          year: "1998",
          title: "The Foundation",
          desc: "Trasporti Rondi was born as a family business with two trucks and a clear vision: reliability and quality in national transport."
        },
        {
          year: "2002",
          title: "International Expansion",
          desc: "Launch of the first international routes to Germany and France. The fleet grows to 15 vehicles and a dedicated freight office opens."
        },
        {
          year: "2006",
          title: "Exceptional Transport",
          desc: "Acquisition of the first ministerial authorizations for exceptional cargo transport, entering a highly specialized segment."
        },
        {
          year: "2010",
          title: "ISO 9001 Certification",
          desc: "Obtaining the first ISO 9001 certification, confirming commitment to process standardization and continuous improvement."
        },
        {
          year: "2014",
          title: "Photovoltaic Energy",
          desc: "Installation of the first photovoltaic systems at operational sites. 60% reduction in energy consumption from fossil fuels."
        },
        {
          year: "2018",
          title: "New Logistics Hub",
          desc: "Opening of the new logistics hub with certified warehouses and integrated WMS system. Storage capacity triples."
        },
        {
          year: "2022",
          title: "ISO 14001 & Fleet Renewal",
          desc: "ISO 14001:2015 environmental certification and start of fleet renewal plan with Euro 6 vehicles. 45% reduction in NOx emissions."
        },
        {
          year: "2024",
          title: "Industry Leader",
          desc: "Trasporti Rondi establishes itself as a reference in exceptional transport with 150+ vehicles, 200+ professionals and 30 countries served."
        }
      ],
      cta: "Be Part of the Story"
    },
    lavoraPage: {
      hero: {
        tag: "Careers",
        title: "Build the Future of Transport with Us.",
        subtitle: "We seek professionals who share our passion for operational excellence."
      },
      perks: [
        {
          title: "Continuous Training",
          desc: "Professional development programs and company-funded certifications."
        },
        {
          title: "Dynamic Environment",
          desc: "A growing international team with real career advancement opportunities."
        },
        {
          title: "Competitive Benefits",
          desc: "Above-industry-average pay, meal vouchers and supplementary health insurance."
        },
        {
          title: "Advanced Technology",
          desc: "Modern fleets, latest-generation GPS systems and cutting-edge management software."
        }
      ],
      positions: {
        title: "Open Positions",
        apply: "Apply",
        items: [
          {
            title: "National Line Driver",
            type: "Full-time",
            location: "Brescia / Italy",
            desc: "Driving heavy vehicles (CE licence + CQC) on national routes. Minimum 2 years experience."
          },
          {
            title: "International Driver",
            type: "Full-time",
            location: "Brescia / Europe",
            desc: "International routes to France, Germany, Spain and beyond. Basic English knowledge required."
          },
          {
            title: "Logistics & Warehouse Operative",
            type: "Full-time",
            location: "Brescia",
            desc: "Warehouse management, WMS inventory, coordination of inbound and outbound shipments."
          },
          {
            title: "Freight Office Employee",
            type: "Full-time",
            location: "Brescia",
            desc: "Transport planning, CMR and customs document management. TMS software knowledge required."
          },
          {
            title: "Heavy Vehicle Mechanic",
            type: "Full-time",
            location: "Brescia",
            desc: "Maintenance and repair of heavy vehicles. Technical diploma and industry experience required."
          }
        ]
      },
      form: {
        title: "Spontaneous Application",
        subtitle: "Can't find the right position? Send us your spontaneous application.",
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        position: "Position of Interest",
        message: "Introduce yourself and describe your experience",
        cv: "Attach CV",
        privacy: "I have read and accept the Privacy Policy",
        submit: "Submit Application"
      }
    },
    whistlePage: {
      hero: {
        tag: "Whistleblowing",
        title: "Reports in Total Security.",
        subtitle: "A confidential channel for reporting irregularities in compliance with Legislative Decree 24/2023."
      },
      info: {
        title: "What is Whistleblowing?",
        desc: "Whistleblowing is the system that allows employees, collaborators and third parties to report, in a confidential and protected manner, illegal conduct or violations of company regulations, in compliance with Legislative Decree 24/2023 transposing EU Directive 2019/1937.",
        guarantees: [
          "Guaranteed anonymity for the whistleblower",
          "No form of retaliation or penalization",
          "Reports handled by the dedicated Responsible Officer",
          "Response within 90 days of receiving the report"
        ]
      },
      form: {
        title: "Submit a Report",
        subtitle: "Fill in the form below. The report will be handled with the utmost confidentiality.",
        category: "Report Category",
        categories: [
          "Corruption and Fraud",
          "Workplace Safety",
          "Regulatory Violations",
          "Conflict of Interest",
          "Other"
        ],
        description: "Report Description",
        descPlaceholder: "Describe the irregularity in detail, indicating dates, locations and individuals involved where possible...",
        anonymous: "Submit Anonymously",
        name: "Name (optional)",
        email: "Email (optional, to receive updates)",
        attachments: "Add Attachments (optional)",
        submit: "Submit Report",
        disclaimer: "This report will be processed in accordance with Legislative Decree 24/2023 and EU Regulation 2016/679 (GDPR)."
      }
    },
    contattiPage: {
      hero: {
        tag: "Contact",
        title: "We Are Here for You.",
        subtitle: "Three operational sites to respond to every need quickly and professionally."
      },
      offices: [
        {
          id: "bs",
          name: "Registered & Operational Office",
          address: "Via dell'Industria, 42\n25121 Brescia (BS) \u2014 Italy",
          phone: "+39 030 123 4567",
          email: "info@trasportirondi.it",
          hours: "Mon\u2013Fri: 08:00\u201318:00"
        },
        {
          id: "vr",
          name: "North-East Operational Office",
          address: "Via Logistica, 15\n37122 Verona (VR) \u2014 Italy",
          phone: "+39 045 123 4567",
          email: "verona@trasportirondi.it",
          hours: "Mon\u2013Fri: 07:00\u201319:00"
        },
        {
          id: "mi",
          name: "Milan Logistics Hub",
          address: "Via del Commercio, 8\n20099 Sesto San Giovanni (MI) \u2014 Italy",
          phone: "+39 02 123 4567",
          email: "milano@trasportirondi.it",
          hours: "Mon\u2013Fri: 07:00\u201319:00"
        }
      ],
      form: {
        title: "Send a Message",
        name: "Full Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        subjects: [
          "Quote Request",
          "National Transport",
          "International Transport",
          "Exceptional Transport",
          "Crane & Handling",
          "Logistics & Customs",
          "Other"
        ],
        message: "Message",
        privacy: "I have read and accept the Privacy Policy",
        submit: "Send Message"
      }
    },
    footer: {
      tagline: "Leader in industrial transport since 1998.",
      columns: [
        {
          title: "Services",
          links: [
            { label: "National Transport", href: "/servizi#nazionali" },
            { label: "International Transport", href: "/servizi#internazionali" },
            { label: "Exceptional Transport", href: "/servizi#eccezionali" },
            { label: "Crane & Handling", href: "/servizi#gru" },
            { label: "Logistics & Customs", href: "/servizi#logistica" }
          ]
        },
        {
          title: "Company",
          links: [
            { label: "Our History", href: "/storia" },
            { label: "Sustainability", href: "/sostenibilita" },
            { label: "Careers", href: "/lavora-con-noi" },
            { label: "Whistleblowing", href: "/whistleblowing" },
            { label: "Contact", href: "/contatti" }
          ]
        },
        {
          title: "Network",
          links: [
            { label: "Gruppo Rondi S.p.A.", href: "#" },
            { label: "Rondi Logistics S.r.l.", href: "#" },
            { label: "Rondi Crane Services", href: "#" }
          ]
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Cookie Policy", href: "#" },
            { label: "Legal Notice", href: "#" },
            { label: "Code of Ethics", href: "#" }
          ]
        }
      ],
      legal: "\xA9 2024 Trasporti Rondi S.p.A. \xB7 P.IVA 01234567890 \xB7 REA BS-123456 \xB7 Share Capital \u20AC500,000 paid up"
    }
  }
};

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.18.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = /* @__PURE__ */ Symbol("layout-meta");
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import('./index-BvUdAWg6.mjs')
  },
  {
    name: "storia",
    path: "/storia",
    component: () => import('./storia-DXadCD1M.mjs')
  },
  {
    name: "servizi",
    path: "/servizi",
    component: () => import('./servizi-B2sHs4rH.mjs')
  },
  {
    name: "contatti",
    path: "/contatti",
    component: () => import('./contatti-D9E4xAJs.mjs')
  },
  {
    name: "slug",
    path: "/:slug(.*)*",
    component: () => import('./_...slug_-C8soRuw4.mjs')
  },
  {
    name: "sostenibilita",
    path: "/sostenibilita",
    component: () => import('./sostenibilita-AW-yd3ak.mjs')
  },
  {
    name: "lavora-con-noi",
    path: "/lavora-con-noi",
    component: () => import('./lavora-con-noi-CnnNyxXw.mjs')
  },
  {
    name: "whistleblowing",
    path: "/whistleblowing",
    component: () => import('./whistleblowing-JwALwR9q.mjs')
  }
];
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      if (from === START_LOCATION) {
        resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  const isPageNavigation = isChangingPage(to, from);
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    useError();
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4
];
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to });
    const href = computed(() => {
      const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            return props.replace ? router.replace(href.value) : router.push(href.value);
          }
        }, slots.default?.());
      };
    }
    // }) as unknown as DefineComponent<NuxtLinkProps, object, object, ComputedOptions, MethodOptions, object, object, EmitsOptions, string, object, NuxtLinkProps, object, SlotsType<NuxtLinkSlots>>
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const logoRondi = "" + __buildAssetsURL("trasporti_rondi_logo.d4J-UgCK.png");
const themeState = ref("light");
const useTheme = () => {
  const theme = themeState;
  const applyTheme = (next) => {
    theme.value = next;
  };
  const toggleTheme = () => {
    applyTheme(theme.value === "light" ? "dark" : "light");
  };
  return {
    theme,
    toggleTheme
  };
};
const langState = ref("it");
const useLang = () => {
  const lang = langState;
  const t = computed(() => translations[lang.value]);
  const setLang = (next) => {
    lang.value = next;
  };
  const toggleLang = () => setLang(lang.value === "it" ? "en" : "it");
  return {
    lang,
    t,
    setLang,
    toggleLang
  };
};
const RED$1 = "#E5322D";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = useTheme();
    const { lang, t } = useLang();
    const route = useRoute();
    const mobileOpen = ref(false);
    const scrolled = ref(false);
    const navLinks = computed(() => [
      { label: t.value.nav.home, href: "/" },
      { label: t.value.nav.servizi, href: "/servizi" },
      { label: t.value.nav.sostenibilita, href: "/sostenibilita" },
      { label: t.value.nav.storia, href: "/storia" },
      { label: t.value.nav.lavora, href: "/lavora-con-noi" },
      { label: t.value.nav.contatti, href: "/contatti" }
    ]);
    const isActive = (href) => href === "/" ? route.path === "/" : route.path.startsWith(href);
    const bgClass = computed(
      () => scrolled.value ? "bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md shadow-sm" : "bg-white dark:bg-[#0A0A0A]"
    );
    watch(
      () => route.path,
      () => {
        mobileOpen.value = false;
      }
    );
    watch(mobileOpen, (open) => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/10 dark:border-white/10 ${unref(bgClass)}`,
        style: { "font-family": "'Roboto', sans-serif" }
      }, _attrs))}><div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[72px] flex items-center justify-between gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center flex-shrink-0 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logoRondi))} alt="Trasporti Rondi" class="h-10 sm:h-11 w-auto object-contain"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logoRondi),
                alt: "Trasporti Rondi",
                class: "h-10 sm:h-11 w-auto object-contain"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:flex items-center gap-1"><!--[-->`);
      ssrRenderList(unref(navLinks), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.href,
          to: link.href,
          class: "relative px-3 py-2 transition-colors duration-200 group",
          style: {
            fontSize: "0.8125rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: isActive(link.href) ? RED$1 : void 0
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="${ssrRenderClass(isActive(link.href) ? "" : "text-[#333333] dark:text-[#CCCCCC] group-hover:text-[#111111] dark:group-hover:text-white transition-colors")}"${_scopeId}>${ssrInterpolate(link.label)}</span>`);
              if (isActive(link.href)) {
                _push2(`<span class="absolute bottom-0 left-3 right-3 h-[2px]" style="${ssrRenderStyle({ background: RED$1 })}"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("span", {
                  class: isActive(link.href) ? "" : "text-[#333333] dark:text-[#CCCCCC] group-hover:text-[#111111] dark:group-hover:text-white transition-colors"
                }, toDisplayString(link.label), 3),
                isActive(link.href) ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "absolute bottom-0 left-3 right-3 h-[2px]",
                  style: { background: RED$1 }
                }, null, 4)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="flex items-center gap-2"><button class="hidden sm:flex items-center gap-1 px-3 py-1.5 border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 transition-colors" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.1em", "color": "#333333" })}"><span class="dark:text-white">${ssrInterpolate(unref(t).nav.langSwitch)}</span></button><button class="w-9 h-9 flex items-center justify-center border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 transition-colors text-[#333333] dark:text-white" aria-label="Toggle theme">`);
      if (unref(theme) === "light") {
        _push(ssrRenderComponent(unref(Moon), { size: 16 }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Sun), { size: 16 }, null, _parent));
      }
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contatti",
        class: "hidden md:flex items-center px-4 py-2 text-white transition-opacity hover:opacity-90",
        style: { "background": "#E5322D", "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.08em", "text-transform": "uppercase" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(lang) === "it" ? "Preventivo" : "Get a Quote")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(lang) === "it" ? "Preventivo" : "Get a Quote"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="lg:hidden w-9 h-9 flex items-center justify-center text-[#333333] dark:text-white" aria-label="Toggle menu">`);
      if (unref(mobileOpen)) {
        _push(ssrRenderComponent(unref(X), { size: 20 }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Menu), { size: 20 }, null, _parent));
      }
      _push(`</button></div></div><div class="${ssrRenderClass(`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${unref(mobileOpen) ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`)}" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}"></div><div class="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-white dark:bg-[#0A0A0A] lg:hidden transition-transform duration-300 flex flex-col" style="${ssrRenderStyle({ transform: unref(mobileOpen) ? "translateX(0)" : "translateX(100%)", fontFamily: "'Roboto', sans-serif" })}"><div class="flex items-center justify-between px-6 h-[72px] border-b border-black/10 dark:border-white/10"><img${ssrRenderAttr("src", unref(logoRondi))} alt="Trasporti Rondi" class="h-9 w-auto object-contain"><button class="text-[#333333] dark:text-white">`);
      _push(ssrRenderComponent(unref(X), { size: 20 }, null, _parent));
      _push(`</button></div><nav class="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-1"><!--[-->`);
      ssrRenderList(unref(navLinks), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.href,
          to: link.href,
          class: "flex items-center py-3 border-b border-black/5 dark:border-white/5 transition-colors",
          style: { fontSize: "1rem", fontWeight: isActive(link.href) ? 700 : 400, color: isActive(link.href) ? RED$1 : void 0 }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="${ssrRenderClass(isActive(link.href) ? "" : "text-[#333333] dark:text-[#CCCCCC]")}"${_scopeId}>${ssrInterpolate(link.label)}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: isActive(link.href) ? "" : "text-[#333333] dark:text-[#CCCCCC]"
                }, toDisplayString(link.label), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/whistleblowing",
        class: "flex items-center py-3 border-b border-black/5 dark:border-white/5",
        style: { "font-size": "1rem", "font-weight": "400" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass(isActive("/whistleblowing") ? "" : "text-[#333333] dark:text-[#CCCCCC]")}" style="${ssrRenderStyle({ color: isActive("/whistleblowing") ? RED$1 : void 0 })}"${_scopeId}>${ssrInterpolate(unref(t).nav.whistleblowing)}</span>`);
          } else {
            return [
              createVNode("span", {
                class: isActive("/whistleblowing") ? "" : "text-[#333333] dark:text-[#CCCCCC]",
                style: { color: isActive("/whistleblowing") ? RED$1 : void 0 }
              }, toDisplayString(unref(t).nav.whistleblowing), 7)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="p-6 border-t border-black/10 dark:border-white/10 flex gap-3"><button class="flex-1 py-2 border border-black/20 dark:border-white/20 text-[#333333] dark:text-white" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.1em" })}">${ssrInterpolate(unref(t).nav.langSwitch)}</button><button class="flex-1 py-2 border border-black/20 dark:border-white/20 text-[#333333] dark:text-white flex items-center justify-center gap-2" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700" })}">`);
      if (unref(theme) === "light") {
        _push(ssrRenderComponent(unref(Moon), { size: 14 }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Sun), { size: 14 }, null, _parent));
      }
      _push(` ${ssrInterpolate(unref(theme) === "light" ? "Dark" : "Light")}</button></div></div></header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const RED = "#E5322D";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "bg-[#0A0A0A] dark:bg-[#050505] text-white",
        style: { "font-family": "'Roboto', sans-serif" }
      }, _attrs))}><div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8"><div class="lg:col-span-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logoRondi))} alt="Trasporti Rondi" class="h-11 w-auto object-contain"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logoRondi),
                alt: "Trasporti Rondi",
                class: "h-11 w-auto object-contain"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-white/50" style="${ssrRenderStyle({ "font-size": "0.8125rem", "font-weight": "400", "line-height": "1.7" })}">${ssrInterpolate(unref(t).footer.tagline)}</p><div class="mt-6 flex gap-3"><!--[-->`);
      ssrRenderList(["LI", "FB", "IG"], (social) => {
        _push(`<a href="#" class="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:border-white/50 hover:text-white/70 transition-colors" style="${ssrRenderStyle({ "font-size": "0.625rem", "font-weight": "700" })}">${ssrInterpolate(social)}</a>`);
      });
      _push(`<!--]--></div></div><!--[-->`);
      ssrRenderList(unref(t).footer.columns, (col) => {
        _push(`<div><h4 class="text-white mb-4" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.12em", "text-transform": "uppercase" })}">${ssrInterpolate(col.title)}</h4><ul class="flex flex-col gap-2.5"><!--[-->`);
        ssrRenderList(col.links, (link) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.href,
            class: "text-white/50 hover:text-white transition-colors",
            style: { "font-size": "0.8125rem", "font-weight": "400" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div><div class="border-t border-white/10"><div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"><p class="text-white/30" style="${ssrRenderStyle({ "font-size": "0.6875rem", "font-weight": "400" })}">${ssrInterpolate(unref(t).footer.legal)}</p><div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full" style="${ssrRenderStyle({ background: RED })}"></span><span class="text-white/30" style="${ssrRenderStyle({ "font-size": "0.6875rem", "font-weight": "400" })}"> Trasporti Rondi S.p.A. </span></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    watch(
      () => route.fullPath,
      () => {
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$4;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_AppFooter = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen flex flex-col bg-white dark:bg-[#0A0A0A] text-[#333333] dark:text-white transition-colors duration-300",
        style: { "font-family": "'Roboto', sans-serif" }
      }, _attrs))}><div class="site-atmosphere"></div>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main class="flex-1 pt-[72px] relative z-10">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-B0Ob2ZrN.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-D4yX0q58.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext?._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = (ssrContext) => entry(ssrContext);

export { __nuxt_component_0 as _, entry_default as default, tryUseNuxtApp as t, useLang as u };
//# sourceMappingURL=server.mjs.map
