var main = document.getElementById("main-img")
var other = document.getElementsByClassName("small-img")

for(count=0;count<=4;count=count+1){
other[count].addEventListener("click",function(event){
  var imgs = event.target
 main.src = imgs.src
})
}
