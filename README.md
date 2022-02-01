### _PATCH NOTES (0.0.8)_

- **Upgraded decrypt_binary auto, now more advanced**
- **Added space editor to encrypt_binary, instead of " " you can add "." and more**
- **Added Auto option in encrypt, binary and execute**
- **Added type checker in encrypt & decrypt**
- **It now has an API, try it out at [Yncode](https://yncode.glitch.me/) Read the documentation at [API Documentation](https://github.com/nonumbershere/Unread.JS/wiki/API-Documentaion)**
- **Upgraded binary auto, now more advanced**

# Yncode (Unread)

**Unread** can encrypt messages or code. You can execute code inside of these encrypted messages. **Unread** also support binary.

**Currently only supporting Browser, Node.JS and API**

[**Web**](https://github.com/nonumbershere/Unread.JS), [**Node.JS**](https://www.npmjs.com/package/yncode)
[**API**](https://yncode.glitch.me/encrypt?type=binary&message=hi)

## API

**Try out my API at: [Yncode](https://yncode.glitch.me/)**

**Documentaion on the API is at [API Documentation]((https://github.com/nonumbershere/Unread.JS/wiki/API-Documentaion))**

## License

**Yncode (Unread)** is currently using the [**_GNU General Public License v3.0_**](https://github.com/nonumbershere/Unread.JS/blob/main/LICENSE) License

## Installation

Install **Yncode** with npm

```bash
 npm install yncode
```

```html
<script src="https://raw.githubusercontent.com/nonumbershere/Unread.JS/main/unread_main.js"></script>
```

## Documentation

**[JS Documentation](https://github.com/nonumbershere/Unread.JS/wiki/Documentation)**
**[API Documentation](https://github.com/nonumbershere/Unread.JS/wiki/API-Documentaion)**

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

Created a [issue](https://github.com/nonumbershere/Unread.JS/issues) for bugs/recommendations

## Features

- Encrypt/Decrypt messages

- Execute Encrypted/Decrypted messages

- Can execute binary, hex ETC

- Use [**_btoa()_**](https://developer.mozilla.org/en-US/docs/Web/API/btoa) and **_[atob()](https://developer.mozilla.org/en-US/docs/Web/API/atob)_** in Node.JS
