## replace_tag
===========

replace html tag without use regex or xregex in Node.js module

## Install

<pre>
  npm install replace_tag
</pre>

Or from source:

<pre>
  git clone git://github.com/narsic/replace_tag_node.js.git replace_tag 
  cd replace_tag_node.js
  npm link
</pre>

## Simple to use

```javascript
var replaceTag = require('replace_tag');
var replacedHtml = replaceTag('html code', 'tag name', replaceAllTag(true||false));
```
