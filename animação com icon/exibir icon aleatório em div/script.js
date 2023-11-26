function getRandomIcon() {
    const icons = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
    return icons[Math.floor(Math.random() * icons.length)];
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
    const container = document.getElementById('icon-container');
    const icon = document.createElement('div');
    icon.className = 'icon';
    icon.innerHTML = getRandomIcon();
    icon.style.left = getRandomPosition().x + 'px';
    icon.style.top = getRandomPosition().y + 'px';
    container.appendChild(icon);
    icon.style.visibility = 'visible';
    setTimeout(() => {
        icon.style.visibility = 'hidden';
    }, 2000); 
}

setInterval(showIcon, 3000); 