# ember-sanitize

An Ember CLI addon to sanitize user provided content using [sanitize.js](https://github.com/gbirke/Sanitize.js).

## Using

### Installation

Install this addon via npm:

```
npm install --save-dev ember-sanitize
```

Then run the generator to install `sanitize.js`:

```
ember generate ember-sanitize
```

### Usage

Simply use the `sanitize-html` helper in your template:

```handlebars
{{sanitize-html someValue}}
```

This will use the most restrictive sanititizer config by default, which will strip all HTML.

To use your own sanitizer configuration, add a file to `/app/sanitizers/` which exports an object
conforming to [sanitizer's configuration options](https://github.com/gbirke/Sanitize.js#configuration).

For example:

```js
// /app/sanitizers/strict.js
export default {
  elements: ['b', 'em', 'i', 'strong', 'u']
};
```

You can then use this configuration by passing it in as the second argument to the helper:

```handlebars
{{sanitize-html someValue "strict"}}
```

## Developing

### Installation

* `git clone <repository-url>` this repository
* `cd my-addon`
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
