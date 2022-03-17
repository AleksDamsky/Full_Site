const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => { //используется для перебора массива.
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener(('animationend'), (e) => {
        e.target.classList.remove('active');
    })
    //Начало анимации
    setTimeout(() => {
        span.classList.sdd('active');
    }, 750 * (idx+1))
})


alert('Привет! Данный сайт содержит информацию о компаниях, которые поддерживают Отечественное производство в Чувашии.')