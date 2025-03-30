function calculate(operation) {
   
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');
    
   
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers";
        resultElement.classList.add('error');
        return;
    }
    
  
    resultElement.classList.remove('error');
    
  
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            resultElement.textContent = `${num1} + ${num2} = ${result}`;
            break;
        case 'subtract':
            result = num1 - num2;
            resultElement.textContent = `${num1} - ${num2} = ${result}`;
            break;
        case 'multiply':
            result = num1 * num2;
            resultElement.textContent = `${num1} × ${num2} = ${result}`;
            break;
        case 'divide':
            if (num2 === 0) {
                resultElement.textContent = "Cannot divide by zero";
                resultElement.classList.add('error');
                return;
            }
            result = num1 / num2;
            resultElement.textContent = `${num1} ÷ ${num2} = ${result}`;
            break;
    }
}