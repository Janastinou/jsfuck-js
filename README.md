# jsfuck-js
```js
const JsFuck = require('./jsfuck-js');

JsFuck('alert("Hello World")').then(data => {
    console.log('Input:', data.input) // Input: alert("Hello World")
    console.log('Output:', data.output) // Output: [][(![]+[])[+[]]+...
});
```
