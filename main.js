var details = document.getElementById('startButton');
details.addEventListener('click', detail);
function detail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var classes = document.getElementById('class').value;
    var section = document.getElementById('section').value;
    var roll = document.getElementById('roll').value;

    var alertMessage = 'Details are not valid! Please enter valid details'
    if (name == "" || email == "" || mobile == "" || classes == "select" || section == "select" || roll == "") {
        alert(alertMessage)
        location.reload();
    }
    console.log(name);
    console.log(email);
    console.log(mobile);
    console.log(classes);
    console.log(section);
    console.log(roll);
}

function onClick(id) {
    var listofIds = ["studentDetails", "quizQuestion"];
    for (i = 0; i < listofIds.length; i++) {
        if (listofIds[i] == id) {
            document.getElementById(id).style.visibility = "visible";
            document.getElementById("count").style = "color: rgb(33, 206, 33);";
            startTimer();

            var marking = document.getElementById('marking');
            marking.style.visibility = 'visible'

        }
        else {
            document.getElementById(listofIds[i]).style.visibility = "hidden";
        }
    }
}

function OnClick(ids) {

    var questions = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10"];
    for (i = 0; i < questions.length; i++) {

        if (questions[i] == ids) {
            document.getElementById(ids).style.visibility = "visible";
        }

        else {
            document.getElementById(questions[i]).style.visibility = "hidden";
        }

    }
}

function startTimer() {
    var counter = 900;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert('sorry, out of time');
            clearInterval(counter);
            location.reload()
        }
    }, 1000);
}

