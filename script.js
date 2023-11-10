const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

const close = document.getElementById('close')

if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}

let MainImg = document.getElementById('MainImg')
let SmallImg = document.getElementsByClassName('small-img')

if (SmallImg[0]){
    SmallImg[0].addEventListener('click', ()=>{
        MainImg.src = SmallImg[0].src;
    })
}

if (SmallImg[1]){
    SmallImg[1].addEventListener('click', ()=>{
        MainImg.src = SmallImg[1].src;
    })
}

if (SmallImg[2]){
    SmallImg[2].addEventListener('click', ()=>{
        MainImg.src = SmallImg[2].src;
    })
}

if (SmallImg[3]){
    SmallImg[3].addEventListener('click', ()=>{
        MainImg.src = SmallImg[3].src;
    })
}