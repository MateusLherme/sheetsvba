function Claim() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  var guiabomb = spreadsheet.getSheetByName("BombCrypto");
  var livrocaixa = spreadsheet.getSheetByName("Livro-Caixa");
  var bcoin = guiabomb.getRange("B2").getValue();
  var bcoinbrl = guiabomb.getRange("B1").getValue();

  var area = guiabomb.getRange("E2:F2");

  var linha = livrocaixa.getLastRow() + 1;

  var colar = "A" + linha;  
  
  var colunac = "C" + linha;
  var colunad = "D" + linha;

 

  area.copyTo(livrocaixa.getRange(colar),SpreadsheetApp.CopyPasteType.PASTE_VALUES,false);

  var colunabvalue = guiabomb.getRange("F2").getValue();

  var pastc = livrocaixa.getRange(colunac).setValue((colunabvalue)*(bcoin));

  var colunacvalue = pastc.getValue(); 
  
  var pastd = livrocaixa.getRange(colunad).setValue((colunacvalue)*(bcoinbrl));

  guiabomb.getRange("F2").clear({contentsOnly:true, skipFilteredRows:true});

  livrocaixa.getRange("A5").activate();

  Browser.msgBox("Copiado e enviado com sucesso!");

}
