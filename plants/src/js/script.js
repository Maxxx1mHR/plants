

//Service 
const btns = document.querySelectorAll('.service__btns-btn');
const serviceBlocks = document.querySelectorAll('.service__block');

// btns.forEach((item) => {
//     item.addEventListener('click', () => {
//         let btn = item.getAttribute('data-blur');
//         let currentBlocks = document.querySelectorAll(btn);
//         serviceBlocks.forEach((event) => {
//             event.classList.add('filter-blur');
//         });
//         currentBlocks.forEach((event) => {
//             event.classList.remove('filter-blur');
//         });

//         let currentBtn = document.querySelector(`[data-blur='${btn}']`);
//         btns.forEach((item) => {
//             item.classList.remove('bgc_orange');
//         });
//         currentBtn.classList.add('bgc_orange');
//     }); 
// });

btns.forEach((item) => {
    item.addEventListener('click', () => {
        let btn = item.getAttribute('data-blur');
    
        serviceBlocks.forEach((item) => {
            item.classList.contains(btn) ? item.classList.remove('filter-blur') : item.classList.add('filter-blur');
        });

        let currentBtn = document.querySelector(`[data-blur='${btn}']`);
        btns.forEach((item) => {
            item.classList.remove('bgc_orange');
        });
        currentBtn.classList.add('bgc_orange');
    }); 
});




//Prices 
// document.querySelectorAll('.accordion-item-header').forEach((accordionItemHeader) => {  //получаю все header на которые буду нажимать
//     accordionItemHeader.addEventListener('click', (evt) => {
//         // console.log(evt.target);
//         // const elai = evt.target.closest('.accordion-item');
//         // console.log(elai);
//         // elai.classList.toggle('active');
//         accordionItemHeader.classList.toggle('active'); //добавляю класс активности для header + <-> -
//         const accordionItemBody = accordionItemHeader.nextElementSibling; //получаю следующий элемент за header
//         const accordionItem = accordionItemHeader.parentElement;  //получаю родительский элемент для header 
//         // console.log(accordionItem); 
//         if(accordionItemHeader.classList.contains('active')) {    
//             //если у header есть класс активности, тогда выставляем max-height
//             accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
//             accordionItem.classList.add('active');
//         }
//         else {
//             accordionItemBody.style.maxHeight = 0;
//             accordionItem.classList.remove('active');
//         }
//     });
// });

const itemHeader = document.querySelectorAll('.accordion-item-header');

itemHeader.forEach(head => {
    head.addEventListener('click', () =>{
        const accordionItemBody = head.nextElementSibling;
        const accordionItem = head.parentElement;

        if (accordionItemBody.style.maxHeight) {
            document.querySelectorAll('.accordion-item-body').forEach(el => {el.style.maxHeight = null});
           
            document.querySelectorAll('.accordion-item').forEach(el => {el.classList.remove('active')})

            itemHeader.forEach(el => {el.classList.remove('active')});
        } else {
            //drop menu
            document.querySelectorAll('.accordion-item-body').forEach(el => {el.style.maxHeight = null});
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';

            //Цвет фона
            document.querySelectorAll('.accordion-item').forEach(el => {el.classList.remove('active')})
            accordionItem.classList.add('active');

            //Стрелка
            itemHeader.forEach(el => {el.classList.remove('active')});
            head.classList.add('active');
        }

    });
});






//Contacts
const accordionHeader = document.querySelector('.contacts__accordion-header');
const accordionWrapper = document.querySelector('.contacts__accordion-wrapper');
const accordionCity = document.querySelectorAll('.contacts__accordion-city');
const info = document.querySelectorAll('.contacts__info');

//add bgc, arrow and drop menu
accordionHeader.addEventListener('click', () => {
    accordionHeader.classList.toggle('active-bgc');
    accordionHeader.classList.toggle('active-arrow');
    if(accordionHeader.classList.contains('active-bgc')) {
        accordionWrapper.style.maxHeight = accordionWrapper.scrollHeight + 'px';
    } else {
        accordionWrapper.style.maxHeight = 0;
    }
});

//add select from accordion-city name and add info in form
accordionCity.forEach((item) => {
    item.addEventListener('click', (event) => {
        accordionHeader.innerHTML = event.target.innerHTML;  //change header to accordion-city name
        accordionHeader.classList.remove('active-bgc');
        accordionHeader.classList.remove('active-arrow');
        accordionWrapper.style.maxHeight = 0;
        accordionHeader.classList.add('bgc_green');
        
        let dataTab = item.getAttribute('data-tab'); //get #tab_n, n = 1,2,3,4
        let currentTab = document.querySelector(dataTab); //class="contacts__info"  id="tab_n"
        info.forEach((item) => {
            item.classList.remove('active');
        });
        currentTab.classList.add('active');
    });
});


//For contacts section 768px, for add margin between img and accordion. 
const woman = document.querySelector('.contacts__woman');
const accordion = document.querySelector('.contacts__accordion');
accordionCity.forEach((item) => {
    item.addEventListener('click', () => {
        let dataTab = item.getAttribute('data-tab'); //get #tab_n, n = 1,2,3,4
        let currentTab = document.querySelector(dataTab); //class="contacts__info"  id="tab_n"
        if (currentTab.classList.contains('active')) {
            console.log(currentTab);
            woman.style.marginTop = '14px';
            accordion.style.marginTop = '60px';
        }
    });
});

//Делигирование событий на menu__list. Скрытие меню при клике на элемент. 
const menuList = document.querySelector('.menu__list');
menuList.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('menu__link')) {
        menu.classList.remove('active');
    }
});

//Close menu when click outside block. 
const menuOverlay = document.querySelector('.menu__overlay');
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menu.classList.remove('active');
    }
});


//Hamburger, menu 
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__block');
const close = document.querySelector('.close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
close.addEventListener('click', () => {
    menu.classList.remove('active');    
})


// console.log('1.Вёрстка соответствует макету. Ширина экрана 768px +24');
// console.log('2.Вёрстка соответствует макету. Ширина экрана 380px +24');
// console.log('3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15');
// console.log('4.На ширине экрана 380рх и меньше реализовано адаптивное меню +22');
