document.querySelectorAll('.clickable-image').forEach(image => {
        image.addEventListener('click', () => {
            const checkboxId = image.getAttribute('data-checkbox');
            const checkbox = document.getElementById(checkboxId);
            checkbox.checked = !checkbox.checked; // Toggle checkbox state

            // Update image styles based on checkbox state
            image.classList.toggle('checked'); // Use a CSS class for styling
        });
    });

    document.getElementById('checkAll').addEventListener('click', () => {
        document.querySelectorAll('.image-checkbox input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = true;
            const image = document.querySelector(`img[data-checkbox="${checkbox.id}"]`);
            image.classList.add('checked'); // Add the checked class
        });
    });

    document.getElementById('uncheckAll').addEventListener('click', () => {
        document.querySelectorAll('.image-checkbox input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
            const image = document.querySelector(`img[data-checkbox="${checkbox.id}"]`);
            image.classList.remove('checked'); // Remove the checked class
        });
    });