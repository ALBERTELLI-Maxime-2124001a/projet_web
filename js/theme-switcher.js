deathTheme = document.getElementById("death-theme");
navbarNormal = document.getElementById("navbar-normal");
navbarAlt = document.getElementById("navbar-alt");
responsiveNavbarNormal = document.getElementById("responsive-normal");
responsiveNavbarAlt = document.getElementById("responsive-alt");

const colorsButton = document.getElementById('colors');
const navbarButton = document.getElementById('navbar');

const themeColors = localStorage.getItem('themeColors');
const themeNavbar = localStorage.getItem('themeNavbar');
var themeColorsjs = themeColors;
var themeNavbarjs = themeNavbar;

if (themeColors == 'death') {
    deathTheme.setAttribute('media', '');
}

if (themeNavbar == 'alt') {
    navbarNormal.setAttribute('media', 'none');
    navbarAlt.setAttribute('media', '');
    responsiveNavbarNormal.setAttribute('media', 'none');
    responsiveNavbarAlt.setAttribute('media', '');
}

colorsButton.onclick = () => {
    if (themeColorsjs == 'death') {
        deathTheme.setAttribute('media', 'none');
        localStorage.setItem('themeColors', 'normal');
        themeColorsjs = 'normal';
    } else {
        deathTheme.setAttribute('media', '');
        localStorage.setItem('themeColors', 'death');
        themeColorsjs = 'death';
    }
}

navbarButton.onclick = () => {
    if (themeNavbarjs == 'alt') {
        navbarNormal.setAttribute('media', '');
        navbarAlt.setAttribute('media', 'none');
        responsiveNavbarNormal.setAttribute('media', '');
        responsiveNavbarAlt.setAttribute('media', 'none');
        localStorage.setItem('themeNavbar', 'normal');
        themeNavbarjs = 'normal';
    } else {
        navbarNormal.setAttribute('media', 'none');
        navbarAlt.setAttribute('media', '');
        responsiveNavbarNormal.setAttribute('media', 'none');
        responsiveNavbarAlt.setAttribute('media', '');
        localStorage.setItem('themeNavbar', 'alt');
        themeNavbarjs = 'alt';
    }
}