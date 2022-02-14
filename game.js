const game = (player) =>{
    player = document.querySelector("button");
    const mark = document.createElement("h2");
    player.addEventListener('click',()=>{
        if (player === playerA.id){
            mark.textContent = "X";
        }
        else if(player === playerB.id){
            mark.textContent = "O";
        }
    });
    
    const gameBoard = (() =>{
        const quad =["","","","","","","","",""];
        const sector = document.querySelectorAll(".sector");
        const entry = (mark, index) => {
            index += mark;
        }
        quad.forEach(entry);
        let play = quad;
        const display = (value) => {
            value += play;
        }
                
        sector.addEventListener("click",()=>{
            sector.forEach(display);
            sector.appendChild(mark);
        });
    })();
    return{gameBoard};
}
const round = game("select");