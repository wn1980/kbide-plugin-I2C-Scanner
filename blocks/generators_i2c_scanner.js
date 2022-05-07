Blockly.JavaScript["i2c_scanner_begin"] = function (block) {
  var dropdown_i2c_port = block.getFieldValue('I2C_PORT');
  var code =
`
#EXTINC
#include "I2CScanner.h" 
#END

#VARIABLE
I2CScanner scanner;
#END

scanner.Init(&${dropdown_i2c_port});

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
