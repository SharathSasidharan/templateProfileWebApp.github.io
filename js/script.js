$(document).ready(function(){
$(window).scroll(function(){
if(this.scrollY > 20){

$('.navbar').addClass("sticky")

}else{
$('.navbar').removeClass("sticky")
}

if(this.scrollY > 500){
    $('.scroll-up').addClass("show")
}else{
    $('.scroll-up').removeClass("show")
}


});


//TYPING ANIMATION SCRIPT

let typed = new Typed(".typing",{

    strings:["Developer","Designer","Blogger","Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true


})



let typed1 = new Typed(".typing2",{

    strings:["Developer","Designer","Blogger","Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true


})


//SLIDE UP SCRIPT
$('.scroll-up').click(function(){
 $('html').animate({scrollTop: 0})
});

//MENU BUTTON SCRIPT

$('.menu-btn').click(function(){
$('.navbar .menu').toggleClass("active")
$('.menu-btn i').toggleClass("active")
})
}); 