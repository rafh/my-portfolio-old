function mobileResizeFix(){function i(){o.height($(window).height()+60)}var o=$(".heroView");$(window).resize(i()),i()}function init(){$(".submit").click(function(){$(this).html("SENT!")}),$(".modal").click(function(){$(".modal-state").is(":checked")?$("body").addClass("no-scroll"):$("body").removeClass("no-scroll")}),$(".bouncing-arrow").click(function(){return $("html, body").animate({scrollTop:$($(".bioView")).offset().top-100},1500),!1}),$(".backup").click(function(){return $("html, body").animate({scrollTop:$($(".heroView")).offset().top},1500),!1})}$(document).ready(function(){init(),mobileResizeFix()});