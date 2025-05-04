// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = "The text has been changed successfully!";
    dynamicText.style.color = "#2ecc71";
});

// Modify CSS styles via JavaScript
const styleDemo = document.getElementById('style-demo');

styleDemo.addEventListener('click', () => {
    styleDemo.style.backgroundColor = "#3498db";
    styleDemo.style.color = "white";
    styleDemo.style.padding = "20px";
    styleDemo.style.borderRadius = "10px";
    styleDemo.textContent = "Styles have been applied dynamically!";
});

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const toggleContainer = document.getElementById('toggle-container');
const toggledElement = document.querySelector('.toggled-element');

let isElementVisible = true;

toggleElementBtn.addEventListener('click', () => {
    if (isElementVisible) {
        toggledElement.style.display = "none";
        toggleElementBtn.textContent = "Show Element";
    } else {
        toggledElement.style.display = "block";
        toggleElementBtn.textContent = "Hide Element";
    }
    isElementVisible = !isElementVisible;
});