const theButton = document.getElementById("beginButton")

const theAnimation = document.getElementById("objectMoving")

theButton.addEventListener("click", begin)

function begin (){
    let timerId = null
    let x = 0
    let y = 0
    let degrees = 0
    let scaleX = 1
    let scaleY = 1

    timerId = setInterval (frame, 5)

    function frame() {
        if (x >= 360) {
            clearInterval (timerId)
        }
        else {
            x+=1
            theAnimation.style.left = x + "px"
            y+=1
            theAnimation.style.top = y + "px"
            degrees+=1
            theAnimation.style.transform = "rotateZ("+degrees+"deg)"
            /*
            scaleX -= 0.01
            scaleY -= 0.01
            theAnimation.style.transform = "scale("+scaleX+", "+scaleY+")" 
            */
        } 
    }
    
}

