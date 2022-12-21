var url="http://localhost:3000/items";
var itemslist=document.querySelector(".left-content");
var tableDisplay=document.querySelector("#tableid");
var tax=document.querySelector(".quantity");
var discount=document.querySelector(".quantity1 quantity");
var Total=document.querySelector(".payment");
var clearbtn=document.querySelector(".clear");
var discountdisplay=document.querySelector("#discountid");
var taxdisplay=document.querySelector("#taxesid");
var orderr =document.querySelector(".span");


var display;
var response;
var orderArray=[];
var count=0;
var amount=0;
let i;
var temp=0;

async function getitems()
{
var listitems=await fetch(url);
 response=await listitems.json();
 console.log("response",response);
 
for( i=0;i<response.length;i++)
{
  itemslist.innerHTML+=
  `<button  class="list" onclick="getlist(${response[i].id})">
<h5>${response[i].name}</h5>
<h5>${response[i].price}</h5>
</button>`;

}console.log(response);
}getitems();


async function getlist(ID)
{

console.log(response);
   for(let i=ID;i<=ID;i++){
    display +=`<tr>
           <td>${response[i-1].name}</td>
           <td>1</td>
           <td>${response[i-1].price}</td>
         </tr>`;
         }
         
temp++;
orderr.innerHTML=temp;
tableDisplay.innerHTML = display;
amount += Number(response[i-1].price);


var Discount =((amount/100)*5);
var discount=(amount-Discount);
 discountdisplay.innerHTML=Discount;

var Tax=((discount/100)*4);
var tax=(discount+Tax);
taxdisplay.innerHTML=Tax;

Total.innerHTML="charge"+tax+"Rs.";
console.log(Total);
}

clearbtn.addEventListener('click',clear)
function clear()
{
tableDisplay.innerHTML="";

}

