var url="http://localhost:3000/items";
var itemslist=document.querySelector(".left-content");
var righttable=document.querySelector(".right-content");
var tableDisplay=document.querySelector("#tableid");
var tax=document.querySelector(".quantity");
var discount=document.querySelector(".quantity1 quantity");
var billamount=document.querySelector(".payment");
var clearbtn=document.querySelector(".clear");
var discountdisplay=document.querySelector("#discountid");
var taxdisplay=document.querySelector(".taxesid");
var orderr =document.querySelector(".span");
var orderArraydisplay=document.querySelector(".order"); 
var number=document.querySelector(".number");
var onclickcurrent=document.querySelector("#viewitems");
var CurrentOrders=document.querySelector(".btn1");


var totalBill=0;
var display;
var response;
var orderArray=[];
var count=0;
var amount=0;
let i;
var temp=0;
var response1;
var response2;


async function getitems()
{
 var listitems=await fetch("http://localhost:3000/items");
 response=await listitems.json();
 for( i=0;i<response.length;i++)
{
  itemslist.innerHTML+=
  `<button  class="list" onclick="orderitems(${response[i].id-1})">
   <h5>${response[i].name}</h5>
   <h5>${response[i].price}</h5>
   </button>`;
}console.log(response);
}getitems();

function  orderitems(id)
{
orderArray.push({
      name:response[id].name,  
      price:response[id].price,
      quantity:1
      });
getlist();
}
async function getlist()
{
display="";
console.log(orderArray);
   for(let i=0;i<orderArray.length;i++){
    display +=`<tr>
           <td>${orderArray[i].name}</td>
           <td><input class="input" type="number" value="${orderArray[i].quantity}" onchange="quantitynumber(${i})"></td>
           <td>${orderArray[i].price}</td>
         </tr>`;
         amount += Number(orderArray[i].price);
         }
         console.log(temp);
         
         console.log(orderArray);
temp++;
orderr.innerHTML=temp;
tableDisplay.innerHTML = display;

var Discount =Math.floor(amount*(5/100));
discountdisplay.innerHTML=Discount;
console.log(Discount);
var Tax=Math.floor(discount*(4/100));
console.log(amount);
taxdisplay.innerHTML=Tax;

totalBill=(amount-(Tax+Discount))
billamount.innerHTML="charge"+totalBill+"Rs.";
console.log(totalBill);
}

function quantitynumber(id)
{
      var qtnvalue = document.querySelectorAll(".input");   
      orderArray[id].quantity=qtnvalue[id].value;
      orderArray[id].price= orderArray[id].price*qtnvalue[id].value;     
      console.log(orderArray[id].quantity);
      getlist();
    }

clearbtn.addEventListener('click',clear)
function clear()
{
tableDisplay.innerHTML="";
orderr.innerHTML="";
discountdisplay.innerHTML="";
taxdisplay.innerHTML="";
billamount.innerHTML="CHARGE Rs.";
}


orderArraydisplay.addEventListener("click",selectedItems);
async function selectedItems(){

     
    let result=await fetch("http://localhost:3000/selecteditems",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
    "total":totalBill,
    customerName:number.value,  
    items:orderArray
       }
    )
});

let reply=await result.json();
console.log(reply);
}

 CurrentOrders.addEventListener("click",ordersitemstable);
 function ordersitemstable()
 {
 itemslist.style.display="none";
 righttable.style.display="none";
 onclickcurrent.style.display="block";
 fetchDataIntoTable();
 }
 
 CurrentOrders.addEventListener("click",fetchDataIntoTable); 
                          async function fetchDataIntoTable(){                                                        
                               response1=await fetch("http://localhost:3000/selecteditems");                              
                               response2=await response1.json();
                               console.log(response2);
                                                              
                               for(let j=0;j<response2.length;j++){
                                 viewitems.innerHTML+=`<tr>
                                            <td>${response2[j].id}</td>
                                            <td>${response2[j].customerName}</td>
                                            <td>${response2[j].total+"Rs"}</td>
                                            <td> <button class="viewSummary" onclick="customeritems(${response2[j].id-1})">view</button></td>
                                            </tr>`
                                    }                                        
                              }
                              
    function customeritems(value){
    let viewlist="";
    console.log(value);
     console.log(response2);
     for(var i=0;i<response2[value].items.length;i++){        
        viewlist += `<tr>
                          <td>${i+1}</td>                          
                          <td>${response2[value].items[i].item}</td>
                          <td>${response2[value].items[i].price}</td>
                          <td>${response2[value].items[i].quantity}</td>                        
                       </tr>  `     
}
viewitems.innerHTML = viewlist;
console.log(viewlist);
}


                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
