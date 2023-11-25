import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
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
      remarkToc,
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
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
