import { K as createVNode, O as Fragment, _ as __astro_tag_component__ } from './prerender_2wk0_dQ0.mjs';
import 'clsx';

const frontmatter = {
  "title": "Intro to Web Accessibility: Building for Everyone",
  "publishedAt": "2025-12-05",
  "updatedAt": "2025-12-05",
  "author": "Alex Mercer",
  "summary": "Learn why accessibility matters and how to build inclusive web experiences using semantic HTML, ARIA, and keyboard navigation.",
  "image": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=192&fit=crop"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "mastering-remote-work-productivity-tips",
    "text": "Mastering Remote Work: Productivity Tips"
  }, {
    "depth": 2,
    "slug": "common-challenges",
    "text": "Common challenges"
  }, {
    "depth": 2,
    "slug": "daily-routine-checklist-example",
    "text": "Daily routine checklist (example)"
  }, {
    "depth": 2,
    "slug": "tools-keep-it-minimal",
    "text": "Tools (keep it minimal)"
  }, {
    "depth": 2,
    "slug": "wrap-up",
    "text": "Wrap-up"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
    input: "input",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "mastering-remote-work-productivity-tips",
      children: "Mastering Remote Work: Productivity Tips"
    }), "\n", createVNode(_components.p, {
      children: "Remote work is less about “working from anywhere” and more about building routines that protect your focus and your energy. A few small defaults go a long way."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Remote work works best when your day has clear starts, clear stops, and fewer context switches."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "common-challenges",
      children: "Common challenges"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Home distractions"
      }), "\n", createVNode(_components.li, {
        children: "Blurry work/life boundaries"
      }), "\n", createVNode(_components.li, {
        children: "Fewer casual social touchpoints"
      }), "\n", createVNode(_components.li, {
        children: "Async communication gaps"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "daily-routine-checklist-example",
      children: "Daily routine checklist (example)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Habit"
          }), createVNode(_components.th, {
            children: "Why it helps"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Dedicated workspace"
          }), createVNode(_components.td, {
            children: "Signals “work mode”"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Plan top 3 tasks"
          }), createVNode(_components.td, {
            children: "Reduces overwhelm"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Deep work block"
          }), createVNode(_components.td, {
            children: "Protects focus"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Walk / stretch break"
          }), createVNode(_components.td, {
            children: "Prevents burnout"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Shutdown ritual"
          }), createVNode(_components.td, {
            children: "Creates a clear end"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "tools-keep-it-minimal",
      children: "Tools (keep it minimal)"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Pick one task tracker (e.g. Linear / GitHub Issues)"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Pick one notes app (e.g. Notion / Obsidian)"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Keep a single calendar (e.g. Google Calendar)"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Turn on Focus / Do Not Disturb during deep work"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Prefer async updates; use chat for blockers only"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "wrap-up",
      children: "Wrap-up"
    }), "\n", createVNode(_components.p, {
      children: "Start with one routine change (workspace + “top 3 tasks”) and one boundary (a daily shutdown time). Once those stick, iterate."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/intro-to-web-accessibility.mdx";
const file = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/intro-to-web-accessibility.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/intro-to-web-accessibility.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
