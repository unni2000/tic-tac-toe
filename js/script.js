var m=["X","O"];
var audio;
var turn=0;
var p=[];
var counter =[];
var winDigits=[7,56,73,84,146,273,292,448];
var gameOver;
var score=[0,0];
p[0]=prompt("Enter player 1 :");
p[1]=prompt("Enter player 2 :");
function beginGame(){
    document.getElementById("restart").style.display = "none";
    gameOver=false;
    counter=[0,0];
    var k=0;
    var innerDivs= "";
    for(i=1;i<=3;i++){
        innerDivs += '<div id="row-'+i+'">';
        for(j=1;j<=3;j++){
            innerDivs +='<div  onclick="markHere(this,'+2**k+')"></div>';
            k+=1;
        }
        innerDivs+='</div>';
    }
    document.getElementById("game-board").innerHTML = innerDivs;
    document.getElementById("game-message").innerText="its "+ p[turn] +"'s Turn";
}
function markHere(cDiv,value){
    if(!gameOver){
        cDiv.innerText=m[turn];
        counter[turn]+=value;
        if(isWin()){
            document.getElementById("game-message").innerText= p[turn] +" Won!!";
            audio = new Audio('../js/happy.mp3');
            window.focus();
            audio.play();
            document.getElementById("restart").style.display = "block";
        }
        else if(gameOver){
            document.getElementById("game-message").innerText="its a tie ";
            audio = new Audio('../js/sad.mp3');
            window.focus();
            audio.play();
            document.getElementById("restart").style.display = "block";
        }
        else{
        turn=turn+1;
        if (turn>1){
            turn=0;
        }
        cDiv.attributes["0"].nodeValue="";
        document.getElementById("game-message").innerText="its "+ p[turn] +"'s Turn";
        }
    }
}
function isWin(){
    for(i=0;i<winDigits.length;i++){
        if((counter[turn]&winDigits[i])== winDigits[i]){
            gameOver=true;
            return true;
        }
    }
    if (counter[0]+counter[1]==511){
        gameOver=true;
    }

}