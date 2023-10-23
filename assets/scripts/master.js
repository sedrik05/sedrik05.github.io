const sedPortfolio = {
	init: () => {
		sedPortfolio.loadNavFunc();
		sedPortfolio.loadSkillsFunc();
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
	loadSkillsFunc: () => {
		var numberOfStars = [];

		$('#about-me-container .skills h4').each(function(){
			var _this = $(this),
				rating = parseFloat(_this.data('rate')),
				half = 0,
				full = 0,
				none = 5 - rating;

			if(!Number.isInteger(rating)){
				full = String(rating).split('.')[0];
				half = 1;
				none = 5 - (parseInt(full) + 1);
			} else {
				full = rating;
			}

			if(full){
				for(var x = 0; x < full; x++){
					_this.find('span').append(' <i class="fa-solid fa-star"></i>');
				}
			}

			if(half){
				for(var x = 0; x < half; x++){
					_this.find('span').append(' <i class="fa-solid fa-star-half-stroke"></i>');
				}
			}

			if(none){
				for(var x = 0; x < none; x++){
					_this.find('span').append(' <i class="fa-regular fa-star"></i>');
				}
			}
		});
	}
};

$(document).ready(function(){
	sedPortfolio.init();
});