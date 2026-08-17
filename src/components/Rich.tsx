import type { ElementType } from "react";

/**
 * Renders a fragment of the approved copy that carries inline accent markup
 * (`<span class="caipo">`, `<span class="ans">`, `<span class="plus">`, …).
 *
 * The HTML is authored content committed to this repo — never user input — so
 * `dangerouslySetInnerHTML` is safe here and keeps the copy byte-identical to
 * the approved design.
 */
export default function Rich({
  as: Tag = "p",
  html,
  ...rest
}: {
  as?: ElementType;
  html: string;
} & React.HTMLAttributes<HTMLElement>) {
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />;
}
