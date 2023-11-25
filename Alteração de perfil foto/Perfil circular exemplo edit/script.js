document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const profileImage = document.getElementById('profileImage');
    const previewImage = document.getElementById('previewImage');
    const previewContainer = document.getElementById('previewContainer');
  
    fileInput.addEventListener('change', handleFileSelect);
    profileImage.addEventListener('click', triggerFileInput);
  
    function handleFileSelect(event) {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = function (e) {
          const imageUrl = e.target.result;
          profileImage.style.backgroundImage = `url(${imageUrl})`;
          previewImage.style.backgroundImage = `url(${imageUrl})`;
          previewContainer.style.display = 'block';
        };
  
        reader.readAsDataURL(file);
      }
    }
  
    function triggerFileInput() {
      fileInput.click();
    }
  
    previewContainer.addEventListener('click', function () {
      previewContainer.style.display = 'none';
    });
  });
  