let correctAnswer;
function solutions() {


    var answer1 = document.getElementsByClassName('answer1');
    for (i = 0; i < answer1.length; i++) {
        if (answer1[i].checked) {
            if (answer1[0].checked == true || answer1[1].checked == true || answer1[2].checked == true || answer1[3].checked == true) {


                var replace = document.getElementById('td2_1')
                correctAnswer = 0;
                if (answer1[i].value == "3/8") {
                    replace.innerText = '✔ Answer is correct';
                    replace.style.backgroundColor = 'rgb(27, 220, 27)';
                    correctAnswer += 1;

                    var savebtn1 = document.getElementById('savebtn1');
                    savebtn1.disabled = true;
                }
                else {
                    replace.innerText = `✘ Wrong Anwer! 
                                    Correct answer is 3/8`
                    replace.style.backgroundColor = '#f64f59'
                    correctAnswer += 0;

                    var savebtn1 = document.getElementById('savebtn1');
                    savebtn1.disabled = true;
                }

                console.log(replace.innerText)
                var name = document.getElementById('name').value;
                localStorage.setItem(name, correctAnswer)

                var selected1 = document.getElementById('id_1');
                selected1.style.backgroundColor = '#3498db';

            }
            var savebtn1 = document.getElementById('savebtn1');
            savebtn1.disabled = true;
        }

    }




    var answer2 = document.getElementsByClassName('answer2');
    for (i = 0; i < answer2.length; i++) {
        if (answer2[i].checked) {
            if (answer2[0].checked == true || answer2[1].checked == true || answer2[2].checked == true || answer2[3].checked == true) {


                var replace = document.getElementById('td2_2')

                if (answer2[i].value == "7") {
                    replace.innerText = '✔ Answer is correct'

                    replace.style.backgroundColor = 'rgb(27, 220, 27)'
                    correctAnswer += 1;

                    var savebtn2 = document.getElementById('savebtn2');
                    savebtn2.disabled = true;
                }
                else {
                    replace.innerText = `✘ Wrong Anwer!
                                    correct answer is 7`
                    replace.style.backgroundColor = '#f64f59'
                    correctAnswer += 0;

                    var savebtn2 = document.getElementById('savebtn2');
                    savebtn2.disabled = true;
                }
                var name = document.getElementById('name').value;
                localStorage.setItem(name, correctAnswer)

                var selected2 = document.getElementById('id_2');
                selected2.style.backgroundColor = '#3498db';


            }
            var savebtn2 = document.getElementById('savebtn2');
            savebtn2.disabled = true;
        }
    }


    var answer3 = document.getElementsByClassName('answer3');
    for (i = 0; i < answer3.length; i++) {
        if (answer3[i].checked) {
            if (answer3[0].checked == true || answer3[1].checked == true || answer3[2].checked == true || answer3[3].checked == true) {


                var replace = document.getElementById('td2_3')

                if (answer3[i].value == "486") {
                    replace.innerText = '✔ Answer is correct'

                    replace.style.backgroundColor = 'rgb(27, 220, 27)'
                    correctAnswer += 1;

                    var savebtn3 = document.getElementById('savebtn3');
                    savebtn3.disabled = true;
                }
                else {
                    replace.innerText = `✘ Wrong Anwer!
                                    Correct answer is 486`
                    replace.style.backgroundColor = '#f64f59'
                    correctAnswer += 0;

                    var savebtn3 = document.getElementById('savebtn3');
                    savebtn3.disabled = true;
                }
                var name = document.getElementById('name').value;
                localStorage.setItem(name, correctAnswer);

                var selected3 = document.getElementById('id_3');
                selected3.style.backgroundColor = '#3498db';


            }
            var savebtn3 = document.getElementById('savebtn3');
            savebtn3.disabled = true;
        }
    }


    var answer4 = document.getElementsByClassName('answer4');
    for (i = 0; i < answer4.length; i++) {
        if (answer4[i].checked) {
            if (answer4[0].checked == true || answer4[1].checked == true || answer4[2].checked == true || answer4[3].checked == true) {


                var replace = document.getElementById('td2_4')

                if (answer4[i].value == "64") {
                    replace.innerText = '✔ Answer is correct'

                    replace.style.backgroundColor = 'rgb(27, 220, 27)'
                    correctAnswer += 1;

                    var savebtn4 = document.getElementById('savebtn4');
                    savebtn4.disabled = true;
                }
                else {
                    replace.innerText = `✘ Wrong Anwer! 
                                    Correct answer is 64`
                    replace.style.backgroundColor = '#f64f59'
                    correctAnswer += 0;

                    var savebtn4 = document.getElementById('savebtn4');
                    savebtn4.disabled = true;
                }
                var name = document.getElementById('name').value;
                localStorage.setItem(name, correctAnswer);

                var selected4 = document.getElementById('id_4');
                selected4.style.backgroundColor = '#3498db';


            }
            var savebtn4 = document.getElementById('savebtn4');
            savebtn4.disabled = true;
        }
    }


    var answer5 = document.getElementsByClassName('answer5');
    for (i = 0; i < answer5.length; i++) {
        if (answer5[i].checked) {
            if (answer5[0].checked == true || answer5[1].checked == true || answer5[2].checked == true || answer5[3].checked == true) {


                var replace = document.getElementById('td2_5')

                if (answer5[i].value == "$460") {
                    replace.innerText = '✔ Answer is correct'

                    replace.style.backgroundColor = 'rgb(27, 220, 27)'
                    correctAnswer += 1;

                    var savebtn5 = document.getElementById('savebtn5');
                    savebtn5.disabled = true;
                }
                else {
                    replace.innerText = `✘ Wrong Anwer! 
                                    Correct answer is $460`
                    replace.style.backgroundColor = '#f64f59'
                    correctAnswer += 0;

                    var savebtn5 = document.getElementById('savebtn5');
                    savebtn5.disabled = true;
                }
                var name = document.getElementById('name').value;
                localStorage.setItem(name, correctAnswer)

                var selected5 = document.getElementById('id_5');
                selected5.style.backgroundColor = '#3498db';


            }
            var savebtn5 = document.getElementById('savebtn5');
            savebtn5.disabled = true;
        }
    }

    var answer6 = document.getElementsByClassName('answer6');
    for (i = 0; i < answer6.length; i++) {
        if (answer6[i].checked) {
            if (answer6[0].checked == true || answer6[1].checked == true || answer6[2].checked == true || answer6[3].checked == true) {


                var replace = document.getElementById('td2_6')

                if (answer6[i].value == "3/2") {
                    replace.innerText = '✔ Answer is correct'

                    replace.style.backgroundColor = 'rgb(27, 220, 27)'
                    correctAnswer += 1;

                    var savebtn6 = document.getElementById('savebtn6');
                    savebtn6.disabled = true;
                }
                else {
                    replace.innerText = `✘ Wrong Anwer! 
                                    Correct answer is 3/2`
                    replace.style.backgroundColor = '#f64f59'
                    correctAnswer += 0;

                    var savebtn6 = document.getElementById('savebtn6');
                    savebtn6.disabled = true;
                }
                var name = document.getElementById('name').value;
                localStorage.setItem(name, correctAnswer);

                var selected6 = document.getElementById('id_6');
                selected6.style.backgroundColor = '#3498db';


            }
            
        }
    }


    var answer7 = document.getElementsByClassName('answer7');
    for (i = 0; i < answer7.length; i++) {
        if (answer7[i].checked) {
            if (answer7[0].checked == true || answer7[1].checked == true || answer7[2].checked == true || answer7[3].checked == true) {


                var replace = document.getElementById('td2_7')

                if (answer7[i].value == "4x") {
                    replace.innerText = '✔ Answer is correct'

                    replace.style.backgroundColor = 'rgb(27, 220, 27)'
                    correctAnswer += 1;

                    var savebtn7 = document.getElementById('savebtn7');
                    savebtn7.disabled = true;
                }
                else {
                    replace.innerText = `✘ Wrong Anwer! 
                                    Correct answer is 4x`
                    replace.style.backgroundColor = '#f64f59'
                    correctAnswer += 0;

                    var savebtn7 = document.getElementById('savebtn7');
                    savebtn7.disabled = true;
                }
                var name = document.getElementById('name').value;
                localStorage.setItem(name, correctAnswer);

                var selected7 = document.getElementById('id_7');
                selected7.style.backgroundColor = '#3498db';


            }
            var savebtn7 = document.getElementById('savebtn7');
            savebtn7.disabled = true;
        }
    }


    var answer8 = document.getElementsByClassName('answer8');
    for (i = 0; i < answer8.length; i++) {
        if (answer8[i].checked) {
            if (answer8[0].checked == true || answer8[1].checked == true || answer8[2].checked == true || answer8[3].checked == true) {


                var replace = document.getElementById('td2_8')

                if (answer8[i].value == "3/28") {
                    replace.innerText = '✔ Answer is correct'

                    replace.style.backgroundColor = 'rgb(27, 220, 27)'
                    correctAnswer += 1;

                    var savebtn8 = document.getElementById('savebtn8');
                    savebtn8.disabled = true;
                }
                else {
                    replace.innerText = `✘ Wrong Anwer! 
                                    Correct answer is 3/28`
                    replace.style.backgroundColor = '#f64f59'
                    correctAnswer += 0;

                    var savebtn8 = document.getElementById('savebtn8');
                    savebtn8.disabled = true;
                }
                var name = document.getElementById('name').value;
                localStorage.setItem(name, correctAnswer);

                var selected8 = document.getElementById('id_8');
                selected8.style.backgroundColor = '#3498db';


            }
            var savebtn8 = document.getElementById('savebtn8');
            savebtn8.disabled = true;
        }
    }
    

    var answer9 = document.getElementsByClassName('answer9');
    for (i = 0; i < answer9.length; i++) {
        if (answer9[i].checked) {
            if (answer9[0].checked == true || answer9[1].checked == true || answer9[2].checked == true || answer9[3].checked == true) {


                var replace = document.getElementById('td2_9')

                if (answer9[i].value == "1 hour and 27 minutes") {
                    replace.innerText = '✔ Answer is correct'

                    replace.style.backgroundColor = 'rgb(27, 220, 27)'
                    correctAnswer += 1;

                    var savebtn9 = document.getElementById('savebtn9');
                    savebtn9.disabled = true;
                }
                else {
                    replace.innerText = `✘ Wrong Anwer! 
                                    Correct answer is 
                                    1 hour and 27 minutes`
                    replace.style.backgroundColor = '#f64f59'
                    correctAnswer += 0;

                    var savebtn9 = document.getElementById('savebtn9');
                    savebtn9.disabled = true;
                }
                var name = document.getElementById('name').value;
                localStorage.setItem(name, correctAnswer);

                var selected9 = document.getElementById('id_9');
                selected9.style.backgroundColor = '#3498db';


            }
            var savebtn9 = document.getElementById('savebtn9');
            savebtn9.disabled = true;
        }
    }


    var answer10 = document.getElementsByClassName('answer10');
    for (i = 0; i < answer10.length; i++) {
        if (answer10[i].checked) {
            if (answer10[0].checked == true || answer10[1].checked == true || answer10[2].checked == true || answer10[3].checked == true) {


                var replace = document.getElementById('td2_10')

                if (answer10[i].value == "2/5") {
                    replace.innerText = '✔ Answer is correct'

                    replace.style.backgroundColor = 'rgb(27, 220, 27)'
                    correctAnswer += 1;

                    var savebtn10 = document.getElementById('savebtn10');
                    savebtn10.disabled = true;
                }
                else {
                    replace.innerText = `✘ Wrong Anwer! 
                                    Correct answer is 2/5`
                    replace.style.backgroundColor = '#f64f59'
                    correctAnswer += 0;

                    var savebtn10 = document.getElementById('savebtn10');
                    savebtn10.disabled = true;
                }

                var name = document.getElementById('name').value;
                localStorage.setItem(name, correctAnswer);

                var selected10 = document.getElementById('id_10');
                selected10.style.backgroundColor = '#3498db';


            }
            var savebtn10 = document.getElementById('savebtn10');
            savebtn10.disabled = true;
        }

    }
    // var savebtn = ['savebtn1', 'savebtn2', 'savebtn3', 'savebtn4', 'savebtn5', 'savebtn6', 'savebtn7', 'savebtn8', 'savebtn9', 'savebtn10'];
    // for(k=0; k<savebtn.length; k++){
    //     document.getElementById(savebtn[k]).disabled = true;

    // }
}

function submit() {
    var name = document.getElementById('name').value;
    var result = localStorage.getItem(name)
    console.log(result)
    if (result >= 4) {

        resultMessage = `Dear ${name}! 
    Your final score is ${result} out of 10.
    Congratulation! You passed.`
        alert(resultMessage);
    }
    else {
        resultMessage = `Dear ${name}! 
    Your final score is ${result} out of 10.
    Sorry! You failed in this test.`
        alert(resultMessage);
    }
    location.reload();
}