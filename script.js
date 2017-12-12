const crazyButton = document.querySelector('.btn-crazy')
crazyButton.addEventListener('mouseenter', moveButton);

function moveButton(){
  const offsetLeft = Math.random();
  const offsetTop = Math.random();
  crazyButton.style.top = offsetTop;
  crazyButton.style.left = offsetLeft;
  console.log(offsetLeft);
  console.log(offsetTop);
};
