
document.getElementById('loginButton')
   .addEventListener('click', function (e){
      e.preventDefault();
       const mobaileNumber = 01316493226;
       const pinNumber = 1234;

       const mobaileNumberValue = document.getElementById('mobaileNumber').value ;
       const mobaileNumberValueConverted = parseInt(mobaileNumber);
       

       const pinNumberValue = document.getElementById('pinNumber').value;
       const pinNumberValueConveted = parseInt(pinNumberValue);
       
       if(mobaileNumberValueConverted === mobaileNumber &&
         pinNumberValueConveted === pinNumber){
            window.location.href = "./home.html"
         } else {
            alert('invalid number or pin');
         }
        
       
   })