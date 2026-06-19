const elements = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100) {
            el.classList.add('visible');
        }
    });
});
const panels = document.querySelectorAll('.panel');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

panels.forEach(panel => {
    panel.style.opacity = 0;
    panel.style.transform = "translateY(50px)";
    panel.style.transition = "1s";
    observer.observe(panel);
});
document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--y', (e.clientY - rect.top) + 'px');
    });
});
document.querySelectorAll('.story-card').forEach(card => {
    const steps = card.querySelectorAll('.step-btn');
    const panels = card.querySelectorAll('.story-panel');
    steps.forEach(step => {
        step.addEventListener('click', () => {
            steps.forEach(s => s.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            step.classList.add('active');
            card.querySelector(`.story-panel[data-panel="${step.dataset.target}"]`).classList.add('active');
        });
    });
});