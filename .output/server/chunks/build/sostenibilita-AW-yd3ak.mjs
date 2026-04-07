import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useLang } from './server.mjs';
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
import 'lucide-vue-next';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sostenibilita",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]" }, _attrs))}><div class="max-w-[1000px] mx-auto"><span class="block mb-4 text-[#E5322D]" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.2em", "text-transform": "uppercase" })}">${ssrInterpolate(unref(t).sostenibilitaPage.hero.tag)}</span><h1 class="text-[#111111] dark:text-white mb-4" style="${ssrRenderStyle({ "font-size": "clamp(2rem, 4vw, 3rem)", "font-weight": "900", "line-height": "1.1" })}">${ssrInterpolate(unref(t).sostenibilitaPage.hero.title)}</h1><p class="text-[#666666] dark:text-[#999999] mb-10" style="${ssrRenderStyle({ "font-size": "1.05rem", "line-height": "1.7" })}">${ssrInterpolate(unref(t).sostenibilitaPage.hero.subtitle)}</p><div class="space-y-8"><!--[-->`);
      ssrRenderList(unref(t).sostenibilitaPage.sections, (section) => {
        _push(`<article class="p-6 border border-black/10 dark:border-white/10"><p class="text-[#E5322D] mb-2" style="${ssrRenderStyle({ "font-size": "0.75rem", "font-weight": "700", "letter-spacing": "0.16em", "text-transform": "uppercase" })}">${ssrInterpolate(section.tag)}</p><h2 class="text-xl font-bold mb-3 dark:text-white">${ssrInterpolate(section.title)}</h2><p class="text-[#666666] dark:text-[#999999] leading-7">${ssrInterpolate(section.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sostenibilita.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sostenibilita-AW-yd3ak.mjs.map
