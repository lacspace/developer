import { defineSite } from "@lacspace/seo";
import { NPM_TOTAL, TOOL_COUNT } from "./counts";

/**
 * One brand config → every page's metadata + JSON-LD is a one-liner.
 * This site dogfoods @lacspace/seo (defineSite), @lacspace/og, @lacspace/sitemap,
 * @lacspace/robots, @lacspace/rss and @lacspace/llms-txt.
 */
export const site = defineSite({
  name: "Lacspace Developer",
  url: "https://developer.lacspace.com",
  description:
    `${NPM_TOTAL} open-source npm packages — zero-dependency, isomorphic TypeScript libraries (including a 143-component React UI kit), ${TOOL_COUNT} command-line tools and the create-lacspace-app CLI — and the docs to build with them.`,
  logo: "https://developer.lacspace.com/icon-512.png",
  twitter: "lacspace",
  ogImage: "/og",
  defaultImage: "/brand/og-default.png",
  searchUrl: "https://developer.lacspace.com/packages?q={search_term_string}",
});
