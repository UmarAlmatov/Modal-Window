`use strict`;

const modalWindow = document.querySelector('.modal-window');

const overlay = document.querySelector('.overlay');

const btnCloseModalWindow = document.querySelector('.close-modal-window');

const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');

const showModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');

  //  modalWindow.style.display = 'block';
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

// console.log(btnsShowModalWindow);

for (let i = 0; i < btnsShowModalWindow.length; i++) {
  btnsShowModalWindow[i].addEventListener('click', showModalWindow);
}

btnCloseModalWindow.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});
