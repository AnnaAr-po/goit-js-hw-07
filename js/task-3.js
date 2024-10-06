const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const deleteInput = nameInput.value.trim();

  nameOutput.textContent = deleteInput === '' ? 'Anonymous' : deleteInput;
});
