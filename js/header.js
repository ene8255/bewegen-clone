const hBottom = document.querySelector('#h-bottom');
const reachUs = document.querySelector('#reachUs');
const language = document.querySelector('#language');
const buildYour = document.querySelector('#buildYour');


// 스크롤 이벤트
document.addEventListener('scroll', () => {
    const sct = document.documentElement.scrollTop;
    if(sct > 99) {
        reachUs.classList.add('disappear');
        language.classList.add('disappear');
        buildYour.classList.add('disappear');

        hBottom.style.left = '0px';
    }else {
        reachUs.classList.remove('disappear');
        language.classList.remove('disappear');
        buildYour.classList.remove('disappear');

        hBottom.style.left = '-200px';
    }
})