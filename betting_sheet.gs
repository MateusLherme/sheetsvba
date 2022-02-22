function onEdit() {
  
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var planilha = spreadsheet.getSheetByName("Gerencia");

var colunaDF = planilha.getActiveCell().getColumn();

var linhaDF = planilha.getActiveCell().getRow();

var linha = planilha.getLastRow() + 1;
var ultimaLinha = planilha.getLastRow();

var colunaFdf = planilha.getRange(linhaDF, 6);
var colunaGdf = planilha.getRange(linhaDF, 7);
var colunaHdf = planilha.getRange(linhaDF, 8);
var colunaIdf = planilha.getRange(linhaDF, 9);
var resultado = colunaHdf.getValue();

var banca = 53.88;
var range_banca = planilha.getRange("J2");


var valor_F = colunaFdf.getValue();
var valor_G = colunaGdf.getValue();
if(linhaDF > 1){
    if(colunaDF == 8){
      if(resultado == "Win"){
      
        var saldo_bet = colunaIdf.setValue((valor_F)*(valor_G));
        var valor_resultado = planilha.getRange(linhaDF,9).getValue();
        var saldo_atualizado = range_banca.setValue((banca)+(valor_resultado));

  } if(resultado == "Lose"){
      var saldo_bet = colunaIdf.setValue((-valor_F)*(valor_G));
      var valor_F = colunaFdf.getValue();
      var saldo_atualizado = range_banca.setValue((banca)-(valor_F));
  } if(resultado == ""){
      var saldo_bet = colunaIdf.setValue("");
      var valor_resultado =colunaIdf.getValue();
      var saldo_atualizado = range_banca.setValue((banca)+(valor_resultado));
  }
  }
  }
}
