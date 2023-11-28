document.addEventListener("DOMContentLoaded", content_loader);

function content_loader(){
    document.getElementById("themeBtn-light").addEventListener("click", changeThemeLight);
    document.getElementById("themeBtn-dark").addEventListener("click", changeThemeDark);
    document.getElementById("hamburgerBtn").addEventListener("click", phoneNav);
    document.getElementById("hamburgerBtnLow").addEventListener("click", phoneNav);
    addEventListener("resize", (event) => {
        let x = document.getElementById("phoneNavbar");
        if (window.innerWidth > 1170 && x.style.display === "flex") {
            x.style.display = "none";
        }
    });
    let header = document.querySelector(".header");

    function checkScroll(scroller) {
        let hamburgerBtn = document.getElementById("hamburgerBtnLow");
        if (scroller >= 125) {
            hamburgerBtn.style.opacity = "100";
        } else {
            hamburgerBtn.style.opacity = "0"; // Adjust as needed
        }}
    function castParallax() {

        let opThresh = 350;
        let opFactor = 750;

        /*
            $(window).scroll(function(){
                let windowScroll = $(window).scrollTop();

                $('.keyart_layer.parallax').each(function(){
                    let $layer = $(this);
                    let yPos = -(windowScroll * $layer.data('speed') / 100);
                    $layer.css({
                        "transform" : "translate3d(0px, " + yPos + "px, 0px)"
                    });

                });


                let backgroundOpacity = (windowScroll > opThresh ? (windowScroll - opThresh) / opFactor : 0);
                $('#keyart-scrim').css('opacity', backgroundOpacity);
            });

        */
        window.addEventListener("scroll", function(event){

            let top = this.pageYOffset;
            let scrollTop = window.scrollY;

            let layers = document.getElementsByClassName("parallax");
            let layer, speed, yPos;
            for (let i = 0; i < layers.length; i++) {
                layer = layers[i];
                speed = layer.getAttribute('data-speed');
                let yPos = -(top * speed / 100);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

            }
            checkScroll(scrollTop)
            navSquisher(scrollTop)
        });
}
    function dispelParallax() {
        $("#nonparallax").css('display','block');
        $("#parallax").css('display','none');
    }
    function startSite() {

        let platform = navigator.platform.toLowerCase();
        let userAgent = navigator.userAgent.toLowerCase();

        if ( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 )
        {
            dispelParallax();
        }

        else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1)
        {
            castParallax();
            if ($.browser.webkit)
            {
                //castSmoothScroll();
            }
        }

        else
        {
            castParallax();
        }

    }
    let isMouseOver = false;
    let naviTextList = document.querySelectorAll(".sticky-navBar a");

    // Add a mouseover event listener to the element
    naviTextList.forEach((i) => {
        i.addEventListener('mouseover', function() {
            // Set the boolean variable to true when mouseover occurs
            isMouseOver = true;
            i.style.fontSize = "20px";
            console.log('Mouse over the element!');
        });
    });

    naviTextList.forEach((i) => {
        i.addEventListener('mouseout', function() {
            // Set the boolean variable to true when mouseover occurs
            let scrollTop = window.scrollY;
            if (scrollTop >= 125) {
                i.style.fontSize = "0"
            }
            isMouseOver = false;
            console.log('Mouse out of the element!');
        });
    });

    function navSquisher(scroller) {
        let naviTextList = document.querySelectorAll(".sticky-navBar a")
        naviTextList.forEach((i) => {
            if (isMouseOver === true) {
                i.style.fontSize = "20";
            } else {
                if (scroller >= 125) {
                    i.style.fontSize = "0";
                } else {
                    i.style.fontSize = "20px";
                }
            }
        })
    }

function changeThemeLight() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementById("credits-left").src = './img/credits%20left%20transp%201%20og.png';
    document.getElementById("credits-right").src = './img/credits%20right%20transp%201%20og.png';
    document.querySelectorAll(".dropdown-darkTheme").forEach((i) => {
        i.classList.remove("dropdown-darkTheme");
        i.classList.add("dropdown-lightTheme");
    });
    document.querySelectorAll(".arrowColorDark").forEach((i) => {
        i.classList.remove("arrowColorDark");
        i.classList.add("arrowColorLight");
    });
}

function changeThemeDark() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#1F1F1FFF";
    document.getElementById("credits-left").src = './img/credits%20left%20transp%20og%201%20dm.png';
    document.getElementById("credits-right").src = './img/credits%20right%20transp%20og%201%20dm.png';
    document.querySelectorAll(".dropdown-lightTheme").forEach((i) => {
        i.classList.remove("dropdown-lightTheme")
        i.classList.add("dropdown-darkTheme");
    });
    document.querySelectorAll(".arrowColorLight").forEach((i) => {
        i.classList.remove("arrowColorLight");
        i.classList.add("arrowColorDark");
    });
}
document.body.onload = startSite();


}



//----------Hamburger Thingy----------//

function phoneNav(){
    let x = document.getElementById("phoneNavbar");
    if (x.style.opacity === "100") {
        x.style.opacity = "0";
    } else {
        x.style.opacity = "100";
    }
}