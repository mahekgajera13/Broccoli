
function close_btn(){
    var announcebar = document.querySelector(".announcement_bar");
    announcebar.style.display = "none";
}


// start product-page
var btns = document.querySelectorAll(".show");
btns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        btns.forEach(function(e){
            e.classList.remove("active");
        })
        var products = document.querySelectorAll(".ltn-product-item");
        btn.classList.add("active");
        products.forEach(function(event){
            event.classList.remove("active");
        })
        var id = btn.getAttribute("data-id");
        var show_all_content = document.querySelectorAll('.'+ id);
        show_all_content.forEach(single_content =>{
            single_content.classList.add("active");
        })
    })
})


// start mobile header
var closeBtn = document.querySelector(".close-button");
var toggleBtn = document.querySelector(".mobile-menu-toggle");
var sideBar = document.querySelector(".mobile-head-menu");

toggleBtn.addEventListener("click",()=>{
    sideBar.classList.toggle("show_sidebar");
})
closeBtn.addEventListener("click",()=>{
    sideBar.classList.remove("show_sidebar");
})