document.querySelector('.search_input').onkeyup = () => {
    if (document.querySelector('.search_input').value == "") {
        $(".krest_reset_contain").fadeOut(150);
        document.querySelector('.grayBack').style.background = "rgba(0, 0, 0, 0.2)"
    }
    else {
        $(".krest_reset_contain").fadeIn(150);
        document.querySelector('.grayBack').style.background = "rgba(0, 0, 0, 0.4)"
    }
};



document.querySelector('.krest_reset_contain').onclick = () => {
    document.querySelector('.search_input').value = ""
    $(".krest_reset_contain").fadeOut(100);
    document.querySelector('.grayBack').style.background = "rgba(0, 0, 0, 0.2)"
}

document.querySelector('.search').onclick = () => {
    $('.grayBack').fadeIn(200);
    // document.querySelector('.grayBack').style.opacity = "1"
    document.querySelector('html').style.overflow = 'hidden'
}

document.querySelector('.grayBack').onclick = () => {
    // document.querySelector('.grayBack').style.opacity = "0"
    $('.grayBack').fadeOut(200)
    document.querySelector('html').style.overflow = 'auto'
}



document.querySelector('.ava').onclick = () => {
    $('.addWindowAva').fadeIn(200);
}
document.querySelector('.addWindowAva_close').onclick = () => {
    $('.addWindowAva').fadeOut(200);
}
document.querySelector('main').onclick = () => {
    $('.addWindowAva').fadeOut(200);
}
// document.querySelector('header').onclick = () => {
//     $('.addWindowAva').fadeOut(200);
// }



document.querySelector('.lenta').onclick = () => {
    document.querySelector(".lenta").style.background = "#f3f1ed";
    document.querySelector(".menu_vlkadka").style.background = "none";
    document.querySelector(".menu_vlkadka1").style.background = "none";
    document.querySelector(".menu_vlkadka2").style.background = "none";
    document.querySelector(".menu_vlkadka3").style.background = "none";
    document.querySelector(".menu_vlkadka4").style.background = "none";
    document.querySelector(".menu_vlkadka6").style.background = "none";
    document.querySelector(".menu_vlkadka7").style.background = "none";
    $('.window').fadeIn(200);
    $('.windowEconomy').fadeOut(200);
    $('.windowAuto').fadeOut(200);
    $('.windowRepair').fadeOut(200)
    $('body,html').animate({ scrollTop: 0 }, 400);
}

document.querySelector('.menu_vlkadka').onclick = () => {
    document.querySelector(".lenta").style.background = "none";
    document.querySelector(".menu_vlkadka").style.background = "#f3f1ed";
    document.querySelector(".menu_vlkadka1").style.background = "none";
    document.querySelector(".menu_vlkadka2").style.background = "none";
    document.querySelector(".menu_vlkadka3").style.background = "none";
    document.querySelector(".menu_vlkadka4").style.background = "none";
    document.querySelector(".menu_vlkadka6").style.background = "none";
    document.querySelector(".menu_vlkadka7").style.background = "none";
    $('.window').fadeOut(200);
    $('.windowEconomy').fadeIn(200);
    $('.windowAuto').fadeOut(200);
    $('.windowRepair').fadeOut(200)
    $('body,html').animate({ scrollTop: 0 }, 400);
}

document.querySelector('.menu_vlkadka1').onclick = () => {
    document.querySelector(".lenta").style.background = "none";
    document.querySelector(".menu_vlkadka").style.background = "none";
    document.querySelector(".menu_vlkadka1").style.background = "#f3f1ed";
    document.querySelector(".menu_vlkadka2").style.background = "none";
    document.querySelector(".menu_vlkadka3").style.background = "none";
    document.querySelector(".menu_vlkadka4").style.background = "none";
    document.querySelector(".menu_vlkadka6").style.background = "none";
    document.querySelector(".menu_vlkadka7").style.background = "none";
    $('.window').fadeOut(200);
    $('.windowEconomy').fadeOut(200);
    $('.windowAuto').fadeIn(200);
    $('.windowRepair').fadeOut(200)
    $('body,html').animate({ scrollTop: 0 }, 400);
}

