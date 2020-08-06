$(document).ready(function() {
    $("#main").load("home.html");
    $("#home").click(function(){
        $("#main").load("home.html");
    });
    $("#fragancias").click(function(){
        $("#main").load("fragancias.html");
    });
    $("#maquillaje").click(function(){
        $("#main").load("maquillaje.html");
    });
    $("#cuidados").click(function(){
        $("#main").load("cuidados.html");
    });
});