const smallCups = document.querySelectorAll('.cup-small');

const liters = document.getElementById('liters');

const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

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
			// console.log(idx2);
		} else {
			cup.classList.remove('full');
		}
	});
	updateBigCup();
}

function updateBigCup() {
	const fullCups = document.querySelectorAll('.cup-small.full').length;
	const totalCups = smallCups.length;

	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}

	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden';
		remained.style.visibility = 0;
	} else {
		remained.style.visibility = 'visible';
		liters.innerText = `${2 - (250 * fullCups) / 1000}`;
	}
}
