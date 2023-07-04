let input = document.querySelector("#content")
let toLowerBtn = document.querySelector("#lower")
let toUpperBtn = document.querySelector("#upper")

// change all characters to lower case
toLowerBtn.addEventListener('click', () => {
    input.value = input.value.toLowerCase()
})

// change all characters to upper case
toUpperBtn.addEventListener('click', () => {
    input.value = input.value.toUpperCase()
})

let copyBtn = document.querySelector("#copy")
let copyTxt = document.querySelector("#copy-txt")
let copyImg = document.querySelector("#copy-img")

// to set for copyTxt green color on successful copy
function setCopySuccessColor() {
    if (input.value !== "") {
        // to get the current value of txt color and img src
        let currentCopyTxtColor = window.getComputedStyle(copyTxt).color
        let currentImgSrc = copyImg.getAttribute("src")

        copyTxt.style.color = "#35b000"
        copyImg.src = "copy-success.png"

        setTimeout(() => {
            copyTxt.style.color = currentCopyTxtColor
            copyImg.src = currentImgSrc
        }, 1000);
    } 
}

// event handler for the copy button
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(input.value)
    setCopySuccessColor()
})