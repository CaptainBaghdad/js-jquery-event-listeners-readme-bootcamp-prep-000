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
      window.alert("Your form is going to be submitted now.");
      
    });
    
  }
  
  function pressIt(){
    $('input').on('keypress', function(k){
      
      if(k === 103){
        window.alert("G pressed");
        
      }
      else{
        return false;
      }
      
    });
    
    
  }
  
  
  
  function submitIt(){
    
  }