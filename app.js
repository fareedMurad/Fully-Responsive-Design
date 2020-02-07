
// Rotating Head Box
setInterval(() =>{

    document.querySelector('.card-head-box').style.transform = `rotateY(5400deg)`;
}, 3000);



$(function () {
$('[data-toggle="popover"]').popover()})
$(function () {
$('[data-toggle="tooltip"]').tooltip()})

function countr(){
    jQuery(document).ready(function($){
        $('.counter').counterUp({
            delay:10,
            time:6000
        })
    })
}

function waypoint(){
    let waypoint =new Waypoint({
        element:document.getElementById('timer'),
        handler:function(direction){
            console.log("ksjhjks")
        }
        // console.log(8372947923749)
    })
    
  }

function init(){
    waypoint();
    countr();
    wawo();
}

function wawo(){
    console.log(1);
   var wow = new WOW().init();
}
$(document).ready(function(){
    init()
});

// Set the date we're counting down to

var countDownDate = new Date("April 11, 2030 1:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML =  seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



//   Set Overlay On Gllary Pictures  

// let imgOverlay = document.querySelectorAll(`.imgOverlay`);
// // let overlay = document.querySelector(`.overlay`);

// imgOverlay.forEach(imgOverlay => imgOverlay.addEventListener('mouseover',(e)=>{

//     // let imgOverlay = document.querySelectorAll(`.imgOverlay`);
//     // .addEventListener(`mousemove`,function(e){
//         let  newOverlay = 
//            `<div class="overlay" style = "height: 100%;
//           width: 96.5%;
//           transition: 0.5s linear;">`+
//              `<div class="img-desc">`+
//                 `<i class="fa fa-thumbs-o-up"></i>`+
//                  `<h6 class="text-uppercase mt-3">Web developer</h6>`+
//                  `<h6 class="text-capitalize ">professional skills</h6>`+
//                `</div>`+
//           `</div>`;
      
        
//             // e.target.querySelector(`.emptyDiv`).innerHTML = str;   

//         document.querySelectorAll('.emptyDiv').innerHTML = newOverlay;
        
        
       
//         imgOverlay.addEventListener(`mouseout`,function(e){
//         setTimeout(() => {
//         document.querySelector(`.overlay`).style.width = "0%";
//          },1000);
//     });
// }));


    


