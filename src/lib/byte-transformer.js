(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.ByteTransformer = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.ByteTransformer = factory();
  }

}(this, function () {
  // UMD Definition above, do not remove this line;
  "use strict";

  /**
   * A byte transformer is a data structure that groups
   * bytes into a recognized binary format. For example,
   * decimal, hex, octal, etc.
   * @class ByteTransformer
   * @param {ArrayBuffer} data
   */
  function ByteTransformer(data) {
    this.data = data;
    return this;
  }

  // Iterator protocol implementation for ByteTransformer
  ByteTransformer.prototype[Symbol.iterator] = function* () {
    for (let value of this.data) {
      yield value;
    }
  };

  /**
   * @description get the raw representation of a byte
   */
  ByteTransformer.prototype.raw = function () {
    const uint8Array = new Uint8Array(this.data);
    let result = '';
    for (let i = 0; i < uint8Array.length; i++) {
      result += String.fromCharCode(uint8Array[i]);
    }
    return result;
  };

  /**
   * Convert the byte representation to hexadecimal format.
   * @returns {string} The hexadecimal representation of the byte.
   */
  ByteTransformer.prototype.hex = function () {
    const uint8Array = new Uint8Array(this.data);
    let result = '';
    for (let i = 0; i < uint8Array.length; i++) {
      let hexByte = uint8Array[i].toString(16);
      if (hexByte.length < 2) {
        hexByte = '0' + hexByte; // Add leading zero if necessary
      }
      result += hexByte;
    }
    return result;
  };

  /**
   * @deprecated
   * Convert the byte representation to the specified base.
   * @param {Number} base - The base to transform the bytes to.
   * @returns {string} The transformed byte representation.
   */
  ByteTransformer.prototype.toBase = function (base) {
    const uint8Array = new Uint8Array(this.data);
    let result = '';
    for (let i = 0; i < uint8Array.length; i++) {
      result += uint8Array[i].toString(base) + ' ';
    }
    return result.trim();
  };

  /**
   * Convert the byte representation to octal format.
   * @returns {string} The octal representation of the byte.
   */
  ByteTransformer.prototype.octal = function () {
    const uint8Array = new Uint8Array(this.data);
    let result = '';
    for (let i = 0; i < uint8Array.length; i++) {
      result += uint8Array[i].toString(8) + ' ';
    }
    return result.trim();
  };

  /**
   * Convert the byte representation to decimal format.
   * @returns {string} The decimal representation of the byte.
   */
  ByteTransformer.prototype.decimal = function () {
    const uint8Array = new Uint8Array(this.data);
    let result = '';
    for (let i = 0; i < uint8Array.length; i++) {
      result += uint8Array[i].toString(10) + ' ';
    }
    return result.trim();
  }


  /**
   * @method toLittleEndian 
   * @description - Convert to big endian.
   * @returns 
   */
  ByteTransformer.prototype.toBigEndian = function () {
    const uint8Array = new Uint8Array(this.data);
    const bigEndianArray = new Uint8Array(uint8Array.length);
    for (let i = 0; i < uint8Array.length; i++) {
      bigEndianArray[uint8Array.length - 1 - i] = uint8Array[i];
    }
    return new ByteTransformer(bigEndianArray.buffer);
  };


  /**
   * @method toLittleEndian 
   * @description - Convert to little endian
   * @returns 
   */
  ByteTransformer.prototype.toLittleEndian = function () {
    const uint8Array = new Uint8Array(this.data);
    const littleEndianArray = new Uint8Array(uint8Array.length);
    for (let i = 0, len = uint8Array.length; i < len; i++) {
      littleEndianArray[i] = uint8Array[len - 1 - i];
    }
    return new ByteTransformer(littleEndianArray.buffer);
  };

  return ByteTransformer;
}));
