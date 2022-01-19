var burgerOpen = false;
var burgerCatalogOpen = false;
var favoritesOpen = false

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

    /*----open catalog for desctop----*/
    $('header .menu__catalog').on('click', function (event) {

        $('.header-menu__catalog').slideToggle(300);
        $(this).toggleClass('active');
    });
    /*----////----*/

    /*----menu burger for mobile----*/
    $('.burger').on('click', function () {
        if (burgerOpen) {
            burgerOpen = false;
            $('.burger__wrapper').remove();
            $('body,html').css('overflow-y', 'auto');
            $('.burger').removeClass('active');
        } else {
            burgerOpen = true;
            $('.burger').addClass('active');
            var html = '<div class="burger__wrapper">';
            html += '<div class="burger__contact"><div class="burger__tel">' + $('.header-nav__tel').html() + '</div>';
            html += '<div class="burger__callback">' + $('.header-nav__callback').html() + '</div></div>';
            html += '<div class="burger__search"><input type="text" placeholder="поиск товара"><div></div></div>';
            html += '<div>' + $('.header-menu').html() + '</div></div>';

            $('body').prepend(html);
            $('body,html').css('overflow-y', 'hidden');

            $('.burger__wrapper>div>nav>ul>.menu__catalog').on('click', function () {
                if (burgerCatalogOpen) {
                    burgerCatalogOpen = false;
                    $('.burger-menu__catalog').remove();
                    $('.burger__wrapper>div>nav>ul>.menu__catalog').removeClass('active');
                } else {
                    burgerCatalogOpen = true;
                    var html = '<div class="burger-menu__catalog">' + $('.header-menu__catalog').html() + '</div>';
                    $('.burger__wrapper>div>nav>ul>.menu__catalog').after(html);
                    $('.burger__wrapper>div>nav>ul>.menu__catalog').addClass('active');
                }
            });
        }
    });
    /*----////----*/

    /*----dropdown for favorite goods----*/

    /* Когда на карточке товара нажато сердечко,  
    карточке товара нужно добавить класс "like1", "like2" и т.д. 

    Затем ниже, где строится html нужно достроить нужное количество товаров. 
    Для того, чтобы забрать картинку и название товара, который понравился, нужно указать соответствующий класс "like1", "like2" и т.д.
    */

    $('.header-nav__heart').on('click', function () {
        if (favoritesOpen) {
            favoritesOpen = false;
            $('.dropdown-favorites').remove();
            $('body,html').css('overflow-y', 'auto');

        } else {
            favoritesOpen = true;
            var html = '<div class="dropdown-favorites"><div class="dropdown-favorites__items">';
            html += '<div class="dropdown-favorites__item"><div class="dropdown-favorites__image">' + $('.like1>.goods-card__image').html() + '</div><div class="dropdown-favorites__title">' + $('.like1>.goods-card__title').text() + '</div><div class="dropdown-favorites__heart"></div></div>';
            html += '<div class="dropdown-favorites__item"><div class="dropdown-favorites__image">' + $('.like2>.goods-card__image').html() + '</div><div class="dropdown-favorites__title">' + $('.like2>.goods-card__title').text() + '</div><div class="dropdown-favorites__heart"></div></div>';
            html += '<div class="dropdown-favorites__item"><div class="dropdown-favorites__image">' + $('.like3>.goods-card__image').html() + '</div><div class="dropdown-favorites__title">' + $('.like3>.goods-card__title').text() + '</div><div class="dropdown-favorites__heart"></div></div>';

            html += '</div><div class="dropdown-favorites__move">Переместить в корзину</div></div>';

            $('.header-main').prepend(html);
            $('body,html').css('overflow-y', 'hidden');
            var contFavoriteGoods = 3;
            var favoriteGoodsHeight = 75;

            if (contFavoriteGoods < 3) {
                $('.dropdown-favorites').height(contFavoriteGoods * favoriteGoodsHeight + 80).css('min-height', 'auto');
            }
        }
    });

    /*----////----*/

});