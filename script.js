const showNum = document.querySelector('.show-num');
const generateNum = document.querySelector('.generate-num');
const randomSection = document.querySelector('.random');

generateNum.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * 100);

  showNum.innerHTML = randomNum;
  randomSection.classList.add('show');
})
