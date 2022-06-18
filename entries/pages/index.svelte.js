import { c as create_ssr_component, a as each, b as add_attribute, e as escape } from "../../chunks/index-fa0ff56f.js";
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "main.svelte-tjs5ig{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-y:scroll}.page.svelte-tjs5ig{scroll-snap-align:start}")();
const css = {
  code: "main.svelte-tjs5ig{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-y:scroll}.page.svelte-tjs5ig{scroll-snap-align:start}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const test = [{ label: "Page 1", code: "page1" }, { label: "Page 2", code: "page2" }];
  $$result.css.add(css);
  return `<main class="${"w-full h-full svelte-tjs5ig"}">${each(test, (page) => {
    return `<div class="${"page h-full svelte-tjs5ig"}"${add_attribute("id", page.code, 0)}>${escape(page.label)}
        </div>`;
  })}
</main>`;
});
export { Routes as default };
