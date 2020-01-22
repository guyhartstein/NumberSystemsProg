function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);

  var output32BitScientificNotation = "";

  var signBit;

  if (floatToConvert > 0)
    signBit = 0;
  else
    signBit = 1;

  function bin2dec(num) {
    return num.split('').reverse().reduce(function(x, y, i) {
      return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
  }

  function toBinary3(d, b) {

    var o = "";
    var remStack = [];

    while (d >= 1) {
      if ((d % b) > 0)
        remStack.push('1');
      else {
        remStack.push('0');
      }

      d = Math.floor(d / b);
    }

    while (remStack.length > 0) {
      o = o + remStack.pop();
    }

    outputValue = o;
    return outputValue;
  }

  var exp = floatToConvert.toString().length - 1;
  var expInt = parseInt(exp) + 127;
  var expBin = toBinary3(expInt, 2);

  var mantissa = toBinary3(floatToConvert, 2);
  var strmantissa = mantissa.toString();
  var cleanmantissa = strmantissa.substr(1, mantissa.search("000"));

  output32BitScientificNotation = signBit + expBin + cleanmantissa;


  //var output32BitScientificNotation = "10100011001100001000010100101010";

  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0