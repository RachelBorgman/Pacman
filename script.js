var world = [
[1,1,1,1,1,1,1,1,1,1],
[1,0,2,1,2,0,2,1,3,1],
[1,2,2,1,1,2,2,1,2,1],
[1,2,2,1,2,2,2,2,2,1],
[1,2,2,2,0,2,2,2,2,1],
[1,2,2,1,2,2,2,2,2,1],
[1,2,2,1,1,1,1,2,2,1],
[1,0,2,2,2,2,1,2,2,1],
[1,2,1,1,1,1,1,2,2,1],
[1,2,1,2,2,2,2,2,2,1],
[1,2,1,1,1,2,2,2,1,1],
[1,2,2,3,1,2,2,2,2,1],
[1,0,2,2,2,2,3,2,2,1],
[1,1,1,1,1,1,1,1,1,1]
];

var pacman = {
    x:1,
    y:1
};

var ghost = {
    x:5,
    y:1
};

var score = 0;

function displayWorld(){
    var output = '';
    for (var i=0;i<world.length;i++){
        output += "<div class='row'>";
        for (var j=0;j<world[i].length;j++){
            if(world[i][j]== 1)
                output += "<div class='brick'></div>";
            else if(world[i][j]== 2)
                output += "<div class='coin'></div>";
            else if(world[i][j]== 3)
                output += "<div class='cherry'></div>";
            if(world[i][j]== 0)
                output += "<div class='empty'></div>";  
        }
        output += "</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}
function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20 + "px";
    document.getElementById('pacman').style.left = pacman.x*20 + "px";
}
function displayScore(){
    document.getElementById('score').innerHTML = score;
}
function displayGhost(){
    document.getElementById('ghost').style.top = ghost.y*20 + "px";
    document.getElementById('ghost').style.left = ghost.x*20 + "px";
}

displayWorld();
displayPacman();
displayScore();
displayGhost();

document.onkeydown = function(e){
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 1){ //left
        pacman.x--;
        document.getElementById('pacman').style.transform = 'rotate(180deg)'
    }
    if (e.keyCode == 39 && world[pacman.y][pacman.x+1] != 1){ //right
        pacman.x++;
        document.getElementById('pacman').style.transform = 'rotate(0deg)'
    }
    if (e.keyCode == 38 && world[pacman.y-1][pacman.x] != 1){ //up
        pacman.y--;
        document.getElementById('pacman').style.transform = 'rotate(270deg)'
    }
    if (e.keyCode == 40 && world[pacman.y+1][pacman.x] != 1){ //down
        pacman.y++;
        document.getElementById('pacman').style.transform = 'rotate(90deg)'
    }
    if(world[pacman.y][pacman.x]==2){
        world[pacman.y][pacman.x]=0;
        score+= 10;
        displayWorld();
        displayScore();
    }
    if(world[pacman.y][pacman.x]==3){
        world[pacman.y][pacman.x]=0;
        score+= 50;
        displayWorld();
        displayScore();
    }
    if(world[pacman.y][pacman.x]==0){
        world[pacman.y][pacman.x]=0;
        score+= 0;
        displayWorld();
        displayScore();
    }

    if(pacman.x==ghost.x && pacman.y==ghost.y){
        score = 0;
        document.getElementById("pacman").style.display='none';
        setTimeout(gameOver, 3000);
    }

    displayPacman();
    displayWorld();
    displayScore();
}
function gameOver(){
    alert("GAME OVER!!");
    }