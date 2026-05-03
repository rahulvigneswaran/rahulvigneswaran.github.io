import { K as createVNode, O as Fragment, _ as __astro_tag_component__ } from './prerender_2wk0_dQ0.mjs';
import 'clsx';

const frontmatter = {
  "title": "Building RESTful APIs with Node.js and Express",
  "publishedAt": "2026-04-10",
  "updatedAt": "2026-04-10",
  "author": "Alex Mercer",
  "summary": "A step-by-step guide to designing and building production-ready REST APIs with Node.js, Express, and proper error handling.",
  "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=192&fit=crop"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "typescript-best-practices-for-clean-maintainable-code",
    "text": "TypeScript Best Practices for Clean, Maintainable Code"
  }, {
    "depth": 2,
    "slug": "practical-rules-of-thumb",
    "text": "Practical rules of thumb"
  }, {
    "depth": 2,
    "slug": "one-pattern-worth-memorizing",
    "text": "One pattern worth memorizing"
  }, {
    "depth": 2,
    "slug": "wrap-up",
    "text": "Wrap-up"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    del: "del",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, {MediaContainer} = _components;
  if (!MediaContainer) _missingMdxReference("MediaContainer");
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "typescript-best-practices-for-clean-maintainable-code",
      children: "TypeScript Best Practices for Clean, Maintainable Code"
    }), "\n", createVNode(_components.p, {
      children: ["TypeScript shines when it helps you model reality - not when it forces you to fight types all day. A few small defaults can make a codebase feel ", createVNode("mark", {
        children: "calmer, safer, and easier to refactor"
      }), "."]
    }), "\n", createVNode(MediaContainer, {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&fit=crop",
      alt: "TypeScript code on screen"
    }), "\n", createVNode(_components.h2, {
      id: "practical-rules-of-thumb",
      children: "Practical rules of thumb"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Turn on strictness and fix the sharp edges early."
      }), "\n", createVNode(_components.li, {
        children: "Prefer readable types over clever types."
      }), "\n", createVNode(_components.li, {
        children: "Use unions for “one of these”, interfaces for “shape of this”."
      }), "\n", createVNode(_components.li, {
        children: ["Avoid ", createVNode(_components.code, {
          children: "any"
        }), " as a shortcut; it becomes ", createVNode(_components.del, {
          children: "future debt"
        }), " fast."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "one-pattern-worth-memorizing",
      children: "One pattern worth memorizing"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        tabindex: "0",
        "data-language": "ts",
        "data-theme": "github-light github-dark",
        children: createVNode(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light github-dark",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "type"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Result"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "T"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  |"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "ok"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " true"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "; "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " T"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  |"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "ok"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " false"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "; "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "error"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " };"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " function"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " parseNumber"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "input"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Result"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "number"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  const"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " n"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Number"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(input);"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  return"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Number."
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "isFinite"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(n) "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { ok: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", value: n } "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { ok: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", error: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"Not a number\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " };"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "wrap-up",
      children: "Wrap-up"
    }), "\n", createVNode(_components.p, {
      children: "The best TypeScript code reads like good documentation: clear names, predictable shapes, and errors that point you to the fix."
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/blog/building-restful-apis.mdx";
const file = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/building-restful-apis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/building-restful-apis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
