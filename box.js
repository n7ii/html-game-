let x = 0 
let y = 0
let fx = 0
let fy = 0
let score = 0
const frog = document.getElementById('frog')
const box = document.getElementById ('box')

function frogjump(){
    fx = Math.floor((Math.random()*10) * 1366)
    fy = Math.floor((Math.random()*10) * 768 )
    frog.style.top = fy + 'px'
    frog.style.left = fx + 'px'
}

function moveBox(directon){
    const xx = `: x: ${x} , y:${y} , fx:${fx} , fy:${fy}`
    document.getElementById('score').innerText = score+xx;
    if (x == fx && y == fy ){
        score++
        frogjump()
    }

    switch(directon){
        case 'up':
            y -= 10
            break;
        case 'down':
            y += 10;   
            break;
        case 'left':
            x -= 10
            break;
        case 'right':
            x += 10
            break;  
        
    }
    box.style.top = y + 'px'
    box.style.left = x + 'px'
}

document.addEventListener('keydown' , function (event){
    console.log(event.key)
        switch (event.key){
            case 'ArrowUp':
                moveBox('up')
                break;
            case 'ArrowDown':
                moveBox('down')
                break;
            case 'ArrowLeft':
                moveBox('left')
                break;
            case 'ArrowRight':
                moveBox('right')
                break;
            case ' ':
                    frogjump()
                    break;

        }
    }
)

