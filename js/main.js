const loading = document.getElementById("loading");

const loadingDuration = 1000; // 1s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration); 
let modeBtn = document.getElementById("mode-btn");

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});