
function clicked() {
    alert("clicked");
}
alert("javascript activated");

// let f = document.getElementById('first');
// f.addEventListener("mouseover",function fm() {
//     alert("mouse over")
// });

let first = document.getElementById("first")
if(first){
    first.addEventListener('mouseover',function mouse_over(){  
        first.style.color = "greenyellow";
    })
}