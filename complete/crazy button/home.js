const crazyButton=document.querySelectorAll('button')

crazyButton.forEach(button=>button.addEventListener('mouseenter',crazy))


function crazy(){
    const offsetleft=Math.random() *(window.innerWidth - this.clientWidth)
    const offsettop=Math.random() *(window.innerHeight - this.clientHeight)

    console.log(offsetleft,offsettop)


    this.style.top=offsettop+'px'
    this.style.left=offsetleft+'px'

}

