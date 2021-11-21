const deathButton = document.getElementById('death');
deathTheme = document.getElementById("death-theme");
deathButton.onclick = () => {
    deathTheme.setAttribute('media', '');
}