// const toggle = document.querySelector('.toggle');
// const btnClose = document.querySelector('.btn-close');

// function showNav() {
//     if (toggle) {
//         toggle.addEventListener('click',() => {
//             toggle.classList.add('active')
//         })
//     }
   
// } 

$(".toggle").click(function () {
    $(this).toggleClass('on');
    $(".resize").toggleClass("active")
})
$(".resize ul li a").click(function () {
    $(this).toggleClass('on');
    $(".resize").toggleClass("active")
})
$(".btn-close").click(function () {
    $(this).toggleClass('on');
    $(".resize").toggleClass("active")
})
