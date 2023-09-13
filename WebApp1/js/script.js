window.addEventListener('DOMContentLoaded',function(){

    let tabs = document.querySelectorAll('.tabeheader_item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabeheader_items')

    function hideTabContent(){
        tabsContent.forEach(iteam=>{
            item.classList.add('hide');
            item.classList.remove('show','fate');
        });

        tabs.forEach(item=>{
            item.classList.remove('tabheader_item_active');
        });
    }
    function showTabContent(i=0){
        tabsContent[i].classList.add('show','fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader_item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click',function(event){
        const target=event.target;
        if(target && target.classList.contains('tableheader_iteam')){
            tabs.forEach((item,i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent();
                }

            });
        }
    });

    const deadLine='2021-12-11'
    function getTimerRemaining(endTime){
        const t= Date.parse(endtime)-Date.parse(new Date()),
            days = Math.floor((t/(1000*60*60*24))),
            seconds=Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/(1000*60*60)%24));
            return{
                'total':t,
                'days':days,
                'hours':hours,
                'minutes':minutes,
                'seconds':seconds
            };
    }
    function getZero(num){
        if (num>=0 && num < 10){
            return '0'+num;
        }else{
            return num;
        }
    }
    function setClock(selector, endTime){

        const timer = document.querySelector(selector),
            days=timer.querySelector("#days"),
            hours=timer.querySelector("#hours"),
            minutes=timer.querySelector("#minutes"),
            seconds=timer.querySelector("#seconds"),
            timeInterval=setInterval(updateClock,1000);
        updateClock();

        function updateClock(){
            const t = getTimerRemaining(endtime);
            days.innerHTML=getZero(t.days);
            hours.innderHTML=getZero(t.hours);
            minutes.innderHTML=getZero(t.minutes);
            seconds.innderHTML=getZero(t.seconds);

            if(t.total<=0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer',deadline);
})