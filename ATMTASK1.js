



var account=["12345","67890","630150","996373"];
var password=["00","22","33","44"];
var balance=[20000,30000,25000,50000];
var accountNo;
var pwd;
var option;
 var transactiontype;
var user =[];
var transaction=[];
var k=10;




function atm(){
    while(k == 10){
    accountNo = prompt("please enter your account number");
    
        if(account.includes(accountNo)){
            user = account.indexOf(accountNo);
            
            pwd = prompt("please enter your Password");
            
                if(user == password.indexOf(pwd)){
                
                    cases();
                    
                }
                else{
                    alert("Invalid Password");
                
                }
        }
        
        else{
            alert("Invallid account Number");
        }    
}
}




function cases(){



    do{
         option = prompt("Welcome to your account"+ "\n"+"account number :-"+accountNo +"\n"+"password is :-"+pwd+"\n"+"1.CHECK ACCOUNT BALANCE"+ "\n" +"2.DEPOSIT"+ "\n" +"3.WITHDRAWL "+ "\n" +"4.TRANSACTION HISTORY"+"\n"+"5.Exit");
                     
                     switch(option){
                     
                         case "1" : alert("Yur balence is "+balance[user]);
                         break;
                         
                         
                         case "2" : deposit();
                         break;
                         
                         case "3" : withdrawal();
                         break;
                         
                         case "4" : transactionhistory();
                         break;
                         
                         case "5" : alert("exist");
                         break;
                         
                         default : alert("Invalid Input");
                     
                     }
         }while(option != 5);
}



function deposit(){



   if(user == password.indexOf(pwd)){
        
        var p=prompt("ENTER AMOUNT TO DEPOSIT");
    
        balance[user]+=parseInt(p);
        alert("DEPOSIT SUCCESSFULLY "+balance[user]);
        
        transaction.push("deposited amount :"+p+"  "+"Remaining amount :-"+balance[user]+","+"\n");
        
    }
}



function withdrawl(){
    
        var q=prompt("ENTER AMOUNT TO WITHDRAWL"+"\n"+"Your Balance is "+balance[user]);
        parseInt(q);
        
            
        if(q < balance[user] || q == balance[user]){
        
            balance[user]-=parseInt(q);
            alert("withdrawal successfull and Balance amount is "+balance[user]);
            transaction.push("withdraw amount :"+q+"  "+"Remaining amount:-"+balance[user]+","+"\n");
            return null;
        }
        else if(q >  balance[user])
        {
            alert("insufficent balance");
            return null;
        }
}



function transactionhistory(){
       alert(transaction )
       
       }
 
       
       
