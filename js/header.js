const hBottom = document.querySelector('#h-bottom');
const menuRight = document.querySelector('#menu-right');
const reachUs = document.querySelector('#reachUs');
const language = document.querySelector('#language');
const buildYour = document.querySelector('#buildYour');
const footer = document.querySelector('footer');


// 스크롤 이벤트
document.addEventListener('scroll', () => {
    const sct = document.documentElement.scrollTop;
    const ostFooter = footer.offsetTop;
    if(sct > (ostFooter-900)) {
        menuRight.style.right = '-100px';
    }else if(sct > 99) {
        reachUs.classList.add('disappear');
        language.classList.add('disappear');
        buildYour.classList.add('disappear');

        menuRight.style.right = '0px';
        hBottom.style.left = '0px';
    }else {
        reachUs.classList.remove('disappear');
        language.classList.remove('disappear');
        buildYour.classList.remove('disappear');

        menuRight.style.right = '0px';
        hBottom.style.left = '-200px';
    }
})