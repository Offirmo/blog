---
published: false
title: '"Hello, World!" in HTML / CSS / JS'
description: 'An intro to HTML / CSS / JS for beginners'
tags: webdev, beginners, html, javascript
---

Welcome to the [Information Age](https://en.wikipedia.org/wiki/Information_Age):
A new era of the human civilization powered mostly by the web technologies!

**Web Development** is a vibrant and powerful field of computer science.
Any software engineer should have the basics of HTML / CSS / JS in their skill toolbox.

This article will drive you towards a very simple **hello world in HTML / CSS / JS** which we'll end up **publishing on the web**, for anyone to consume!

![screenshot of the final result](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/step-final.png)

This tutorial is intended at total beginners. If this article ends up popular, I may write more so please encourage me in the comments!

## HTML

HTML is the backbone and the starting point of the web trifecta. Let's create our HTML hello world:

1. Create a folder named `hello-world`
1. Inside this folder, create a text file named `index.html`
1. Open this file in a [text editor](https://dev.to/priyanshucoderx/best-light-weight-code-editor-s-for-developer-s-9k6) and paste the following content: `Hello, World!`

Your file editor may look like that: (if using [VS Code](https://code.visualstudio.com/))

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/howto--editor.png)

Save and double-click on the file from your file explorer, it should open in your default web browser:

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/step-00.png)

**Well done!**

You may wonder _"Is that code? That doesn't look like a programming language!"_

**Yes it is!** HTML is a **declarative** language while you may be used to **imperative** languages like Python or Java.
Also, HTML is **very permissive** and will try to make the most out of what you give.

The HTML code `Hello, World!` can also be understood as: `browser, this is a document with the text "Hello, World!"`.

The Web browser reads this code and renders visually the document.

## CSS

CSS is used to add some "style" to the document. Yes, I mean _style_ like 👨‍🎤 💅!

Our current hello world is very bland and neutral (but also very readable and clean). Let's add some personality to it!
Go back to your `index.html` file and turn it into this:

<!-- embedme code/index-01.html -->

```html
Hello, World!

<style>
	html {
		font-family: sans-serif;
		background-color: #f6f0d6;
	}
</style>
```

Save the file. Go back to your browser and click the "reload" button (or press the `F5` key or press `⌘ + R`)

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/howto--reload.png)

After reload, your page should now look like this:

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/step-01.png)

Nicer, isn't it?

Now let's break down a little the code we just added:

<!-- embedme code/index-01.html#L3-L8 -->

```html
<style>
	html {
		font-family: sans-serif;
		background-color: #f6f0d6;
	}
</style>
```

1. the `<style>…</style>` is called an _"html **tag**"_. Yes, it's HTML, a bit more advanced.
1. `<style>` is the **\*opening** tag\* and `</style>` is the **_closing_** tag. Did you spot the difference? (hint: `/`)
1. HTML tags always go in a pair, a beginning and a closing (unless exceptions)
1. yes, it's similar to parenthesis `()` or brackets `{}` or `[]`
1. yes, it's also similar to XML in case you know this format! (but HTML is not pure XML)
1. the `<style>` tag is used to **_embedd CSS_** into our HTML. As said previously, CSS is for styling HTML, this makes sense.

Now let's break down the CSS:

<!-- embedme code/index-01.html#L4-L7 -->

```css
html {
	font-family: sans-serif;
	background-color: #f6f0d6;
}
```

1. we are styling our `html`
1. to this `html` we are applying some \*CSS **properties\***:
   -  `font-family` controls the font, we set it to `sans-serif`, a more modern look
   -  `background-color` controls (obviously) the background color of the container. We set it to `#f6f0d6` (RGB notation) which is a light yellow

There are many many other CSS properties and HTML tags, we barely scratched the surface!

## JS

JS (aka. "JavaScript") adds interactivity to a document. With JS, an HTML document can become a powerful "web app" like gmail or facebook!

Turn your `index.html` into this:

<!-- embedme code/index-02.html -->

```html
Hello, World!

<style>
	html {
		font-family: sans-serif;
		background-color: #f6f0d6;
	}
</style>

<script>
	console.log('Hello, JS!');
</script>
```

And reload the page again:

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/step-01.png)

**No visual change!** That's normal!

Now let's break down the new additions:

<!-- embedme code/index-02.html#L10-L12 -->

```html
<script>
	console.log('Hello, JS!');
</script>
```

