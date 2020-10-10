const question =document.querySelectorAll('.question')
const items=document.querySelectorAll('li')






function toggleess(){
    thisItem=this.parentNode
    items.forEach(item=>{
        if (thisItem==this.parentNode){
            thisItem.classList.toggle('open')
            return;
        }
        item.classList.remove('open')

    })

}


question.forEach(questions=>questions.addEventListener('click',toggleess))
