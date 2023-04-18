/* var el=document.querySelector('ul')
console.log('afficher:',el)

var bt1= document.getElementById('button')
const mainDiv= document.getElementsByClassName("navBar")[0]

var but= document.querySelector('button')
//var ajout= document.createElement(button)

console.log(mainDiv)

var v=mainDiv.children[0]
mainDiv.removeChild(but)
console.log(mainDiv) */

var total = Number(document.querySelector('.somme').innerHTML)
//console.log(total)
var plusBtn = document.querySelectorAll('.plus')
var moinsBtn = document.querySelectorAll('.moins')

for (const btn of plusBtn) {
    btn.addEventListener("click", function () {
        var quantity = Number(btn.previousElementSibling.innerHTML)
        quantity++;
        btn.previousElementSibling.innerHTML=quantity;
        var price=Number(btn.parentNode.children[1].children[0].innerHTML)
        total+=price
        document.querySelector(".somme").innerHTML=total;
    }  
    )
}

for (const btn of moinsBtn) {
    btn.addEventListener("click", function () {
        var quantity = Number(btn.nextElementSibling.innerHTML)
        if(quantity>0)
        {quantity--;
        btn.nextElementSibling.innerHTML=quantity;
        var price=Number(btn.parentNode.children[1].children[0].innerHTML)
        total-=price
        document.querySelector(".somme").innerHTML=total;}
    }  
    )
}

var likes= document.querySelectorAll('.icon')
for (const heart of likes)
{
    heart.addEventListener("click", function(){
        if (heart.style.color=="black"){
            heart.style.color="red"
        }
        else{
            heart.style.color="black"
        }

    })
}
//remove element

var main=document.querySelector('.all')
var toDelete= document.querySelector('.all').children[3]
const bt= document.getElementById("button")

bt.addEventListener("click",function(){
if (main.childElementCount==4)
{   bt.innerHTML="element deleted!"
    main.removeChild(toDelete)}
else{
bt.innerHTML="element restored!"
main.append(toDelete)
}
})
