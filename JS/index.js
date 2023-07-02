$(document).ready(function () {
    let quoter = ["mr james", "mrs daisy", "john"];
    let title = ["they are very good", "world class people", "ready on time"]
    let images = ["images/james.jpg", "images/vini.jpg", "images/john.jpg"];
    //set counter to be zero
    counter =0;
    function current (){
        $("#quote-image").attr("src",images[counter]);
        $("#quote-title").text(title[counter])

    }
    current()

    function next(){
        if(counter>=images.length){
            counter=0
            
        }

        current()
        console.log(counter)
        counter++
    }
    $(".next").on("click",next)

    function prev(){
        counter--
        if(counter<0){
            counter= images.length -1
        }
        current()
    }
    $(".next").on("click",next);
    $(".prev").on("click",prev)
})
window.onscroll = function () { scroller() };
function scroller() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;

    document.getElementById("bar").style.width = scrolled + "%";
}
AOS.init();
var date = new Date();
var year = date.getFullYear();
