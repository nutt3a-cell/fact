document.getElementById('getFact').addEventListener('click', async () => {
    try {
        const response = await fetch('https://factdisplay1-nj5j.vercel.app');
        const data = await response.json();
        
        const factDisplay = document.getElementById('factDisplay');
        factDisplay.textContent = data.fact;
    } catch (error) {
        console.error('Error:', error);
    }
});