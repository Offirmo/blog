XXX TypeScript!!!

```javascript
function poll1(predicate, options) {
	const {periodMs, timeoutMs, debugId} = Object.assign({
		periodMs: 100, // check every 100ms
		timeoutMs: 10 * 1000,
		debugId: 'an unnamed predicate',
	}, options || {})

	// ...
}


function poll2(predicate, options = {}) {
	const {periodMs, timeoutMs, debugId} = Object.assign({
		periodMs: 100, // check every 100ms
		timeoutMs: 10 * 1000,
		debugId: 'an unnamed predicate',
	}, options)

	// ...
}


function poll3(predicate, options = {}) {
	const {periodMs, timeoutMs, debugId} = {
		periodMs: 100, // check every 100ms
		timeoutMs: 10 * 1000,
		debugId: 'an unnamed predicate',
		...options
	}

	// ...
}


function poll4(predicate, {periodMs = 100, timeoutMs = 10 * 1000, debugId = 'an unnamed predicate'} = {}) {

	console.log('--- poll4()\ninput: ?\noutput:\n' + prettyjson.render({periodMs, timeoutMs, debugId}))

	// ...
}

poll1()
poll1(null, {debugId: 'foo', timeoutMs: 30 * 1000})
poll2()
poll2(null, {debugId: 'foo', timeoutMs: 30 * 1000})
poll3()
poll3(null, {debugId: 'foo', timeoutMs: 30 * 1000})
poll4()
poll4(null, {debugId: 'foo', timeoutMs: 30 * 1000})

```





(FYI) That last || {} is unnecessary. Object.assign() is OK with parameters that are undefined or null. They are basically ignored.

See: https://www.ecma-international.org/ecma-262/8.0/index.html#sec-object.assign Point 4 a) (and related c) ).




const { debug = false } = options



options = {
debugId: `window.${varName}`,
...options
}
