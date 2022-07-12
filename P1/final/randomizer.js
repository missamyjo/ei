
var introList = new Array("Fight", "March", "Human Rights", "Because", "Revolution", "Vote", "Still", "Smash");
var pointsList = new Array("the", "for", "are", "like", "we", "girl style", "out", "protest", "Love");
var sumList = new Array("Power", "Patriarchy", "Now", "Human Rights", "Feminism", "Persists", "Progress", "Tear sh*t up");

var meOne = "";

var pointOne = "This is Point One";
var intro = " ";
var sum = " ";
var bigArgue = $("bigArgue");
function setup() {
    createCanvas(612, 792);//this is the size of a letter-sized page in 72 dpi
    background(255);
    imageMode(CENTER);
}
function $(id) {
    return document.getElementById(id);
}


function changeThree() {

    var one = Math.random() * pointsList.length;
    one = Math.floor(one);

    var two = Math.random() * pointsList.length;
    two = Math.floor(two);
    while (one == two) {
        two = Math.random() * pointsList.length;
        two = Math.floor(two);
    }

    var three = Math.random() * pointsList.length;
    three = Math.floor(three);
    while (two == three || three == one) {
        three = Math.random() * pointsList.length;
        three = Math.floor(three);
    }

    var i = Math.random() * introList.length;
    i = Math.floor(i);

    var s = Math.random() * sumList.length;
    s = Math.floor(s);

    pointOne = pointsList[one];

    intro = introList[i];
    sum = sumList[s];





    wordOne.innerHTML = intro;
    wordTwo.innerHTML = pointOne;
    wordThree.innerHTML = sum;
}
