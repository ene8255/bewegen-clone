// text carousel two
let currentTwo = 1;

const tTwo = document.querySelector('#t-carousel-two');
const tTwoNav = document.querySelector('#t-c-two-container .carousel-nav');

const firstText = tTwo.firstElementChild.cloneNode(true);
const lastText = tTwo.lastElementChild.cloneNode(true);

tTwo.appendChild(firstText);
tTwo.insertBefore(lastText, tTwo.firstElementChild)

const tTwoLis = document.querySelectorAll('#t-carousel-two > li');
const linesTwo = document.querySelectorAll('#t-carousel-two .line');

tTwo.style.length = (tTwoLis.length * 100) + '%';
tTwo.style.left = '-100%';
tTwoLis.forEach((li, idx) => {
    li.style.left = (idx * 100) + '%';
})

function moveTandNF() {
    currentTwo++;
    tTwo.style.left = -(currentTwo * 100) + '%';
    tTwo.style.transition = '0.5s';

    numUl.style.top = -(currentTwo * 20) + 'rem';
    numUl.style.transition = '0.5s';

    if(currentTwo === 4) {
        toFirstText();
    }
}
function moveTandNB() {
    currentTwo--;
    tTwo.style.left = -(currentTwo * 100) + '%';
    tTwo.style.transition = '0.5s';

    numUl.style.top = -(currentTwo * 20) + 'rem';
    numUl.style.transition = '0.5s';

    if(currentTwo === 0) {
        toLastText();
    }
}

function toFirstText() {
    setTimeout(() => {
        tTwo.style.transition = '0ms';
        tTwo.style.left = '-100%';

        numUl.style.transition = '0ms';
        numUl.style.top = '-20rem';

        currentTwo = 1;
    }, 500)
}
function toLastText() {
    setTimeout(() => {
        tTwo.style.transition = '0ms';
        tTwo.style.left = '-300%';

        numUl.style.transition = '0ms';
        numUl.style.top = '-60rem';

        currentTwo = 3;
    }, 500)
}

tTwoNav.addEventListener('click', (e) => {
    linesTwo.forEach(line => line.classList.remove('on'));
    const classNames = e.target.className;

    if(classNames === "fa-solid fa-angle-right" || classNames === "circle-btn right") {
        moveTandNF();
        linesTwo[currentTwo].classList.add('on');
        
    }else if(classNames === "fa-solid fa-angle-left" || classNames === "circle-btn left") {
        moveTandNB();
        linesTwo[currentTwo].classList.add('on');

    }
})

// number-carousel
const numUl = document.querySelector('#num-ul');

const firstNum = numUl.firstElementChild.cloneNode(true);
const lastNum = numUl.lastElementChild.cloneNode(true);

numUl.appendChild(firstNum);
numUl.insertBefore(lastNum, numUl.firstElementChild);

const numLis = document.querySelectorAll('#num-ul > li');
numUl.style.height = (numLis.length * 20) + 'rem';
numUl.style.top = '-20rem';
numLis.forEach((li, idx) => {
    li.style.top = (idx * 20) + 'rem';
})



// yourWay
const ywBtnUl = document.querySelector('#yw-btns');
const ywBtns = document.querySelectorAll('#yw-btns > li');
const ywLists = document.querySelectorAll('#yw-lists > ul');
const ywImgs = document.querySelectorAll('#yw-imgs > div');

ywBtns[0].classList.add('on');
ywLists[0].classList.add('on');
ywImgs[0].classList.add('on');

ywBtnUl.addEventListener('click', (e) => {
    ywBtns.forEach((btn, idx) => {
        if(e.target === btn) {
            ywBtns.forEach(btn => btn.classList.remove('on'));
            ywLists.forEach(list => list.classList.remove('on'));
            ywImgs.forEach(img => img.classList.remove('on'));

            btn.classList.add('on');
            ywLists[idx].classList.add('on');
            ywImgs[idx].classList.add('on');
        }
    })
})