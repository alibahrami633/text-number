class TextNumber {
	constructor(n) {
		this.zero = "zero";
		this.and = " and ";
		this.and2 = " ";
		this.and3 = " and ";
		this.format2 = '{ten} {and} {one}';
		this.ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
		this.teens = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
		this.tens = [ "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety" ];
		this.hundreds = [ "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred" ];
		this.units = [ "", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion" ];
		
		this.value = n;
	}
	
	_text2(n) {
		let result = "";
		
		n = n || this.value;
		
		if (n < 10) {
			result = this.ones[n];
		} else if (n >= 10 && n < 20) {
			result = this.teens[n - 10];
		} else {
			const one = Math.floor(n / 10);
			const rest = n - one * 10;
			
			//result = this.tens[one - 2] + (rest > 0 ? this.and2 + this.ones[rest]: "");
			result = this.format2.replace('{ten}', this.tens[one - 2])
								 .replace('{and}', (rest > 0 ? this.and2: ''))
								 .replace('{one}', (rest > 0 ? this.ones[rest]: ''));
		}
		
		return result;
	}
	_text3(n) {
		n = n || this.value;
		
		const one = Math.floor(n / 100);
		const rest = n - one * 100;
		
		return (one > 0 ? this.hundreds[one - 1]: "") + (rest > 0 ? (one > 0 ? this.and3: "") + this._text2(rest): "");
	}
	text(n) {
		n = n || this.value;
		
		let result = "";
		let i = 0;
		const str = n.toString();
		
		if (n == 0) {
			result = this.zero;
		} else {
			do {
				let from = str.length - (i + 1) * 3;
				let len = 3;
				
				if (from < 0) {
					len += from;
					from = 0;
				}
				
				const num = str.substr(from, len);
				
				result = this._text3(parseInt(num)) + " " + this.units[i] + (i < str.length && result.length ? this.and + result : "");
				
				i++;
			} while (i * 3 < str.length)
		}
	
		result = result.trim().replace(/\s+/g, ' ');
		
		if (result.endsWith(this.and.trim())) {
		    result = result.substr(0, result.length - this.and.trim().length);
	    	}
		if (result.endsWith(this.and2.trim())) {
		    result = result.substr(0, result.length - this.and2.trim().length);
	    	}
		if (result.endsWith(this.and3.trim())) {
		    result = result.substr(0, result.length - this.and3.trim().length);
	    	}
			
		return result;
	}
}

class TextNumberFa extends TextNumber {
	constructor(n) {
		super(n);
		
		this.zero = "صفر";
		this.and = " و ";
		this.and2 = " و ";
		this.and3 = " و ";
		this.ones = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه" ];
		this.teens = [ "ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده" ];
		this.tens = [ "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود" ];
		this.hundreds = [ "صد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد" ];
		this.units = [ "", "هزار", "میلیون", "میلیارد", "تریلیون", "کوادریلیون", "کوینتیلیون", "سکسیلیون", "سپتیلیون", "اکتیلیون", "نانیلیون" ];
	}
}

class TextNumberAr extends TextNumber {
	constructor(n) {
		super(n);
		
		this.zero = "صفر";
		this.and = " و ";
		this.and2 = " ";
		this.and3 = " و ";
		this.format2 = '{one} {and} {ten}';
		this.ones = ["", "واحد", "اثنان", "ثلاثه", "اربعه", "خمسه", "سته", "سبعه", "ثمانیه", "تسعه" ];
		this.teens = [ "عشر", "احدی عشر", "اثنا عشر", "ثلاثه عشر", "اربعه عشر", "خمسه عشر", "سته عشر", "سبعه عشر", "ثمانیه عشر", "تسعه عشر" ];
		this.tens = [ "عشرون", "ثلاثون", "اربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون" ];
		this.hundreds = [ "مئه", "مئتین", "ثلاث مئه", "اربعه مئه", "خمسه مئه", "سته مئه", "سبعه مئه", "ثمانیه مئه", "تسعه مئه" ];
		this.units = [ "", "الف", "ملیون", "ملیار", "تریلیون", "کوادریلیون", "کوینتیلیون", "سکسیلیون", "سپتیلیون", "اکتیلیون", "نانیلیون" ];
	}
}

export { TextNumber, TextNumberFa, TextNumberAr }

