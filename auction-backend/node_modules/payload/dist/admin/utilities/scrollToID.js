export const scrollToID = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const bounds = element.getBoundingClientRect();
        window.scrollBy({
            top: bounds.top - 100,
            behavior: 'smooth',
        });
    }
};
