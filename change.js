const colors = ["red","green","brown","black","yellow","blue","pink","purple","azure","RGB(223,66,32)","RGB(168, 223, 32)",
"RGB(26, 117, 65)","aquamarine" , "aqua" , "coral", "cyan" , "RGB(117, 131, 152)" ,"RGB(240, 57, 204)" , "RGB(245, 0, 78)",
"RGB(182, 73, 73)" , "RGB(37, 205, 134)" , "RGB(80, 116, 4)" , "RGB(139, 97, 0)" , "gold" ,"RGB(172, 27, 1)" , "RGB(160, 0, 179)",
"RGB(77, 0, 124)" , "RGB(147, 9, 227)", "RGB(195, 10, 105)", "RGB(220, 0, 70)", "RGB(223, 114, 140)"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function () {
    // get random number
    const randomNumber = getRandomNumber()
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}