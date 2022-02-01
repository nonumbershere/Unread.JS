### _PATCH NOTES_

- **Added Auto option to [_decrypt_binary_](https://github.com/nonumbershere/Unread.JS/wiki/Documentation#decrypt_binary-function)**
- **Added Spaces option to [_encrypt_binary_](https://github.com/nonumbershere/Unread.JS/wiki/Documentation#encrypt_binary-function)**
- **Fixed some bugs in [_encrypt_binary_](https://github.com/nonumbershere/Unread.JS/wiki/Documentation#encrypt_binary-function) (Unable to encode in the right format)**

# Yncode (Unread)

**Unread** can encrypt messages or code. You can execute code inside of these encrypted messages. **Unread** also support binary.
**Currently only supporting browser and Node.JS**

[**Web**](https://github.com/nonumbershere/Unread.JS), [**Node.JS**](https://www.npmjs.com/package/yncode)

## License

**Yncode (Unread)** is currently using the [**_GNU General Public License v3.0_**](https://github.com/nonumbershere/Unread.JS/blob/main/LICENSE) License

## Installation

Install **Yncode** with npm

```bash
  npm install yncode
```

```html
<script src="./unread.js"></script>
```

## Documentation

You can find help at the [Documentation](https://github.com/nonumbershere/Unread.JS/wiki/Documentation)

## Usage/Examples

```javascript
// Encrypt Code With Yncode

var yncode = require("yncode");

console.log(yncode.encrypt("hex", "Hello World!"));
console.log(yncode.encrypt("binary", "Hello World!"));
console.log(yncode.encrypt("bb3", "Hello World!"));
console.log(yncode.encrypt("unread", "Hello World!"));
console.log(yncode.encrypt("abn", "Hello World!"));
console.log(yncode.encrypt("polo", "Hello World!"));
```

## Support

Created a [pull-request](https://github.com/nonumbershere/Unread.JS/pulls) for bugs/recommendations

## Features

- Encrypt/Decrypt messages
- Execute Encrypted/Decrypted messages
- Can execute binary, hex ETC
- Use [**_btoa()_**](https://developer.mozilla.org/en-US/docs/Web/API/btoa) and **_[atob()](https://developer.mozilla.org/en-US/docs/Web/API/atob)_** in Node.JS
