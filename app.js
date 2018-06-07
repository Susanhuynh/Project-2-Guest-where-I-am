
var box = document.querySelectorAll(".box");

Array.from(box).forEach(function(element){
    element.addEventListener("mouseover", function(){
        element.style.backgroundColor = "#b86d09";
        element.style.color = "white";
    })
})

Array.from(box).forEach(function(element){
    element.addEventListener("mouseout", function(){
        element.style.backgroundColor = "white";
        element.style.color = "#b86d09";
    }),
    element.addEventListener("click", function(){
        var a = Math.floor(Math.random()*3);
        var button = document.querySelector("button");
        if (a === 2){
            button.innerHTML = "You are very lucky today!";
        } else {
            button.innerHTML = "Try again next time!";;
        }
    })
})

document.querySelector(".container").addEventListener("mouseout", function(){
    reset();
})

function reset(){
    var button = document.querySelector("button");
    button.innerHTML = "Choose";
}



