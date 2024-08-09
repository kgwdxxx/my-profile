document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    const content = document.getElementById('content');
    
    window.addEventListener('load', function() {
        // Hide the loader
        loader.style.display = 'none';
        // Show the content
        content.style.display = 'block';
    });
});
