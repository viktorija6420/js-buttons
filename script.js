const crazyButtons = document.querySelectorAll('.btn-crazy')

function moveButton(event){
  const button = event.target;
  const offsetLeft = Math.random() * (window.innerWidth - button.clientWidth);
  const offsetTop = Math.random()* (window.innerHeight - button.clientHeight);
  button.style.top = offsetTop;
  button.style.left = offsetLeft;
};

crazyButtons.forEach(button => button.addEventListener('mouseenter', moveButton));
