import { u as useLang, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, computed, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrRenderClass } from 'vue/server-renderer';
import { Truck, Globe, Maximize2, Wrench, Package, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const RED = "#E5322D";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeroSlideshow",
  __ssrInlineRender: true,
  props: {
    slides: {}
  },
  setup(__props) {
    const props = __props;
    const current = ref(0);
    ref(false);
    const currentSlide = computed(() => props.slides[current.value]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "relative w-full overflow-hidden bg-black",
        style: { "min-height": "100svh", "height": "100svh", "max-height": "900px" }
      }, _attrs))}><img${ssrRenderAttr("src", unref(currentSlide).image)}${ssrRenderAttr("alt", unref(currentSlide).title)} class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" style="${ssrRenderStyle({ "filter": "brightness(0.45)" })}"><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none"></div><div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none"></div><div class="absolute left-0 top-0 w-1 h-full bg-[#E5322D]"></div><div class="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16 pb-24 lg:pb-28"><div class="max-w-[1440px] mx-auto w-full"><span class="inline-flex items-center gap-2 mb-5 text-white/60" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "600", "letter-spacing": "0.25em", "text-transform": "uppercase" })}"><span class="w-6 h-px bg-[#E5322D]"></span> ${ssrInterpolate(unref(currentSlide).tag)}</span><h1 class="text-white mb-5 max-w-4xl whitespace-pre-line" style="${ssrRenderStyle({ "font-size": "clamp(2.5rem, 6vw, 5rem)", "font-weight": "900", "line-height": "1.05", "letter-spacing": "-0.03em" })}">${ssrInterpolate(unref(currentSlide).title)}</h1><p class="text-white/70 mb-8 max-w-xl" style="${ssrRenderStyle({ "font-size": "clamp(1rem, 1.5vw, 1.125rem)", "font-weight": "400", "line-height": "1.7" })}">${ssrInterpolate(unref(currentSlide).subtitle)}</p><div class="flex flex-wrap gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(currentSlide).ctaHref,
        class: "inline-flex items-center gap-2 px-7 py-3.5 text-white transition-all hover:gap-3",
        style: { background: RED, fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(currentSlide).cta)} `);
            _push2(ssrRenderComponent(unref(ArrowRight), { size: 16 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(currentSlide).cta) + " ", 1),
              createVNode(unref(ArrowRight), { size: 16 })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(currentSlide).ctaSecondary && unref(currentSlide).ctaSecondaryHref) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(currentSlide).ctaSecondaryHref,
          class: "inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 hover:border-white/70 transition-all",
          style: { "font-size": "0.875rem", "font-weight": "700", "letter-spacing": "0.06em", "text-transform": "uppercase" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(currentSlide).ctaSecondary)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(currentSlide).ctaSecondary), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 sm:px-10 lg:px-16 pb-7"><div class="flex items-center gap-3"><!--[-->`);
      ssrRenderList(__props.slides, (_, i) => {
        _push(`<button class="group flex items-center gap-2" aria-label="Go to slide"><div class="relative h-0.5 overflow-hidden bg-white/20 transition-all" style="${ssrRenderStyle({ width: i === unref(current) ? "40px" : "16px" })}"><div class="${ssrRenderClass([i === unref(current) ? "bg-[#E5322D]" : "bg-white/50 group-hover:bg-white/80", "absolute inset-0"])}"></div></div></button>`);
      });
      _push(`<!--]--></div><div class="flex gap-2"><button class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 hover:border-white/50 transition-all" aria-label="Previous">`);
      _push(ssrRenderComponent(unref(ChevronLeft), { size: 18 }, null, _parent));
      _push(`</button><button class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 hover:border-white/50 transition-all" aria-label="Next">`);
      _push(ssrRenderComponent(unref(ChevronRight), { size: 18 }, null, _parent));
      _push(`</button></div><div class="hidden sm:flex items-center gap-1 text-white/40" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.1em" })}"><span class="text-white">${ssrInterpolate(String(unref(current) + 1).padStart(2, "0"))}</span><span>/</span><span>${ssrInterpolate(String(__props.slides.length).padStart(2, "0"))}</span></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSlideshow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { lang, t } = useLang();
    const HERO_SLIDES_IT = [
      {
        image: "https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
        tag: "Dal 1998 \xB7 Trasporto Industriale",
        title: "La Forza del\nTrasporto.",
        subtitle: "Soluzioni logistiche nazionali, internazionali ed eccezionali per l'industria italiana.",
        cta: "Richiedi Preventivo",
        ctaHref: "/contatti",
        ctaSecondary: "Scopri i Servizi",
        ctaSecondaryHref: "/servizi"
      },
      {
        image: "https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
        tag: "Trasporti Internazionali \xB7 30+ Paesi",
        title: "Oltre i Confini,\ncon Precisione.",
        subtitle: "Rotte consolidate verso oltre 30 paesi con gestione interna della documentazione doganale.",
        cta: "Scopri il Servizio",
        ctaHref: "/servizi#internazionali"
      }
    ];
    const HERO_SLIDES_EN = [
      {
        image: "https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
        tag: "Since 1998 \xB7 Industrial Transport",
        title: "The Power of\nTransport.",
        subtitle: "National, international and exceptional logistics for Italian industry.",
        cta: "Get a Quote",
        ctaHref: "/contatti",
        ctaSecondary: "Our Services",
        ctaSecondaryHref: "/servizi"
      },
      {
        image: "https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
        tag: "International Transport \xB7 30+ Countries",
        title: "Beyond Borders,\nPrecisely.",
        subtitle: "Established routes to 30+ countries with full in-house customs documentation.",
        cta: "Discover",
        ctaHref: "/servizi#internazionali"
      }
    ];
    const serviceIcons = [Truck, Globe, Maximize2, Wrench, Package];
    const SERVICE_IMAGES = [
      "https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    ];
    const slides = computed(() => lang.value === "it" ? HERO_SLIDES_IT : HERO_SLIDES_EN);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSlideshow = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroSlideshow, { slides: unref(slides) }, null, _parent));
      _push(`<section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]"><div class="max-w-[1440px] mx-auto"><span class="block mb-3" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.2em", "text-transform": "uppercase", "color": "#E5322D" })}">${ssrInterpolate(unref(t).services.tag)}</span><h2 class="text-[#111111] dark:text-white mb-4 max-w-2xl" style="${ssrRenderStyle({ "font-size": "clamp(2rem, 3.5vw, 2.5rem)", "font-weight": "900", "line-height": "1.15" })}">${ssrInterpolate(unref(t).services.title)}</h2><p class="text-[#666666] dark:text-[#999999] max-w-xl mb-12" style="${ssrRenderStyle({ "font-size": "clamp(1rem, 1.2vw, 1.125rem)", "font-weight": "400", "line-height": "1.7" })}">${ssrInterpolate(unref(t).services.subtitle)}</p><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6"><!--[-->`);
      ssrRenderList(unref(t).services.items, (item, i) => {
        _push(`<div class="group flex flex-col border border-black/10 dark:border-white/10 hover:border-[#E5322D]/50 transition-all duration-300 bg-white dark:bg-[#111111] overflow-hidden h-full"><div class="relative overflow-hidden" style="${ssrRenderStyle({ "aspect-ratio": "4/3" })}"><img${ssrRenderAttr("src", SERVICE_IMAGES[i])}${ssrRenderAttr("alt", item.title)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div><div class="absolute bottom-3 left-3 w-9 h-9 flex items-center justify-center" style="${ssrRenderStyle({ "background": "#E5322D" })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(serviceIcons[i]), {
          size: 18,
          class: "text-white"
        }, null), _parent);
        _push(`</div></div><div class="p-5 flex flex-col gap-3 flex-1"><h3 class="text-[#111111] dark:text-white" style="${ssrRenderStyle({ "font-size": "0.9375rem", "font-weight": "700", "line-height": "1.3" })}">${ssrInterpolate(item.title)}</h3><p class="text-[#666666] dark:text-[#999999] flex-1" style="${ssrRenderStyle({ "font-size": "0.8125rem", "font-weight": "400", "line-height": "1.65" })}">${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-10 flex justify-center sm:justify-start">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servizi",
        class: "inline-flex items-center gap-2 px-6 py-3 border-2 text-[#111111] dark:text-white hover:bg-[#E5322D] hover:text-white hover:border-[#E5322D] transition-all duration-300",
        style: { "border-color": "#111111", "font-size": "0.875rem", "font-weight": "700", "letter-spacing": "0.06em", "text-transform": "uppercase" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t).services.cta)} `);
            _push2(ssrRenderComponent(unref(ArrowRight), { size: 16 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(t).services.cta) + " ", 1),
              createVNode(unref(ArrowRight), { size: 16 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BvUdAWg6.mjs.map
