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
// Function to wrap each letter in <span> tag
window.onload = function() {
    const textElement = document.querySelector('.animated-text');
    const text = textElement.textContent;
    textElement.innerHTML = '';

    // Wrap each letter in a <span> and append it back
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.02}s`; // Delay for each letter
        textElement.appendChild(span);
    });
};

