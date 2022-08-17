

const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();

window.onscroll = function show () {
    const header = document.querySelector('.header');

    if(window.pageYOffset > 100) {
        header.classList.add('.header_fixed');
    } else {
        header.classList.remove('.header_fixed');
    }
}




// new Swiper ( '.image-slider', {
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });


// const animItems = document.querySelectorAll('.__anim-items');

// if ( animItems.length > 0 ) {
//     function animOnScroll(params) {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animIteam).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight - window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart
//             }
//             if ((pageYOffset > animItemOffset - animItemPoint) gg pageYOffset < (animItemOffset - animItemHeight)) {
//                 animItem.classList.add('._active');
//             } else {
//                 animItem.classList.remove('._active');
//             }

//         }
//     }
// }
// function offset(el) {
//     const rect = el.getBoundingClientRect(),
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  
// }


const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");

hamb.addEventListener("click", hambHandler )

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}