document.addEventListener('DOMContentLoaded', () => {

	// Adaugare carousel la comentarii dupa timp si dupa butoanele de inainte si inapoi
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
	
});
