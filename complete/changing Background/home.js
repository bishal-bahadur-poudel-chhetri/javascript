const background=document.getElementById('background')
const body=document.querySelector('body')
const Name=document.getElementById('names')


background.addEventListener('click',changeBackground=>{
    let randomColor=Math.floor(Math.random()*16777215).toString(16)
    body.style.backgroundColor=randomColor
    Name.innerText='#'+randomColor

    
})
