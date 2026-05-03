import { B as Button, a as cn, c as createComponent, D as DATA, $ as $$Layout, f as formatDate } from './Layout_CzMExyP2.mjs';
import { r as renderComponent, a as renderTemplate, b as addAttribute, u as unescapeHTML, m as maybeRenderHead } from './prerender_2wk0_dQ0.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_D1T2rgNb.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Check, Copy, ChevronRight, ChevronLeft } from 'lucide-react';

function CodeBlock({ children, ...props }) {
  const [copied, setCopied] = useState(false);
  const title = props["data-title"];
  const handleCopy = async () => {
    const text = document.activeElement?.closest(".group")?.querySelector("code")?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "group relative rounded-xl overflow-hidden border border-border my-6", children: [
    title && /* @__PURE__ */ jsx("div", { className: "px-4 py-2 text-xs font-medium border-b border-border bg-muted/50 text-foreground", children: title }),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: handleCopy,
        variant: "outline",
        size: "icon",
        className: cn(
          "absolute size-8 text-primary cursor-pointer right-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity rounded-md border border-border shadow-none",
          title ? "top-13" : "top-3"
        ),
        "aria-label": "Copy code",
        children: copied ? /* @__PURE__ */ jsx(Check, { className: "size-4" }) : /* @__PURE__ */ jsx(Copy, { className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsx("pre", { ...props, className: cn("p-4 m-0! overflow-x-auto text-sm", props.className), children })
  ] });
}

function MediaContainer({
  src,
  alt = "",
  type = "image",
  className = ""
}) {
  return /* @__PURE__ */ jsx("div", { className: `ring-4 ring-muted w-full h-[300px] rounded-lg overflow-hidden flex items-center justify-center ${className}`, children: type === "image" ? /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt,
      className: "w-full h-full object-cover object-center max-w-full max-h-full"
    }
  ) : /* @__PURE__ */ jsx(
    "video",
    {
      src,
      className: "w-full h-full object-cover object-center max-w-full max-h-full",
      controls: true
    }
  ) });
}

const mdxComponents = {
  MediaContainer,
  pre: (props) => /* @__PURE__ */ jsx(CodeBlock, { ...props }),
  hr: (props) => /* @__PURE__ */ jsx("div", { className: "my-10 flex w-full items-center", ...props, children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex-1 h-px bg-border",
      style: {
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)"
      }
    }
  ) }),
  table: (props) => /* @__PURE__ */ jsx("div", { className: "my-6 border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsx(
    "table",
    {
      className: "m-0! w-full min-w-full border-separate border-spacing-0",
      ...props
    }
  ) }) }),
  code: ({ children, ...props }) => {
    if (props["data-language"]) {
      return /* @__PURE__ */ jsx("code", { ...props, children });
    }
    return /* @__PURE__ */ jsx(
      "code",
      {
        className: "px-1.5 py-0.5 rounded-md bg-muted/60 dark:bg-muted/40 text-sm font-mono text-foreground/90",
        ...props,
        children
      }
    );
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = true;
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const sortedPosts = [...posts].sort((a, b) => {
    if (new Date(a.data.publishedAt) > new Date(b.data.publishedAt)) return -1;
    return 1;
  });
  return sortedPosts.map((post, index) => ({
    params: { slug: post.id },
    props: {
      post,
      previousPost: index > 0 ? sortedPosts[index - 1] : null,
      nextPost: index < sortedPosts.length - 1 ? sortedPosts[index + 1] : null
    }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { post, previousPost, nextPost } = Astro2.props;
  const { title, publishedAt, summary, image } = post.data;
  const slug = post.id;
  const { Content } = await renderEntry(post);
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: publishedAt,
    dateModified: publishedAt,
    description: summary,
    image: image ? image.startsWith("http") ? image : `${DATA.url}${image}` : `${DATA.url}/og_image.png`,
    url: `${DATA.url}/blog/${slug}`,
    author: {
      "@type": "Person",
      name: DATA.name
    }
  }).replace(/</g, "\\u003c");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": summary, "image": image, "canonicalURL": `${DATA.url}/blog/${slug}` }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section id="blog"> <script type="application/ld+json">', '<\/script> <div class="flex justify-start gap-4 items-center"> <a href="/blog" class="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group" aria-label="Back to Blog"> ', '\nBack to Blog\n</a> </div> <div class="flex flex-col gap-4"> <h1 class="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight"> ', ' </h1> <p class="text-sm text-muted-foreground"> ', ' </p> </div> <div class="my-6 flex w-full items-center"> <div class="flex-1 h-px bg-border" style="mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);"></div> </div> <article class="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert"> ', ' </article> <nav class="mt-12 pt-8 max-w-2xl"> <div class="flex flex-col sm:flex-row justify-between gap-4"> ', " ", " </div> </nav> </section> "])), maybeRenderHead(), unescapeHTML(jsonLd), renderComponent($$result2, "ChevronLeft", ChevronLeft, { "className": "size-3 group-hover:-translate-x-px transition-transform" }), title, formatDate(publishedAt), renderComponent($$result2, "Content", Content, { "components": mdxComponents }), previousPost ? renderTemplate`<a${addAttribute(`/blog/${previousPost.id}`, "href")} class="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"> <span class="flex items-center gap-1 text-xs text-muted-foreground"> ${renderComponent($$result2, "ChevronLeft", ChevronLeft, { "className": "size-3" })}
Previous
</span> <span class="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word"> ${previousPost.data.title} </span> </a>` : renderTemplate`<div class="hidden sm:block flex-1"></div>`, nextPost ? renderTemplate`<a${addAttribute(`/blog/${nextPost.id}`, "href")} class="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"> <span class="flex items-center justify-end gap-1 text-xs text-muted-foreground">
Next
${renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "size-3" })} </span> <span class="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word"> ${nextPost.data.title} </span> </a>` : renderTemplate`<div class="hidden sm:block flex-1"></div>`) })}`;
}, "/Users/rahulvigneswaran/Downloads/starfolio/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/rahulvigneswaran/Downloads/starfolio/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
