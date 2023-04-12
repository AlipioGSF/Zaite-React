const menuButton = document.getElementById('menu');
const navMobile = document.getElementById('navMobile');


menuButton.addEventListener('click' ,() => {
    navMobile.style.display === 'flex'?navMobile.style.display = 'none':navMobile.style.display = 'flex';
});