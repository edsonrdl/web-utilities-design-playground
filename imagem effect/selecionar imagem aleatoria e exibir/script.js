function getRandomIcon() {
  
    const imgsArray = [
      ".icons/icons8-c-sharp-logo-50.png",
      ".icons/icons8-java-50.png"
    ];
  
  
    return imgsArray[Math.floor(Math.random() * imgsArray.length)];
  }
  
  function getRandomPosition() {
    const container = document.getElementById('icon-container');
    const width = container.clientWidth;
    const height = container.clientHeight;
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    return { x, y };
  }
  
  function showIcon() {
    const imgSrc = getRandomIcon();
    const container = document.getElementById('icon-container');
  
  
    const imgElement = document.createElement('img');
    imgElement.className = 'icon';
    imgElement.setAttribute('src', imgSrc);
  
  
    const position = getRandomPosition();
    imgElement.style.left = position.x + 'px';
    imgElement.style.top = position.y + 'px';
    imgElement.style.visibility = 'visible';
  
  
    container.appendChild(imgElement);
  
  
    setTimeout(() => {
      imgElement.style.visibility = 'hidden';
    }, 2000);
  }
  
  setInterval(showIcon, 2000);
  