const question1 = document.querySelector(".x");
const question2 = document.querySelector(".y");
const question3 = document.querySelector(".z");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");


btn1.addEventListener("click",function(){
    if(btn1.classList.contains("fa-plus")){
        btn1.classList.remove('fa-plus');
        btn1.classList.add('fa-minus');
        question1.style.display = "none";
    }else{
        btn1.classList.remove('fa-minus');
        btn1.classList.add('fa-plus');
        question1.style.display = "block";
    }
});

btn2.addEventListener("click",function(){
    if(btn2.classList.contains("fa-plus")){
        btn2.classList.remove('fa-plus');
        btn2.classList.add('fa-minus');
        question2.style.display = "none";
    }else{
        btn2.classList.remove('fa-minus');
        btn2.classList.add('fa-plus');
        question2.style.display = "block";
    }
});

btn3.addEventListener("click",function(){
    if(btn3.classList.contains("fa-plus")){
        btn3.classList.remove('fa-plus');
        btn3.classList.add('fa-minus');
        question3.style.display = "none";
    }else{
        btn3.classList.remove('fa-minus');
        btn3.classList.add('fa-plus');
        question3.style.display = "block";
    }
});

