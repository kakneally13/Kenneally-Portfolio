window.addEventListener("load",function(){
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navMenu");
    
    hamburger.addEventListener("click",() => {
        navMenu.classList.toggle("active");
        console.log("my click event");
    }); 
});