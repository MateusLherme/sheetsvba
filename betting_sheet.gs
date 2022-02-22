function onEdit() {
  
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var planilha = spreadsheet.getSheetByName("Gerencia");

var linhaDF = planilha.getActiveCell().getRow();

var ultimaLinha = planilha.getLastRow();


var banca = 53.88;
var range_banca = planilha.getRange("J2");



if(linhaDF > 1){
    
      var colunaFdf = planilha.getRange(linhaDF, 6);
      var colunaGdf = planilha.getRange(linhaDF, 7);
      var colunaHdf = planilha.getRange(linhaDF, 8);
      var colunaIdf = planilha.getRange(linhaDF, 9);
      var resultado = colunaHdf.getValue();
        if(resultado == "Win"){
          
          var valor_F1 = colunaFdf.getValue();
          var valor_G1 = colunaGdf.getValue();

          //Multiplicando aposta por odd
          var saldo_bet1 = colunaIdf.setValue((valor_F1)*(valor_G1));
          //Resultado da aposta
          var valor_resultado1 = planilha.getRange(linhaDF,9).getValue();
          // Somando o valor adquirido
          var saldo_atualizado1 = range_banca.setValue((banca)+(valor_resultado1));


    } if(resultado == "Lose"){
        
        //Armazenando o valor apostado
        var valor_F2 = colunaFdf.getValue();
        //Subtraindo o valor apostado
        var saldo_bet2 = colunaIdf.setValue((-valor_F2));
        //Atualizar a banca
        var saldo_atualizado2 = range_banca.setValue((banca)-(valor_F2));
    } 
      if(resultado == ""){
        
        //Setando resultado da Odd pra vazio
        var saldo_bet3 = colunaIdf.setValue("");
       
        var saldo_atualizado3 = range_banca.setValue((banca));
    }
    }
    }
  


