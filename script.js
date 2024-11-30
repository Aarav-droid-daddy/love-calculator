document.getElementById('loveForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get values from the form
    const name = document.getElementById('name').value;
    const crush = document.getElementById('crush').value;

    // Hide the form
    document.getElementById('loveForm').style.display = 'none';

    // Display result message without showing the person's name and crush
    const result = document.getElementById('result');
    result.innerHTML = `YOU TROLLED BY A 15-Y'0 OLD!`;

    // Display the laughing gif
    const gif = document.getElementById('gif');
    gif.style.display = 'block';

    // Save the user's name and crush in localStorage (for you to track)
    let history = JSON.parse(localStorage.getItem('history')) || []; // Retrieve existing history or empty array
    history.push({ name, crush }); // Add the new user's data
    localStorage.setItem('history', JSON.stringify(history)); // Save it back to localStorage
});
