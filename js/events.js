//define functions here

$(document).ready(function(){

// call functions here
frameIt();
getIt();



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
      $('form').alert("Your form is going to be submitted now.");
      
    });
    
  }
  
  function pressIt(){
    $(document).on('keypress', function(k){
      
      if(k.which === 103){
        alert("G pressed");
        
      }
      
    });
    
    
  }