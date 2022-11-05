document.addEventListener("DOMContentLoaded", () => {

        let multiPly = document.querySelector('.pow'),
                devide = document.querySelector('.share'),
                summ = document.querySelector('.plus'),
                left = document.querySelector('.minus');
        let input1 = document.querySelector('.first'),
                input2 = document.querySelector('.second'),
                input3 = document.querySelector('input.answer'),
                result;

        function makeOperation(operationCode) {

                let number1 = Number(input1.value);
                let number2 = Number(input2.value);

                if (operationCode === '*') {
                        result = number1 * number2;

                } else if (operationCode === '/') {
                        result = number1 / number2;

                } else if ((operationCode === '+')) {
                        result = number1 + number2;

                } else if ((operationCode === '-')) {
                        result = number1 - number2;
                } else {
                        alert('Operation is unknown');
                }
                alert(result);
        }

        function onButtonMultiply() {
                makeOperation('*');
        }
        function onButtonDevide() {
                makeOperation('/');
        }
        function onButtonSumm() {
                makeOperation('+');
        }
        function onButtonSubstract() {
                makeOperation('-');
        }

        multiPly.addEventListener('click', onButtonMultiply);
        devide.addEventListener('click', onButtonDevide);
        summ.addEventListener('click', onButtonSumm);
        left.addEventListener('click', onButtonSubstract);

})