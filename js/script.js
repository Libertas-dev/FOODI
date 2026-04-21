//===== Burger ======\\
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');

    document.body.style.overflow = burger.classList.contains('is-active') ? 'hidden' : '';
});

//===== Contorl ======\\
const controls = document.querySelectorAll('.review-card__control');
const track = document.querySelector('.reviews__list');

if (controls.length > 0 && track) {
    controls[0].classList.add('is-active');

    controls.forEach((control, index) => {
        control.addEventListener('click', () => {
            controls.forEach((c) => c.classList.remove('is-active'));

            control.classList.add('is-active');

            const cardWidth = track.children[0].offsetWidth;
            const gap = parseInt(window.getComputedStyle(track).gap) || 0;

            const moveDistance = (cardWidth + gap) * index;

            track.style.transform = `translateX(-${moveDistance}px)`;
        });
    });
}
