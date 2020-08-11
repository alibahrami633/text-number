# text-number
This tiny library contains classes which can be used to convert numbers into English/Farsi/Persian and Arabic languages. Other languages can be added easily by sub-classing TextNumber class.

## Installation
```
npm i text-number
```

## example
```javascript
import { TextNumber, TextNumberFa, TextNumberAr } from 'text-number'

const englishTextNumber = new TextNumber();
const farsiTextNumber = new TextNumberFa();
const arabicTextNumber = new TextNumberAr();

const num = 324;

console.log(englishTextNumber.text(num));	// three hundred and twenty four
console.log(farsiTextNumber.text(num));		// سیصد و بیست و چهار
console.log(arabicTextNumber.text(num));	// ثلاث مئه و اربعه عشرون

```
