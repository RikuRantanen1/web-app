//2c0031001947393035313138

var getJSON = function(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  
  xhr.onload = function() {
  
      var status = xhr.status;
      
      if (status == 200) {
          callback(null, xhr.response);
      } else {
          callback(status);
      }
  };
  
  xhr.send();
};

getJSON('https://func-weather.azurewebsites.net/api/HttpTriggerCSharp2?code=03Hf14xSawGyeGtfxZTCLJ5mGLx0GGusap2f3zssPqg6n3KriqizHg==&deviceId=2c0031001947393035313138&amount=10', function(err, data){
  let taulukko = `<table width="20%" align="center" style="border=1px solid black"><h1 align="center">Sää-asema</h1><tr><td><b>ilmankosteus%</b></td><td><b>lämpötila</b></td><td><b>valoisuus</td></b>`;
  const historia = data.map(function(mittaus){
   
      taulukko = taulukko + `<tr><td>${mittaus.Hum}</td><td>${mittaus.Temp}</td><td>${mittaus.Light}</td></tr>`; 
  
  });
  taulukko = taulukko + `</table>`;
  document.body.innerHTML = taulukko;
});


