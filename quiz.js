function answer(){
    var c=0;
    var k1=document.quiz.q1.value;
    var k2=document.quiz.q2.value;
    var k3=document.quiz.q3.value;
    var k4=document.quiz.q4.value;
    var k5=document.quiz.q5.value;
    var text=document.getElementById('text');
    if(k1=="1928"){c++}
    if(k2=="Lala Amarnath"){c++}
    if(k3=="Virat Kohli"){c++}
    if(k4=="Triangular Tournament"){c++}
    if(k5=="Canada"){c++}
    quiz.style.display="none";
    if(c>=4){
        text.textContent="Yes";
    }
    else if(c<=1){
        text.textContent="No";
    }
    else{
        text.textContent="Maybe";
    }
}