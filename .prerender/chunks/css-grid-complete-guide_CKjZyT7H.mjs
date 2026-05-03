import { K as createVNode, O as Fragment, _ as __astro_tag_component__ } from './prerender_2wk0_dQ0.mjs';
import 'clsx';

const frontmatter = {
  "title": "CSS Grid: A Complete Guide to Modern Layouts",
  "publishedAt": "2025-02-03",
  "updatedAt": "2025-02-03",
  "author": "Alex Mercer",
  "summary": "Master CSS Grid from the ground up - covering tracks, areas, alignment, and real-world layout patterns you'll use every day.",
  "image": "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=192&fit=crop"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-design-systems-matter",
    "text": "Why Design Systems Matter"
  }, {
    "depth": 2,
    "slug": "core-principles",
    "text": "Core Principles"
  }, {
    "depth": 3,
    "slug": "1-start-with-tokens",
    "text": "1. Start with Tokens"
  }, {
    "depth": 3,
    "slug": "2-build-primitive-components",
    "text": "2. Build Primitive Components"
  }, {
    "depth": 2,
    "slug": "component-composition",
    "text": "Component Composition"
  }, {
    "depth": 2,
    "slug": "documentation-is-key",
    "text": "Documentation is Key"
  }, {
    "depth": 2,
    "slug": "versioning-strategy",
    "text": "Versioning Strategy"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
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
    children: [createVNode(_components.p, {
      children: "Design systems are the backbone of consistent user interfaces. Here’s how to build one that scales."
    }), "\n", createVNode(_components.h2, {
      id: "why-design-systems-matter",
      children: "Why Design Systems Matter"
    }), "\n", createVNode(_components.p, {
      children: "A well-crafted design system provides:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Consistency"
        }), " across all products"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Faster development"
        }), " with reusable components"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Better collaboration"
        }), " between designers and developers"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Reduced technical debt"
        }), " over time"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "core-principles",
      children: "Core Principles"
    }), "\n", createVNode(_components.h3, {
      id: "1-start-with-tokens",
      children: "1. Start with Tokens"
    }), "\n", createVNode(_components.p, {
      children: "Design tokens are the atomic values of your system:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [createVNode(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "typescript",
        "data-theme": "github-light github-dark",
        children: "tokens.ts"
      }), createVNode(_components.pre, {
        tabindex: "0",
        "data-language": "typescript",
        "data-theme": "github-light github-dark",
        children: createVNode(_components.code, {
          "data-language": "typescript",
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
              children: " tokens"
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
              children: " {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  colors: {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    primary: {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      50"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'#eff6ff'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      500"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'#3b82f6'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      900"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'#1e3a8a'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    neutral: {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      0"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'#ffffff'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      100"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'#f5f5f5'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      900"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'#171717'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  },"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  spacing: {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    xs: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'0.25rem'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    sm: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'0.5rem'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    md: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'1rem'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    lg: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'1.5rem'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    xl: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'2rem'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  },"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  radii: {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    sm: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'0.25rem'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    md: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'0.5rem'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    lg: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'1rem'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    full: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'9999px'"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  },"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "} "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "as"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " const"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          })]
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "2-build-primitive-components",
      children: "2. Build Primitive Components"
    }), "\n", createVNode(_components.p, {
      children: "Start with the basics:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [createVNode(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "tsx",
        "data-theme": "github-light github-dark",
        children: "Button.tsx"
      }), createVNode(_components.pre, {
        tabindex: "0",
        "data-language": "tsx",
        "data-theme": "github-light github-dark",
        children: createVNode(_components.code, {
          "data-language": "tsx",
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
              children: " { cva, "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "type"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " VariantProps } "
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
              children: " \"class-variance-authority\""
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
              children: " buttonVariants"
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
              children: " cva"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  \"inline-flex items-center justify-center rounded-md font-medium transition-colors\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    variants: {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      variant: {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        primary: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"bg-primary text-white hover:bg-primary/90\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        secondary: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"bg-secondary text-secondary-foreground hover:bg-secondary/80\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        ghost: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"hover:bg-accent hover:text-accent-foreground\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      },"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      size: {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        sm: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"h-8 px-3 text-sm\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        md: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"h-10 px-4\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        lg: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"h-12 px-6 text-lg\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      },"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    defaultVariants: {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      variant: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"primary\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      size: "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"md\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
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
              children: "interface"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ButtonProps"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  extends"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " React"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ButtonHTMLAttributes"
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
              children: "HTMLButtonElement"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">,"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    VariantProps"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "typeof"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " buttonVariants> {}"
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
              children: " Button"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "({ "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "variant"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "size"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "className"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "..."
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "props"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
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
              children: " ButtonProps"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
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
              children: " ("
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
              children: "button"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " className"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "buttonVariants"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "({ variant, size, className })} {"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "..."
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "props} />"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  );"
            })
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
      })]
    }), "\n", createVNode(_components.h2, {
      id: "component-composition",
      children: "Component Composition"
    }), "\n", createVNode(_components.p, {
      children: "Build complex components from primitives:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Level"
          }), createVNode(_components.th, {
            children: "Examples"
          }), createVNode(_components.th, {
            children: "Purpose"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Tokens"
          }), createVNode(_components.td, {
            children: "Colors, spacing, typography"
          }), createVNode(_components.td, {
            children: "Foundation"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Primitives"
          }), createVNode(_components.td, {
            children: "Button, Input, Badge"
          }), createVNode(_components.td, {
            children: "Building blocks"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Patterns"
          }), createVNode(_components.td, {
            children: "Card, Modal, Dropdown"
          }), createVNode(_components.td, {
            children: "Common UI patterns"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Templates"
          }), createVNode(_components.td, {
            children: "PageHeader, Sidebar"
          }), createVNode(_components.td, {
            children: "Layout structures"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "documentation-is-key",
      children: "Documentation is Key"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "“A design system without documentation is just a component library.”"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Every component should include:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Usage examples"
        }), " - Show common use cases"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Props documentation"
        }), " - Explain all options"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Accessibility notes"
        }), " - ARIA labels, keyboard nav"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Do’s and Don’ts"
        }), " - Guide proper usage"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "versioning-strategy",
      children: "Versioning Strategy"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [createVNode(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "json",
        "data-theme": "github-light github-dark",
        children: "package.json"
      }), createVNode(_components.pre, {
        tabindex: "0",
        "data-language": "json",
        "data-theme": "github-light github-dark",
        children: createVNode(_components.code, {
          "data-language": "json",
          "data-theme": "github-light github-dark",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  \"name\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"@company/design-system\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  \"version\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"2.1.0\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  \"peerDependencies\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "    \"react\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"^18.0.0\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "    \"tailwindcss\""
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"^3.0.0\""
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
            })
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
      })]
    }), "\n", createVNode(_components.p, {
      children: "Use semantic versioning:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Major"
        }), ": Breaking changes"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Minor"
        }), ": New features (backward compatible)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Patch"
        }), ": Bug fixes"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Building a design system is an investment that pays dividends in:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Developer productivity"
      }), "\n", createVNode(_components.li, {
        children: "Design consistency"
      }), "\n", createVNode(_components.li, {
        children: "User experience"
      }), "\n", createVNode(_components.li, {
        children: "Team collaboration"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Start small, iterate often, and document everything."
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

const url = "src/content/blog/css-grid-complete-guide.mdx";
const file = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/css-grid-complete-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/css-grid-complete-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
