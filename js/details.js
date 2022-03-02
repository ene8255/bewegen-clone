const mainDetail = document.querySelector('#mainDetail');
const mainID = document.querySelector('#mainImgDiv');
const body = document.querySelector('body');

let timer;
let sctBefore = 0;

// mainDetail 부분에서만 실행될 마우스휠 이벤트 함수 정의
function mainWheelEvent(event) {
    if(timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(() => {
        if(event.deltaY > 0) {
            lines.forEach(line => line.classList.remove('on'));
            moveSlideF();
            moveImg();
            lines[currentOne + 5].classList.add('on');

        }else {
            lines.forEach(line => line.classList.remove('on'));
            moveSlideB();
            moveImg();
            lines[currentOne + 5].classList.add('on');
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
}

// 스크롤 이벤트
const trikeImg = document.querySelector('#trike-img');
const phone1 = document.querySelector('#phone1');
const phone2 = document.querySelector('#phone2');
const teamDesc = document.querySelector('#team-desc-box');
const michelAuto = document.querySelector('#michel-auto');
const bCarousel = document.querySelector('#b-carousel-container');
const wCarousel = document.querySelector('#w-carousel-container');

document.addEventListener('scroll', () => {
    const sct = document.documentElement.scrollTop;
    const ostMD = mainDetail.offsetTop;
    // const bottomMD = mainDetail.getBoundingClientRect().bottom;

    if(sct >= ostMD && sct <= ostMD + 50) {
        mainID.classList.add('zoom');
        mainDetail.classList.add('fixed');
        body.style.overflow = 'hidden';

        // 마우스휠 이벤트 추가
        mainDetail.addEventListener('wheel', mainWheelEvent);

    }else if(sctBefore > sct && sct <= 100) {
        // mainID.style.animationDirection = 'reverse';
        mainImg.style.left = "-5%";
        mainImg.style.top = '-20vh';

        mainID.classList.remove('zoom');
        mainDetail.classList.remove('fixed');

        currentOne = 0;
        tOne.style.left = '0%';

        // 마우스휠 이벤트 제거
        mainDetail.removeEventListener('wheel', mainWheelEvent);

    }else {
        body.style.overflow = 'auto';

        // 마우스휠 이벤트 제거
        mainDetail.removeEventListener('wheel', mainWheelEvent);
    }


    // 요소에 동적인 효과 추가
    let varY = sct * 0.003;
    let varY2 = sct * 0.001;

    if(sct > sctBefore) {
        trikeImg.style.transform = `translateY(${varY}px)`;
        phone1.style.transform = `translateY(-${varY}px)`;
        phone2.style.transform = `translateY(${varY}px)`;
        teamDesc.style.transform = `translateY(${varY}px)`;
        michelAuto.style.transform = `translateY(${varY}px)`;
        bCarousel.style.animationDirection = 'normal';
        wCarousel.style.animationDirection = 'normal';

    }else {
        trikeImg.style.transform = `translateY(-${varY2}px)`;
        phone1.style.transform = `translateY(${varY2}px)`;
        phone2.style.transform = `translateY(-${varY2}px)`;
        teamDesc.style.transform = `translateY(-${varY2}px)`;
        michelAuto.style.transform = `translateY(-${varY2}px)`;
        bCarousel.style.animationDirection = 'reverse';
        wCarousel.style.animationDirection = 'reverse';

    }

    sctBefore = sct;
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

    // 초기 위치 지정
tOne.style.length = (tOneLis.length * 100) + '%';
tOneLis.forEach((li, idx) => {
    li.style.left = (idx * 100) + '%';
})

    // 슬라이드를 앞으로 이동
function moveSlideF() {
    currentOne++;
    if(currentOne > 7) {
        currentOne = 7;
    }
    tOne.style.left = -(currentOne * 100) + '%';
}
    // 슬라이드를 뒤로 이동
function moveSlideB() {
    currentOne--;
    if(currentOne < 0) {
        currentOne = 0;
    }
    tOne.style.left = -(currentOne * 100) + '%';
}

    // 이미지 위치 이동
function moveImg() {
    mainImg.style.top = imgTop[currentOne];
    mainImg.style.left = imgLeft[currentOne];
}

    // nav 버튼 클릭 이벤트
tOneNav.addEventListener('click', (e) => {
    lines.forEach(line => line.classList.remove('on'));

    const classNames = e.target.className;

    if(classNames === "fa-solid fa-angle-right" || classNames === "circle-btn right") {
        moveSlideF();
        moveImg();
        lines[currentOne + 5].classList.add('on');

    }else if(classNames === "fa-solid fa-angle-left" || classNames === "circle-btn left") {
        moveSlideB();
        moveImg();
        lines[currentOne + 5].classList.add('on');
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

    // skip button 클릭 이벤트
skipBtn.addEventListener('click', () => {
    const ostTrike = trike.offsetTop;

    window.scrollTo({top: ostTrike, behavior: 'smooth'});
    body.style.overflow = 'auto';
})