// EVENT: DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    onMobileAndTabletStyles()
});

// PLAY VIDEO
function videoPlay() {
    const video = document.querySelector('#headerVideo')
    video.play();
}

// RETURNS BOOLEAN (if screen width < 1048px)
function isMobileOrTablet() {
    const mediaQuery = window.matchMedia("(max-width: 1048px)");
    return mediaQuery.matches;
}

// CALLBACK ON 'DOMContentLoaded'
function onMobileAndTabletStyles() {
    if (isMobileOrTablet()) {
        videoPlay();
        const elementsToHide = document.querySelectorAll(".window-wrapper .vid-container");
        const zeffyBtn = document.getElementById('zeffy-button');
        zeffyBtn.style.position = "static";
        elementsToHide.forEach((element) => {
            element.style.display = "none";
        });
    }
}