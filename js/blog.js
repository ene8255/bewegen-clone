const blogUl = document.querySelector('#blogUl');
const blogLis = document.querySelectorAll('.blogLi');
const blogNav = document.querySelector('#blogNav');
const blogNavBtns = document.querySelectorAll('#blogNav > .circle-btn');

let currentBlog = 0;

blogUl.style.width = (blogLis.length * 65) + 'rem';
blogLis.forEach((li, idx) => {
    li.style.left = (idx * 65) + 'rem';
})

function moveBlogF() {
    currentBlog++;
    blogUl.style.left = -(currentBlog * 65) + 'rem';
}
function moveBlogB() {
    currentBlog--;
    blogUl.style.left = -(currentBlog * 65) + 'rem';
}

blogNav.addEventListener('click', (e) => {
    const classNames = e.target.className;

    if(classNames === "fa-solid fa-angle-right" || classNames === "circle-btn right") {
        moveBlogF();

    }else if(classNames === "fa-solid fa-angle-left" || classNames === "circle-btn left") {
        moveBlogB();

    }
    
    if(currentBlog === 0) {
        blogNavBtns[0].classList.add('disabled');
    }else if(currentBlog === 3) {
        blogNavBtns[1].classList.add('disabled');
    }else {
        navBtns.forEach(btn => btn.classList.remove('disabled'));
    }
})