//define functions here

$(document).ready(function(){

// call functions here
frameIt();
getIt();
pressIt();



});


function getIt(){
  $('p').on('click', function(){
  alert('Hey!');  
    
  });
  
  
}

function frameIt(){
    $('img').on('load', function(){
      $('img').addClass('tasty');
    });
    
  }
  
  function submitIt(){
    $('form').on('submit', function(){
      alert("Your form is going to be submitted now.");
      
    });
    
  }
  
  function pressIt(){
    $('input').on('keydown', function(k){
      
      if(k.which === 103){
        window.alert("G pressed");
        
      }
      else{
        return false;
      }
      
    });
    
    
  }
  
  
  
  function submitIt(){
    
  }