document.addEventListener("DOMContentLoaded", ()=>{

    let multiPly = document.querySelector('.pow'),
        devide = document.querySelector('.share'),
        summ = document.querySelector('.plus'),
        left = document.querySelector('.minus');
    let input1 = document.querySelector('.first'),
        input2 = document.querySelector('.second'),
        input3 = document.querySelector('input.answer');

        function getNumber1 (){
            return Number(input1.value);
        }
        function getNumber2 (){
            return Number(input2.value);
        }

        function onButtonMultiply (){

                let sum = getNumber1()*getNumber2();
                
                alert(sum);
        };
        function onButtonDevide (){
            
                let sum = getNumber1()/getNumber2();

                alert(sum);
        };
        function onButtonSumm (){

                let sum = getNumber1()+getNumber2();

                alert(sum);
        };
        function onButtonSubstract (){

                let sum = getNumber1()-getNumber2();

                alert(sum);
        };

        multiPly.addEventListener('click', onButtonMultiply);
        devide.addEventListener('click', onButtonDevide);
        summ.addEventListener('click', onButtonSumm);
        left.addEventListener('click', onButtonSubstract);

})