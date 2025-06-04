    const display = document.getElementById('display');

    function appendToDisplay(value) {
      if (display.value === '0' || display.value === 'Erreur') {
        display.value = value;
      } else {
        display.value += value;
      }
    }

    function clearDisplay() {
      display.value = '0';
    }

    function calculate() {
      try {
        const result = eval(display.value);
        if (isFinite(result)) {
          display.value = result;
        } else {
          display.value = 'Erreur';
        }
      } catch (e) {
        display.value = 'Erreur';
      }
    }

    // Gestion des touches du clavier
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')') {
        appendToDisplay(key);
      } else if (key === 'Enter') {
        calculate();
      } else if (key === 'Escape') {
        clearDisplay();
      }
    });
    console.log("germin")