new WOW().init();

const theme = document.querySelectorAll('.header__theme');
const body = document.querySelector('#body');
const sectionHeader = document.querySelectorAll('.dark');
const headerLink = document.querySelectorAll('.header__link');
const promoButton = document.querySelectorAll('.promo__button');
const aboutDesc = document.querySelector('.about__desc');
const getName = document.querySelectorAll('.get__name');
const getBefore = document.querySelector('.get__before');
const getCode = document.querySelector('.get__code');
const getDesc = document.querySelectorAll('.get__desc');
const lastTable = document.querySelector('.last__table');
const lastCopy = document.querySelector('.last__copyright');

const logoDark = document.querySelector('#logo-dark');
const logoWhite = document.querySelector('#logo-white');

const lightTheme = document.querySelector('#light-theme');
const darkTheme = document.querySelector('#dark-theme');

const arrows = document.querySelector('.get__arrows');
const arrowsDark = document.querySelector('.get__arrows_dark');

const icon = document.querySelector('.get__icon');
const iconDark = document.querySelector('.get__icon_dark');

const circle1 = document.querySelector('#circle-1');
const circle2 = document.querySelector('#circle-2');
const circle3 = document.querySelector('#circle-3');
const circle4 = document.querySelector('#circle-4');
const circle5 = document.querySelector('#circle-5');

theme.forEach(function (e) {
    e.addEventListener('click', function () {
        body.classList.toggle('light');
        sectionHeader.forEach(function (e) {
            e.classList.toggle('section-header_light');
        });
        logoDark.classList.toggle('header__logo-icon_active');
        logoWhite.classList.toggle('header__logo-icon_active');
        lightTheme.classList.toggle('header__theme_active');
        darkTheme.classList.toggle('header__theme_active');
        headerLink.forEach(function (e) {
            e.classList.toggle('header__link_light');
        });
        promoButton.forEach(function (e) {
            e.classList.toggle('promo__button_active');
        });
        aboutDesc.classList.toggle('about__desc_light');
        getName.forEach(function (e) {
            e.classList.toggle('get__name_light');
        });
        arrows.classList.toggle('hidden');
        arrowsDark.classList.toggle('hidden');
        icon.classList.toggle('hidden');
        iconDark.classList.toggle('hidden');
        getBefore.classList.toggle('get__before_light');
        getCode.classList.toggle('get__code_light');
        getDesc.forEach(function (e) {
            e.classList.toggle('get__desc_light');
        });
        lastTable.classList.toggle('last__table_light');
        lastCopy.classList.toggle('last__copyright_light');
    });
});

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    circle1.style.top = 257 + value * 0.25 + 'px';
    circle2.style.top = 189 + value * 0.28 + 'px';
    circle3.style.top = 325 + value * 0.23 + 'px';
    circle4.style.top = 388 + value * 0.21 + 'px';
    circle5.style.top = -145 + value * 0.13 + 'px';
});