let intervalo = null;

export const start = () => {
    const logos = document.querySelector('.logos');
    if (!logos) return;

    clearInterval(intervalo); // evita duplicados

    intervalo = setInterval(() => {
        logos.scrollLeft += 1;

        if (logos.scrollLeft >= logos.scrollWidth - logos.clientWidth) {
            logos.scrollLeft = 0;
        }

    }, 20);
}