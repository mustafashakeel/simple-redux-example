$(document).ready(function(){
	$('.carousal_data .carousal_item').each(function(){
		$('#betterworld_carousel').append($(this).find('.image').html());
	});
	createBetterWorld();

});

function createBetterWorld(){
	$('div#betterworld_carousel').roundabout({
		startingChild:window.startingItem,
		childSelector: 'img',
		tilt:-4.5,
		minOpacity:1,
		minScale:.45,
		duration:1200,
		clickToFocus:true,
		clickToFocusCallback: showCaption
	});
}
function showCaption(){
	alert($('div#betterworld_carousel').data('roundabout').childinFocus);
}