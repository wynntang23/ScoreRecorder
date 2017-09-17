var nameModal = document.getElementById("nameInputModal");
var scoreModal = document.getElementById("scoreInputModal");

var startBtn = document.getElementById("startBtn");
var addScore = document.getElementById("addScore");

var nameClose = document.getElementsByClassName("close")[0];
var scoreClose = document.getElementsByClassName("close")[1];

var nameUpdate = document.getElementById("nameUpdate");
var scoreUpdate = document.getElementById("scoreUpdate");

var iName1 = document.getElementById("iName1");
var iName2 = document.getElementById("iName2");
var iName3 = document.getElementById("iName3");
var iName4 = document.getElementById("iName4");

var pName1 = document.getElementById("pName1");
var pName2 = document.getElementById("pName2");
var pName3 = document.getElementById("pName3");
var pName4 = document.getElementById("pName4");

var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var score3 = document.getElementById("score3");
var score4 = document.getElementById("score4");

var sPName1 = document.getElementById("sPName1");
var sPName2 = document.getElementById("sPName2");
var sPName3 = document.getElementById("sPName3");
var sPName4 = document.getElementById("sPName4");

var totalScore1 = document.getElementById("totalScore1");
var totalScore2 = document.getElementById("totalScore2");
var totalScore3 = document.getElementById("totalScore3");
var totalScore4 = document.getElementById("totalScore4");

/*
startBtn.onclick = function () {
    "use strict";
    nameModal.style.display = "block";
};

nameClose.onclick = function () {
    "use strict";
    nameModal.style.display = "none";
};

scoreClose.onclick = function () {
    "use strict";
    scoreModal.style.display = "none";
};

// close window when click grey part
/* window.onclick = function (event) {
    "use strict";
    if (event.target === nameModal) {
        nameModal.style.display = "none";
    }
};*/

nameUpdate.onclick = function () {
    "use strict";
    pName1.innerHTML = iName1.value;
    pName2.innerHTML = iName2.value;
    pName3.innerHTML = iName3.value;
    pName4.innerHTML = iName4.value;
    sPName1.innerHTML = iName1.value;
    sPName2.innerHTML = iName2.value;
    sPName3.innerHTML = iName3.value;
    sPName4.innerHTML = iName4.value;
  //nameModal.style.display = "none";
};

addScore.onclick = function () {
    "use strict";
    scoreModal.style.display = "block";
};

function addRow() {
    "use strict";
    var currentRows = document.getElementById("scoreTable").rows.length;
    var insertTr = document.getElementById("scoreTable").insertRow(currentRows);
    var round= currentRows-1;
    var insertTd = insertTr.insertCell(0);
    insertTd.innerHTML = "Round "+round; //round number
    
    insertTd = insertTr.insertCell(1);
    insertTd.innerHTML = Number(score1.value);
    
    insertTd = insertTr.insertCell(2);
    insertTd.innerHTML = Number(score2.value)
    
    insertTd = insertTr.insertCell(3);
    insertTd.innerHTML = Number(score3.value);
    
    insertTd = insertTr.insertCell(4);
    insertTd.innerHTML = Number(score4.value);
    
    totalScore1.innerHTML = Number(totalScore1.innerHTML) + Number(score1.value);
    totalScore2.innerHTML = Number(totalScore2.innerHTML) + Number(score2.value);
    totalScore3.innerHTML = Number(totalScore3.innerHTML) + Number(score3.value);
    totalScore4.innerHTML = Number(totalScore4.innerHTML) + Number(score4.value);
}

scoreUpdate.onclick = function () {
    "use strict";
    addRow();
    //scoreModal.style.display = "none";
    score1.value = "0";
    score2.value = "0";
    score3.value = "0";
    score4.value = "0";
};