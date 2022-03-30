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

    let choice = "O";
                    
    const Players = (humanPlayer)=>{
        const machine = () => {
            const play = Math.floor(Math.random() * sector.length)
            sector[play].textContent = "X";
            choice = choice === "O"?"X":"O";
        }
        return{humanPlayer, machine}
    }
    
    const player = Players(choice);

    const gamePlay = () =>{
        const boardFull = () => sector.every((val) => val.textContent != "");
        const gameOver = () => sector.forEach((spot) =>{
            if(spot != choice){
                     spot.classList.add("gameover");
                       }
         })
        const move = () =>{            
            sector.forEach((mark)=>{                
                let step = ()=>{
                    if(mark.textContent === ""){                        
                    choice = choice === "O"?"X":"O";
                    mark.textContent = player.humanPlayer;                                      
                    player.machine();
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
            let checkWinner = winner.find((combo)=>combo.every((idx) => sector[idx].textContent === choice));
            if(checkWinner){                    
                highLight(checkWinner);
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