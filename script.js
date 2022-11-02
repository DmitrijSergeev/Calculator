document.addEventListener("DOMContentLoaded", () => {

        let multiPly = document.querySelector('.pow'),
                devide = document.querySelector('.share'),
                summ = document.querySelector('.plus'),
                left = document.querySelector('.minus');
        let input1 = document.querySelector('.first'),
                input2 = document.querySelector('.second'),
                input3 = document.querySelector('input.answer'),
                result;

        function getNumber1() {
                return Number(input1.value);
        }
        function getNumber2() {
                return Number(input2.value);
        }
        function makeOperation(operationCode) {
                if (operationCode === '*') {
                        result = getNumber1() * getNumber2();
                } else if (operationCode === '/') {
                        result = getNumber1() / getNumber2();
                } else if ((operationCode === '+')) {
                        result = getNumber1() + getNumber2();
                } else if ((operationCode === '-')) {
                        result = getNumber1() - getNumber2();
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