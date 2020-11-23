"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextNumberAr = exports.TextNumberFa = exports.TextNumber = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextNumber = /*#__PURE__*/function () {
  function TextNumber(n) {
    _classCallCheck(this, TextNumber);

    this.zero = "zero";
    this.and = " and ";
    this.and2 = " ";
    this.and3 = " and ";
    this.format2 = '{ten} {and} {one}';
    this.ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    this.teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    this.tens = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    this.hundreds = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    this.units = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion"];
    this.value = n;
  }

  _createClass(TextNumber, [{
    key: "_text2",
    value: function _text2(n) {
      var result = "";
      n = n || this.value;

      if (n < 10) {
        result = this.ones[n];
      } else if (n >= 10 && n < 20) {
        result = this.teens[n - 10];
      } else {
        var one = Math.floor(n / 10);
        var rest = n - one * 10; //result = this.tens[one - 2] + (rest > 0 ? this.and2 + this.ones[rest]: "");

        result = this.format2.replace('{ten}', this.tens[one - 2]).replace('{and}', rest > 0 ? this.and2 : '').replace('{one}', rest > 0 ? this.ones[rest] : '');
      }

      return result;
    }
  }, {
    key: "_text3",
    value: function _text3(n) {
      n = n || this.value;
      var one = Math.floor(n / 100);
      var rest = n - one * 100;
      return (one > 0 ? this.hundreds[one - 1] : "") + (rest > 0 ? (one > 0 ? this.and3 : "") + this._text2(rest) : "");
    }
  }, {
    key: "text",
    value: function text(n) {
      n = n || this.value;
      var result = "";
      var i = 0;
      var str = n.toString();

      if (n == 0) {
        result = this.zero;
      } else {
        do {
          var from = str.length - (i + 1) * 3;
          var len = 3;

          if (from < 0) {
            len += from;
            from = 0;
          }

          var num = str.substr(from, len);
          result = this._text3(parseInt(num)) + " " + this.units[i] + (i < str.length && result.length ? this.and + result : "");
          i++;
        } while (i * 3 < str.length);
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
  }]);

  return TextNumber;
}();

exports.TextNumber = TextNumber;

var TextNumberFa = /*#__PURE__*/function (_TextNumber) {
  _inherits(TextNumberFa, _TextNumber);

  var _super = _createSuper(TextNumberFa);

  function TextNumberFa(n) {
    var _this;

    _classCallCheck(this, TextNumberFa);

    _this = _super.call(this, n);
    _this.zero = "صفر";
    _this.and = " و ";
    _this.and2 = " و ";
    _this.and3 = " و ";
    _this.ones = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
    _this.teens = ["ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده"];
    _this.tens = ["بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"];
    _this.hundreds = ["صد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"];
    _this.units = ["", "هزار", "میلیون", "میلیارد", "تریلیون", "کوادریلیون", "کوینتیلیون", "سکسیلیون", "سپتیلیون", "اکتیلیون", "نانیلیون"];
    return _this;
  }

  return TextNumberFa;
}(TextNumber);

exports.TextNumberFa = TextNumberFa;

var TextNumberAr = /*#__PURE__*/function (_TextNumber2) {
  _inherits(TextNumberAr, _TextNumber2);

  var _super2 = _createSuper(TextNumberAr);

  function TextNumberAr(n) {
    var _this2;

    _classCallCheck(this, TextNumberAr);

    _this2 = _super2.call(this, n);
    _this2.zero = "صفر";
    _this2.and = " و ";
    _this2.and2 = " ";
    _this2.and3 = " و ";
    _this2.format2 = '{one} {and} {ten}';
    _this2.ones = ["", "واحد", "اثنان", "ثلاثه", "اربعه", "خمسه", "سته", "سبعه", "ثمانیه", "تسعه"];
    _this2.teens = ["عشر", "احدی عشر", "اثنا عشر", "ثلاثه عشر", "اربعه عشر", "خمسه عشر", "سته عشر", "سبعه عشر", "ثمانیه عشر", "تسعه عشر"];
    _this2.tens = ["عشرون", "ثلاثون", "اربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"];
    _this2.hundreds = ["مئه", "مئتین", "ثلاث مئه", "اربعه مئه", "خمسه مئه", "سته مئه", "سبعه مئه", "ثمانیه مئه", "تسعه مئه"];
    _this2.units = ["", "الف", "ملیون", "ملیار", "تریلیون", "کوادریلیون", "کوینتیلیون", "سکسیلیون", "سپتیلیون", "اکتیلیون", "نانیلیون"];
    return _this2;
  }

  return TextNumberAr;
}(TextNumber);

exports.TextNumberAr = TextNumberAr;
