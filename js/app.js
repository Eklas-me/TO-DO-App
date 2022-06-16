const add = document.querySelector('#add');
const showTODO = document.querySelector('#list');




add.onclick = function () {
  const input = document.querySelector('.todo').value;
  showTODO.innerHTML += `<li><span>${input}</span>
  <div class="icons">
  <button><i class="fa-solid fa-pen-to-square"></i></button>
  <button><i class="fa-solid fa-trash"></i></button>
  </div></li>`;

}