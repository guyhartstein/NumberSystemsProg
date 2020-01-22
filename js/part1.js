function ConversionPart1() {

  var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
  var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
  var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
  var NewInt = UnsignedInt;
  var outputValue = "";

  function toBinary(d, b) {

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
  }

  toBinary(NewInt, UnsignedIntBaseTo);
  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}