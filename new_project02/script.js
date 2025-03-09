var con = document.getElementsByClassName("container")[0]; // Access the first element with the class "container"
var love = document.querySelector("i");

con.addEventListener("dblclick", () => {
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    setTimeout(()=>{
     love.style.transform = 'translate(-50%, -50%) scale(0)';
},2000);
});

