// 1
$(document).ready(function(){

	//1
	$("a").attr("href","https://www.google.com/");

	//2
	$("code").css("color", "red");

	//3
	$("ol > li").css("background-color", "#2a7b90");

	//4
	$("textarea").attr("placeholder", "Express Your Opinions...");

	//5
	$("img").attr("src","https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");

	//6
	$("blockquote").css({"background-color": "orange", "font-style":  "italic"});

	//7
	$("#logo").css({"color":"black"});
	$(".gray").css({"color":"white"});

	//8
	$(".date").remove();

	//9
	var list = $('<li>New Templates</li><li>Order Templates</li><li>Contact Us</li>');
	$(".sidemenu").append(list);

	//10
	$("p:contains('afraid')").text(" \"When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop. \" ");
})



