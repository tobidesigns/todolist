//check off specific todos by clicking
$("ul").on("click" , "li", function(){
	$(this).toggleClass("completed");
});
//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event){
if(event.which === 13){
	//grabbing new todo
	var todoText = $(this).val();
	$(this).val("");
	//create a new li and add to ul
	$("ul").append("<li><span>x</span> "+ todoText + "</li>")
}
});