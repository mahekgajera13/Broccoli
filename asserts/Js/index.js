
function close_btn(){
    var announcebar = document.querySelector(".announcement_bar");
    announcebar.style.display = "none";
}

// announcment-bar countdown

var days = document.querySelector(".days");
var hours = document.querySelector(".hours");
var mins = document.querySelector(".mins");
var secs = document.querySelector(".secs");

var end_date = new Date("August 18 2025 00:00:00").getTime();

function announcebar_timer (){
    var current_date = new Date().getTime();
    var differance = end_date - current_date;

    var Day = Math.floor(differance / 1000 /60 /60/24);
    var Hour = Math.floor(differance/1000/60/60)%24;
    var Min = Math.floor(differance/1000/60)%60;
    var Sec = Math.floor(differance/1000)%60;

    days.innerHTML = Day;
    hours.innerHTML = Hour;
    mins.innerHTML = Min;
    secs.innerHTML = Sec;

}

setInterval(announcebar_timer,1000);


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

// countdown2 

var days1 = document.querySelector(".counter-days");
var hours1 = document.querySelector(".counter-hrs");
var mins1 = document.querySelector(".counter-mins");
var secs1 = document.querySelector(".counter-sec");

var end_date1 = new Date("18 July 2025 00:00:00");

function countdown2 (){
    var current_date1 = new Date().getTime();
    var differance1 = end_date1 - current_date1;

    var Day1 = Math.floor(differance1 / 1000 / 60 / 60/24);
    var Hour1 = Math.floor(differance1 / 1000 / 60 / 60)%24;
    var Min1 = Math.floor(differance1 / 1000 /60)%60;
    var Sec1 = Math.floor(differance1 / 1000)%60;


    days1.innerHTML = Day1;
    hours1.innerHTML = Hour1;
    mins1.innerHTML = Min1;
    secs1.innerHTML = Sec1;
}
setInterval(countdown2,1000);



// start mobile header
var closeBtn = document.querySelector(".close-button");
var toggleBtn = document.querySelector(".mobile-menu-toggle-cart-icon");
var sideBar = document.querySelector(".mobile-head-menu");

toggleBtn.addEventListener("click",()=>{
    sideBar.classList.toggle("show_sidebar");
})
closeBtn.addEventListener("click",()=>{
    sideBar.classList.remove("show_sidebar");
})