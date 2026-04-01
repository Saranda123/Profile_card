let animationFrame = null;
let position = 0;

export const startCarousel = (selector = '.logos', speed = 0.5) => {
    const container = document.querySelector(selector);
    if (!container) return;

    const track = container.querySelector('.logos__track');
    if (!track || track.scrollWidth === 0) return;

    const setCount = 2;
    const setWidth = track.scrollWidth / setCount;
    const logosPerSet = 13; // number of unique logos

    const animate = () => {
        position += speed;
        if (position >= setWidth) {
            position -= setWidth;
            for (let i = 0; i < logosPerSet; i++) {
                track.appendChild(track.children[0]);
            }
        }
        track.style.transform = `translateX(-${position}px)`;
        animationFrame = requestAnimationFrame(animate);
    };

    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(animate);
};

export const stopCarousel = () => {
    if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
    }
};