function check()
{
    var score = 0;
    var q1answer = document.getElementById('a1')
    var q1_2 = document.getElementById('a2')
    if(q1answer.checked == true)
    {
        score=score+10;
    }


    var q2answer = document.getElementById('a21')
    var q2_2 = document.getElementById('a22')
    if(q2answer.checked == true)
    {
        score=score+10;
    }
    

    var q3answer = document.getElementById('a31')
    var q3_2 = document.getElementById('a32')
    if(q3answer.checked == true)
    {
        score=score+10;
    }

    var q4answer = document.getElementById('a41')
    var q4_2 = document.getElementById('a42')
    if(q4answer.checked == true)
    {
        score=score+10;
    }

    var q5answer = document.getElementById('a52')
    var q5_2 = document.getElementById('a51')
    if(q5answer.checked == true)
    {
        score=score+10;
    }

    var q6answer = document.getElementById('a61')
    var q6_2 = document.getElementById('a62')
    if(q6answer.checked == true)
    {
        score=score+10;
    }

    var q7answer = document.getElementById('a72')
    var q7_2 = document.getElementById('a71')
    if(q7answer.checked == true)
    {
        score=score+10;
    }

    var q8answer = document.getElementById('a82')
    var q8_2 = document.getElementById('a81')
    if(q8answer.checked == true)
    {
        score=score+10;
    }

    var q9answer = document.getElementById('a92')
    var q9_2 = document.getElementById('a91')
    if(q9answer.checked == true)
    {
        score=score+10;
    }

    var q10answer = document.getElementById('a101')
    var q10_2 = document.getElementById('a102')
    if(q10answer.checked == true)
    {
        score=score+10;
    }

    
alert("YOUR SCORE IS"+score)
}