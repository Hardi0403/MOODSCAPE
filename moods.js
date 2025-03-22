document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const skipButton = document.getElementById('skip-button');
    const container = document.querySelector('.container');
    const nextButton = document.getElementById('next-btn');
    const questionnaire = document.querySelector('#questionnaire');
    const playlistResult = document.querySelector('#playlistResult');
    const spotifyEmbed = document.getElementById('spotifyEmbed');
    const themeSwitcher = document.querySelector('.theme-switcher');
    const questions = document.querySelectorAll('.question');

    let currentQuestion = 0;

    // Splash Screen Transition
    skipButton.addEventListener('click', () => {
        splashScreen.style.display = 'none';
        container.style.display = 'block';
        questions[currentQuestion].style.display = 'block'; // Show the first question
    });

    // Next Button Transition
    nextButton.addEventListener('click', () => {
        questions[currentQuestion].style.display = 'none'; // Hide the current question
        currentQuestion++;

        if (currentQuestion < questions.length) {
            questions[currentQuestion].style.display = 'block'; // Show the next question
        } else {
            questionnaire.style.display = 'none'; // Hide the questionnaire
            playlistResult.style.display = 'block'; // Show the playlist result
            generatePlaylist(); // Generate the playlist
        }
    });

    // Playlist Generation
    function generatePlaylist() {
        const mood = document.getElementById('mood').value;
        const activity = document.getElementById('activity').value;
        const lyricsVibes = document.getElementById('lyrics-vibes').value;

        let playlistURL = '';

        // Logic for selecting playlist based on inputs
        if (mood === 'vibing' && activity === 'living' && lyricsVibes === 'vibes') {
            playlistURL = 'https://open.spotify.com/playlist/12345'; // Replace with an actual playlist URL
        } else {
            playlistURL = 'https://open.spotify.com/playlist/67890'; // Replace with an alternative playlist URL
        }

        spotifyEmbed.innerHTML = `
            <iframe src="${playlistURL}" 
                width="300" height="380" frameborder="0" 
                allowtransparency="true" allow="encrypted-media">
            </iframe>`;
    }

    // Theme Switcher Logic
    themeSwitcher.addEventListener('click', (event) => {
        const target = event.target;

        if (target.id === 'light-mode') {
            document.body.className = 'light-mode'; // Apply light mode
        } else if (target.id === 'dark-mode') {
            document.body.className = 'dark-mode'; // Apply dark mode
        } else if (target.id === 'neon-dreams') {
            document.body.className = 'neon-dreams'; // Apply neon mode
        }
    });

    // Initialize all questions to be hidden
    questions.forEach((question) => {
        question.style.display = 'none';
    });
});
