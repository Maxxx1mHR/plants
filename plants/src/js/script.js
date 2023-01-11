
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
document.querySelectorAll('.accordion-item-header').forEach((accordionItemHeader) => {  //получаю все header на которые буду нажимать
    accordionItemHeader.addEventListener('click', (evt) => {
        // console.log(evt.target);
        // const elai = evt.target.closest('.accordion-item');
        // console.log(elai);
        // elai.classList.toggle('active');
        accordionItemHeader.classList.toggle('active'); //добавляю класс активности для header + <-> -
        const accordionItemBody = accordionItemHeader.nextElementSibling; //получаю следующий элемент за header
        const accordionItem = accordionItemHeader.parentElement;  //получаю родительский элемент для header 
        // console.log(accordionItem); 
        if(accordionItemHeader.classList.contains('active')) {    
            //если у header есть класс активности, тогда выставляем max-height
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
            accordionItem.classList.add('active');
        }
        else {
            accordionItemBody.style.maxHeight = 0;
            accordionItem.classList.remove('active');
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


console.log('1.Вёрстка валидная +10');
console.log('2.Вёрстка семантическая +20\n 2.1.На странице присутсвуют элементы <header>, <main>, <footer> +3\n 2.2.Пять элементов <section> +3\n 2.3.Четыре заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3\n 2.4.Один элемент <nav> (панель навигации) +3\n 2.5.Два списка ul > li > a (панель навигации, ссылки на соцсети) +3\n 2.7.Пять кнопок <button> +2');
console.log('3.Вёрстка соответствует макету +48\n 3.1.Блок <header> +6\n 3.2.Cекция welcome +7\n 3.3.Cекция about +7\n 3.4.Cекция service +7\n 3.5.Cекция prices +7\n 3.6.Cекция contacts +7\n 3.7.Блок <footer> +7');
console.log('4.Требования к css +12\n 4.1.Для построения сетки используются флексы или гриды +2\n 4.2.При уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n 4.3.Фоновый цвет тянется на всю ширину страницы +2\n 4.4.Иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n 4.5.Изображения добавлены в формате .jpg или .png +2\n 4.6.Есть favicon +2');
console.log('5.Интерактивность, реализуемая через css +20\n 5.1.Плавная прокрутка по якорям +5\n 5.2.Cсылки в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n 5.3.Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\n 5.4.Обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n\n');
console.log('Оценка за задание 100 баллов (110)');



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
