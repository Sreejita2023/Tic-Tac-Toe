const boxes=document.querySelectorAll('.box')
const btn=document.querySelector('.btn')
const player=document.querySelector('.player')

// display who is the current player
let currentPlayer;

//maintain the player input in the form of array
let gameGrid;


// initialise the game
function initialGame(){
    currentPlayer="X"
    gameGrid=["","","","","","","","",""]
    btn.classList.remove("active")
    boxes.forEach((box,index)=>{
        box.innerText=""
        boxes[index].style.pointerEvents = "all";
        box.classList=`box box${index+1}`
    })
    player.innerText=`Current Player-${currentPlayer}`
}

// pre calculate all the winning positions
const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

initialGame()

// make eack box functional
boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        handle(index)
        console.log("it working")
    })
})
function check(){
    console.log('hello')
}
function handle(index){
    if(gameGrid[index]===""){
        boxes[index].innerText=`${currentPlayer}`
        console.log(boxes[index].innerText);
        gameGrid[index]=currentPlayer
        swapTurn()
        boxes[index].style.pointerEvents="none"
        check()
    }
}

function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O"
    }
    else{
        currentPlayer="X"
    }
    player.innerText=`Current Player-${currentPlayer}`
}
btn.addEventListener("click",initialGame)

function check(){
    let answers=""
    winningPositions.forEach(position=>{
        if((gameGrid[position[0]]!=""||gameGrid[position[1]]!=""||gameGrid[position[2]]!="") && gameGrid[position[0]]===gameGrid[position[1]]
        && gameGrid[position[1]]===gameGrid[position[2]]){
            if(gameGrid[position[0]]==="X"){
              answers="X"
            }
            else{
                answers="O"
            }
            boxes.forEach(box=>{
                box.style.pointerEvents="none"
            })
            boxes[position[0]].classList.add("win")
            boxes[position[1]].classList.add("win")
            boxes[position[2]].classList.add("win")
        }
    })
    if(answers!=""){
        player.innerText=`Winner player-${answers}`
        btn.classList.add("active")
        returrn
    }
        
    // to check all the boxes are full
    let fillcount=0
    boxes.forEach(box=>{
        if(box.innerText!=""){
            fillcount++
        }
    })
    if(fillcount==9){
        btn.classList.add("active")
        player.innerHTML=`It is a tie`
    }
}