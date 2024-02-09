document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-left').addEventListener('click', () => {
        clearInterval(autoChangeInterval);
        currentIdx = (currentIdx - 1 + comments.length) % comments.length;
        updateCommentsVisibility();
        autoChange();
    });

    document.getElementById('btn-right').addEventListener('click', () => {
        clearInterval(autoChangeInterval);
        currentIdx = (currentIdx + 1) % comments.length;
        updateCommentsVisibility();
        autoChange();
    });

    const comments = document.querySelectorAll('.carousel-comment');
    let currentIdx = 0;

    function updateCommentsVisibility() {
        comments.forEach((comment, idx) => {
            comment.style.display = 'none';
            if (idx === currentIdx) {
                comment.style.display = 'block';
            }
        });
    }

    updateCommentsVisibility();

    function autoChange() {
        autoChangeInterval = setInterval(() => {
            currentIdx = (currentIdx + 1) % comments.length;
            updateCommentsVisibility();
        }, 3000);
    }

    let autoChangeInterval;
    autoChange();





    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.querySelector('.faq-item__content').style.display = 'none';
        item.classList.remove('faq-item-active');
    });

    faqItems.forEach(item => {
        const titleDiv = item.querySelector('.faq-item__title');
        titleDiv.addEventListener('click', () => {
            const content = item.querySelector('.faq-item__content');
            if (item.classList.contains('faq-item-active')) {
                content.style.display = 'none';
                item.classList.remove('faq-item-active');
            } else {
                faqItems.forEach(otherItem => {
                    otherItem.querySelector('.faq-item__content').style.display = 'none';
                    otherItem.classList.remove('faq-item-active');
                });
                content.style.display = 'block';
                item.classList.add('faq-item-active');
            }
        });
    });
});
