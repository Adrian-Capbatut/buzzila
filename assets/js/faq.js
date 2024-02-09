document.addEventListener('DOMContentLoaded', function () {
    var tabButtons = document.querySelectorAll('.tab-button');

    function deactivateAllTabs() {
        tabButtons.forEach(function (button) {
            button.classList.remove('button-acctive');
            var contentId = button.getAttribute('data-content');
            document.getElementById(contentId).style.display = 'none';
        });
    }

    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            deactivateAllTabs();

            button.classList.add('button-acctive');
            var contentId = button.getAttribute('data-content');
            document.getElementById(contentId).style.display = 'block';
        });
    });

    document.getElementById('content-faq1').style.display = 'block';
    document.querySelector('.tab-button[data-content="content-faq1"]').classList.add('button-acctive');







    var faqTitles = document.querySelectorAll('.faq-item__title');

    faqTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            var content = this.nextElementSibling;
            var wasActive = this.parentElement.classList.contains('faq-item-active');

            var allContents = document.querySelectorAll('.faq-item__content');
            allContents.forEach(function (el) {
                el.style.display = 'none';
            });

            var allTitles = document.querySelectorAll('.faq-item');
            allTitles.forEach(function (el) {
                el.classList.remove('faq-item-active');
            });

            if (!wasActive) {
                content.style.display = 'block';
                this.parentElement.classList.add('faq-item-active');
            }
        });
    });
});
