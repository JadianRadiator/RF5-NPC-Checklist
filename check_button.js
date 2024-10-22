 

// Add event listeners to buttons for checking and unchecking all
var checkAllButton = document.getElementById('checkAll');
var uncheckAllButton = document.getElementById('uncheckAll');

checkAllButton.addEventListener('click', function() {
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
    checkbox.parentNode.parentNode.classList.add('checked');
  });
});

uncheckAllButton.addEventListener('click', function() {
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
    checkbox.parentNode.parentNode.classList.remove('checked');
  });
});