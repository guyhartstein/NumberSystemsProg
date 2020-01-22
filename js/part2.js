function ConversionPart2() {
  //
  var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);

  var outputValue = "";
  var outputValueTwosComplement = "";
  var remStack = [];

  function bin2dec(num) {
    return num.split('').reverse().reduce(function(x, y, i) {
      return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
  }

  function toSignedBinary(d, b) {

    var o = "";
    var c = "";
    var remStack = [];
    var sel = "";

    while (d >= 1) {
      if ((d % b) > 0)
        remStack.push('1');
      else {
        remStack.push('0');
      }
      d = Math.floor(d / b);
    }

    if (SignedDecimalInt > 0)
      remStack.push("0");
    else
      remStack.push("1");

    while (remStack.length > 0) {
      o = o + remStack.pop();
      sel = o.slice(o.length - 1, o.length);
      if (sel == "0") {
        c += "1";
      } else {
        c += "0";
      }
    }

    outputValue = o;
    outputValueTwosComplement = c;
  }


  var tctd = bin2dec(outputValueTwosComplement);
  tctd = parseInt(tctd, 10) + 1;
  outputValueTwosComplement = toSignedBinary(tctd, 2);



  toSignedBinary(SignedDecimalInt, 2);

  // Show the output on the screen
  FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}