$(function() {


function sliderJcarousel1() {
    $('.jcarousel1').jcarousel();
    $('.jcarousel-prev1').click(function() {
    $('.jcarousel1').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next1').click(function() {
        $('.jcarousel1').jcarousel('scroll', '+=1');
    });
}

function sliderJcarousel2() {
    $('.jcarousel2').jcarousel();
    $('.jcarousel-prev2').click(function() {
    $('.jcarousel2').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next2').click(function() {
    $('.jcarousel2').jcarousel('scroll', '+=1');
    });
}

function sliderJcarousel3() {
    $('.jcarousel3').jcarousel();
    $('.jcarousel-prev3').click(function() {
    $('.jcarousel3').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next3').click(function() {
    $('.jcarousel3').jcarousel('scroll', '+=1');
    });
}

$(function () {
    var $grid = $('.grid');
    $grid.masonry({
        itemSelector: '.grid-item',
        gutterWidth: 16,
        singleMode: false,
        isResizable: true,
        isAnimated: true,
        animationOptions: {
            queue: false,
            duration: 500
         	    }
    });
});
$(function(){
    $.support.cors = true;
    var gridItem = $('.grid-item');
    var searchForm = $('.search-form__input');
    var searchButton = $('.search-form__submit');
    var defaultQuery = 'party';
    var api = 'https://pixabay.com/api/?key=1721193-5394d2a2ae3701a0f13d87d72&q='+ defaultQuery +'&image_type=photo&min_width=300&min_height=200&per_page=100';

    var shuffle = function(a) {
		var j, x, i;
		for (i = a.length; i; i -= 1) {
			j = Math.floor(Math.random() * i);
			x = a[i - 1];
			a[i - 1] = a[j];
			a[j] = x;
    }
}

        $.getJSON(api, function (data) {
            var image = data.hits

			shuffle(image);

			gridItem.each(function(index){
				$(this).css({'background-image':'url(' + image[index].webformatURL + ')','background-size':'cover'})
                        .append('<p class="image-item">'+ image[index].tags +'</p>');
			})
        });
        searchButton.on('click', function(){
            if(searchForm.val().length>0){
                var query = searchForm.val();
                console.log(query);
                var api = 'https://pixabay.com/api/?key=1721193-5394d2a2ae3701a0f13d87d72&q=' + query + '&image_type=photo&min_width=300&min_height=200&per_page=100';
                $.getJSON(api, function (data) {
                    var image = data.hits

                    shuffle(image);

                    $('.image-item').remove();
                    gridItem.each(function(index){
                        $(this).css({'background-image':'url(' + image[index].webformatURL + ')','background-size':'cover'})
                                .append('<p class="image-item">'+ image[index].tags +'</p>');
                    })
                });
            }
        });
        searchForm.keypress(function(e) {
            if(e.which == 13){
                if(searchForm.val().length>0){
                    var query = searchForm.val();
                    console.log(query);
                    var api = 'https://pixabay.com/api/?key=1721193-5394d2a2ae3701a0f13d87d72&q=' + query + '&image_type=photo&min_width=300&min_height=200&per_page=100';
                    $.getJSON(api, function (data) {
                        var image = data.hits

                        shuffle(image);
                        $('.image-item').remove();
                        gridItem.each(function(index){
                            $(this).css({'background-image':'url(' + image[index].webformatURL + ')','background-size':'cover'})
                                    .append('<p class="image-item">'+ image[index].tags +'</p>');
                        })
                    });
                }
            }
        })
})




sliderJcarousel1(); // first slider
sliderJcarousel2(); // second slider
sliderJcarousel3(); // third slider



});