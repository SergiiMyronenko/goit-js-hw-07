// посилання на елементи, значення яких буде змінюватись
const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

// додаємо подію
input.addEventListener('input', function() {
//trmming

const trimmedInput = this.value.trim();

// 

if(trimmedInput) {
    output.textContent = trimmedInput;
} else {
    output.textContent = "Anonymous";
}

})