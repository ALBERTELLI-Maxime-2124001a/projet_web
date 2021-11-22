deathTheme = document.getElementById("color-theme");
navbarMode = document.getElementById("navbar-normal");
responsiveNavbarMode = document.getElementById("responsive-normal");


const colorsButton = document.getElementById('colors');
const navbarButton = document.getElementById('navbar');

const themeColors = localStorage.getItem('themeColors');
const themeNavbar = localStorage.getItem('themeNavbar');
var themeColorsjs = themeColors;
var themeNavbarjs = themeNavbar;

if (themeColors == 'death') {
    deathTheme.setAttribute('href', 'css/color-death.css');
}

if (themeNavbar == 'alt') {
    navbarMode.setAttribute('href', 'css/navbar-alt.css');
    responsiveNavbarMode.setAttribute('href', 'css/responsive-alt.css');
}

colorsButton.onclick = () => {
    if (themeColorsjs == 'death') {
        deathTheme.setAttribute('href', 'css/color-normal.css');
        localStorage.setItem('themeColors', 'normal');
        themeColorsjs = 'normal';
    } else {
        deathTheme.setAttribute('href', 'css/color-death.css');
        localStorage.setItem('themeColors', 'death');
        themeColorsjs = 'death';
    }
}

navbarButton.onclick = () => {
    if (themeNavbarjs == 'alt') {
        navbarMode.setAttribute('href', 'css/navbar.css');
        responsiveNavbarMode.setAttribute('href', 'css/responsive.css');
        localStorage.setItem('themeNavbar', 'normal');
        themeNavbarjs = 'normal';
    } else {
        navbarMode.setAttribute('href', 'css/navbar-alt.css');
        responsiveNavbarMode.setAttribute('href', 'css/responsive-alt.css');
        localStorage.setItem('themeNavbar', 'alt');
        themeNavbarjs = 'alt';
    }
}