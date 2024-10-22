  // Add event listener to checkboxes to update image background
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        this.parentNode.parentNode.classList.add('checked');
      } else {
        this.parentNode.parentNode.classList.remove('checked');
      }
    });
  });

// Add event listener to images to simulate checkbox click
var images = document.querySelectorAll('.image');
images.forEach(function(image) {
  image.addEventListener('click', function() {
    var checkbox = image.parentElement.nextElementSibling.querySelector('input[type="checkbox"]');
    checkbox.click();
  });
});