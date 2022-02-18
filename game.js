const gameBoard = (() =>{ 
        const choice = document.querySelector("button");
        const mark = document.createElement("h2");             
        const sector = document.querySelectorAll(".sector");

        const quad =["","","","","","","","",""];

        choice.addEventListener('click',()=>{
            if (choice.id === 'x'){
                mark.textContent = "X";
            }
            else if(choice.id === 'o'){
                mark.textContent = "O";
            }
        })       
              
        sector.forEach((sector) => {sector.addEventListener("click",()=>{
            sector.appendChild(mark);
        })});        
        return {sector}
    })();