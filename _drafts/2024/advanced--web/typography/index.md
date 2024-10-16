
normalized

calibrated fallbacks



concepts
* https://fonts.google.com/knowledge
* https://fonts.google.com/knowledge/glossary


+++ https://medium.engineering/typography-is-impossible-5872b0c7f891


* size-adjust = adjust the ~size of a font
  * full browser support
  * https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust
* text-size-adjust = adjust the auto-sizing of fonts on mobile
  * full browser support with prefixes
  * https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust
* font-size-adjust = modify the size of lowercase letters relative to the size of uppercase letters
  * FF and Safari only
  * strange behavior on Safari (across families)
  * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust
* https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset



https://sebastianlaube.de/en/blog/font-size-limbo



Need to start with a fixed "base" web font then calibrate the alternate fonts to it

- content-heavy pages can go with system
- UI heavy pages need more precision
- i18n when using a custom font
