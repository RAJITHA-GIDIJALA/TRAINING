
var publisherr=document.querySelectorAll(".publisher");
var titlee=document.querySelectorAll(".title");
var imagee=document.querySelectorAll(".img");


function menu()
{
for(let i=0;i<10;i++)
{
publisherr[i].innerHTML=items.recipes[i].publisher;
titlee[i].innerHTML=items.recipes[i].title;
imagee[i].src=items.recipes[i].image_url;
}
}menu();