1. the `<script>…</script>` is another _"html tag"_, similar to `<style>…</style>`
1. as you may have guessed, the `<script>` tag is used to **_embedd JS_** into our HTML
1. `console.log('Hello, JS!');` is to print to the console, in other languages it could be `print "hello, world!"` or `System.out.println("Hello, world!")`
1. Now the question is: _Where was it displayed??_

Let's discover the **_dev tools_**! Right click anywhere on the document and select the command named "Inspect" or "inspect element":

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/howto--inspect.png)

The dev tools should open, on a tab called "Elements" or "Inspector". Click on the "console" tab that should be next to it:

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/step-02--console.png)

Here is displayed the `hello, JS!` triggered by the JS code `console.log('Hello, JS!')`! (You may see errors and warnings as well, ignore them for now.)

The "dev tools" are super useful! You may want to keep them open while you create a web document, for they'll alert you of some errors.

## Back to HTML

Now that we have a basic understanding of HTML, CSS and JS, let's turn our document into something a bit more worthy of being shared with the world:

<!-- embedme code/index-03.html -->

```html
<h1>Hello, World!</h1>

<p>
	What I'd really like to share is:
	<strong>(replace this with a powerful or interesting message you want to share with the world)</strong>
</p>
<small>(date & time)</small>

<style>
	html {
		font-family: sans-serif;
		background-color: #f6f0d6;
	}
</style>

<script>
	console.log('Hello, JS!');
</script>
```

Note that you have to come up with your own message!

Let's reload the page again:

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/step-03.png)

Note how the "hello world" is bigger now!

let's break down the new additions:

<!-- embedme code/index-03.html#L1-L7 -->

```html
<h1>Hello, World!</h1>

<p>
	What I'd really like to share is:
	<strong>(replace this with a powerful or interesting message you want to share with the world)</strong>
</p>
<small>(date & time)</small>
```

1. We're introducing new HTML tags:
   1. `<h1>` is for a _title_ or _header_, that's how it ended up big!
   1. `<p>` is for _paragraph_ = a block of text
   1. `<strong>` is for something more important = it ended up bolder
   1. Similarly, `<small>` is for something less important = it ended up smaller
   1. note: in theory, browsers are free to express `<strong>` and `<small>` however they want!
   1. Notice how we are imbricating the HTML tags together!
1. You may wonder about `(date & time)`, we'll get to it later.

## Interactivity with JS

Now let's dynamically replace `(date & time)` with the actual date & time thanks to JS:

<!-- embedme code/index-04.html -->

```html
<h1>Hello, World!</h1>

<p>
	What I'd really like to share is:
	<strong>(replace this with a powerful message you want to share with the world)</strong>
</p>
<small>(date & time)</small>

<style>
	html {
		font-family: sans-serif;
		background-color: #f6f0d6;
	}
</style>

<script>
	console.log('Hello, JS!');

	const dateTimeElement = document.getElementsByTagName('small')[0];

	function updateTime() {
		dateTimeElement.innerText = new Date().toLocaleString();
	}

	updateTime();
	setInterval(updateTime, 1000);
</script>
```

Let's reload the page again:

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/step-04.png)

We now display the current date and time, updating automatically!

let's break down the new additions:

<!-- embedme code/index-04.html#L19-L26 -->

```js
const dateTimeElement = document.getElementsByTagName('small')[0];

function updateTime() {
	dateTimeElement.innerText = new Date().toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);
```

1.

## Publishing!

Right now, our HTML file is sitting on our hard drive.
To share it with the world in the **old way**, we would have to share the files with recipients, ask them to download it (erk!) then to double-click on it (arg!).
That's completely outdated in our days and age!

Let's serve our web document! We'll use Netlify, a nice company that'll host our document for free!
Head to [https://app.netlify.com/drop](https://app.netlify.com/drop). You should see something like that:

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/howto--netlify-drop--2024.png)

Now it's time to drag and drop your folder, which should look like that:

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/folder.png)

Drag and drop the **folder** to the drop area. After a few seconds, it should turn to something like this:

![screenshot](https://github.com/Offirmo/my.dev.to/raw/master/blog-posts/hello-world-in-html-css-js/assets/howto--netlify-drop--success--2024.png)

stalwart-gaufre-8eb150
https://stalwart-gaufre-8eb150.netlify.app

Click on the link: It should work!
**_Well done!_**

-  You _created_ something and _contributed to_ the web!
-  You _shipped_ something, it's not sitting in a corner of your hard drive!
-  You can now easily share this link with your family and friends, they'll be able to access your document in 1 click, - no download needed - no install needed - regardless of whether they're using a Mac, a PC, a smartphone, a smart TV,...

How do you like it? This is the power of the web!
