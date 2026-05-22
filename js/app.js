let menuToggle = document.querySelector(".menu_icon");

let burgerIcon = document.querySelector(".burger_icon");

let closeIcon = document.querySelector(".closing_icon");

let menuContent = document.querySelector(".navigation ul");

menuToggle.addEventListener("click", function(){
    if(burgerIcon.style.display === "block"){
        burgerIcon.style.display = "none";
        closeIcon.style.display = "block";
        menuContent.style.left = "0";
    }else{
        burgerIcon.style.display = "block";
        closeIcon.style.display = "none";
        menuContent.style.left = "-256px";
    }
});
