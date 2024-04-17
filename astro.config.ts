import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc, { type Options } from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import mdx from "@astrojs/mdx";

import { bundledLanguages } from "shikiji";
import { readFile } from "fs/promises";

const loadJSON = (path: string) => readFile(path, "utf8").then((json) => JSON.parse(json));

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          skip: "END_TOC",
          parents: (node) =>
            node.type === "root" ||
            // pico challenge title matching
            (node.type === "mdxJsxFlowElement" &&
              (<any>node).name === "Fragment" &&
              (<any>node).attributes[0].name === "slot" &&
              (<any>node).attributes[0].value === "title"),
        } as Options,
      ],
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      experimentalThemes: {
        light: "github-light",
        dark: "github-dark",
      },
      wrap: true,
      // @ts-ignore
      langs: [
        ...Object.keys(bundledLanguages),
        {
          ...(await loadJSON("./lang/puml.tmLanguage.json")),
          id: "puml",
          scopeName: "source.puml",
        },
      ],
    },
    smartypants: false,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
