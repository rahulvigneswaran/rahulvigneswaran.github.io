import { K as createVNode, O as Fragment, _ as __astro_tag_component__ } from './prerender_2wk0_dQ0.mjs';
import 'clsx';

const frontmatter = {
  "title": "Web Performance 101: Core Vitals and Beyond",
  "publishedAt": "2025-10-18",
  "updatedAt": "2025-10-18",
  "author": "Alex Mercer",
  "summary": "A no-fluff guide to measuring and improving Core Web Vitals - LCP, CLS, and INP - with actionable techniques for any stack.",
  "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=192&fit=crop"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "2-optimize-images",
    "text": "2. Optimize Images"
  }, {
    "depth": 2,
    "slug": "4-implement-proper-caching",
    "text": "4. Implement Proper Caching"
  }, {
    "depth": 2,
    "slug": "5-minimize-client-components",
    "text": "5. Minimize Client Components"
  }, {
    "depth": 2,
    "slug": "6-bundle-analysis",
    "text": "6. Bundle Analysis"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    figcaption: "figcaption",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Performance isn’t optional—it’s a feature. Here are battle-tested tips for optimizing Next.js apps."
    }), "\n", createVNode(_components.h1, {
      id: "2-optimize-images",
      children: "2. Optimize Images"
    }), "\n", createVNode(_components.p, {
      children: ["Always use ", createVNode(_components.code, {
        children: "next/image"
      })]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
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
              children: " Image "
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
              children: " 'next/image'"
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
              children: " Hero"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() {"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Image"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "      src"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"/hero.jpg\""
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "      alt"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"Hero image\""
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "      width"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1200"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "      height"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "600"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "      priority"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " // Load immediately for LCP"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "      placeholder"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"blur\""
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "      blurDataURL"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"data:image/jpeg;base64,...\""
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    />"
            })
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
      })
    }), "\n", createVNode(_components.h2, {
      id: "4-implement-proper-caching",
      children: "4. Implement Proper Caching"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Strategy"
          }), createVNode(_components.th, {
            children: "Use Case"
          }), createVNode(_components.th, {
            children: "TTL"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "force-cache"
            })
          }), createVNode(_components.td, {
            children: "Static data"
          }), createVNode(_components.td, {
            children: "Forever"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "revalidate: 3600"
            })
          }), createVNode(_components.td, {
            children: "Semi-static"
          }), createVNode(_components.td, {
            children: "1 hour"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "revalidate: 60"
            })
          }), createVNode(_components.td, {
            children: "Frequently updated"
          }), createVNode(_components.td, {
            children: "1 minute"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "no-store"
            })
          }), createVNode(_components.td, {
            children: "Real-time data"
          }), createVNode(_components.td, {
            children: "Never cache"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "5-minimize-client-components",
      children: "5. Minimize Client Components"
    }), "\n", createVNode(_components.p, {
      children: ["Every ", createVNode(_components.code, {
        children: "'use client'"
      }), " directive adds to your JavaScript bundle. Keep client components small and focused:"]
    }), "\n", createVNode(_components.h2, {
      id: "6-bundle-analysis",
      children: "6. Bundle Analysis"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [createVNode(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "bash",
        "data-theme": "github-light github-dark",
        children: "terminal"
      }), createVNode(_components.pre, {
        tabindex: "0",
        "data-language": "bash",
        "data-theme": "github-light github-dark",
        children: createVNode(_components.code, {
          "data-language": "bash",
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
              children: "# Install analyzer"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "npm"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " @next/bundle-analyzer"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Run analysis"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "ANALYZE"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "true"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " npm"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " run"
            }), createVNode(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " build"
            })]
          })]
        })
      })]
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

const url = "src/content/blog/web-performance-101.mdx";
const file = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/web-performance-101.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/rahulvigneswaran/Downloads/starfolio/src/content/blog/web-performance-101.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
