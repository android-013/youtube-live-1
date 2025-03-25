//https://www.youtube.com/watch?v=t69zB0wIdB0

document.addEventListener("DOMContentLoaded", function () {
    const videoId = "t69zB0wIdB0"; //ID of the video
    const iframe = document.getElementById("youtube-player");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
});
