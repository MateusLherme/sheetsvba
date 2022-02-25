function onEdit() {

var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

var guia = spreadsheet.getSheetByName("Calculo por Hora");

var colunaDF = guia.getActiveCell().getColumn();

var linhaDF = guia.getActiveCell().getRow();
 


 if(colunaDF == 3){
    if(linhaDF == 2){
      var colunaCdf = guia.getRange(linhaDF, 3).getValue();
      var colunaBdf = guia.getRange(linhaDF, 2).getValue();
      var colunaAdf = guia.getRange(linhaDF, 1).getValue();

        if(colunaCdf != ""){
          if(colunaBdf == ""){
            if(colunaAdf == ""){
              var hora = Utilities.formatDate(new Date(), "GMT-03:00","hh:mm:ss a");
              var data = Utilities.formatDate(new Date(), "GMT-03:00", "dd/MM/yyyy");
              guia.getRange(linhaDF, 2).setValue(hora);
              guia.getRange(linhaDF, 1).setValue(data);
            }
           }
          } else{
               guia.getRange(linhaDF, 2).setValue("");
               guia.getRange(linhaDF, 1).setValue("");
    }
   } 
  }

  if(colunaDF == 5){
    if(linhaDF > 1){
      var colunaEdf = guia.getRange(linhaDF, 5).getValue();
      var colunaDdf = guia.getRange(linhaDF, 4).getValue();

        if(colunaEdf != ""){
          
          var linha = guia.getLastRow() + 1;
          var ultimaLinha = guia.getLastRow();
          
          var colunaA = "A" + linha;
          var colunaB = "B" + linha;
          var colunaC = "C" + linha;
          guia.getRange(colunaC).setValue(colunaEdf);
          

          var hora = Utilities.formatDate(new Date(), "GMT-03:00","hh:mm:ss a");
          var data = Utilities.formatDate(new Date(), "GMT-03:00", "dd/MM/yyyy");
          guia.getRange(colunaA).setValue(data);
          guia.getRange(colunaB).setValue(hora);
        
        

          if(colunaDdf == ""){
              var hora = Utilities.formatDate(new Date(), "GMT-03:00","hh:mm:ss a");
              guia.getRange(linhaDF, 4).setValue(hora);
          }
        
        // digitar aqui

        }else{
          guia.getRange(linhaDF, 4).setValue("");
          var pegarLinha = guia.getActiveCell().getRow();
          var teste = pegarLinha + 1;
          var testeC = "C" + teste;
          var testeA = "A" + teste;
          var testeB = "B" + teste;
          guia.getRange(testeC).setValue("");
          guia.getRange(testeA).setValue("");
          guia.getRange(testeB).setValue("");

      }
  }
  }
}
