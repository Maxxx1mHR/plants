// const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");


// accordionItemHeaders.forEach(accordionItemHeader => {
//     accordionItemHeader.addEventListener("click", event => {

//         accordionItemHeader.classList.toggle("active");

//         const accordionItemBody = accordionItemHeader.nextElementSibling;
       

//         if(accordionItemHeader.classList.contains("active")) {
//             accordionItemBody.classList.add("active");
//         }
//         else {
//             accordionItemBody.classList.remove("active");
//         }
//     });
// });


// document.querySelectorAll('.accordion-item-header').forEach((accordionItemHeader) => {  //получаю все header на которые буду нажимать
//     accordionItemHeader.addEventListener('click', () => {
//         accordionItemHeader.classList.toggle('active'); //добавляю класс активности для header + <-> -
//         const accordionItemBody = accordionItemHeader.nextElementSibling; //получаю следующий элемент за header
//         if(accordionItemHeader.classList.contains('active')) {    
//             //если у header есть класс активности, тогда выставляем max-height
//             accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
//         }
//         else {
//             accordionItemBody.style.maxHeight = 0;
//         }
//     });
// });

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

document.querySelectorAll('.contacts__accordion-header').forEach((accordionHeader) => {
    accordionHeader.addEventListener('click', () => {
        accordionHeader.classList.toggle('active-bgc');

        const accordionWrapper = accordionHeader.nextElementSibling; //получаю следующий элемент за header -> contacts__wrapper
        // accordionWrapper.classList.toggle('active');  //так работает, но не получается сделать плавное раскрытие
        if(accordionHeader.classList.contains('active-bgc')) {
            accordionWrapper.style.maxHeight = accordionWrapper.scrollHeight + 'px';
            accordionHeader.classList.add('active-arrow');
        }
        else {
            accordionWrapper.style.maxHeight = 0;
            accordionHeader.classList.remove('active-arrow');
        }
    });
});

const accordionHeader = document.querySelector('.contacts__accordion-header');
document.querySelectorAll('.contacts__accordion-city').forEach((accordionCity) => {
    accordionCity.addEventListener('click', (event) => {
        let content = event.target.innerHTML;
       accordionHeader.innerHTML = content;
       accordionHeader.classList.remove('active-bgc'); 
       accordionHeader.classList.add('bgc_green'); 
       accordionHeader.classList.remove('active-arrow');    
       const accordionWrapper = accordionHeader.nextElementSibling;
       accordionWrapper.style.maxHeight = 0;
    });
});



const test  = document.querySelectorAll('.contacts__info');
document.querySelectorAll('.contacts__accordion-city').forEach((accordionCity) => {
    accordionCity.addEventListener('click', () => {
        let tabId = accordionCity.getAttribute('data-tab');//получаю tab_n , n =1,2,3,4 при клике
        console.log(tabId);
        let currentTab = document.querySelector(tabId);

        test.forEach((item) => {
            item.classList.remove('active');
        });
       currentTab.classList.add('active');

    });
});


