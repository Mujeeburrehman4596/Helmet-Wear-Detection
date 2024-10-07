// Handle image upload and preview
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.getElementById('imagePreview');
        img.src = e.target.result;
        img.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Simulate helmet prediction
function predictHelmet() {
    const resultElement = document.getElementById('result');
    
    // In a real system, you'd send the image to the backend for prediction here
    // For now, simulate a random prediction result
    const prediction = Math.random() > 0.5 ? "Helmet Detected!" : "No Helmet Detected!";
    
    // Display the result
    resultElement.innerHTML = prediction;
}
