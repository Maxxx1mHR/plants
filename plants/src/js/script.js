//Service 
const btns = document.querySelectorAll('.service__btns-btn');
const serviceBlocks = document.querySelectorAll('.service__block');

btns.forEach((item) => {
    item.addEventListener('click', () => {
        let btn = item.getAttribute('data-blur');
        let currentBlocks = document.querySelectorAll(btn);
        serviceBlocks.forEach((event) => {
            event.classList.add('filter-blur');
        });
        currentBlocks.forEach((event) => {
            event.classList.remove('filter-blur');
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
        console.log(accordionItem); 
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
