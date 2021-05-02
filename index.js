const queueArr = JSON.parse(localStorage.getItem('queue')) || [];
const input = document.querySelector('input');
const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove');
const queueContainer = document.querySelector('.queue-wrapper');

const render = () => {
  queueContainer.innerHTML = '';
  queueArr.forEach((item) => {
    let divNode = document.createElement('div');
    divNode.classList.add('nodeStyle');
    divNode.innerHTML += item;
    queueContainer.appendChild(divNode);
  });
};

const addToStorage = () => {
  localStorage.setItem('queue', JSON.stringify(queueArr));
};

const addToTheQueue = (e) => {
  e.preventDefault();
  if (input.value && queueArr.length < 32) {
    queueArr.push(input.value);
    addToStorage();
    removeBtn.disabled = false;
    render();
    input.value = '';
  } else if (queueArr.length > 31) {
    alert('Queue is full!!!');
    return;
  } else {
    alert('input empty');
    return;
  }
};

const removeFromTheQueue = (e) => {
  e.preventDefault();
  if (queueArr.length === 0) {
    alert('Nothing to delete');
    removeBtn.disabled = true;
    return;
  }
  queueArr.shift();
  addToStorage();
  render();
};

addBtn.addEventListener('click', addToTheQueue);
removeBtn.addEventListener('click', removeFromTheQueue);
document.addEventListener('DOMContentLoaded', render);
