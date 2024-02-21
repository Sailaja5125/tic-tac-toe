// tic tac toe
let boxes = document.querySelectorAll(".box")
let newbtn = document.querySelector(".newgame")
let player1 = true 
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
let count = 0 ;
// new game or reset or replay 
const newgame = () =>{
    player1 = true
    count = 0 
    enableboxes()
}
// play area..
boxes.forEach((box) => {
    box.addEventListener("click" ,()=>{
        if(player1 == true){
            box.innerText = "X"
            document.querySelector("h3").innerText = "player 2" 
          box.style.color = "red"
            player1 = false
        }
        else{
            box.innerText = "O";
            box.style.color = "blue"
            document.querySelector("h3").innerText = "player 1" 
            player1 = true
        }
        box.disabled = true  // disables the box after clicking
        count++

        let iswinner = checkwinner(); 
        if(count === 9 && !iswinner){
            document.querySelector("h3").innerText = "Replay" 
            document.querySelector("h3").style.color = "yellow"
          newgame()
        }  
    });
});
//  disable boxes
const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}

// enable the boxes
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

// checking the winner 
const checkwinner  = () =>{
    for(pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText ;
        let pos2 = boxes[pattern[1]].innerText ;
        let pos3 = boxes[pattern[2]].innerText ;
        if(pos1!= "" && pos2!= "" && pos3!= "" ){
            if(pos1 === pos2 && pos2 === pos3){
                document.querySelector("h3").innerText = `winner is ${pos1==="X"?"player1":"player 2"}`                     
                document.querySelector("h3").style.fontFamily = "sans serif"
                document.querySelector("h3").style.color = "pink"
                disableboxes();
                return true;
            }   
        }
}
}
newbtn.addEventListener("click" , () =>{
    newgame()
})