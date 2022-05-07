Blockly.Blocks["i2c_scanner_begin"] = {
  init: function () {
    this.appendDummyInput()
        .appendField("Begin I2C scanner port")
        .appendField(new Blockly.FieldDropdown([["Wire1","Wire1"], ["Wire","Wire"], ["none","none"]]), "I2C_PORT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks["i2c_scanner_scan"] = {
  init: function () {
      this.appendDummyInput()
          .appendField("Scan devices")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};
