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

        let choice = "X"; 
        const gamePlay = () =>{
            const move = () =>{
                sector.forEach((mark)=>{     
                    mark.addEventListener('click',()=>{
                        if(mark.textContent != "")
                        return
                        mark.textContent = choice;
                        gameWinner();
                        choice = choice === "X"?"O":"X";                                                                  
                    })                              
                })        
                
            }
            move()
            const resetGame = () =>{
                const reset = document.querySelector("#reset");
                reset.addEventListener('click',()=>{
                    sector.forEach((mark) =>{
                        mark.textContent = "";
                    })
                })
            }
            resetGame();            
            const gameWinner = () =>{
                winner.forEach((combo)=>{
                    let checkWinner = combo.every(idx =>
                        sector[idx].textContent === choice
                    )
                    if(checkWinner){
                        alert(choice + " has won!");
                    }
                })                               
            }            
        }
        const players = (player1, player2, machine)=>{
            
        }
        return {gamePlay};       
    })();
    gameBoard.gamePlay();