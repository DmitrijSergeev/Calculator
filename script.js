document.addEventListener("DOMContentLoaded", ()=>{

    let multiPly = document.querySelector('.pow'),
        devide = document.querySelector('.share'),
        summ = document.querySelector('.plus'),
        left = document.querySelector('.minus');

        function onButtonMultiply (){
            let input1 = document.querySelector('.first'),
                input2 = document.querySelector('.second');

                let number1 = Number(input1.value);
                let number2 = Number(input2.value);

                let sum = number1*number2;

                alert(sum);
        };
        function onButtonDevide (){
            let input1 = document.querySelector('.first'),
                input2 = document.querySelector('.second');

                let number1 = Number(input1.value);
                let number2 = Number(input2.value);

                let sum = number1/number2;

                alert(sum);
        };
        function onButtonSumm (){
            let input1 = document.querySelector('.first'),
                input2 = document.querySelector('.second');

                let number1 = Number(input1.value);
                let number2 = Number(input2.value);

                let sum = number1+number2;

                alert(sum);
        };
        function onButtonSubstract (){
            let input1 = document.querySelector('.first'),
                input2 = document.querySelector('.second');

                let number1 = Number(input1.value);
                let number2 = Number(input2.value);

                let sum = number1-number2;

                alert(sum);
        };

        multiPly.addEventListener('click', onButtonMultiply);
        devide.addEventListener('click', onButtonDevide);
        summ.addEventListener('click', onButtonSumm);
        left.addEventListener('click', onButtonSubstract);

})