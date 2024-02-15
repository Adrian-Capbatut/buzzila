document.addEventListener('DOMContentLoaded', () => {

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