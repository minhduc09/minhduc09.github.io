$(function(){
    //declare numbers of like and dislike at the begining
    var like = 100, dis = 0; 
    //display like numbers increasing by 1
    $("#like-button").click(function(){
        like++;
        $("#like").html(like);
    });
    //display dislike numbers decreasing by 1
    $("#dislike-button").click(function(){
        dis++;
        $("#dislike").html(dis);
    });
    //prevent spamming with double click
    $("button").dblclick(function(){
        alert("Please do not spam the button!");
    });
   //reaload the page
    $(".navbar-brand").click(function(){
        location.reload();
    });
    //move to about div 
    $("#about-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
    //move to skills div
    $("#skills-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });
    //move to experience div
    $("#experience-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#experience").offset().top
        }, 1000);
    });
    //move to projects div
    $("#projects-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
    });
    //move to education div
    $("#education-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, 1000);
    });
})