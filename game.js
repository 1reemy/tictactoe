const gameBoard = (() =>{ 
        //const choice = document.querySelector("button");       
        const sectors = document.querySelectorAll(".sector");
        
        let sector = Array.from(sectors);
        let choice = "X"; 
        const gamePlay = () =>{
            sector.forEach((mark)=>{     
                mark.addEventListener('click',()=>{
                    if(mark.textContent != "")
                    return
                    mark.textContent = choice;
                    choice = choice === "X"?"O":"X";                                      
                })                              
            })
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
                sector.forEach((mark)=>{
                    let index = mark.textContent.indexOf("X");
                    if(index === winner[index]){
                        console.log("winner!!!");
                    }
                })
            }
            gameWinner();
        }
        const players = (player1, player2, machine)=>{
            
        }
        return {gamePlay};       
    })();
    gameBoard.gamePlay();