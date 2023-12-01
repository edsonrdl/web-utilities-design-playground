function getRandomIcon() {

  const imgsArray = [
    "../imagens/icons/icon-.net-framework.png",
    "../imagens/icons/icon-angula.png",
    "../imagens/icons/icon-c-sharp-logo.png",
    "../imagens/icons/icon-css.png",
    "../imagens/icons/icon-docker.png",
    "../imagens/icons/icon-html-5.png",
    "../imagens/icons/icon-java.png",
    "../imagens/icons/icon-javascript.png",
    "../imagens/icons/icon-mongodb.png",
    "../imagens/icons/icon-mysql.png",
    "../imagens/icons/icon-node-js.png",
    "../imagens/icons/icon-postgres.png",
    "../imagens/icons/icon-postman.png",
    "../imagens/icons/icon-python.png",
    "../imagens/icons/icon-sass.png",
    "../imagens/icons/icon-spring-boot.png",
    "../imagens/icons/icon-sql-server.png",
    "../imagens/icons/icon-typescript.png"
  ];


  return imgsArray[Math.floor(Math.random() * imgsArray.length)];
};
function getRandomPositionDisplay() {
  const container = document.getElementById('container-exibi-icons');
  const widthContainer = container.clientWidth;
  const heightContainer = container.clientHeight;
  const width = widthContainer - 100;
  const height = heightContainer - 100;
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  return { x, y };
};

function showIcon() {
  const imgSrc = getRandomIcon();
  const container = document.getElementById('container-exibi-icons');

  const imgElement = document.createElement('img');
  imgElement.className = 'icon';
  imgElement.setAttribute('src', imgSrc);

  const position = getRandomPositionDisplay();
  imgElement.style.left = position.x + 'px';
  imgElement.style.top = position.y + 'px';
  imgElement.style.visibility = 'visible';

  container.appendChild(imgElement);


  setTimeout(() => {
    imgElement.style.visibility = 'hidden';
  }, 3000);
};

function activateDisplayIcons() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      // Limpe o último timeout antes de iniciar um novo
      clearTimeout(timeoutId);
      showIcon();
    }, 3000);
  }
};

function deactivateDisplayIcons() {
  clearInterval(intervalId);
  intervalId = null;
  console.log("Desativado");
}

function checkVisibility() {
  const mySectionDisplay = document.getElementById("container-exibi-icons");
  const boundingBox = mySectionDisplay.getBoundingClientRect();

  if (
    boundingBox.top >= 0 &&
    boundingBox.left >= 0 &&
    boundingBox.bottom <= window.innerHeight &&
    boundingBox.right <= window.innerWidth
  ) {
    activateDisplayIcons();
  } else {
    deactivateDisplayIcons();
  }
}

document.getElementById("container-exibi-icons").addEventListener("mouseover", checkVisibility);
document.getElementById("container-exibi-icons").addEventListener("mouseout", deactivateDisplayIcons);
window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);
window.addEventListener("load", checkVisibility);