document.querySelector('.menu_vlkadka2').onclick = () => {
    document.querySelector(".lenta").style.background = "none";
    document.querySelector(".menu_vlkadka").style.background = "none";
    document.querySelector(".menu_vlkadka1").style.background = "none";
    document.querySelector(".menu_vlkadka2").style.background = "#f3f1ed";
    document.querySelector(".menu_vlkadka3").style.background = "none";
    document.querySelector(".menu_vlkadka4").style.background = "none";
    document.querySelector(".menu_vlkadka6").style.background = "none";
    document.querySelector(".menu_vlkadka7").style.background = "none";
    $('.window').fadeOut(200);
    $('.windowEconomy').fadeOut(200);
    $('.windowAuto').fadeOut(200);
    $('.windowRepair').fadeIn(200);
    $('body,html').animate({ scrollTop: 0 }, 400);
}

document.querySelector('.menu_vlkadka3').onclick = () => {
    document.querySelector(".lenta").style.background = "none";
    document.querySelector(".menu_vlkadka").style.background = "none";
    document.querySelector(".menu_vlkadka1").style.background = "none";
    document.querySelector(".menu_vlkadka2").style.background = "none";
    document.querySelector(".menu_vlkadka3").style.background = "#f3f1ed";
    document.querySelector(".menu_vlkadka4").style.background = "none";
    document.querySelector(".menu_vlkadka6").style.background = "none";
    document.querySelector(".menu_vlkadka7").style.background = "none";
}

document.querySelector('.menu_vlkadka4').onclick = () => {
    document.querySelector(".lenta").style.background = "none";
    document.querySelector(".menu_vlkadka").style.background = "none";
    document.querySelector(".menu_vlkadka1").style.background = "none";
    document.querySelector(".menu_vlkadka2").style.background = "none";
    document.querySelector(".menu_vlkadka3").style.background = "none";
    document.querySelector(".menu_vlkadka4").style.background = "#f3f1ed";
    document.querySelector(".menu_vlkadka6").style.background = "none";
    document.querySelector(".menu_vlkadka7").style.background = "none";
}

document.querySelector('.menu_vlkadka6').onclick = () => {
    document.querySelector(".lenta").style.background = "none";
    document.querySelector(".menu_vlkadka").style.background = "none";
    document.querySelector(".menu_vlkadka1").style.background = "none";
    document.querySelector(".menu_vlkadka2").style.background = "none";
    document.querySelector(".menu_vlkadka3").style.background = "none";
    document.querySelector(".menu_vlkadka4").style.background = "none";
    document.querySelector(".menu_vlkadka6").style.background = "#f3f1ed";
    document.querySelector(".menu_vlkadka7").style.background = "none";
}

document.querySelector('.menu_vlkadka7').onclick = () => {
    document.querySelector(".lenta").style.background = "none";
    document.querySelector(".menu_vlkadka").style.background = "none";
    document.querySelector(".menu_vlkadka1").style.background = "none";
    document.querySelector(".menu_vlkadka2").style.background = "none";
    document.querySelector(".menu_vlkadka3").style.background = "none";
    document.querySelector(".menu_vlkadka4").style.background = "none";
    document.querySelector(".menu_vlkadka6").style.background = "none";
    document.querySelector(".menu_vlkadka7").style.background = "#f3f1ed";
}





let windowDop = false
document.querySelector('.menu_vlkadka5').onclick = () => {
    if (windowDop == false) {
        document.querySelector(".menuDopWindow").style.height = "250px";
        document.querySelector('.menu_vlkadka5').style.margin = "0 0 10px 0";
        document.querySelector('.arrow-right-2').style.transform = "rotate(-90deg) translatey(-3px) translatex(5px)";
        windowDop = true
    }
    else {
        document.querySelector(".menuDopWindow").style.height = "0px";
        document.querySelector('.menu_vlkadka5').style.margin = "10px 0";
        document.querySelector('.arrow-right-2').style.transform = "rotate(90deg) translatey(6px) translateX(5px)";
        windowDop = false
    }
}

