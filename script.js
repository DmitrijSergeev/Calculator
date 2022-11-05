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

        function onOperationButtonClick(eventObject){
                let clickedElement = eventObject.currentTarget;
                let operation = clickedElement.innerHTML;
                makeOperation(operation);
        }

        multiPly.addEventListener('click', onOperationButtonClick);
        devide.addEventListener('click', onOperationButtonClick);
        summ.addEventListener('click', onOperationButtonClick);
        left.addEventListener('click', onOperationButtonClick);

})