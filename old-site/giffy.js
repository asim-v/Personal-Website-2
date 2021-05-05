$.fn.giffy = function() {
	return this.each(function() {
		var cover = $(this).data('cover');
		var gif = $(this).prop('src');
		

		if (cover == null){
			var cover = gif.replace('gif', 'png');
		}

		$(this).wrap("<div class='giffy-container'></div>");
		$(this).prop('src',cover);
		

		var container = $(this).parent().parent().parent();
		$(this).children().children().children().prop('src', cover);
		container.hover(function(){
			
			$(this).children().children().children().prop('src', gif);
		}, function(){
			
			$(this).children().children().children().prop('src', cover);
		});



	});
};

