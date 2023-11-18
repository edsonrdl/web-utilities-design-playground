
function toggleItemBox(button) {
    const itemBox = document.getElementById('itemBox');
    itemBox.classList.toggle('show-box', !itemBox.classList.contains('show-box'));
  }

  document.addEventListener('DOMContentLoaded', function () {
    const itemButton = document.querySelector('.item-button');
    const itemBox = document.getElementById('itemBox');

    
    itemButton.addEventListener('mouseleave', function () {
      itemBox.classList.remove('show-box');
    });

   
    itemBox.addEventListener('mouseenter', function () {
      itemBox.classList.add('show-box');
    });

   
    document.querySelector('.all-order-table').addEventListener('mouseleave', function () {
      itemBox.classList.remove('show-box');
    });
  });