---
title: "Today I Learnt stuff about unicode 👨🏻‍💼"
categories: programming
---

Unicode is great! It's one of the fun domain of computing. But if you start diving in, it has many mechanism that you should be aware off.
I'm using JavaScript / TypeScript, but this article should be interesting for any developer

## Cool stuff!
Let's start with a demo of what we can do with unicode: (may render properly or not depending on your browser)

* boxes:

```
│ What do you want to do?
└┬─────────────────────────────
 ├🅰  do A
 └🅱  do B
 
╓───╥───────────╖
║ ✓ ║ Done      ║
╙───╨───────────╜
```

* Arrows, symbols:

```
←↑→↓↔ 	some arrows
☞ 	white right pointing finger
✓ 	check mark
✗
```

* Emojis: ([full list here](http://www.unicode.org/emoji/charts/full-emoji-list.html))

```
🐁🐂🐃🐄🐅🐆🐇🐈🐉🐊🐋🐌🐍🐎🐏🐐🐑🐒🐓🐕🐖🐗🐘🐙🐛🐜🐝🐞🐟🐠🐡
🐢🐣🐥🐩🐪🐫🐬🐺🐿🕊🕷🦀🦂🦃🦄🦅🦆🦇🦈🦉🦋🦌🦍🦎🦏🦐🦑
🏆🎖🏅🥇🥈🥉
🥚🍞🥖🍖🍗🥘🥛🍺🍷🍵
```

* Pseudo fonts:

```
𝐀𝐁𝐂𝐃𝐚𝐛𝐜𝐝
𝐴𝐵𝐶𝐷
𝓐𝓑𝓒𝓓
𝔞𝔟𝔠𝔡
𝖠𝖡𝖢𝖣
𝙰𝙱𝙲𝙳
```

* and much more...

Let's now dive in some  Unicode intricacies...


## Unicode versions

Unicode is a standard, regularly updated.
Current version is [10.0](http://unicode.org/versions/Unicode10.0.0/), released the 20th June 2017.
Unicode [11.0](http://emojipedia.org/unicode-11.0/) is due for release in mid-2018.

See also:
* [www.unicode.org](http://www.unicode.org/)


## Emoji versions

Emojis have been integrated into Unicode in 2015. There are also versioned.
Current version is [5.0](https://emojipedia.org/emoji-5.0/), corresponding to Unicode [10.0](http://unicode.org/versions/Unicode10.0.0/).

See also:
* [emojipedia.org](http://emojipedia.org/)


## Codepoints

A grapheme is a "the smallest unit of a writing system of any given language" ([wikipedia](https://en.wikipedia.org/wiki/Grapheme))
Most unicode entries are mapping to a grapheme.
Unicode entities have a "codepoint", i.e. a numerical index. Examples:
* `a` = `0x61`
* `✓` = `0x2713`
* `🅰` = `0x1f170`
* `🦐` = `0x1f990`

However, unicode entities don't always map to a grapheme.
More about that below.

See also:
* Wikipedia ▸ [grapheme](https://en.wikipedia.org/wiki/Grapheme)
* Wikipedia ▸ [code point](https://en.wikipedia.org/wiki/Code_point)


## Width of characters, half-width and full-width

Obviously graphemes have variable width in most contexts (ex. `i` vs `m`.)
But what about the fixed-width fonts used for example in terminals?
Some graphemes are too big to fit in one classic "latin" character slot,
thus have been marked as "full width" whereas usual latin chars are labelled "half width".
(IMO they should have gone with *simple* and *double* width)

Here is a visual example (from [Wikipedia](https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms)):

![demo of half-width and full-width in a terminal](https://upload.wikimedia.org/wikipedia/commons/1/14/KoreanDOSPrompt.png)

See also:
* Wikipedia ▸ [Halfwidth and fullwidth forms](https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms)
* Is a unicode char full or half width? npm/[is-fullwidth-code-point](https://github.com/sindresorhus/is-fullwidth-code-point)
* Get the "terminal" width of a single char or a full string:
  * lodash _.size(str)
  * https://github.com/sindresorhus/string-width
  * https://github.com/timoxley/wcwidth


## Combining marks

Some chars can be combined. Here is a visual example (from [Wikipedia](https://en.wikipedia.org/wiki/Combining_character)):

![schema of combining unicode chars](https://upload.wikimedia.org/wikipedia/commons/4/4e/U_niesk%C5%82adovaje_Unicode.svg)

This relie on combining chars. You can us them as much as you want!

This is how you make the infamous obfuscated texts you see on the internet: Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞

Note that though they are formed from several unicode entities, the result is only one grapheme,
taking either a half or full width in a terminal. (cf. above)

See also:
* Wikipedia ▸ [Combining chars](https://en.wikipedia.org/wiki/Combining_character)
* removing combining marks npm/[strip-combining-marks](https://github.com/mathiasbynens/strip-combining-marks)


## Skin tones
[Skin tones](https://emojipedia.org/modifiers/) were introduced in [Unicode 8.0](https://emojipedia.org/unicode-8.0/).
They correspond to 5 levels of the [Fitzpatrick scale](https://en.wikipedia.org/wiki/Fitzpatrick_scale)
and, when placed behind a supporting emojis, alter its appearance (if supported by the client).

If not supported, the skin tone usually appear as a colored square behind the emoji.

See also:
* Adding skin tones to emojis: npm/[skin-tone](https://github.com/sindresorhus/skin-tone)
* 


## variation selectors


## unicode versions


## Zero-width joiners
https://en.wikipedia.org/wiki/Zero-width_non-joiner
http://unicode.org/emoji/charts/emoji-zwj-sequences.html

## variant forms
https://en.wikipedia.org/wiki/Variant_form_(Unicode)


## Unicode normalization

## Heroes of Unicode
* [Mathias Bynens](https://github.com/mathiasbynens)
* Alan Wood http://www.alanwood.net/unicode/index.html

## JavaScript recipes
 
### the unicode problem

### useful modules
From [Mathias Bynens](https://github.com/mathiasbynens)
* npm/[unicode-10.0.0]()https://github.com/mathiasbynens/unicode-10.0.0)
* https://github.com/mathiasbynens/emoji-regex
* https://github.com/mathiasbynens/node-unicode-data
* https://github.com/mathiasbynens/utf8.js
* https://github.com/mathiasbynens/esrever
* https://github.com/mathiasbynens/strip-combining-marks
* https://github.com/mathiasbynens/unicode-emoji-modifier-base The set of Unicode symbols that can serve as a base for emoji modifiers
* https://github.com/mathiasbynens/strip-variation-selectors
* https://github.com/mathiasbynens/wtf-8
Sindre
* https://github.com/sindresorhus/skin-tone
* https://github.com/sindresorhus/is-fullwidth-code-point 
  * see also 
Other
* https://github.com/timoxley/wcwidth Port of C's wcwidth() and wcswidth()

### recipe: **properly** iterating on codepoints

### recipe: getting the terminal width of a unicode string
https://github.com/timoxley/wcwidth/blob/master/docs/index.md


