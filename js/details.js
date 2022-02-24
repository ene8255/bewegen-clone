const mainDetail = document.querySelector('#mainDetail');
const mainID = document.querySelector('#mainImgDiv');

// 스크롤 이벤트
document.addEventListener('scroll', () => {
    const sct = document.documentElement.scrollTop;
    const ostMD = mainDetail.offsetTop;
    const bottomMD = mainDetail.getBoundingClientRect().bottom;
    if(sct >= bottomMD) {
        // mainID.classList.remove('zoom');
        mainID.classList.add('zoom');
        // mainDetail.classList.remove('fixed');
        mainDetail.classList.remove('fixed');
    }else if(sct >= ostMD) {
        mainID.classList.add('zoom');
        mainDetail.classList.add('fixed');
    }else if(sct <= 100) {
        mainID.classList.remove('zoom');
        mainDetail.classList.remove('fixed');
    }
})

// mainDetail.addEventListener('scroll', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     return false;
// })

// carousel
let currentOne = 0;

const mainImg = document.querySelector('#mainImgDiv > img');
const tOne = document.querySelector('#t-carousel-one');
const tOneLis = document.querySelectorAll('#t-carousel-one > li');
const tOneNav = document.querySelector('#mainDetail .carousel-nav');
const navBtns = document.querySelectorAll('.carousel-nav > .circle-btn');
const lines = document.querySelectorAll('.line');

const imgTop = ['-50vh', '0vh', '-85vh', '125vh', '125vh', '60vh', '-50vh', '125vh'];
const imgLeft = ['-7.5%', '-70%', '-150%', '-60%', '-60%', '-140%', '-7.5%', '-60%'];

tOne.style.length = (tOneLis.length * 100) + '%';
tOneLis.forEach((li, idx) => {
    li.style.left = (idx * 100) + '%';
})

function moveSlideF() {
    currentOne++;
    tOne.style.left = -(currentOne * 100) + '%';
}
function moveSlideB() {
    currentOne--;
    tOne.style.left = -(currentOne * 100) + '%';
}

function moveImg() {
    mainImg.style.top = imgTop[currentOne];
    mainImg.style.left = imgLeft[currentOne];
}

tOneNav.addEventListener('click', (e) => {
    lines.forEach(line => line.classList.remove('on'));
    const classNames = e.target.className;

    if(classNames === "fa-solid fa-angle-right" || classNames === "circle-btn right") {
        moveSlideF();
        moveImg();
        lines[currentOne + 1].classList.add('on');

    }else if(classNames === "fa-solid fa-angle-left" || classNames === "circle-btn left") {
        moveSlideB();
        moveImg();
        lines[currentOne + 1].classList.add('on');

    }
    
    if(currentOne === 0) {
        navBtns[0].classList.add('disabled');
    }else if(currentOne === 7) {
        navBtns[1].classList.add('disabled');
    }else {
        navBtns.forEach(btn => btn.classList.remove('disabled'));
    }
})

// skip button
const skipBtn = document.querySelector('.skip-btn');
const trike = document.querySelector('#trike');

skipBtn.addEventListener('click', () => {
    const ostTrike = trike.offsetTop;
    mainDetail.classList.remove('fixed');
    window.scrollTo(0, ostTrike);
})