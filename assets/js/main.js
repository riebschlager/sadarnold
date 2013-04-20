$('audio').removeAttr('controls').each(function(i, audioElement) {
	var audio = $(this);
	var that = this;
	$('.hero-unit').append($('<button class="btn btn-large btn-inverse">' + audio.attr('title') + 
'</button>').click(function() {
		that.play();
	}))
});
