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

    let choice;
    let play = Math.floor(Math.random() * sector.length);
    //let validMove = [];               
    const Players = (humanPlayer)=>{        
        const machine = () => { 
            while(sector[play].textContent !== ""){
                play = Math.floor(Math.random() * sector.length);
            }
            sector[play].textContent = "X";
            /*validMove += play;
            console.log(validMove.length)*/                       
        }
        return{humanPlayer, machine}
    }
    
    const player = Players("O");

    const gamePlay = () =>{
        const legitComputerMove = () =>{            
            if(!boardFull()){
                player.machine()
            }
        }
        const boardFull = () => sector.every((val) => val.textContent != "");
        const gameOver = () => sector.forEach((spot) =>{
            if(spot != player.humanPlayer || spot != player.machine()){
                     spot.classList.add("gameover");
                       }
         })
        const move = () =>{            
            sector.forEach((mark)=>{                
                let step = ()=>{
                    if(mark.textContent === ""){
                    mark.textContent = player.humanPlayer; 
                    legitComputerMove();
                    gameWinner();                    
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
         
        const highLight = (combo) => {
                combo.forEach((idx) => sector[idx].classList.add("highlight"))
        }          
        const gameWinner = () =>{
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