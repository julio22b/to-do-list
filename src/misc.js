function showFormAndBlanket(form) {
    document.querySelector(`#${form}`).style.display = 'flex';
    document.querySelector('.blanket').style.display = 'block';
}

function clearInput() {
    document.getElementById('name').value = '';
    document.getElementById('name').textContent = '';
    document.getElementById('title').value = '';
    document.getElementById('title').textContent = '';
    document.getElementById('desc').value = '';
    document.getElementById('desc').textContent = '';
    document.getElementById('due').value = '';
    document.getElementById('due').textContent = '';
}

function hideFormAndBlanket(form) {
    document.querySelector(`#${form}`).style.display = 'none';
    document.querySelector('.blanket').style.display = 'none';
    clearInput();
}

function itemsFormNewCancel() {
    document.querySelector('#new-item').addEventListener('click', () => {
        showFormAndBlanket('items-form');
    });

    document.querySelector('.cancel-items').addEventListener('click', (e) => {
        e.preventDefault();
        hideFormAndBlanket('items-form');
    });
}

export { showFormAndBlanket, clearInput, hideFormAndBlanket, itemsFormNewCancel };
