Blockly.JavaScript["i2c_scanner_begin"] = function (block) {
  var code =
`
#EXTINC
#include "I2CScanner.h" 
#END

#VARIABLE
I2CScanner scanner;
#END

scanner.Init();

\n
`;
  return code;
};


Blockly.JavaScript["i2c_scanner_scan"] = function (block) {
  var code =
`
scanner.Scan();
\n
`;
  return code;
};
