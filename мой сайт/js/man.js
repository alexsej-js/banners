
const header = document.querySelector('.header');
const main = document.querySelector('.main-content');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
const mainHeight = main.offsetHeight;
console.log(mainHeight);

window.addEventListener('scroll', () => {

    let scrollDistance = window.scrollY;
    console.log(scrollDistance);

    if (scrollDistance >= mainHeight + 80) {
        header.classList.add('.header--fixed');
        main.style.marginTop = `${headerHeight}px`;
    }  else { header.classList.remove('.header--fixed');
             main.style.marginTop = null;

    }
});