// Script for navigation bar
var navigation = document.getElementById("navigation")
var bar = document.querySelector(".bars")
var close = document.getElementById("close")

 bar.addEventListener("click",function(){
    navigation.style.right="0px"

 })
 close.addEventListener("click",function(){
    navigation.style.right="-200px"
 })




 function comon(event){
   
 var heart = event.target.classList

var chan = event.target

    if(heart.contains("fa-regular")){
        heart.replace("fa-regular","fa-solid")
        chan.style.color="red"
        
       }
       else {
        heart.replace("fa-solid","fa-regular")
        chan.style.color="black"
        
    }

}





var search = document.getElementById("Search")
var pro = document.querySelector(".produ")
var garment = document.querySelectorAll(".box1")

search.addEventListener("keyup",function(event){
var entervalue = event.target.value.toUpperCase()
for(count=0;count<garment.length;count=count+1)
if(garment[count].textContent.toUpperCase().indexOf(entervalue)<0){
garment[count].style.display="none"
}
else{
    garment[count].style.display="block"
}
})

var filt = document.getElementsByName("shirt")
for(count=0;count<filt.length;count=count+1)
{
filt[count].addEventListener("click",function(event){
    var garment = document.querySelectorAll(".box1")
    for(count=0;count<garment.length;count=count+1){
if(garment[count].querySelector("img").alt.includes(event.target.value)){
    garment[count].style.display="block"
}
else{
    garment[count].style.display="none"
}
}})}
