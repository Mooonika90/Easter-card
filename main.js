const btn = document.querySelector('.btn')
const main = document.querySelector('main')
const text = document.querySelector('h1')
const head = document.querySelector('.head')
let index = 1
let speed =80
let timeout
const wishes = "🥚Hoppy Easter!🥚"



const addWishes= ()=>{
    text.innerText = wishes.slice(0,index)
    index++
    timeout = setTimeout(addWishes,speed)

    if(index>wishes.length){
        clearTimeout(timeout)
        text.innerText  = wishes
       
    }


}

btn.addEventListener('click', ()=>{

    head.classList.toggle('show')

addWishes()
    

})
