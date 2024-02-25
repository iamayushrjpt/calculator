const AC = document.querySelector('#clear')
const OUTPUT = document.querySelector('.output')
const DEL = document.querySelector('#delete')
const NUMBER = document.querySelectorAll('.number')
const RESULT = document.querySelector('#result')



AC.addEventListener('click', () => {
    OUTPUT.innerHTML = ""
})

NUMBER.forEach(element => {
    element.addEventListener('click',()=>{
    OUTPUT.innerHTML += element.innerHTML
})
});

DEL.addEventListener('click',()=>{
    let str = OUTPUT.innerHTML;
    str= str.substring(0, str.length-1);
    OUTPUT.innerHTML = str;
})


RESULT.addEventListener('click',()=>{
    let str = OUTPUT.innerHTML;
    OUTPUT.innerHTML = eval(str)
})