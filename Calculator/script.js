const display = document.getElementById('display');
let currentInput = '';
let resetDisplay = false;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            display.textContent = '0';
        } 
        else if (value === '=') {
            try {
                currentInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
                resetDisplay = true;
            } catch {
                display.textContent = 'Error';
                currentInput = '';
            }
        } 
        else if (value === 'OFF') {
            currentInput = '';
            display.textContent = '';
        } 
        else if (value === 'ON') {
            display.textContent = '0';
        }
        else if (value === '√') {
            currentInput = Math.sqrt(parseFloat(currentInput) || 0).toString();
            display.textContent = currentInput;
        }
        else {
            if (resetDisplay) {
                currentInput = '';
                resetDisplay = false;
            }
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
