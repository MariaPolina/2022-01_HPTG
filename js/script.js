$(document).ready(function () {

    /*----change buttons for setting number of ordered goods----*/
    $('.goods-card__order').on('click', function (event) {
        $(this).next('.goods-card__order-quantity').css('display', 'flex');
        $(this).css('display', 'none');
    });
    /*----////----*/

    /*----set indication for choosed favorite goods----*/
    $('.goods-card__heart').on('click', function (event) {
        $(this).toggleClass('active');
    });
    /*----////----*/

    /*----set triggerClick for latest items slider----*/
    $('.control-prev').on('click', function () {
        $('.latest__items_slideshow .swiper-button-prev').trigger('click');
    });
    $('.control-next').on('click', function () {
        $('.latest__items_slideshow .swiper-button-next').trigger('click');
    });
    /*----////----*/


});