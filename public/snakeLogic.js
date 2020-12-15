var mainGrid=document.getElementById('mainGrid');
for (var i=0;i<225;i++){
	var square=document.createElement('div');
	square.classList.add('snakeSquare');
	mainGrid.appendChild(square);
};

var squares=document.getElementsByClassName('snakeSquare');


function createSnakeHead(){
	var spawnSq=Math.floor(Math.random()*223);
	squares[spawnSq].setAttribute('id','snakeHead');
	return spawnSq;
}

function ratCreation(){
  //random num that is not the snakehead
  while (true){
    var ratSpawnLocation=Math.floor(Math.random()*223);
    if (ratSpawnLocation===headLocation){
      continue;
    }

    var repeat=false;
    for (var i=0;i<bodyLocation.length;i++){
      if (ratSpawnLocation===bodyLocation[i]){
        repeat=true;
        break;
      }
    }
    if (!repeat){
      squares[ratSpawnLocation].setAttribute('id','rat');
      return ratSpawnLocation;
    }

  }	
}
var headLocation=createSnakeHead();
var bodyLocation=[];
var ratLocation=ratCreation();


function headMovement(){
	if (movementDirection=='left'){
		snakeSuicide(headLocation-1);
		if (headLocation%15==0)
			snakeDead();
		else if (headLocation-1==ratLocation)
			snakeEats(headLocation-1);
		else
			snakeMoves(headLocation-1);
	}
	else if (movementDirection=='up'){
		snakeSuicide(headLocation-15);
		if (0<=headLocation && headLocation<=14)
			snakeDead();
		else if (headLocation-15==ratLocation)
			snakeEats(headLocation-15);
		else
			snakeMoves(headLocation-15);
	}
	else if (movementDirection=='right'){
		snakeSuicide(headLocation+1);
		if ((headLocation+1)%15==0)
			snakeDead();
		else if (headLocation+1==ratLocation)
			snakeEats(headLocation+1);
		else
			snakeMoves(headLocation+1);
	}
	else if (movementDirection=='down'){
		snakeSuicide(headLocation+15);
		if (210<=headLocation && headLocation<=223)
			snakeDead();
		else if (headLocation+15==ratLocation)
			snakeEats(headLocation+15);
		else
			snakeMoves(headLocation+15);
	}
}

function snakeSuicide(nextHead){
	bodyLocation.forEach(function(bodyPart){
		if (nextHead==bodyPart)
			snakeDead();
	})
}
function snakeDead(){
	clearInterval(currentIntervalCode);
	document.removeEventListener('keydown',changeDirection);
	alert('snek is ded');
}
function snakeEats(nextHead){
	squares[headLocation].removeAttribute('id');
	squares[headLocation].classList.add('snakeBody');
	bodyLocation.push(headLocation);
	squares[nextHead].setAttribute('id','snakeHead');
	headLocation=nextHead;
	ratLocation=ratCreation();
	console.log('eats');
}
function snakeMoves(nextHead){
	squares[headLocation].removeAttribute('id');
	squares[headLocation].classList.add('snakeBody');
	bodyLocation.push(headLocation);
	squares[bodyLocation[0]].classList.remove('snakeBody');
	bodyLocation.shift();
	squares[nextHead].setAttribute('id','snakeHead');
	headLocation=nextHead;
}

document.addEventListener('keydown',changeDirection);
var currentIntervalCode=0;
var movementDirection="";
function changeDirection(event){
	clearInterval(currentIntervalCode);
	if (event.keyCode==37){
		//move left
		movementDirection='left';
	}
	if (event.keyCode==38){
		//move up
		movementDirection='up';
	}
	if (event.keyCode==39){
		//move right
		movementDirection='right';
	}
	if (event.keyCode==40){
		//move down
		movementDirection='down';
	}
	currentIntervalCode=setInterval(headMovement,150);
}


