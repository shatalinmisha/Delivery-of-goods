const formEl = document.querySelector('#form');
const nameErrorEl = document.querySelector("#name-error");
const numberEl = document.querySelectorAll('input[type="number"]');
const tableEl = document.querySelector('#table');
const tbody = document.querySelector('#tbody');

formEl.addEventListener("submit", function(event) {
    event.preventDefault();

    let hasError = false;

    numberEl.forEach(input => {
        if (parseFloat(input.value.trim()) < 0) {
            hasError = true;
        } 
    });

    if (hasError) {
        nameErrorEl.classList.remove("visually-hidden");// Показываем сообщение об ошибке
        return;// Прерываем выполнение функции
    } else {
        nameErrorEl.classList.add("visually-hidden"); // Убираем сообщение об ошибке (если оно было)
    }

    let trEl = document.createElement('tr');
    const inputEls = document.querySelectorAll('input');
    
    inputEls.forEach(input => {
        let result = input.value.trim();
        let thEl = document.createElement('th');
        thEl.textContent = result;
        trEl.append(thEl);
    });

    const numbers = Array.from(numberEl).map(input => parseFloat(input.value));
    const priceEl = (array) => array.reduce((a, b) => (a * b)/10).toFixed(2);
    let thEl = document.createElement('th');
    thEl.textContent = `${priceEl(numbers)} руб.`;
    trEl.append(thEl);
    tbody.append(trEl);
    formEl.reset();
});