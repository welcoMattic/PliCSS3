(function($) {
	$('article.fold img').each(function(){
		var img = $(this);
		var article = img.parent();
		img.clone().appendTo(article).wrap('<div class="bottom"/>');
		img.wrap('<div class="top"/>');
		article.find('div').append('<div class="shadow"/>');
	});
})(jQuery);