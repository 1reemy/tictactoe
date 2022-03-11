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
            const boardFull = () => sector.every((val) => val.textContent != "");   
            const move = () =>{                
                sector.forEach((mark)=>{
                    mark.addEventListener("click",()=>{
                        if(mark.textContent === ""){                                            
                        choice = choice === "X"?"O":"X";
                        mark.textContent = choice;
                        gameWinner();
                        }                                               
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
            const highLight = (combo) => {
                    combo.forEach((idx) => sector[idx].classList.add("highlight"))
            }          
            const gameWinner = () =>{
                let checkWinner = winner.find((combo)=>
                combo.every((idx) => sector[idx].textContent === choice)                
                );
                if(checkWinner){                    
                    highLight(checkWinner);
                }else if(boardFull()){
                    alert("Tie!");
                }
            };                        
        }
        const players = (player1, player2, machine)=>{
            
        }
        return {gamePlay};       
    })();
    gameBoard.gamePlay();