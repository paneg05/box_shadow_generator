const inputColor = document.querySelector('.color_picker')
const outputDiv = document.querySelector('.output_div')
const shadowCss = document.querySelector('.shadow_css')
const horizontal =document.querySelector('#horizontal')
const vertical = document.querySelector('#vertical')
const blur = document.querySelector('#blur')
const spread = document.querySelector('#spread')
const opacity = document.querySelector('#r5')
const shadowColor =document.querySelector('#color_picker2')
const radio = document.querySelector('radio')
const inset =document.querySelector('#inset')

//box background change
inputColor.addEventListener('input',event=>{
    outputDiv.style.backgroundColor = inputColor.value
})

function boxshadow(event){
    let boxshadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px
    ${shadowColor.value} ${inset.checked ? "inset" : ""}`
    outputDiv.style.boxShadow=boxshadow
    shadowCss.innerHTML=`box-shadow: ${boxshadow};`

}