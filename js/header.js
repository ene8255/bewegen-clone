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


// h-bottom
const hbLis = document.querySelectorAll('#h-bottom li');
const experts = document.querySelector('#experts');
const blog = document.querySelector('#blog');

document.addEventListener('scroll', () => {
    const sct = document.documentElement.scrollTop;
    const ostExperts = experts.offsetTop;
    const ostBlog = blog.offsetTop;

    hbLis.forEach(li => li.classList.remove('on'));

    if(sct >= ostBlog) {
        hbLis[2].classList.add('on');
    }else if(sct >= ostExperts) {
        hbLis[1].classList.add('on');
    }else if(sct > 99) {
        hbLis[0].classList.add('on');
    }
})


// 토글 메뉴
const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('#toggle');
const navClose = document.querySelector('#nav-close');
const navClose2 = document.querySelector('#nav-close-2');

toggleBtn.addEventListener('click', () => {
    nav.style.display = 'block';
    body.style.overflow = 'hidden';
})

navClose.addEventListener('click', () => {
    nav.style.display = 'none';
    body.style.overflow = 'auto';
})

navClose2.addEventListener('click', () => {
    nav.style.display = 'none';
    body.style.overflow = 'auto';
})