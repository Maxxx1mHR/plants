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


document.querySelectorAll('.accordion-item-header').forEach((accordionItemHeader) => {  //получаю все header на которые буду нажимать
    accordionItemHeader.addEventListener('click', (evt) => {
        // console.log(evt.target);
        // const elai = evt.target.closest('.accordion-item');
        // console.log(elai);
        // elai.classList.toggle('active');
        accordionItemHeader.classList.toggle('active'); //добавляю класс активности для header + <-> -
        const accordionItemBody = accordionItemHeader.nextElementSibling; //получаю следующий элемент за header
        const accordionItem = accordionItemHeader.parentElement;
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