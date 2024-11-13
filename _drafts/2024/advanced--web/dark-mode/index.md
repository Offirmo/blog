---
published: false
title: ''
description: ''
tags: html, css, dark
---







## MECE

### Concepts

- contrast, contrast ratio
- readability
- "color scheme" light / dark
- color scheme preference light/dark/auto/no preference
- theme default, high contrast, etc.
- cascade: OS, browser, page, inline
- we may select the scheme at the OS level and then a theme, ex solarized
- vision impairment
- contrast
- media query `prefers-color-scheme` https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
- inheritance
- CSS property `color-scheme` https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme (formerly Safari only https://blog.jim-nielsen.com/2020/color-scheme-property/)
- meta tag `color-scheme` https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/color-scheme
- CSS color function `light-dark()` baseline✅ https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark
	- BUT do not use if want JS?
- color in design = emotions
- day/night mode
- system colors
- form controls (inputs), scrollbars
- auto dark theme https://developer.chrome.com/blog/auto-dark-theme/
  - #per-element-opt-out
- webextensions
  - double dark !!
  - intrusive
- user's cloud setting
- The `Sec-CH-Prefers-Color-Scheme` user preference media feature client hint request header


### "start with why"

- dark mode is not vanity
- 19%
- light = enterprise

TODO https://blog.jim-nielsen.com/2020/color-scheme-property/
https://www.sarasoueidan.com/blog/prefers-color-scheme-browser-vs-os/
https://sumnerevans.com/posts/technology/respecting-theme-preferences/
https://blog.jim-nielsen.com/2022/browser-level-color-scheme-preference/


From macOs Sonoma
https://support.apple.com/en-au/guide/mac-help/mchl52e1c2d2/mac "Use a light or dark appearance on your Mac"
https://support.apple.com/en-au/guide/mac-help/mchlp1225/15.0/mac/15.0 "Change Appearance settings on Mac"
> Appearance
> - Light provides a light appearance that doesn’t change.
>
> - Dark provides a darkened appearance so the content you’re working on stands out while windows and controls seem to recede into the background. It’s effective for viewing documents, presentations, photos, movies, web pages and more.
>
> - Auto switches the appearance from light to dark based on the Night Shift schedule you set. See Change Night Shift settings.
> Accent colour
    Choose the colour to use for buttons, pop-up menus, and other UI controls.
    Highlight colour
    Choose the colour to use for highlighting selected text.

https
OS vs browser level!!
page level!


https://en.wikipedia.org/wiki/Light-on-dark_color_scheme
https://www.forbes.com/uk/advisor/mobile-phones/what-is-dark-mode-and-should-you-be-using-it/


Official doc:
- The prefers-color-scheme CSS media feature https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme


Inline theme switching
- beware of CC variables!

interesting browser compatibility
- FF
-


TODO suggest API

UI issues


TODO test on all browsers

OS support

TODO review browser settings
- Safari: no setting




Dark mode has become increasingly popular after its introduction by Apple and Google on iOS and Android. Before its introduction, users would simply decrease the brightness on their phone to continue using it at night.

However, there is no evidence to suggest that the introduction of dark mode has led to an increase in smartphone usage. It is simply a convenient way to consume content at night. Popular entertainment apps such as TikTok and Instagram (Reels) do not even require a dark mode to keep users engaged as they display fullscreen content that makes the interface less prominent. This highlights that if the content is engaging, people will spend time on the website or app regardless of the presence of a dark mode.

As an additional note, we have also added a dark mode to Hallofshame.design for your convenience when reading it at night.

https://html-first.com/


https://blog.jim-nielsen.com/2018/dark-mode-on-the-web/
https://blog.jim-nielsen.com/2018/icon-galleries-dark-mode/
https://blog.jim-nielsen.com/2020/color-scheme-property/
https://blog.jim-nielsen.com/2021/css-system-colors/
https://blog.jim-nielsen.com/2022/avoiding-flash-of-inaccurate-theme-color/
https://blog.jim-nielsen.com/2022/browser-level-color-scheme-preference/
https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
https://css-tricks.com/come-to-the-light-dark-side/
https://css-tricks.com/come-to-the-light-dark-side/
https://developer.apple.com/videos/play/wwdc2019/511/
https://developer.chrome.com/blog/auto-dark-theme/
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideContentColorScheme
https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement/scheme
https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color
https://github.com/mdn/yari/issues/5378
https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
https://sumnerevans.com/posts/technology/respecting-theme-preferences/
https://support.mozilla.org/en-US/kb/enable-light-or-dark-mode-mdn
https://www.sarasoueidan.com/blog/prefers-color-scheme-browser-vs-os/
