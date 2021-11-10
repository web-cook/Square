"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

//Меню бургер

const menuButton = document.querySelector('.menu__back');
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (menuButton) {
    menuButton.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//Карточка с текстом

const descButton = document.querySelector('.description__shrink');
const descIcon = document.getElementById('icon');
const descBody = document.querySelector('.description__body');
if (descButton) {
    descButton.addEventListener("click", function(e) {
        descBody.classList.toggle('_hidden');
        if(descBody.className == 'description__body _hidden') {
        descIcon.className = 'fa fa-expand-alt';
        }
        else descIcon.className = 'fa fa-compress-alt';
    })
}
//изначально описание скрыто для мобильных устройств
if (document.body.className == '_touch') {
    descBody.className = 'description__body _hidden';
    descIcon.className = 'fa fa-expand-alt';
}
//стрелки для слайдера

const prev = document.getElementById('prev');
const next = document.getElementById('next');
let current = document.getElementById('current');
const lastPage = Number(document.getElementById('allPages').innerHTML);
const firstPage = 1;

if(next) {
    next.addEventListener('click', function(e) {
        if(current.innerHTML < lastPage) {
            current.innerHTML++;
        }
    })
}

if(prev) {
    prev.addEventListener('click', function(e) {
        if(current.innerHTML > firstPage) {
            current.innerHTML--; 
        }
    })
}



