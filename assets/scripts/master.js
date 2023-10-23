const sedPortfolio = {
	init: () => {
		sedPortfolio.loadNavFunc();
	},
	loadNavFunc: () => {
		$('nav a').on('click', function(e){
			e.preventDefault();
			
			var _this = $(this),
				targetDiv = $(this).attr('href');

			$('nav a.active').removeClass('active');
			$('#container > div.active').hide().removeClass('active');

			_this.addClass('active');
			$('#container > div'+ targetDiv).addClass('active').show();
		});
	},
};

$(document).ready(function(){
	sedPortfolio.init();
});