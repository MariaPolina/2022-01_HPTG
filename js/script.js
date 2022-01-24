var burgerOpen = false;
var burgerCatalogOpen = false;
var favoritesOpen = false;
var basketOpen = false;
var cabinetOpen = false;
var modalWrapper = false

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
            favoritesOpen = false;
            $('.dropdown-favorites').remove();
            basketOpen = false;
            $('.dropdown-basket').remove();
            cabinetOpen = false;
            $('.dropdown-cabinet').remove();
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

    $('.header-nav__heart').on('click', function () {
        if (favoritesOpen) {
            favoritesOpen = false;
            $('.dropdown-favorites').remove();

        } else {
            favoritesOpen = true;
            basketOpen = false;
            $('.dropdown-basket').remove();
            cabinetOpen = false;
            $('.dropdown-cabinet').remove();
            var html = '<div class="dropdown-favorites"><div class="dropdown-favorites__items">';
            html += '<div class="dropdown-favorites__item"><div class="dropdown-favorites__image"><img src="img/goods/image 1.jpg" alt="Масло зародышей пшеницы"></div><div class="dropdown-favorites__title">Масло зародышей пшеницы</div><div class="dropdown-favorites__heart"></div></div>';
            html += '<div class="dropdown-favorites__item"><div class="dropdown-favorites__image"><img src="img/goods/image 3.jpg" alt="Масло зародышей пшеницы"></div><div class="dropdown-favorites__title">Василек (лепестки) сухоцвет</div><div class="dropdown-favorites__heart"></div></div>';
            html += '<div class="dropdown-favorites__item"><div class="dropdown-favorites__image"><img src="img/goods/image 2.jpg" alt="Масло зародышей пшеницы"></div><div class="dropdown-favorites__title">Воск соевый для контейнерных свечей</div><div class="dropdown-favorites__heart"></div></div>';

            html += '</div><div class="dropdown-favorites__move">Переместить в корзину</div></div>';

            $('.header-main').prepend(html);

            /*----НЕ ЗАБЫТЬ ПОСЧИТАТЬ КОЛИЧЕСТВО ТОВАРОВ !!! ----*/

            var countFavoriteGoods = 3;
            var favoriteGoodsHeight = 75;

            if (countFavoriteGoods < 3) {
                $('.dropdown-favorites').height(countFavoriteGoods * favoriteGoodsHeight + 80).css('min-height', 'auto');
            }
        }
    });

    /*----////----*/

    /*----dropdown for basket----*/

    $('.header-nav__basket').on('click', function () {
        if (basketOpen) {
            basketOpen = false;
            $('.dropdown-basket').remove();

        } else {
            basketOpen = true;
            favoritesOpen = false;
            $('.dropdown-favorites').remove();
            cabinetOpen = false;
            $('.dropdown-cabinet').remove();
            var html = '<div class="dropdown-basket"><div class="dropdown-basket__items">';
            html += '<div class="dropdown-basket__item"><div class="dropdown-basket__image"><img src="img/goods/image 1.jpg" alt="Масло зародышей пшеницы"></div><div class="dropdown-basket__title">Масло зародышей пшеницы</div><div class="dropdown-basket__dell"></div><div class="dropdown-basket__weight">Вес 1 кг</div><div class="dropdown-basket__number">х1</div><div class="dropdown-basket__price">2030.00 р.</div></div>';
            html += '<div class="dropdown-basket__item"><div class="dropdown-basket__image"><img src="img/goods/image 3.jpg" alt="Масло зародышей пшеницы"></div><div class="dropdown-basket__title">Василек (лепестки) сухоцвет</div><div class="dropdown-basket__dell"></div><div class="dropdown-basket__weight">Вес 27 кг</div><div class="dropdown-basket__number">х1</div><div class="dropdown-basket__price">20250.00 р.</div></div>';

            html += '</div><div class="dropdown-basket__total"><div class="dropdown-basket__preliminary">Предварительная стоимость</div><div class="dropdown-basket__cost">20280.00 р.</div></div><div class="dropdown-basket__move">Перейти в корзину</div><div class="dropdown-basket__checkout">Оформить заказ</div></div>';

            $('.header-main').prepend(html);

            /*----НЕ ЗАБЫТЬ ПОСЧИТАТЬ КОЛИЧЕСТВО ТОВАРОВ !!! ----*/

            var countBasketGoods = 2;
            var basketGoodsHeight = 85;

            if (countBasketGoods < 3) {
                $('.dropdown-basket').height(countBasketGoods * basketGoodsHeight + 150).css('min-height', 'auto');
            }
        }
    });

    /*----////----*/

    /*----dropdown for cabinet----*/

    $('.header-nav__cabinet').on('click', function () {
        if (cabinetOpen) {
            cabinetOpen = false;
            $('.dropdown-cabinet').remove();

        } else {
            cabinetOpen = true;
            basketOpen = false;
            $('.dropdown-basket').remove();
            favoritesOpen = false;
            $('.dropdown-favorites').remove();
            var html = '<div class="dropdown-cabinet"><div class="dropdown-cabinet__register">Регистрация</div><div class="dropdown-cabinet__authorize">Авторизация</div></div>';

            $('.header-main').prepend(html);

        }
    });

    /*----////----*/

    /*----my-select----*/

    $('.my-select>div:first-child').on('click', function (event) {
        $($(this).next('div')).slideToggle(300);
        $(this).toggleClass('active');

    });

    $('.my-select >div:nth-child(2)> div').on('click', function (event) {
        $('.my-select div:nth-child(2)> div').removeClass('active');
        $(this).addClass('active');

        $($($(this).parent()).next('input')).val($(this).attr('data'));

        $($($(this).parent()).prev("div")).text($(this).text()).trigger('click');

    });

    /*----////----*/

    /*----count height for checkout goods----*/

    /*----НЕ ЗАБЫТЬ ПОСЧИТАТЬ КОЛИЧЕСТВО ТОВАРОВ !!! ----*/

    var countCheckoutGoods = 2;
    var checkoutGoodsHeight = 115;

    if ($(window).width() > 1110) {
        $('.checkout__goods').height(countCheckoutGoods * checkoutGoodsHeight + 215);

    } else {
        $('.checkout__goods').height(countCheckoutGoods * checkoutGoodsHeight + 175);
    };

    $(window).resize(function () {

        if ($(window).width() > 1110) {
            $('.checkout__goods').height(countCheckoutGoods * checkoutGoodsHeight + 215);

        } else {
            $('.checkout__goods').height(countCheckoutGoods * checkoutGoodsHeight + 175);
        };
    });

    /*----////----*/

    /*----change placeholder on focus----*/

    $('._absolut >input').on('focus', function () {
        var placeholderName = $(this).prop('placeholder');
        var html = '<div class="placeholder-absolut">' + placeholderName + '</div>';
        $(this).before(html);
        $(this).attr("placeholder", "");
        $(this).blur(function () {
            $(this).attr("placeholder", placeholderName);
            $('.placeholder-absolut').remove();
        });
    });

    /*----////----*/

    /*----modal window for account basic data page----*/

    $('.basic-data__proceed').on('click', function () {
        if (modalWrapper) {
            $(this).attr('id', '');
            modalWrapper = false;
            $('.shadow1').remove();
            $('.modal__wrapper').remove();
        } else {
            modalWrapper = true;
            $(this).attr('id', 'closeModal');
            var html = '<div class="shadow1"></div>';
            html += '<div class="modal__wrapper">';
            html += '<div class="modal__proceed"><div class="close-modal"></div>';
            html += '<p class="modal__proceed_text">Все изменения успешно сохранены!</p></div></div>';

            $('body').prepend(html);

            $('.close-modal').on('click', function () {
                $('#closeModal').trigger('click');
            });
        }
    });

    /*----////----*/
});