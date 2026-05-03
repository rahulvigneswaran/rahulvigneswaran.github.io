import { c as createComponent, $ as $$Layout } from './Layout_CzMExyP2.mjs';
import { r as renderComponent, a as renderTemplate } from './prerender_2wk0_dQ0.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useInView, AnimatePresence, motion } from 'motion/react';
import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { g as getCollection } from './_astro_content_D1T2rgNb.mjs';

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px"
}) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, {
    once: true,
    ...inViewMargin ? { margin: inViewMargin } : {}
  });
  const isInView = !inView || inViewResult;
  const defaultVariants = {
    hidden: { y: -yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: `blur(0px)` }
  };
  const combinedVariants = variant || defaultVariants;
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      exit: "hidden",
      variants: combinedVariants,
      transition: {
        delay: 0.04 + delay,
        duration,
        ease: "easeOut"
      },
      className,
      children
    }
  ) });
};

const BLUR_FADE_DELAY = 0.04;
function BlogList({ posts, allPostsCount, pagination, pageSize }) {
  return /* @__PURE__ */ jsxs("section", { id: "blog", children: [
    /* @__PURE__ */ jsxs(BlurFade, { delay: BLUR_FADE_DELAY, children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-2xl font-semibold tracking-tight mb-4", children: [
        "Blog",
        " ",
        /* @__PURE__ */ jsxs("span", { className: "ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm", children: [
          allPostsCount,
          " posts"
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-8", children: "My personal reflections about web development, life, and more." })
    ] }),
    posts.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY * 2, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-5", children: posts.map((post, id) => {
        const indexNumber = (pagination.page - 1) * pageSize + id + 1;
        return /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY * 3 + id * 0.05, children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            href: `/blog/${post.id}`,
            children: [
              /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono tabular-nums font-medium mt-[5px]", children: [
                String(indexNumber).padStart(2, "0"),
                "."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 flex-1", children: [
                /* @__PURE__ */ jsx("p", { className: "tracking-tight text-lg font-medium", children: /* @__PURE__ */ jsxs("span", { className: "group-hover:text-foreground transition-colors", children: [
                  post.title,
                  /* @__PURE__ */ jsx(
                    ChevronRight,
                    {
                      className: "ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0",
                      "aria-hidden": true
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: post.publishedAt })
              ] })
            ]
          }
        ) }, post.id);
      }) }) }),
      pagination.totalPages > 1 && /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY * 4, children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3 flex-row items-center justify-between mt-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
          "Page ",
          pagination.page,
          " of ",
          pagination.totalPages
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 sm:justify-end", children: [
          pagination.hasPreviousPage ? /* @__PURE__ */ jsx(
            "a",
            {
              href: `/blog?page=${pagination.page - 1}`,
              className: "h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              children: "Previous"
            }
          ) : /* @__PURE__ */ jsx("span", { className: "h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed", children: "Previous" }),
          pagination.hasNextPage ? /* @__PURE__ */ jsx(
            "a",
            {
              href: `/blog?page=${pagination.page + 1}`,
              className: "h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              children: "Next"
            }
          ) : /* @__PURE__ */ jsx("span", { className: "h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed", children: "Next" })
        ] })
      ] }) })
    ] }) : /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY * 2, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center", children: "No blog posts yet. Check back soon!" }) }) })
  ] });
}

function paginate(items, options) {
  const { page, pageSize } = options;
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems = items.slice(startIndex, endIndex);
  return {
    items: paginatedItems,
    pagination: {
      page,
      pageSize,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1
    }
  };
}
function normalizePage(page, maxPage) {
  if (typeof page === "string") {
    const parsed = parseInt(page, 10);
    if (isNaN(parsed) || parsed < 1) return 1;
    return Math.min(parsed, maxPage);
  }
  if (typeof page === "number") {
    if (page < 1) return 1;
    return Math.min(page, maxPage);
  }
  return 1;
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const PAGE_SIZE = 5;
  const allPosts = await getCollection("blog");
  const sortedPosts = [...allPosts].sort((a, b) => {
    if (new Date(a.data.publishedAt) > new Date(b.data.publishedAt)) return -1;
    return 1;
  });
  const pageParam = Astro2.url.searchParams.get("page") ?? void 0;
  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE
  });
  const posts = paginatedPosts.map((post) => ({
    id: post.id,
    title: post.data.title,
    publishedAt: post.data.publishedAt
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "description": "Thoughts on software development, life, and more." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogList", BlogList, { "client:load": true, "posts": posts, "allPostsCount": sortedPosts.length, "pagination": pagination, "pageSize": PAGE_SIZE, "client:component-hydration": "load", "client:component-path": "@/components/BlogList", "client:component-export": "default" })} ` })}`;
}, "/Users/rahulvigneswaran/Downloads/starfolio/src/pages/blog/index.astro", void 0);

const $$file = "/Users/rahulvigneswaran/Downloads/starfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
