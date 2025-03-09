var state = document.querySelector("h5");
var remove = document.getElementById("remove")

var addfriend = document.getElementById("add");
var check =0;

addfriend.addEventListener( "click",function(){
     if(check ==0){
state.innerHTML =  "Friends"
state.style.color= "green"
addfriend.innerHTML = "Unfriend"
check = 1;
}
else {
  state.innerHTML =  "Stranger"
   state.style.color= "red"
   addfriend.innerHTML = "Friend"
   check = 0;
}

})
