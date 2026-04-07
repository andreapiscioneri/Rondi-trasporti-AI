import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useLang } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/hookable/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/unctx/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/radix3/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/defu/dist/defu.mjs";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/node_modules/ufo/dist/index.mjs";
import "lucide-vue-next";
import "/Users/andreapiscioneri/Repo/Rondi trasporti AI/shared/translations.ts";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contatti",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]" }, _attrs))}><div class="max-w-[1100px] mx-auto"><span class="block mb-4 text-[#E5322D]" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.2em", "text-transform": "uppercase" })}">${ssrInterpolate(unref(t).contattiPage.hero.tag)}</span><h1 class="text-[#111111] dark:text-white mb-4" style="${ssrRenderStyle({ "font-size": "clamp(2rem, 4vw, 3rem)", "font-weight": "900", "line-height": "1.1" })}">${ssrInterpolate(unref(t).contattiPage.hero.title)}</h1><p class="text-[#666666] dark:text-[#999999] mb-10" style="${ssrRenderStyle({ "font-size": "1.05rem", "line-height": "1.7" })}">${ssrInterpolate(unref(t).contattiPage.hero.subtitle)}</p><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(unref(t).contattiPage.offices, (office) => {
        _push(`<article class="p-5 border border-black/10 dark:border-white/10 bg-[#F8F8F8] dark:bg-[#111111]"><h2 class="font-bold mb-2 text-[#111111] dark:text-white">${ssrInterpolate(office.name)}</h2><p class="text-sm whitespace-pre-line text-[#666666] dark:text-[#999999] mb-2">${ssrInterpolate(office.address)}</p><p class="text-sm text-[#666666] dark:text-[#999999]">${ssrInterpolate(office.phone)}</p><p class="text-sm text-[#666666] dark:text-[#999999]">${ssrInterpolate(office.email)}</p><p class="text-sm text-[#666666] dark:text-[#999999] mt-2">${ssrInterpolate(office.hours)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contatti.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contatti-D9E4xAJs.js.map
