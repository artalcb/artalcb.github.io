document.querySelectorAll('.link-js').forEach(link => {
  link.addEventListener('click', e => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    e.preventDefault();
    link.style.pointerEvents = 'none';

     // Find the .starter div inside the clicked link
    const starterDiv = link.querySelector('.starter');
    if (starterDiv) {
      starterDiv.classList.remove('treecko'); 
      starterDiv.classList.remove('torchic'); 
      starterDiv.classList.remove('mudkip'); 
      
    }

    const rect = link.getBoundingClientRect();
    const startX = rect.left + rect.width / 2; // center X
    const startY = rect.top + rect.height / 2; // center Y

    // Create flying PNG
    const flyingImg = document.createElement('img');
    flyingImg.src = "img/pokeballpixel.png";
    flyingImg.className = 'pokethrow';
    flyingImg.style.left = `${startX-120}px`;
    flyingImg.style.top = `${startY+60}px`;
    starterDiv.appendChild(flyingImg);

    
    setTimeout(() => {
      flyingImg.remove(); 
      starterDiv.querySelector('img').setAttribute('src','img/smoke.gif');

    const staticBall = document.createElement('img');
    staticBall.src = "img/pokeballpixel.png";
    staticBall.className = 'pokestill';
    staticBall.style.left = `${startX-39}px`;
    staticBall.style.top = `${startY-38}px`;
    starterDiv.appendChild(staticBall);

    }, 500); 
    
    setTimeout(() => {
      window.location.href = link.href;
    }, 850);
  });

});
