import { K as createVNode, O as Fragment, _ as __astro_tag_component__ } from './prerender_2wk0_dQ0.mjs';
import 'clsx';

const frontmatter = {
  "title": "JavaScript Async/Await: Promises Without the Pain",
  "publishedAt": "2025-01-28",
  "updatedAt": "2025-01-28",
  "author": "Alex Mercer",
  "summary": "Ditch callback hell for good - a practical walkthrough of async/await, error handling, and parallel execution patterns.",
  "image": "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=192&fit=crop"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "git-workflow-guide-from-chaos-to-clarity",
    "text": "Git Workflow Guide: From Chaos to Clarity"
  }, {
    "depth": 2,
    "slug": "a-simple-team-workflow",
    "text": "A simple team workflow"
  }, {
    "depth": 2,
    "slug": "commit-message-tips",
    "text": "Commit message tips"
  }, {
    "depth": 2,
    "slug": "pr-checklist",
    "text": "PR checklist"
  }, {
    "depth": 2,
    "slug": "wrap-up",
    "text": "Wrap-up"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "git-workflow-guide-from-chaos-to-clarity",
      children: "Git Workflow Guide: From Chaos to Clarity"
    }), "\n", createVNode(_components.p, {
      children: "Git is powerful, but teams usually struggle because they don’t agree on a few basics. A simple workflow keeps history readable, reviews focused, and releases less stressful."
    }), "\n", createVNode(_components.p, {
      children: "This is a lightweight guide you can adopt in a day and iterate on later."
    }), "\n", createVNode(_components.h2, {
      id: "a-simple-team-workflow",
      children: "A simple team workflow"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Branch from ", createVNode(_components.code, {
          children: "main"
        }), " for every change."]
      }), "\n", createVNode(_components.li, {
        children: "Keep branches small and short-lived."
      }), "\n", createVNode(_components.li, {
        children: "Open a pull request early and ask for review."
      }), "\n", createVNode(_components.li, {
        children: ["Merge back to ", createVNode(_components.code, {
          children: "main"
        }), " once tests pass."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "commit-message-tips",
      children: "Commit message tips"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Start with a clear verb (“add”, “fix”, “remove”, “refactor”)."
      }), "\n", createVNode(_components.li, {
        children: "Keep the first line short and specific."
      }), "\n", createVNode(_components.li, {
        children: "Prefer multiple small commits over one giant “WIP”."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "pr-checklist",
      children: "PR checklist"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Explain what changed and why."
      }), "\n", createVNode(_components.li, {
        children: "Link the issue or describe the user impact."
      }), "\n", createVNode(_components.li, {
        children: "Add tests (or explain why not)."
      }), "\n", createVNode(_components.li, {
        children: "Keep the diff small enough to review quickly."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "wrap-up",
      children: "Wrap-up"
    }), "\n", createVNode(_components.p, {
      children: "The goal isn’t “perfect Git” - it’s fewer surprises and faster collaboration. Start simple, write down the rules, and improve them as your team grows."
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

const url = "src/content/blog/javascript-async-await.mdx";
const file = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/javascript-async-await.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/javascript-async-await.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
