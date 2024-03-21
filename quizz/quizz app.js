let counter = 0;
let res;
let response;
let totalmarks = 0;
let score = 0;
let result = document.getElementById("result");
let gained = document.getElementById("gained");
let total = document.getElementById("total");
xhr = new XMLHttpRequest();
xhr.open("GET", "https://quizapi.io/api/v1/questions?apiKey=JLxE2V5t30E3pc6sL5HpRXYoUDnBtHQKp0AIGJN1&difficulty=Easy&limit=20&tags=JavaScript", true);
xhr.onprogress = function () {
    console.log("Loading<:>:<:><:<:>:<:>:<:><:<>");
};
xhr.onload = function () {
    res = JSON.parse(xhr.responseText);
    response = res;
    loaded()
    console.log(res);
};
xhr.send();
function loaded() {
    html = ``;
    let question = document.getElementsByClassName("question")[0];
    let option1 = document.getElementById("option1");
    // console.log(response[counter].question);
    question.innerText = response[counter].question;
    let a = "<!-- hello -->";
    if (response[counter].answers.answer_a != null) {
        document.getElementById("label1").textContent = response[counter].answers.answer_a;
        document.getElementById("label1").style.display = "inline";
        document.getElementById("option1").style.display = "inline-block";

    }
    else {
        document.getElementById("label1").style.display = "none";
        document.getElementById("option1").style.display = "none";

    }
    if (response[counter].answers.answer_b != null) {
        document.getElementById("label2").style.display = "inline";
        document.getElementById("option2").style.display = "inline-block";
        document.getElementById("label2").innerText = response[counter].answers.answer_b;
    }
    else {
        document.getElementById("label2").style.display = "none";
        document.getElementById("option2").style.display = "none";
    }
    if (response[counter].answers.answer_c != null) {
        document.getElementById("label3").style.display = "inline";
        document.getElementById("option3").style.display = "inline-block";
        document.getElementById("label3").innerText = response[counter].answers.answer_c;
    }
    else {
        document.getElementById("label3").style.display = "none";
        document.getElementById("option3").style.display = "none";
    }
    if (response[counter].answers.answer_d != null) {
        document.getElementById("label4").style.display = "inline";
        document.getElementById("option4").style.display = "inline-block";
        document.getElementById("label4").innerText = response[counter].answers.answer_d;
    }
    else {
        document.getElementById("label4").style.display = "none";
        document.getElementById("option4").style.display = "none";

    }
    if (response[counter].answers.answer_e != null) {
        document.getElementById("label5").style.display = "inline";
        document.getElementById("option5").style.display = "inline-block";
        document.getElementById("label5").innerText = response[counter].answers.answer_e;
    }
    else {
        document.getElementById("label5").style.display = "none";
        document.getElementById("option5").style.display = "none";

    }
    if (response[counter].answers.answer_f != null) {

        document.getElementById("label6").style.display = "inline";
        document.getElementById("option6").style.display = "inline-block";
        document.getElementById("label6").innerText = response[counter].answers.answer_f;
    }
    else {
        document.getElementById("label6").style.display = "none";
        document.getElementById("option6").style.display = "none";

    }

}
let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    if (document.getElementById("option1").checked == true) {
        if (response[counter].correct_answer == "answer_a") {
            // document.getElementsByClassName("result")[0].display = "block"
            console.log("correct");
            right();
            score = score + 5;
        }
        else {
            console.log("Incorrect");
            wrong();
        }
    }
    else if (document.getElementById("option2").checked == true) {
        if (response[counter].correct_answer == "answer_b") {
            console.log("correct");
            right();
            score = score + 5;
        }
        else {
            console.log("Incorrect");
            wrong();
        }
    }
    else if (document.getElementById("option3").checked == true) {
        if (response[counter].correct_answer == "answer_c") {
            console.log("correct");
            right();
            score = score + 5;
        }
        else {
            console.log("Incorrect");
            wrong();
        }
    }
    else if (document.getElementById("option4").checked == true) {
        if (response[counter].correct_answer == "answer_d") {
            console.log("correct");
            right();
            score = score + 5;
        }
        else {
            console.log("Incorrect");
            wrong();
        }
    }
    else if (document.getElementById("option5").checked == true) {
        if (response[counter].correct_answer == "answer_e") {
            console.log("correct");
            right();
            score = score + 5;
        }
        else {
            console.log("Incorrect");
            wrong();
        }
    }
    else if (document.getElementById("option6").checked == true) {
        if (response[counter].correct_answer == "answer_f") {
            console.log("correct");
            right();
            score = score + 5;
        }
        else {
            console.log("Incorrect");
            wrong();
        }
    }



    document.getElementById("option1").checked = false;
    document.getElementById("option2").checked = false;
    document.getElementById("option3").checked = false;
    document.getElementById("option4").checked = false;
    document.getElementById("option5").checked = false;
    document.getElementById("option6").checked = false;
    counter++;
    loaded();
    totalmarks = totalmarks + 5;
    gained.innerText = `${score}`;
    total.innerText = `${totalmarks}`;
    // let inputs = document.getElementsByName("input");
    // console.log(document.getElementById("option1").checked);
    // document.getElementsByTagName("H1")[0].removeAttribute("class");
})
function right() {
    setTimeout(() => {
        result.innerText = "Correct answer"
        result.style.borderTop = "3px solid green";
        result.style.color = "green";
        result.style.display = "block";
        result.style.backgroundColor = "rgb(130,243,158)"
    }, 0);
    setTimeout(() => {
        result.style.display = "none";
    }, 1000);
}
function wrong() {
    setTimeout(() => {
        result.innerText = "Incorrect answer";
        result.style.borderTop = "3px solid rgb(216,43,43)";
        result.style.backgroundColor = "rgb(219,184,184)"
        result.style.color = "red";
        result.style.display = "block"
    }, 0);
    setTimeout(() => {
        result.style.display = "none";
    }, 1000);
}


// right();
// wrong();
