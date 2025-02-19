



## concepts

* screen
* web browser's user interface
  * toolbar

## MECE

CSS viewport (media queries)

large, dynamic, small

layout viewport

with or without scrollbars

https://github.com/ryanve/verge
https://github.com/ryanve/actual

clientHeight
innerHeight
outerHeight

device / document / viewport


https://ryanve.com/lab/dimensions/
https://ryanve.com/lab/resolution/

containing block https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block

visual https://developer.mozilla.org/en-US/docs/Web/API/Window/visualViewport

visual viewport API https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API


stack--2021/xxx-migrated/0-meta/storybook-viewports.js



Screen
↳ available screen (minus OS UI such as bar, or a notch such as macBook)
	↳ outer = complete browser window
		↳ web browser's user interface
			↳ (all useless props) https://developer.mozilla.org/en-US/docs/Web/API/Window/toolbar
			↳ window.toolbar Historically represented the user interface element found immediately above or before the document, as appropriate for the user's media, which typically provides session history traversal controls (back and forward buttons, reload buttons, etc.).
			↳ window.locationbar Historically represented the user interface element that contains a control that displays the browser's location bar.
			↳ window.menubar Historically represented the user interface element that contains a list of commands in menu form, or some similar interface concept.
			↳ window.personalbar Historically represented the user interface element that contains links to the user's favorite pages, or some similar interface concept.
			↳ window.scrollbars Historically represented the user interface element that contains a scrolling mechanism, or some similar interface concept.
			↳ window.statusbar Historically represented a user interface element found immediately below or after the document, as appropriate for the user's media, which typically provides information about ongoing network activity or information about elements that the user's pointing device is currently indicating.
			↳ sidebar, arc browser...
		↳ inner
			↳ layout viewport https://developer.mozilla.org/en-US/docs/Glossary/Layout_viewport
			↳ visual viewport
				↳ large/dynamic/small
					↳ fold
					↳ safe
						↳ safe + border
							↳ 60ch

design for wide screens!
sticky!

floating UI ++

https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/

https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver

https://frontendmasters.com/blog/how-to-get-the-width-height-of-any-element-in-only-css/
