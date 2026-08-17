/**
 * X / Twitter reuses the Open Graph card. Declared as its own file convention so
 * Next emits an explicit `twitter:image` tag rather than relying on crawlers
 * falling back to `og:image`.
 */
export { default, alt, size, contentType } from "./opengraph-image";
