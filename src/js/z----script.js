
// ============== Menu burger - active/inactive ================== >>
let iconMenu = document.querySelector(".icon-menu");

if (iconMenu != null) {

    let body = document.querySelector(".menu__body");

    iconMenu.addEventListener("click", (e) => {

        if (!body.classList.contains('_wait')) {

            iconMenu.classList.toggle("_active");
            body.classList.toggle("_active");
        }
    });
}

// << =======================================================


// ========== user-header__menu - active/inactive ======= >>

let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function (e) {
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active');
});


// Прячем user-header__menu если щелчек не на меню 

document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.user-header')) {
        // console.log(e.target.closest('.user-header'));
        let user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('_active');
    }
});

// << ====================================================

//  ======== Перенос блока в другое место ======================== >>

// start();
// window.addEventListener('resize', start);

// function start() {
//     if (document.documentElement.clientWidth < 767.98) {

//         //  ===== Перенос блока region в бургер ============== >>
//         let menuList = document.querySelector('.menu__list');
//         let region = document.querySelector('.actions-header__region');
//         menuList.after(region);
//         //  << ===== Перенос блока region в бургер ==============

//         //  ===== Перенос блока footer__info в footer__contact ============== >>
//         let footerColumn = document.querySelector('.footer__contact');
//         let footerInfo = document.querySelector('.footer__info');
//         footerColumn.after(footerInfo);
//         //  << ===== Перенос блока footer__info в footer__contact ==============

//     } else {

//         //  ===== Перенос блока region в header ============== >>
//         let headerActions = document.querySelector('.actions-header__user');
//         let region = document.querySelector('.actions-header__region');
//         headerActions.before(region);
//         //  << ===== Перенос блока region в header ==============

//         //  ===== Перенос блока footer__info в footer__logo ============== >>
//         let footerLogo = document.querySelector('.footer__logo');
//         let footerInfo = document.querySelector('.footer__info');
//         footerLogo.after(footerInfo);
//         //  << ===== Перенос блока footer__info в footer__logo ==============

//     }
// }

//  << ===============================================================



//  ======= Подмена картинки background из HTML в CSS ============ >>
function ibg() {

    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

//  << ======================================================

// ================ плавный скрол / подсветка меню =========== >>

const getId = (link) => link.getAttribute('href').replace('#', '');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.menu__linc, .footer__link').forEach((link) => {
                link.classList.toggle(
                    '_active', getId(link) === entry.target.id
                );
            });
        }
    });
}, {
    threshold: 0.5,
});

document.querySelectorAll('.section').forEach(
    (section) => observer.observe(section),
);

document.querySelectorAll('.menu__list, .footer__list').forEach((el) => {
    el.addEventListener('click', (event) => {
        if (event.target.classList.contains('menu__linc')) {
            event.preventDefault();
            window.scrollTo({
                top: document.getElementById(getId(event.target)).offsetTop - 75 /* 75 высота header если он закреплен*/,
                behavior: 'smooth',
            });
    
        }
    });
});

//  << ======================================================

