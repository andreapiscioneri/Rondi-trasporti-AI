import { _ as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-[50vh] flex items-center justify-center px-6 py-24 bg-white dark:bg-[#0A0A0A]" }, _attrs))}><div class="text-center"><p class="text-[#E5322D] uppercase tracking-[0.2em] text-xs font-bold mb-4">404</p><h1 class="text-3xl md:text-4xl font-black text-[#111111] dark:text-white mb-4">Pagina non trovata</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "inline-flex items-center px-6 py-3 text-white",
    style: { "background": "#E5322D", "font-size": "0.875rem", "font-weight": "700", "letter-spacing": "0.06em", "text-transform": "uppercase" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Torna alla Home `);
      } else {
        return [
          createTextVNode(" Torna alla Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-C8soRuw4.mjs.map
