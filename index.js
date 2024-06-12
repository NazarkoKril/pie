// slider

const swiper = new Swiper(".project__slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 2.4,
    spaceBetween: 30,
    speed: 1500,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        780: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        1065: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1780: {
            slidesPerView: 2.4,
            spaceBetween: 30
        }
    }
});


// slider more info 

function openPopup(button) {
    var popup = document.getElementById('popup');
    var slide = button.parentElement;
    var imgSrc = slide.querySelector('.slider__img img').src;
    var title = slide.querySelector('h3').textContent;
    var text = slide.querySelector('p').textContent;

    document.getElementById('popup-img').src = imgSrc;
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-text').textContent = text;

    popup.style.display = "block";

}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = "none";

}


// music eye

document.querySelector('.hero_eye').addEventListener('click', function () {
    const audio = document.getElementById('musicEye');
    audio.paused ? audio.play() : audio.pause();
});

// change img supp

document.getElementById('sup1').addEventListener('mouseover', function () {
    this.src = './img/support1_hover.svg';
});

document.getElementById('sup1').addEventListener('mouseout', function () {
    this.src = './img/support_1.svg';
});

document.getElementById('sup2').addEventListener('mouseover', function () {
    this.src = './img/support2_hover.svg';
});

document.getElementById('sup2').addEventListener('mouseout', function () {
    this.src = './img/support_2.svg';
});


// validate form access
const validateForm = (form, validations) => {
    const inputs = form.querySelectorAll('.form__input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const isValid = validations[input.id](input.value);
            input.classList.toggle('valid', isValid);
            input.classList.toggle('error', !isValid);
        });
    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        let allValid = true;
        inputs.forEach(input => {
            const isValid = validations[input.id](input.value);
            input.classList.toggle('valid', isValid);
            input.classList.toggle('error', !isValid);
            if (!isValid) allValid = false;
        });
        if (allValid) {
            alert('Форма успішно відправлена!');
            form.reset();
            inputs.forEach(input => input.classList.remove('valid', 'error'));
        }
    });
};

const accessForm = document.getElementById('access__form');
const accessValidations = {
    first__name: value => value.trim() !== '',
    second__name: value => value.trim() !== '',
    tel: value => /^\+?3?8?(0\d{9})$/.test(value.trim()),
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
};
validateForm(accessForm, accessValidations);

// default form
const showForm = () => overlay.style.display = 'flex';
const hideForm = event => event.target === overlay && (overlay.style.display = 'none');
const overlay = document.getElementById('overlay');
document.querySelector('.help__btn').addEventListener('click', showForm);
document.querySelector('.volonter__btn').addEventListener('click', showForm);
overlay.addEventListener('click', hideForm);

const defaultForm = document.getElementById('default__form');
const defaultValidations = {
    d_first__name: value => value.trim() !== '',
    d_tel: value => /^\+?3?8?(0\d{9})$/.test(value.trim())
};
validateForm(defaultForm, defaultValidations);

// form complaint
document.addEventListener('DOMContentLoaded', function () {
    const overlay1 = document.getElementById('overlay_1');
    const openComplaintBtn = document.getElementById('openComplaint');
    const complaintForm = document.getElementById('complaint__form');
    const complaintValidations = {
        c_first__name: value => value.trim() !== '',
        c_textarea: value => value.trim() !== ''
    };

    openComplaintBtn.addEventListener('click', event => {
        event.preventDefault();
        overlay1.style.display = 'flex';
    });

    overlay1.addEventListener('click', event => {
        if (event.target === overlay1) overlay1.style.display = 'none';
    });

    validateForm(complaintForm, complaintValidations);
});

// color header
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.header__list a');
    let currentActiveLink = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute('id');
        const link = document.getElementById('link-' + id);

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            if (!currentActiveLink || rect.top < currentActiveLink.top) {
                currentActiveLink = { link, top: rect.top };
            }
        }
    });

    links.forEach(link => link.classList.remove('active'));
    if (currentActiveLink) {
        currentActiveLink.link.classList.add('active');
    }
});

window.addEventListener('load', function () {
    document.dispatchEvent(new Event('scroll'));
});


// burger header 

function toggleMenu() {
    var menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMenu() {
    var menu = document.getElementById('mobileMenu');
    menu.classList.remove('active');
    document.body.style.overflow = 'auto';
}