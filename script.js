window.addEventListener("load",function(){
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navMenu");
    
    hamburger.addEventListener("click",() => {
        navMenu.classList.toggle("active");
        console.log("my click event");
    }); 
});

// $(document).on('click', 'a[href^="#aboutMeHome"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
//   });