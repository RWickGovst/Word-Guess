window.onload = function(){

var gameObjects = {
    people: ["daenerys", "tyrion", "sandor", "brienne", "eddard"],
    places: ["westeros", "stormlands", "kings-landings", "blackwater-bay", "highgarden"],
    things: ["sword", "dragon", "dire-wolf", "throne", "castle"]
}
var options;
var letters;
var category;
var word;
var strikes;

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var buttons = function(){
    myButtons = document.getElementsById('buttons');
    letters = document.createElement('ul');

    for(var i=0;i<alphabet.length;i++){
        letters.id='alphabet';
        list=document.createElement('li');
        list.id='letter';
        list.innerHTML=alphabet[i];
        check();
        myButtons.appendChild(list);
        console.log("buttons");
    }
} 
}
// lose gif https://media.giphy.com/media/cI6Qfr0bWjDWM/giphy.gif
// win gif https://media.giphy.com/media/1tGN00iMCj3Mc/giphy.gif