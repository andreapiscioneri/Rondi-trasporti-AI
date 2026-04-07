import { u as useLang, _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { Truck, Globe, Maximize2, Wrench, Package, CheckCircle2, ArrowRight } from "lucide-vue-next";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/hookable/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/unctx/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/radix3/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/defu/dist/defu.mjs";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/ufo/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/shared/translations.ts";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "servizi",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    const serviceIcons = [Truck, Globe, Maximize2, Wrench, Package];
    const SERVICE_IMAGES = [
      "https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
      "https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
      "https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
      "https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
      "https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative bg-[#0A0A0A] dark:bg-[#050505] py-24 lg:py-36 px-4 sm:px-6 lg:px-10 overflow-hidden"><div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=1920" alt="" class="w-full h-full object-cover opacity-20"><div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div></div><div class="absolute left-0 top-0 bottom-0 w-1 bg-[#E5322D]"></div><div class="max-w-[1440px] mx-auto relative z-10"><span class="block mb-4" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.2em", "text-transform": "uppercase", "color": "#E5322D" })}">${ssrInterpolate(unref(t).serviziPage.hero.tag)}</span><h1 class="text-white mb-4 max-w-2xl" style="${ssrRenderStyle({ "font-size": "clamp(2.5rem, 5vw, 4rem)", "font-weight": "900", "line-height": "1.05", "letter-spacing": "-0.02em" })}">${ssrInterpolate(unref(t).serviziPage.hero.title)}</h1><p class="text-white/60 max-w-lg" style="${ssrRenderStyle({ "font-size": "clamp(1rem, 1.5vw, 1.125rem)", "font-weight": "400", "line-height": "1.65" })}">${ssrInterpolate(unref(t).serviziPage.hero.subtitle)}</p></div></section><div class="sticky top-[72px] z-30 bg-white dark:bg-[#0A0A0A] border-b border-black/10 dark:border-white/10 overflow-x-auto"><div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex gap-1 py-2 whitespace-nowrap"><!--[-->`);
      ssrRenderList(unref(t).serviziPage.items, (item, i) => {
        _push(`<a${ssrRenderAttr("href", `#${item.id}`)} class="inline-flex items-center gap-2 px-4 py-2 text-[#555555] dark:text-[#999999] hover:text-[#111111] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors" style="${ssrRenderStyle({ "font-size": "0.8125rem", "font-weight": "500" })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(serviceIcons[i]), {
          size: 14,
          style: { "color": "#E5322D" }
        }, null), _parent);
        _push(` ${ssrInterpolate(item.tag)}</a>`);
      });
      _push(`<!--]--></div></div><!--[-->`);
      ssrRenderList(unref(t).serviziPage.items, (item, i) => {
        _push(`<section${ssrRenderAttr("id", item.id)} class="${ssrRenderClass(`py-20 lg:py-28 px-4 sm:px-6 lg:px-10 ${i % 2 === 0 ? "bg-white dark:bg-[#0A0A0A]" : "bg-[#F5F5F5] dark:bg-[#111111]"}`)}"><div class="max-w-[1440px] mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"><div class="relative overflow-hidden group"><div style="${ssrRenderStyle({ "aspect-ratio": "4/3" })}" class="overflow-hidden"><img${ssrRenderAttr("src", SERVICE_IMAGES[i])}${ssrRenderAttr("alt", item.tag)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></div></div><div><span class="block mb-3" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.2em", "text-transform": "uppercase", "color": "#E5322D" })}">${ssrInterpolate(item.tag)}</span><h2 class="text-[#111111] dark:text-white mb-4" style="${ssrRenderStyle({ "font-size": "clamp(1.75rem, 3vw, 2.5rem)", "font-weight": "900", "line-height": "1.1" })}">${ssrInterpolate(item.title)}</h2><p class="text-[#666666] dark:text-[#999999] mb-8" style="${ssrRenderStyle({ "font-size": "clamp(1rem, 1.2vw, 1.0625rem)", "font-weight": "400", "line-height": "1.75" })}">${ssrInterpolate(item.desc)}</p><div class="flex flex-col gap-3 mb-8"><!--[-->`);
        ssrRenderList(item.features, (feat) => {
          _push(`<div class="flex items-start gap-3">`);
          _push(ssrRenderComponent(unref(CheckCircle2), {
            size: 18,
            style: { "color": "#E5322D", "flex-shrink": "0", "margin-top": "2px" }
          }, null, _parent));
          _push(`<span class="text-[#444444] dark:text-[#CCCCCC]" style="${ssrRenderStyle({ "font-size": "0.9375rem", "font-weight": "400", "line-height": "1.5" })}">${ssrInterpolate(feat)}</span></div>`);
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contatti",
          class: "inline-flex items-center gap-2 px-6 py-3 text-white transition-all hover:gap-3",
          style: { "background": "#E5322D", "font-size": "0.875rem", "font-weight": "700", "letter-spacing": "0.06em", "text-transform": "uppercase" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t).serviziPage.cta)} `);
              _push2(ssrRenderComponent(unref(ArrowRight), { size: 16 }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(unref(t).serviziPage.cta) + " ", 1),
                createVNode(unref(ArrowRight), { size: 16 })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/servizi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=servizi-B2sHs4rH.js.map
