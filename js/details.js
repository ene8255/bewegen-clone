const mainDetail = document.querySelector('#mainDetail');
const mainID = document.querySelector('#mainImgDiv');

// 스크롤 이벤트
document.addEventListener('scroll', () => {
    const sct = document.documentElement.scrollTop;
    const ostMD = mainDetail.offsetTop;
    const oshMD = mainDetail.offsetHeight;

    if(sct >= (ostMD + oshMD)) {
        // mainID.classList.remove('zoom');
        mainDetail.classList.remove('fixed');
    }else if(sct >= ostMD) {
        mainID.classList.add('zoom');
        mainDetail.classList.add('fixed');
    }else if(sct <= 100) {
        mainID.classList.remove('zoom');
        mainDetail.classList.remove('fixed');
    }
})