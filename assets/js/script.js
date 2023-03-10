

//   scroll

  const slider = document.querySelector('.team_list');
  const sliders = document.querySelector('.product_list');

  let isDown = false;
  let startX;
  let scrollLeft;
  
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });


  sliders.addEventListener('mousedown', (e) => {
    isDown = true;
    sliders.classList.add('active');
    startX = e.pageX - sliders.offsetLeft;
    scrollLeft = sliders.scrollLeft;
  });
  sliders.addEventListener('mouseleave', () => {
    isDown = false;
    sliders.classList.remove('active');
  });
  sliders.addEventListener('mouseup', () => {
    isDown = false;
    sliders.classList.remove('active');
  });
  sliders.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliders.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    sliders.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });





  

drawer = document.querySelector(".drawer")
drawer.onclick = function () {
    navBar = document.querySelector(".right")
    navBar.classList.toggle("header_active")
}




