
var score=20;
var highscore=0;
var secretNumber=Math.trunc(Math.random()*20+1);
console.log(secretNumber);
 
 function check()
 {
  
   var num=document.querySelector('.inpu').value;
   if(num==secretNumber)
   {  
        
          if(score>highscore)  
        {    
             highscore=score;   
             document.querySelector('#high').innerHTML="🏅️HighScore:"+highscore;          
                            }
          document.querySelector(`h4`).innerHTML=secretNumber;  
	  document.querySelector(`#start`).innerHTML="YOU WON";
  	  document.querySelector('body').style.backgroundColor="green"; 
  	  console.log("YOU WON");
   	 
   	  document.querySelector('#score').innerHTML=`💯️score`+score; 
   	  document.getElementById("rcheck").addEventListener(`mouseover`, display );
  


   	  
      }       
                                                                             
              else if(secretNumber<num && num>0 && num <= 20 ) 
              {  
                 score--;      
                 clear();      
                 document.querySelector('#score').innerHTML="💯️score:" +score; 
                 document.querySelector('#start').innerHTML="too high";  
                 console.log("guess again");   
            }  
                
               else if(secretNumber>num && num>0 && num <= 20 ) 
              {  
                score--;    
                clear(); 
                document.querySelector('#score').innerHTML="💯️score"+score;     
                document.querySelector('#start').innerHTML="too low";      
                console.log("guess again");  
             }
            
            else if(secretNumber==" ") 
            {
            document.querySelector(`#start`).innerHTML="enter a digit";
            }
                   
             else 
               {                                    
               document.querySelector(`#start`).innerHTML="enter a digit";  
             }           
         }       
      
      
        
     function reset()
     {
     score=20;
     secretNumber=Math.trunc(Math.random()*20+1);
     console.log(secretNumber);      
     
     document.querySelector('body').style.backgroundColor="black";
     document.querySelector(`#start`).innerHTML="start Guessing";    
     document.querySelector('h4').textContent="?"; 
     document.querySelector('#score').innerHTML=`💯️score`+score;
     document.querySelector('#high').innerHTML=`🏅️HighScore:`+highscore; 
     document.getElementById("rcheck").removeEventListener(`mouseover`  , display);
     }
     function clear()
     {
     document.querySelector(`h4`).value="";
     }
     
     function display() {
  alert("CLICK AGAIN TO PLAY THE GAME");
  }
                                                                                                             
