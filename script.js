const parallax = document.getElementById('parallax');
const containers = document.querySelectorAll(".vid-container");
const languageSelect = document.getElementById('language-select');
let ticking = false;

// Add event listeners after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", dragFunction);
// parallax item
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY;

      // Parallax effect
      const speed = 0.4;
      parallax.style.transform = `translateY(${scrolled * speed}px)`;

      // Show/hide language selector
      if (scrolled > 20) {
        languageSelect.classList.add('hidden');
      } else {
        languageSelect.classList.remove('hidden');
      }

      ticking = false;
    });

    ticking = true;
  }
});

function dragFunction() {    
    // Call the function to hide elements on page load
    containers.forEach((container) => {

        // MOUSE DOWN
        container.addEventListener("mousedown", (e) => {
            let isDragging = true;
            const offsetX = e.clientX - container.getBoundingClientRect().left;
            const offsetY = e.clientY - container.getBoundingClientRect().top;

            document.onmousemove = (event) => {
                if (isDragging) {
                    const newX = event.clientX - offsetX;
                    const newY = event.clientY - offsetY;
                    // Constrain within the window
                    container.style.left = Math.min(
                        Math.max(newX, 0),
                        window.innerWidth - container.offsetWidth
                    ) + "px";
                    container.style.top = Math.min(
                        Math.max(newY, 0),
                        window.innerHeight - container.offsetHeight
                    ) + "px";
                }
            };

            document.onmouseup = () => {
                isDragging = false;
                document.onmousemove = null;
                document.onmouseup = null;
            };
        });

        // Add toggle functionality to the X button
        const closeButton = container.querySelector(".close-button");
        closeButton.addEventListener("click", () => {
            if (container.style.display === "block" || container.style.display === "") {
                container.style.display = "none";
            } else {
                container.style.display = "block";
            }
        });
    });
}