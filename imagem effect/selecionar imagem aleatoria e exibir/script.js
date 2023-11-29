function getRandomIcon() {
  
    const imgsArray = [
      "./img/icon-.net-framework.png",
      "./img/icon-angular.png",
      "./img/icon-c-sharp-logo.png",
      "./img/icon-css.png",
      "./img/icon-docker.png",
      "./img/icon-html-5.png",
      "./img/icon-java.png",
      "./img/icon-javascript.png",
      "./img/icon-mongodb.png",
      "./img/icon-mysql.png",
      "./img/icon-node-js.png",
      "./img/icon-postgres.png",
      "./img/icon-postman.png",
      "./img/icon-python.png",
      "./img/icon-sass.png",
      "./img/icon-spring-boot.png",
      "./img/icon-sql-server.png",
      "./img/icon-typescript.png"
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
  