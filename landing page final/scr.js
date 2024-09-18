document.addEventListener('DOMContentLoaded', function () {
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('hidden');
                entry.target.classList.remove('animate');
            }
        });
    }, options);
    const elements = document.querySelectorAll('#left, #right, #subtract, #info, #sign-up, #button, #page-1, #page-2, #logo');
    elements.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});
