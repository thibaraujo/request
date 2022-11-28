const noButton = document.getElementById('no-touch');
const OFFSET = 20
noButton.addEventListener('click', () =>{
    alert('Nice Try')
    window.close()
})

document.addEventListener('mousemove', (e) =>{
    const x = e.pageX
    const y = e.pageY
    const buttonBox = noButton.getBoundingClientRect()
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET

    if(Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset){
        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
            buttonBox.y + verticalOffset / verticalDistanceFrom * 10
        )
    }
})

function setButtonPosition(left, top){
    const windBox = document.body.getBoundingClientRect()
    const buttonBox = noButton.getBoundingClientRect()

    if(distanceFromCenter(left, windBox.left, buttonBox.width) < 0){
        left = windBox.right - buttonBox.width - OFFSET
    }
    if(distanceFromCenter(left, windBox.right, buttonBox.width) > 0){
        left = windBox.left + OFFSET
    }

    if(distanceFromCenter(top, windBox.top, buttonBox.height) < 0){
        top = windBox.bottom - buttonBox.height - OFFSET
    }
    if(distanceFromCenter(top, windBox.bottom, buttonBox.height) > 0){
        top = windBox.top + OFFSET
    }
   
    noButton.style.left = `${left}px`
    noButton.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize){
    return boxPosition - mousePosition + boxSize / 2
}