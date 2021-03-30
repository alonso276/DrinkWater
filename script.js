const smallCups = document.querySelectorAll('.cup-small');

const liters = document.getElementById('liters');

const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx) => {
	// console.log(idx);
	cup.addEventListener('click', () => highlightCups(idx));
});

//idx index of the cup
//idx2 index of the cup we loop through

//functions
function highlightCups(idx) {
	// console.log(idx);

	if (
		smallCups[idx].classList.contains('full') &&
		!smallCups[idx].nextElementSibling.classList.contains('full')
	) {
		idx--;
	}

	smallCups.forEach((cup, idx2) => {
		if (idx2 <= idx) {
			cup.classList.add('full');
			console.log(idx2);
		} else {
			cup.classList.remove('full');
		}
	});
}
