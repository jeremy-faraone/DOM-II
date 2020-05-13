// Your code goes here

/// mouseover

const fun = document.querySelector('h1')
fun.addEventListener('mouseover', (e) => {
   fun.style.color = 'orange'
    setTimeout(function(){
        fun.style.color = 'black'
    }, 500);
});

// mouseenter

const go = document.querySelector('.img-content img')
go.addEventListener('mouseenter', (e) => {
    go.style.border = '5px solid red'
});

// mouseleave

go.addEventListener('mouseleave', (e) => {
    go.style.border = 'initial'
});

// doubleclick

const bus = document.querySelector('.intro img')
bus.addEventListener('dblclick', () => {
    bus.src = 'img/Brokebus.jpg'
});

// click

const buttons = document.querySelector('.destination .btn')
buttons.addEventListener('click', (e) => {
    buttons.style.color = 'red'
    buttons.style.backgroundColor = 'orange'
});

// resize

const dest = document.querySelector('.content-destination img')

window.addEventListener('resize', (e) => {
    dest.src = 'img/tropical-paradise.jpg'
});

// scroll

const back = document.querySelector('body')

window.addEventListener('scroll', (e) => {
    back.style.color = 'green'
});

