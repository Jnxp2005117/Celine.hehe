document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const dogVideo = document.getElementById('dogVideo');
    const textContainer = document.getElementById('textContainer');
    const blushingText = document.getElementById('blushingText');


    video.onended = function() {
        video.style.display = 'none'; // Hide the first video
        blushingText.textContent = "Are you blushing?";
        textContainer.style.display = 'block'; // Show the text
        setTimeout(function() {
            textContainer.style.display = 'none'; // Hide the text again
            dogVideo.style.display = 'block'; // Show the dog video
            dogVideo.play(); // Start playing the dog video
        }, 2000);
        if (video.requestFullscreen) {
            video.requestFullscreen(); // Make video fullscreen on end
        } else if (video.mozRequestFullScreen) { /* Firefox */
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
          video.msRequestFullscreen();
        }
    };

    dogVideo.onended = function() {
          if (document.exitFullscreen) {
            document.exitFullscreen(); // Exit fullscreen when dog video ends
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
       window.location.href = '/'; // Redirect when dog video finishes
     };


});