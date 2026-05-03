import { K as createVNode, O as Fragment, _ as __astro_tag_component__ } from './prerender_2wk0_dQ0.mjs';
import 'clsx';

const frontmatter = {
  "title": "Getting Started with Astro: Build Faster Websites",
  "publishedAt": "2026-05-01",
  "updatedAt": "2026-05-01",
  "author": "Alex Mercer",
  "summary": "An introduction to Astro, the modern static site builder that ships zero JavaScript by default and lets you use any framework.",
  "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=192&fit=crop"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-astro",
    "text": "Why Astro"
  }, {
    "depth": 2,
    "slug": "your-first-astro-page",
    "text": "Your first Astro page"
  }, {
    "depth": 2,
    "slug": "adding-a-react-component",
    "text": "Adding a React component"
  }, {
    "depth": 2,
    "slug": "content-collections",
    "text": "Content collections"
  }, {
    "depth": 2,
    "slug": "wrap-up",
    "text": "Wrap-up"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Astro is a web framework built around one idea: ship less JavaScript. Pages are rendered to HTML at build time, and client-side JS is only sent when you explicitly opt in. The result is fast by default - no configuration required."
    }), "\n", createVNode(_components.h2, {
      id: "why-astro",
      children: "Why Astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Zero JS by default."
        }), " HTML is shipped as-is unless you add an interactive component."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bring your own framework."
        }), " React, Svelte, Vue, Solid - use any or all of them in the same project."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Content-first."
        }), " MDX, Markdown, and content collections are first-class citizens."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Islands architecture."
        }), " Interactive components hydrate independently, so slow widgets don’t block fast content."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "your-first-astro-page",
      children: "Your first Astro page"
    }), "\n", createVNode(_components.p, {
      children: ["Pages live in ", createVNode(_components.code, {
        children: "src/pages/"
      }), " and use the ", createVNode(_components.code, {
        children: ".astro"
      }), " extension:"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [createVNode(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "astro",
        "data-theme": "github-light github-dark",
        children: "src/pages/index.astro"
      }), createVNode(_components.pre, {
        tabindex: "0",
        "data-language": "astro",
        "data-theme": "github-light github-dark",
        children: createVNode(_components.code, {
          "data-language": "astro",
          "data-theme": "github-light github-dark",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "---"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " name"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " \"world\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "---"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "html"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " lang"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"en\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  <"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "head"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "><"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "title"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">Hello</"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "title"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "></"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "head"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  <"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "body"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    <"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "h1"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">Hello, {name}!</"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "h1"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  </"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "body"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "</"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "html"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          })]
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The fenced block at the top (", createVNode(_components.code, {
        children: "---"
      }), ") is server-side JavaScript that runs at build time. The markup below it is your template."]
    }), "\n", createVNode(_components.h2, {
      id: "adding-a-react-component",
      children: "Adding a React component"
    }), "\n", createVNode(_components.p, {
      children: "Install the React integration, then drop a component into your page with a hydration directive:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [createVNode(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "astro",
        "data-theme": "github-light github-dark",
        children: "src/pages/index.astro"
      }), createVNode(_components.pre, {
        tabindex: "0",
        "data-language": "astro",
        "data-theme": "github-light github-dark",
        children: createVNode(_components.code, {
          "data-language": "astro",
          "data-theme": "github-light github-dark",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "---"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "import"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Counter "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "from"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " \"../components/Counter.tsx\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "---"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "h1"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">My Page</"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "h1"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
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
              children: "Counter"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " client:load"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " />"
            })]
          })]
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "client:load"
      }), " hydrates immediately. Other options: ", createVNode(_components.code, {
        children: "client:idle"
      }), " (when browser is idle) and ", createVNode(_components.code, {
        children: "client:visible"
      }), " (when scrolled into view)."]
    }), "\n", createVNode(_components.h2, {
      id: "content-collections",
      children: "Content collections"
    }), "\n", createVNode(_components.p, {
      children: "Astro’s content collections give you type-safe access to Markdown and MDX files:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [createVNode(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "ts",
        "data-theme": "github-light github-dark",
        children: "src/content.config.ts"
      }), createVNode(_components.pre, {
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
              children: "import"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { defineCollection, z } "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "from"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " \"astro:content\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "import"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { glob } "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "from"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " \"astro/loaders\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
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
              children: "const"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " blog"
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
              children: " defineCollection"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "({"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  loader: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "glob"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "({ pattern: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"**/*.mdx\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", base: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"./src/content/blog\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }),"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  schema: z."
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "object"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "({"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    title: z."
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "string"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(),"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    publishedAt: z."
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "string"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(),"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    summary: z."
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "string"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(),"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }),"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "});"
            })
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
              children: " const"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " collections"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { blog };"
            })]
          })]
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Then query it from any page:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        tabindex: "0",
        "data-language": "astro",
        "data-theme": "github-light github-dark",
        children: createVNode(_components.code, {
          "data-language": "astro",
          "data-theme": "github-light github-dark",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "---"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "import"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { getCollection } "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "from"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " \"astro:content\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " posts"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " await"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getCollection"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"blog\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "---"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "wrap-up",
      children: "Wrap-up"
    }), "\n", createVNode(_components.p, {
      children: "Astro hits a sweet spot: static-site performance with the flexibility to add interactivity exactly where you need it. If you’re building a portfolio, blog, or docs site, it’s worth 20 minutes to try."
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

const url = "src/content/blog/getting-started-with-astro.mdx";
const file = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/getting-started-with-astro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/getting-started-with-astro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
