$(function(){

	$(".l-B .l-all-1 ul").delegate('span', 'click', function() {
		var i_color = $(this).css("background-color");
		$(this).parent("li").addClass('curr').siblings('li').removeClass('curr');
		$(".l-B .l-all-2 li").removeClass('curr');
		$(this).siblings('i').css("color",i_color);
		$(this).parent("li").siblings('li').find('i').css("color","transparent");
		$(".l-B .l-all-2 li").find('i').css("color","transparent")
	})

	$(".l-B .l-all-2 ul").delegate('span', 'click', function() {
		var i_color = $(this).css("background-color");
		$(this).parent("li").addClass('curr').siblings('li').removeClass('curr');
		$(".l-B .l-all-1 li").removeClass('curr');
		$(this).siblings('i').css("color",i_color);
		$(this).parent("li").siblings('li').find('i').css("color","transparent");
		$(".l-B .l-all-1 li").find('i').css("color","transparent")
	})

	$(".l-A .l-all-1 ul").delegate('span', 'click', function() {
		var i_color = $(this).css("background-color");
		$(this).parent("li").addClass('curr').siblings('li').removeClass('curr');
		$(".l-A .l-all-2 li").removeClass('curr');
		$(this).siblings('i').css("color",i_color);
		$(this).parent("li").siblings('li').find('i').css("color","transparent");
		$(".l-A .l-all-2 li").find('i').css("color","transparent")
	})

	$(".l-A .l-all-2 ul").delegate('span', 'click', function() {
		var i_color = $(this).css("background-color");
		$(this).parent("li").addClass('curr').siblings('li').removeClass('curr');
		$(".l-A .l-all-1 li").removeClass('curr');
		$(this).siblings('i').css("color",i_color);
		$(this).parent("li").siblings('li').find('i').css("color","transparent");
		$(".l-A .l-all-1 li").find('i').css("color","transparent")
	})

	$(".l-Z .l-all-1 ul").delegate('span', 'click', function() {
		var i_color = $(this).css("background-color");
		$(this).parent("li").addClass('curr').siblings('li').removeClass('curr');
		$(this).siblings('i').css("color",i_color);
		$(this).parent("li").siblings('li').find('i').css("color","transparent");
	})

	
})