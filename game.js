const rule = (playerA, playerB)=>{
	playerA = document.querySelector("#x");
	playerB = document.querySelector("#o");

	const board = document.querySelectorAll("#sector");

	const markA = document.createElement("p");
	const markB = document.createElement("p");

	markA.textContent = playerA.id;
	markB.textContent = playerB.id;

        const gameBoard = (() => {
		
        playerA.addEventListener("click",()=>{
            board.forEach((sector)=>{
                sector.addEventListener("click",()=>{
                sector.appendChild(markA);
                })                           
        })
		})
        playerB.addEventListener("click",()=>{
            board.forEach((sector)=>{
                sector.addEventListener("click",()=>{
                    sector.appendChild(markB);
                })
            })
        })
		})();
        return {gameBoard, playerA, playerB};
	}
    
const gameFlow = (() => {
    const player = rule("one","two");
    player.gameBoard;
    const quad = [];
})