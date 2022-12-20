var url="http://localhost:3000/items";
var itemslist=document.querySelector(".itemslist");
async function getitems()
{
var listitems=await fetch(url);
var response=await listitems.json();
for(let i=0;i<response.length;i++)
{
  itemslist.innerHTML +=
`<button  class="list" onclick="recipelist()">
<h5>${response[i].price}</h5>
<h5>${response[i].name}</h5>
</button>`;
}
}getitems();


async function recipelist()
{
var listitems=await fetch(url);
var response=await listitems.json();
}
recipelist();




