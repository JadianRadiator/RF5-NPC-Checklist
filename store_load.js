 
  // Load saved checkbox states from localStorage
  window.onload = function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      var imageSrc = checkbox.getAttribute('data-image');
      var checked = localStorage.getItem(imageSrc) === 'true';
      checkbox.checked = checked;
      if (checked) {
        checkbox.parentNode.parentNode.classList.add('checked');
      }
    });
  };