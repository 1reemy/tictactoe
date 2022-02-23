const gameBoard = (() =>{ 
        const choiceA = document.querySelector("#x");
        const choiceB = document.querySelector("#o");          
        const sectors = document.querySelectorAll(".sector");
        
        let sector = Array.from(sectors);  
        
        choiceA.addEventListener('click',()=>{
            sector.forEach((mark)=>{                
                mark.addEventListener('click',()=>{
                    mark.textContent = "X";
                })
            })
        })

        choiceB.addEventListener('click',()=>{
            sector.forEach((mark)=>{
                mark.addEventListener('click',()=>{
                    mark.textContent = "O";
                })
            })
        })
    })();