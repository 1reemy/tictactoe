const gameBoard = (() =>{        
    const sectors = document.querySelectorAll(".sector");
    
    let sector = Array.from(sectors);
    
    const winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    let validMove = [];  
    let finalThree = [];
    let boardState = [];
    let availMoves = [];
    const Players = (humanPlayer)=>{        
        const machine = () => { 
            let play = Math.floor(Math.random() * sector.length);
            while(sector[play].textContent !== ""){
                play = Math.floor(Math.random() * sector.length);
            }
            sector[play].textContent = "X";           
            validMove.push(sector[play].textContent);
            //console.log(validMove)                       
        }
        return{humanPlayer, machine}
    }
    
    const player = Players("O");

    const gamePlay = () =>{

    const emptySquares = () =>{
        availMoves = boardState.concat(validMove);
        if(availMoves.length === 4){
            finalThree.push(sector.filter((empty) => empty.textContent === ""));
            console.log(finalThree);            
        }
        return finalThree;               
    }
    const highLight = (combo) => combo.forEach((idx) => sector[idx].classList.add("highlight")); 
 
    const move = () =>{            
        sector.forEach((mark)=>{                
            let step = ()=>{                    
                if(mark.textContent === ""){                    
                mark.textContent = player.humanPlayer;
                boardState.push(mark.textContent); 
                legitComputerMove();
                winCheck();                    
                }                                                                     
            }
            mark.addEventListener("click",step);  
                                         
        })                
    }
    const resetGame = () =>{
        const reset = document.querySelector("#reset");
        reset.addEventListener('click',()=>{
            sector.forEach((mark) =>{
                mark.classList.remove("highlight");
                mark.classList.remove("gameover");
                mark.textContent = "";
            })
        })
    }

    const minimax = (newBoard, user) => {
        let legitMove = emptySquares();
        let moves = [];
        const gameWinner = (user) => {
            let win = winner.find((combo)=>combo.every((idx) => sector[idx].textContent === user));
            if(user === player.humanPlayer){
                win;
            }else if(user === player.machine()){
                win;
            }else if(boardFull()){
                return;
            }
            return user;
         };
        if(gameWinner(player.humanPlayer)){
            return {score:-10};
        }else if(gameWinner(player.machine())){
            return {score:10};
        }
        for(let i = 0; i < legitMove.length; i++){	     
          let move = {};
          move.index = newBoard[legitMove[i]];
          newBoard[legitMove[i]] = user;
          if(user === player.machine()){
          let result = minimax(newBoard,player.humanPlayer);
          move.score = result.score;
          }
          else{
              let result = minimax(newBoard, player.machine());
          move.score = result.score;
              }
          newBoard[legitMove[i]] = move.index;
          moves.push(move);
        }
        let bestMove;
        if(user === player.machine()){
          let bestScore = -10000;
          for(let i = 0; i < moves.length; i++){
          if(moves[i].score > bestScore){
            bestScore = moves[i].score;
            bestMove = i;
          }
          }
        }
        else{
          let bestScore = 10000;
          for(let i = 0; i < moves.length; i++){
          if(moves[i].score < bestScore){
             bestScore = moves[i].score;
             bestMove = i;
          }
          }
        }
        return moves[bestMove];
      }
    
    const legitComputerMove = () =>{            
        if(!boardFull()){ 
            minimax(sector, player.machine());
        }
    }
    const boardFull = () => sector.every((val) => val.textContent != "");

    const gameOver = () => sector.forEach((spot) =>{
        if(spot != player.humanPlayer || spot != player.machine()){
                 spot.classList.add("gameover");
                   }
     })
               
        const winCheck = () =>{
            let o = winner.find((combo)=>combo.every((idx) => sector[idx].textContent === player.humanPlayer));
            let x = winner.find((combo)=>combo.every((idx) => sector[idx].textContent === "X"));
            if(o){                    
                highLight(o);
                gameOver();
            }else if(x){                    
                highLight(x);
                gameOver();
            }else if(boardFull()){
                alert("Tie!");
            }
        };
        
        move();
        resetGame();
    }    
    return {gamePlay};       
})();
gameBoard.gamePlay();