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
  __name: "storia",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#F5F5F5] dark:bg-[#111111]" }, _attrs))}><div class="max-w-[1000px] mx-auto"><span class="block mb-4 text-[#E5322D]" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.2em", "text-transform": "uppercase" })}">${ssrInterpolate(unref(t).storiaPage.hero.tag)}</span><h1 class="text-[#111111] dark:text-white mb-4" style="${ssrRenderStyle({ "font-size": "clamp(2rem, 4vw, 3rem)", "font-weight": "900", "line-height": "1.1" })}">${ssrInterpolate(unref(t).storiaPage.hero.title)}</h1><p class="text-[#666666] dark:text-[#999999] mb-12" style="${ssrRenderStyle({ "font-size": "1.05rem", "line-height": "1.7" })}">${ssrInterpolate(unref(t).storiaPage.hero.subtitle)}</p><div class="space-y-5"><!--[-->`);
      ssrRenderList(unref(t).storiaPage.timeline, (entry) => {
        _push(`<article class="bg-white dark:bg-[#0A0A0A] p-6 border border-black/10 dark:border-white/10"><p class="text-[#E5322D] font-bold mb-2">${ssrInterpolate(entry.year)}</p><h2 class="text-xl font-bold mb-2 text-[#111111] dark:text-white">${ssrInterpolate(entry.title)}</h2><p class="text-[#666666] dark:text-[#999999] leading-7">${ssrInterpolate(entry.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/storia.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=storia-DXadCD1M.js.map
