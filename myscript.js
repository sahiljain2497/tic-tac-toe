$(document).ready(function(){
    var turn='X';
    var compturn="O";
    var arr=[];
    var count=0;
#thses check turns \
$('#turnX').click(function(){
    turn='X';
    compturn='O';
    $("#turnX").addClass("btn-primary");
    $('#turnO').removeClass("btn-primary");
    reset();
});
$('#turnO').click(function(){
    turn='O';
    compturn='X';
    $("#turnO").addClass("btn-primary");
    $('#turnX').removeClass("btn-primary");
    reset();
});

function reset(){
    $('.square').html("#");
    arr=['#','#','#','#','#','#','#','#','#'];
    count=0;
}    
#these starts the game
function startGame(){
function checkWin(move){
    console.log('entered');
    if(arr[0]==move && arr[1]==move && arr[2]==move){
        alert('Player'+move+' Won.');
        reset();
        return true;
    }
    else if(arr[0]==move && arr[3]==move && arr[6]==move){
        alert('Player'+move+' Won.' );
        reset();
       return true;
    }
    else if(arr[0]==move && arr[4]==move && arr[8]==move){
        alert('Player'+move+' Won.' );
        reset();
        return true;
    }
    else if(arr[1]==move && arr[4]==move && arr[7]==move){
        alert('Player'+move+' Won.' );
        reset();
        return true;
    }
    else if(arr[2]==move && arr[5]==move && arr[8]==move){
        alert('Player'+move+' Won.' );
        reset();
        return true;
    }
    else if(arr[3]==move && arr[4]==move && arr[5]==move){
        alert('Player'+move+' Won.' );
        reset();
        return true;
    }
    else if(arr[6]==move && arr[7]==move && arr[8]==move){
        alert('Player'+move+' Won.' );
        reset();
        return true;
    }
    else if(arr[2]==move && arr[4]==move && arr[6]==move){
        alert('Player'+move+' Won.' );
        reset();
        return true;
    }
    else
    return false;
}
    
function playerTurn(){

    $('.square-1').click(function(){
    var spot=$('.square-1').html();
    if(spot==="#"){
    arr[0]=turn;    
    $('.square-1').html(turn);
        win=checkWin(turn);
        gameTurn=false;
        count++;
        if(count==9 || win==true){
            reset();
            alert("Game Over");
        }
        console.log(win);
        if(count!=9 && win==false){
        console.log(win);
        computerTurn();
        win=checkWin(compturn);        
        }
    }
}); 
$('.square-2').click(function(){
    var spot=$('.square-2').html();
    if(spot==="#"){
        arr[1]=turn;
    $('.square-2').html(turn);
        win=checkWin(turn);
        gameTurn=false;
        count++;
        if(count==9 || win==true){
            reset();
            alert("Game Over");
        }
        if(count!=9 && win==false){
        console.log(win);
        computerTurn();
        win=checkWin(compturn);        
        }
    }
});
$('.square-3').click(function(){
    var spot=$('.square-3').html();
    if(spot==="#"){
        arr[2]=turn;
    $('.square-3').html(turn);
        win=checkWin(turn);
        gameTurn=false;
        count++;
        if(count==9 || win==true){
            reset();
            alert("Game Over");
        }
        if(count!=9 && win==false){
            console.log(win);
        computerTurn();
        win=checkWin(compturn);        
        }
}
});
$('.square-4').click(function(){
    var spot=$('.square-4').html();
    if(spot==="#"){
        arr[3]=turn;
    $('.square-4').html(turn);
        win=checkWin(turn);
        gameTurn=false;
        count++;
        if(count==9 || win==true){
            reset();
            alert("Game Over");
        }
        if(count!=9 && win==false){
            console.log(win);
        computerTurn();
        win=checkWin(compturn);        
        }
    }
});
$('.square-5').click(function(){
    var spot=$('.square-5').html();
    if(spot==="#"){
        arr[4]=turn;
    $('.square-5').html(turn);
        win=checkWin(turn);
        gameTurn=false;
        count++;
if(count==9 || win==true){
            reset();
            alert("Game Over");
        }if(count!=9 && win==false){
        console.log(win);
            computerTurn();
        win=checkWin(compturn);        
        }
}});
$('.square-6').click(function(){
    var spot=$('.square-6').html();
    if(spot==="#"){
        arr[5]=turn;
    $('.square-6').html(turn);
        win=checkWin(turn);
        gameTurn=false;
        count++;
if(count==9 || win==true){
            reset();
            alert("Game Over");
        }
        if(count!=9 && win==false){
        console.log(win);    
        computerTurn();
        win=checkWin(compturn);        
        }
}});
$('.square-7').click(function(){
    var spot=$('.square-7').html();
    if(spot==="#"){
        arr[6]=turn;
    $('.square-7').html(turn);
        win=checkWin(turn);
        gameTurn=false;
         count++;
if(count==9 || win==true){
            reset();
            alert("Game Over");
        }
        if(count!=9 && win==false){
        console.log(win);
        computerTurn();
        win=checkWin(compturn);        
        }
}});
$('.square-8').click(function(){
    var spot=$('.square-8').html();
    if(spot==="#"){
        arr[7]=turn;
    $('.square-8').html(turn);
        win=checkWin(turn);
        gameTurn=false;
        count++;
        if(count==9 || win==true){
            reset();
            alert("Game Over");
        }
        if(count!=9 && win==false){
        console.log(win);
        computerTurn();
        win=checkWin(compturn);        
        }
}});
$('.square-9').click(function(){
    var spot=$('.square-9').html();
    if(spot==="#"){
        arr[8]=turn;
    $('.square-9').html(turn);
        win=checkWin(turn);
        gameTurn=false;
        count++;
        if(count==9 || win==true){
            reset();
            alert("Game Over");
        }
        if(count!=9 && win==false){
        console.log(win);
        computerTurn();
        win=checkWin(compturn);        
        }
}});    
}
function computerTurn(){
    while(gameTurn==false){
    var x= (Math.random()*9).toFixed();
    //console.log(x);
    var check=$('.square-'+x).html();
    //console.log(check);
    if(check==="#"){
        arr[x-1]=compturn;
        console.log(arr);
        $('.square-'+x).html(compturn);
        gameTurn=true;
        count++;
    }
}    
}
//*********Upper Tested Code Don't Change********    
var gameTurn=true;
var win=false;    
playerTurn();
    
}
    
$('#start').click(function(){
   startGame(); 
    $('.message').html("Game Started");
});
});


    