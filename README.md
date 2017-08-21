# charcoder
Convert numbers into different numeral systems and back

[![Build Status](https://travis-ci.org/robojones/charcoder.svg?branch=master)](https://travis-ci.org/robojones/charcoder)
[![Test Coverage](https://codeclimate.com/github/robojones/charcoder/badges/coverage.svg)](https://codeclimate.com/github/robojones/charcoder/coverage)
[![Issue Count](https://codeclimate.com/github/robojones/charcoder/badges/issue_count.svg)](https://codeclimate.com/github/robojones/charcoder)

## Installation

```bash
npm i charcoder --save
```

## Usage

### Hexadecimal (0-9, a-f)

```javascript
const Charcoder = require('charcoder')

const hex = new Charcoder()

hex.encode(100) // '64'
hex.decode('64') // 100
```

### Duosexagesimal (0-9, a-f, A-F)

```javascript
const {
  Charcoder,
  B62
} = require('charcoder')

const b62 = new Charcoder(B62)

b62.encode(100) // '1C'
b62.decode('1C') // 100
```

### Custom

You can use any characters to create your own numeral system. For example `-`, `+` and the word `hey`.

```javascript
const Charcoder = require('charcode')

const custom = new Charcoder('-' + '+' + 'hey')

custom.encode(100) // 'y--'
custom.decode('y--') // 100
```

## Class: Charcoder

```javascript
const Charcoder = require('charcoder')
// or
const { Charcoder } = require('charcoder')
```

### constructor(charset)
- __charset__ `<String>` string that includes the characters of your numeral system. (default: Charcoder.HEX)

```javascript
a = new Charcoder('hi' + 'baz')

a.charset // 'hibaz'
```

__Warning:__ Make sure that each character appears only once!

### #encode(number)
- __number__ `<Number>` number to convert

__returns__ a string representing the number in the numeral system of the Charcoder.

### #decode(string)
- __string__ `<String>` string to convert

__returns__ a number representing the value of the given string.

### .NUM

A string that includes the numbers from 0 to 10.

```javascript
Charcoder.NUM // "0123456789"
```

### .ABC

The whole alphabet in lowercase.

```javascript
Charcoder.ABC // "abcdefghijklmnopqrstuvwxyz"
```

### .HEX

All characters of the hexadecimal system (0-9, a-f).

```javascript
Charcoder.HEX // "0123456789abcdef"
```

### .B62

All characters of the duosexagesimal system (0-9, a-f, A-F). The system consists of 62 characters.

```javascript
Charcoder.B62 // "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
```
