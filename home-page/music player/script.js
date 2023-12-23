const audioPlayer = document.getElementById('audioPlayer');
const musicFiles = [
    'music/Last Christmas - Wham!.m4a',
    'music/Santa Claus Is Coming To Town - Jackson 5.m4a',
    'music/Santa Tell Me - Ariana Grande.m4a',
    'music/spotifydown.com - Deck The Halls.mp3',
    'music/spotifydown.com - Northern Lights.mp3',
    'music/spotifydown.com - Shut Up and Dance.mp3',
    'music/spotifydown.com - Snowman - Sped Up Version.mp3',
    'music/spotifydown.com - ただ声一つ.mp3'
];

// Function to play a random song
function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    const randomSong = musicFiles[randomIndex];

    audioPlayer.src = randomSong;
    audioPlayer.play();
}

// Event listener for the end of a song
audioPlayer.addEventListener('ended', playRandomSong);

// Play the first song
playRandomSong();