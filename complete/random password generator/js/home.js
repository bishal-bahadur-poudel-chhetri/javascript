const characterAmountRangeElement = document.getElementById('characterAmountRange')
const characterAmountNumberElement= document.getElementById('characterAmountNumber')
const includeUppercaseElement=document.getElementById('includeUppercase')
const includeSymbolElement=document.getElementById('includeSymbols')
const includeNumberElement=document.getElementById('includeNumbers')
const form=document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')



const UPPER_CASE=arrayFromHigttoLow(65,90)
const LOWER_CASE=arrayFromHigttoLow(97,122)
const NUMBER_CHAR_CODE=arrayFromHigttoLow(48,57)
const SYMBOLS=arrayFromHigttoLow(33,47).concat(
        arrayFromHigttoLow(58,64)
    ).concat(
        arrayFromHigttoLow(91,96)
    ).concat(
        arrayFromHigttoLow(123,126)
    )


characterAmountRangeElement.addEventListener('input',syncommand)
characterAmountNumberElement.addEventListener('input',syncommand)


form.addEventListener('submit',e =>{
    e.preventDefault()
    const Number = characterAmountNumberElement.value
    const includeUppercase= includeUppercaseElement.checked
    const includeNumber =includeNumberElement.checked
    const includeSymbol=includeSymbolElement.checked
    const password=generatePassword(Number,includeUppercase,includeNumber,includeSymbol)
    passwordDisplay.innerText = password

})

function generatePassword(Number,includeUppercase,includeNumber,includeSymbol){
    let charCode=LOWER_CASE
    if(UPPER_CASE) charCode=charCode.concat(UPPER_CASE)
    if(SYMBOLS) charCode=charCode.concat(SYMBOLS)
    if(NUMBER_CHAR_CODE) charCode=charCode.concat(NUMBER_CHAR_CODE)

    const passwd=[]
    for (i=0;i<Number;i++){
        const characterCode =charCode[Math.floor(Math.random()*charCode.length)]
        passwd.push(String.fromCharCode(characterCode))

    }
    return passwd.join('')

}
function arrayFromHigttoLow(low,high){
    array=[]
    for (let i=low;i<high;i++){
        array.push(i)
    }
    return array
}


function syncommand(e){
    const value=e.target.value
    characterAmountNumberElement.value=value
    characterAmountRangeElement.value=value

}