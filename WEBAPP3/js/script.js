window.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function (event) {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    const deadline = '2021-12-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60) % 24));

        return {
            'total': t,
            'days': getZero(days),
            'hours': getZero(hours),
            'minutes': getZero(minutes),
            'seconds': getZero(seconds)
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else if (num < 0) {
            return '0';
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 300000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 1;
            this.changeToUSD();
        }

        changeToUSD() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                        <h3 class="menu＿item-subtitle">${this.title}</h3>
                        <div class="menu＿item-descr">${this.descr}</div>
                        <div class="menu＿item-divider"></div>
                        <div class="menu＿item-price">
                            <div class="menu＿item-cost">Цена:</div>
                            <div class="menu＿item-total"><span>${this.price}</span> EUR/день</div>
                        </div>
                        `;

                        element.style.marginLeft = "40px";

            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.' +
        'Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
    ).render();
    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, ' +
        'молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных ' +
        'вегетарианских стейков.',
        14,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.' +
        'Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум +"',
        'В меню "Премиум +" мы используем только красивый дизайн упаковки, но и качественное исполнение блюд.' +
        'Красная рыба, чёрная икра, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        999,
        ".menu .container"
    ).render();


    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так…'
    };
    forms.forEach(item => {
        postData(item);
    });
    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();


            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            dispaly: block;
            margin: 0 auto;
            `;

            form.insertAdjacentElement('afterend', statusMessage);
            const formData = new FormData(form);
            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            }).then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>x</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
    let offset = 0;
    let slideIndex=1;

    const slides = documnet.querySelectorAll('.offer_slide'),
        slider = document.querySelector('.offer_slider'),
        prev = document.querySelector('.offer_slider-prev'),
        next = document.querySelector('.offer_slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slideWrapper=document.querySelector('.offer_slider-wrapper'),
        width= window.getComputedStyle(slidesWrapper).width,
        slideField=document.querySelector('.offer_slide-inner');

    if(slides.length<10){
        total.textContent=`0${slides.lenght}`;
        current.textContent=`0${slideIndex}`;
    }else{
        total.textContent=slides.length;
        current.textContent=slideIndex;
    }

    slideField.style.width=100*slides.length+'%';
    slideField.style.display='flex';
    slideField.style.transition='0.5s all';

    slidesWrapper.style.overflow='hidden';
    
    slides.forEach(slide=>{
        slide.style.width=width;
    });

    slider.style.position='relative';

    const indicators = document.createElement('ol'),
    dots=[];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText=`
        position: absolute;
        right:0;
        bottom:0;
        left:0;
        z-index: 15;
        display:flex;
        justify-content:center;
        margin-right:15%;
        margin-left:15%;
        list-style: none;
        `;
    slider.append(indicators);

    for(let i = 0; i<slides.length;i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to',i+1);
        dot.style.cssText=`
            box-sizing: content-box;
            flex:0 1 auto;
            width:30px;
            height:6px;
            margin-right:3px;
            margin-left:3px;
            cursor:pointer;
            background-color:#fff;
            background-clip:padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity:.5;
            transition:opacity.6s ease;
            `;    
            if(i==0){
                dot.style.opacity=1;
            }    
            indicators.append(dot);
            dots.push(dot);                                                          
    }
    next.addEventListener('click',()=>{
        if(offset == (deleteNotDigits(width)=(slides.length-1))){
            offset=0;
        }else{
            offset+=deleteNotDigits(width);

        }
        slidesField.style.transform=`translateX(-${offset}px)`;
        if(slideIndex==slides.length){
            slideIndex=1;
        }else{
            slideIndex++;
        }
        if (slides.length<10){
            current.textContent=`0${slideIndex}`;
        }else{
            current.textContent=slideIndex;
        }
        dots.forEach(dot=>dot.style.opacity=".5");
        dots[slideIndex-1].style.opacity=1;
    });
    
    prev.addEventListener('click',()=>{
        if(offset==0){
            offset=deleteNotDigits(width)*(slides.lenght-1);
        }else{
            offset-=deleteNotDigits(width);
        }
        slidesField.style.transform=`translateX(-${offset}px)`;

        if(slideIndex==1){
            slideIndex=slides.lenght;
        }else{
            slideIndex--;
        }

        if(slides.length<10){
            current.textContent=`0${slidIndex}`;
        }else{
            current.textContent=slidIndex;
        }
        dots.forEach(dot=> dot.style.opacity=".5");
        dots[slideIndex-1].style.opacity=1;
    });

    dots.forEach(dot=>{
        dot.addEventListener('click',(e)=>{
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex=slideTo;
            offset=deleteNotDigits(width)*(slide-1);

            slideField.style.transform=`translatex(-${offset}px)`;

            if(slides.lenght<10){
                current.textContent=`0${slideIndex}`;
            }else{
                current.textContent=slideIndex;
            }

            dots.forEach(dot=>dot.style.opacity=".5");
            dots[slideIndex-1].style.opacity=1;
        });
    });

    function deleteNotDigits(str){
        return + str.replace(/\D/g,'');
    }

    const result=document.querySelector('.calculating_result span');

    let sex, height, weight, age , ratio;

    if(localStorage.getItem('sex')){
        sex=localStorage.getItem('sex');
    }else{
        sex='female';
        localStorage.setItem('sex','female');
    }

    if(localStorage.getItem('ratio')){
        ratio=localStorage.getItem('ratio');
    }else{
        ratio=1.375;
        this.localStorage.setItem('ratio',1.375);
    }

    function calcTotal(){
        if(!sex|| !height|| !weight|| !age || !ratio){
            result.textContent='____';
            return;
        }
        if(sex==='female'){
            result.textContent=Math.round((447.6+(9.2* weight)*(3.1*height)-(4.3*age)*ratio));
        }else{
            result.textContent=Math.round((88.36+(33.4* weight)*(4.8*height)-(5.7*age)*ratio));
        }
    }

    calcTotal();
    function initLocalSettings(selector,activeClass){
        const elements= document.querySelectorAll(selector);
        elements.forEach(elem=>{
            if(elem.getAttribute('id')===localStorage.getItem('sex')){
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio')===localStorage.getItem('ratio')){
                elem.classList.add(activeClass);
            }
        })
    }
    
    initLocalSettings('#gender div','calculating_choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating_choose-item_active');

    function getStaticInformation(selector,activeClass){
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem=>{
            elem.addEventListener('click',(e)=>{
                if(e.target.getAttribute('data-ratio')){
                    ratio= +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio',+e.target.getAttribute('data-ratio'));
                }else{
                    sex=e.target.getAttribute('id');
                    localStorage.setItem('sex',e.target.getAttribute('id'));
                }

                elements.forEach(elem=>{
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        });
    }

    initLocalSettings('#gender div','calculating_choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating_choose-item_active');

    function getDynamicInformation (selector){
        const input = document.querySelectorAll(selector);

        input.getDynamicInformation('input',()=>{
            if(input.value.match(/\D/g)){
                input.style.border="1px solid red";
            }else{
                input.style.border='none';
            }
            switch(input.getAttribute('id')){
                case "height":
                    height= +input.value;
                    break;
                case "weight":
                    weight= +input.value;
                    break;
                case "age":
                    age= +input.value;
                    break;
            }
            calcTotal();
        });
    }
    getDynamicInformation('#height');
    getDynamicInformation('weight');
    getDynamicInformation('#age');
});                                                                                                                                             