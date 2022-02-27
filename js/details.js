const mainDetail = document.querySelector('#mainDetail');
const mainID = document.querySelector('#mainImgDiv');
const body = document.querySelector('body');

// 스크롤 이벤트
document.addEventListener('scroll', () => {
    const sct = document.documentElement.scrollTop;
    const ostMD = mainDetail.offsetTop;
    // const bottomMD = mainDetail.getBoundingClientRect().bottom;

    if(sct >= ostMD && sct <= ostMD + 10) {
        mainID.classList.add('zoom');
        mainDetail.classList.add('fixed');
        body.style.overflow = 'hidden';
    }else if(sct <= 100) {
        mainID.classList.remove('zoom');
        mainDetail.classList.remove('fixed');
        body.style.overflow = 'auto';
        currentOne = 0;
        // mainImg.style.animationDirection = 'reverse';
    }else {
        // mainID.classList.add('zoom');
        mainDetail.classList.remove('fixed');
        body.style.overflow = 'auto';
    }
})


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
    if(currentOne > 7) {
        currentOne = 7;
    }
    tOne.style.left = -(currentOne * 100) + '%';
}
function moveSlideB() {
    currentOne--;
    if(currentOne < 0) {
        currentOne = 0;
    }
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
        body.style.overflow = 'auto';
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
    body.style.overflow = 'auto';
})


// 마우스휠 이벤트 
let timer;

mainDetail.addEventListener('wheel', (e) => {
    if(timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        if(e.deltaY > 0) {
            lines.forEach(line => line.classList.remove('on'));
            moveSlideF();
            moveImg();
            lines[currentOne + 1].classList.add('on');
        }else {
            lines.forEach(line => line.classList.remove('on'));
            moveSlideB();
            moveImg();
            lines[currentOne + 1].classList.add('on');
        }

        if(currentOne === 0) {
            navBtns[0].classList.add('disabled');
        }else if(currentOne === 7) {
            navBtns[1].classList.add('disabled');
            body.style.overflow = 'auto';
        }else {
            navBtns.forEach(btn => btn.classList.remove('disabled'));
        }
    }, 100)
})