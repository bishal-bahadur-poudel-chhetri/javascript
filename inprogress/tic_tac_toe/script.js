const X_Class='x'
const circle_class='circle'
const Winner_Combination=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let circleTurn
const cellELements=document.querySelectorAll('[data-cell]')
const board=document.getElementById('board')

startGame()
function startGame(){
    circleTurn=false
    cellELements.forEach(cell =>{
        cell.addEventListener('click',handleClick, {once :true})
    })
    setBoardHoverClass()


}



function handleClick(e){
    const cell =e.target
    const currentClass = circleTurn ? circle_class : X_Class
    placeMark(cell,currentClass)
    if (checkWin(currentClass)){
        console.log('winner ')

    }

//place mark
//check for win 
//check for draw 
//switch turns 
    switchturn()
    setBoardHoverClass()
}

function placeMark(cell,currentClass){
    cell.classList.add(currentClass)

}
function switchturn(){
    circleTurn=!circleTurn

}

function setBoardHoverClass(){
    board.classList.remove(X_Class)
    board.classList.remove(circle_class)
    if(circleTurn){
        board.classList.add(circle_class)
    }
    else{
        board.classList.add(X_Class)
    }


}

function checkWin(currentClass){
    return Winner_Combination.some(combination =>{
        return combination.every(index =>{
            return cellELements[index].classList.contains(currentClass)
        })
    })
}