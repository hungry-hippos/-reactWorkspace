import chicken from '../assets/pictures/runningChicken.png'

const chickenMovement={
    chickenKey:0,
    isFacingLeft:false,
    allSq:[],

    getNextKey(direction){
        var rowSize=19;

        const currKey=parseInt(chickenMovement.chickenKey,10);     
        switch (direction){
            case 'up':
                return (chickenMovement.allSq[currKey].classList.contains('top'))?-1:currKey-rowSize;
            case 'down':
                return (chickenMovement.allSq[currKey].classList.contains('bottom'))?-1:currKey+rowSize;
            case 'left':
                return (chickenMovement.allSq[currKey].classList.contains('left'))?-1:currKey-1;
            case 'right':
                return (chickenMovement.allSq[currKey].classList.contains('right'))?-1:currKey+1;
            default:
                break;
        }
    },
    getDirection(direction){
        const nextKey=parseInt(chickenMovement.getNextKey(direction),10);
        if (nextKey!==-1){
            chickenMovement.moveChicken(nextKey);
        }
    },
    moveChicken(location){
        //remove prev chicken
        chickenMovement.allSq[chickenMovement.chickenKey].childNodes[0].remove();
        //spawn him on new location
        chickenMovement.spawnChicken(location);
        if (location===113){
            console.log('EXIT REACHED');
            document.getElementById('gameConfirmBtn').style.opacity='1';
        }
    },
    spawnChicken(location){
        chickenMovement.chickenKey=location;
        const chickenImg=document.createElement('img');
        chickenImg.setAttribute('src',chicken);
        chickenImg.setAttribute('alt',"");
        chickenImg.classList.add('chicken');
        if (!chickenMovement.isFacingLeft){
            chickenImg.classList.add('rightFacing');
        }
        chickenMovement.allSq[location].appendChild(chickenImg);

    },
    loadMovementListener(){
        window.addEventListener('keydown',(e)=>{
            document.getElementById('initialInstructions').classList.add('hidden');
            e.preventDefault();
            switch(e.code){
                case 'ArrowDown':
                    chickenMovement.getDirection('down');
                    break;
                case 'ArrowUp':
                    chickenMovement.getDirection('up');
                    break;
                case 'ArrowRight':
                    chickenMovement.isFacingLeft=false;
                    chickenMovement.getDirection('right');
                    break;
                case 'ArrowLeft':
                    chickenMovement.isFacingLeft=true;
                    chickenMovement.getDirection('left');
                    break;
                default:
                    break;
            }
        })
    },
    startGame(){
        chickenMovement.allSq=document.getElementsByClassName('easySquare');
        chickenMovement.allSq[113].classList.add('minigameExit');
        document.getElementById('gameConfirmText').style.opacity='1';
        chickenMovement.spawnChicken(0);
        chickenMovement.loadMovementListener();
    }
}

export default chickenMovement