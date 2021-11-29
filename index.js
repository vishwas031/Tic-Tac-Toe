let turn = "X";

let box = document.getElementsByClassName("box")
let resetBtn = document.getElementsByClassName("btn")
let turnStatus = document.getElementsByClassName("turn")
let won = document.getElementsByClassName("wins")

const changeTurn = ()=>{
    if(turn==="X"){
        turn = "O";
        return turn;
    }
    turn = "X";
    return turn;
}

const checkWin = () =>{
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((box[e[0]].innerText === box[e[1]].innerText) && (box[e[1]].innerText === box[e[2]].innerText) && (box[e[1]].innerText !== ""))
            {
                won[0].style.display = "flex";
                box[e[0]].style.color = "green";
                box[e[1]].style.color = "green";
                box[e[2]].style.color = "green";
                document.getElementsByClassName("turn")[0].style.display = "none"
                document.getElementsByClassName("winningLine")[0].innerText=turn+" won!!";
            }
    })
}



Array.from(box).forEach(ele=>{
    ele.addEventListener("click", () =>{
        if(ele.innerText === ""){
            ele.innerText = turn;
            checkWin();
            changeTurn();
            document.getElementsByClassName("turn")[0].innerText=turn+"'s turn";
        } 
        
    })
    resetBtn[0].addEventListener("click",()=>{
        ele.innerText="";
        ele.style.color = "white"
        turn = "X";
        document.getElementsByClassName("turn")[0].innerText=turn+"'s turn";
        won[0].style.display = "none";
        document.getElementsByClassName("turn")[0].style.display = "block"
    })
    
})

