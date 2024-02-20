let arr = ['r', 'p', 's']

function comp(e) {
    let compres = e[Math.floor(Math.random() * e.length)]
    return compres
}

let r = document.getElementById('r');
let p = document.getElementById('p');
let s = document.getElementById('s');
var user = document.getElementById('user');
let computer = document.getElementById('comp');
let reset = document.getElementById('reset');
var getComp = "";
var getUser = "";
var userScore = 0;
var compScore = 0;

reset.addEventListener('click', ()=>{
    userScore=0;
    compScore=0;
    user.innerText = `${userScore}`
        computer.innerText = `${compScore}`
})

r.addEventListener('click', () => {
    getComp = comp(arr);
    getUser = 'r';
    console.log(getUser, getComp);
    if (getComp == getUser) {
        r.classList.add('gray-glow');
        setTimeout(function () {
            r.classList.remove('gray-glow');
        }, 500);
        user.innerText = `${userScore}`
        computer.innerText = `${compScore}`
        
    }
    else if ((getUser === 'r' && getComp === 's') ||
        (getUser === 's' && getComp === 'p') ||
        (getUser === 'p' && getComp === 'r')
    ) {
        r.classList.add('green-glow');
        setTimeout(function () {
            r.classList.remove('green-glow');
        }, 500);
        userScore = userScore + 1;
        user.innerText = `${userScore}`
        computer.innerText = `${compScore}`
    }
    else {
        r.classList.add('red-glow');
        setTimeout(function () {
            r.classList.remove('red-glow');
        }, 500);
        compScore = compScore + 1;
        user.innerText = `${userScore}`
        computer.innerText = `${compScore}`
    }
})
p.addEventListener('click', () => {
    getComp = comp(arr);
    getUser = 'p';
    console.log(getUser, getComp);
    if (getComp == getUser) {
        p.classList.add('gray-glow');
        setTimeout(function () {
            p.classList.remove('gray-glow');
        }, 500);
        user.innerText = `${userScore}`
        computer.innerText = `${compScore}`
        
    }
    else if ((getUser === 'r' && getComp === 's') ||
        (getUser === 's' && getComp === 'p') ||
        (getUser === 'p' && getComp === 'r')
    ) {
        p.classList.add('green-glow');
        setTimeout(function () {
            p.classList.remove('green-glow');
        }, 500);
        userScore = userScore + 1;
        user.innerText = `${userScore}`
        computer.innerText = `${compScore}`
    }
    else {
        p.classList.add('red-glow');
        setTimeout(function () {
            p.classList.remove('red-glow');
        }, 500);
        compScore = compScore + 1;
        user.innerText = `${userScore}`
        computer.innerText = `${compScore}`

    }

})
s.addEventListener('click', () => {
    getComp = comp(arr);
    getUser = 's';
    console.log(getUser, getComp);
    if (getComp == getUser) {
        s.classList.add('gray-glow');
        setTimeout(function () {
            s.classList.remove('gray-glow');
        }, 500);
        user.innerText = `${userScore}`
        computer.innerText = `${compScore}`
        
    }
    else if ((getUser === 'r' && getComp === 's') ||
        (getUser === 's' && getComp === 'p') ||
        (getUser === 'p' && getComp === 'r')
    ) {
        s.classList.add('green-glow');
        setTimeout(function () {
            s.classList.remove('green-glow');
        }, 500);
        userScore = userScore + 1;
        user.innerText = `${userScore}`
        computer.innerText = `${compScore}`
    }
    else {
        s.classList.add('red-glow');
        setTimeout(function () {
            s.classList.remove('red-glow');
        }, 500);
        compScore = compScore + 1;
        user.innerText = `${userScore}`
        computer.innerText = `${compScore}`
    }

})
