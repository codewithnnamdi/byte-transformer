# ByteTransformer
#### ByteTransformer is an npm module that allows you to transform a byte of data into various binary components/formats. It provides methods to convert the byte representation to hexadecimal, octal, and decimal formats. Additionally, it supports converting the byte representation to big endian and little endian formats.

## Installation

### You can install the ByteTransformer module via npm. Use the following command:
```bash
npm install byte-transformer
```

## Usage
### To use the ByteTransformer module in your JavaScript code, require it as follows:
```js
const ByteTransformer = require('byte-transformer');
```
## Creating an Instance

### To create a ByteTransformer instance, you need to provide an ArrayBuffer representing the byte data. Here's an example:

```js
const byteData = new Uint8Array([72, 101, 108, 108, 111]).buffer;
const byteTransformer = new ByteTransformer(byteData);
```

## Transformations

### Once you have created a ByteTransformer instance, you can apply various transformations to the byte data.
### Get the Raw RepresentationTo get the raw representation of the byte data, use the raw method:

```js
const rawByteData = byteTransformer.raw();
console.log(rawByteData);
```
## Convert to Octal Format
### To convert the byte representation to octal format, use the octal method:
```js
const octalByteData = byteTransformer.octal();
console.log(octalByteData);
```

## Convert to Decimal Format
### To convert the byte representation to decimal format, use the decimal method:

```js
const decimalByteData = byteTransformer.decimal();
console.log(decimalByteData);
```

## Convert to Big Endian
### To convert the byte representation to big endian format, use the toBigEndian method:
```js
const bigEndianByteData = byteTransformer.toBigEndian();
console.log(bigEndianByteData.raw());
```


## Convert to Little Endian
## To convert the byte representation to little endian format, use the toLittleEndian method:
```js
const littleEndianByteData = byteTransformer.toLittleEndian();
console.log(littleEndianByteData.raw());
```

