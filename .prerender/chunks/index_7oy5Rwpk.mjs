import { c as createComponent, $ as $$Layout } from './Layout_CzMExyP2.mjs';
import { r as renderComponent, a as renderTemplate } from './prerender_2wk0_dQ0.mjs';

const prerender = true;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomePage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/HomePage", "client:component-export": "default" })} ` })}`;
}, "/Users/rahulvigneswaran/Downloads/starfolio/src/pages/index.astro", void 0);

const $$file = "/Users/rahulvigneswaran/Downloads/starfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
