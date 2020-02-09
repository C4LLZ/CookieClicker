var num =  (JSON.parse(localStorage.getItem("Cookies")));
let url = chrome.runtime.getURL('GOD.mp3')


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('cookie');
    numbers.innerHTML = num;
    
    
    link.addEventListener('click', function() {
        cookieClick();
    });
})

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('clear');
    // onClick's logic below:
    link.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
    });
})




var cookie = document.getElementById("cookie");

function cookieClick() { 
    num += 1;
    localStorage.setItem('Cookies', num);

    var numbers = document.getElementById("numbers");
    var hacker = document.getElementById("HACKER");
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    //automatic Granny upgrade to 2x
    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Noob Level";

        
    }

    //automatic factory upgrade to 10x
    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Gamer Level";
        
    }

    //automatic plant upgrade to 30x
    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Epic Gamer Level";
    }

    //automatic super factory upgrade to 1000x
    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "GOD Gamer Level";
    }
    if(num >= 100000000) {
        num += 100000;
        upgradeLevel.innerHTML = "GOD Gamer Level";
        document.body.style.backgroundColor = "red";
        document.getElementById("cookieimg").src = "https://2.bp.blogspot.com/-SjtieX2mqPY/WTrbU0hapAI/AAAAAAAPq1k/tmcUUIJ_cXoeF-R-MJ_VJq5CQpaLsg3RwCLcB/s1600/AW444663_01.gif";
        hacker.innerHTML = "WHY ARE YOU HACKING????";

        
        
    }
    if(num == 100000000){
        let a = new Audio(url)
        a.play()
    }
    
}




