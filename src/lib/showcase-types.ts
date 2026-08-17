/**
 * Shape shared by the Wearables and Smart Devices showcases.
 *
 * `intro`, `mcTitle`, `mcBody` and `tagline` carry the approved copy verbatim,
 * including its inline `<span class="caipo">` / `<span class="ans">` accents, so
 * they are rendered as HTML by the `Rich` helper. Nothing here is user input.
 */
export type ShowcaseIcon = {
  /** Inner markup of a 24×24 stroke icon (paths, circles, …). */
  icon: string;
  title: string;
  body: string;
};

export type ShowcaseItem = {
  /** Anchor id — for Wearables it is also the CSS hook for the product photo. */
  id: string;
  name: string;
  intro: string;
  /**
   * Photo for the `.shot` backdrop. Wearables leave this undefined because
   * wearables.css keys their photos off `[data-w]`; Smart Devices set it here,
   * as the original markup did with an inline background style.
   */
  shot?: string;
  detail: {
    name: string;
    title: string;
    intro: string;
    mcTitle: string;
    mcBody: string;
    /** Absent on the Smart Devices panels. */
    tagline?: string;
  };
  capabilities: ShowcaseIcon[];
  applications: ShowcaseIcon[];
};
