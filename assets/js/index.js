document.addEventListener('DOMContentLoaded', () => {


    // Schimbare pe butoanele de high si premium
    var buttons = document.querySelectorAll('.categories-button button');
    var contents = document.querySelectorAll('.content__prie .price');

    function hideAllContents() {
        contents.forEach(function (content) {
            content.style.display = 'none';
        });
    }

    function deactivateAllButtons() {
        buttons.forEach(function (button) {
            button.classList.remove('button-active');
        });
    }

    function showContent(contentId) {
        var content = document.getElementById(contentId);
        if (content) {
            content.style.display = 'block';
        }
    }

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            hideAllContents();
            deactivateAllButtons();
            button.classList.add('button-active');
            var contentId = button.getAttribute('data-content');
            showContent(contentId);
        });
    });

    showContent('price-list1');
    document.querySelector('.categories-button button[data-content="price-list1"]').classList.add('button-active');

    // afisarea infoarmatiei pe care o are titlul din sectiunea Faq
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
