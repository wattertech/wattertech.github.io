const content = document.getElementById("scroll")!;
const tip = document.getElementById("tip")!;

const TEXT = `
WatterTech is a tech startup founded by Charles Liu, Aditya Parikh, Mir Park, and Neal Wang.
The company was started after realising that over 95% of water used in households is wasted.
Clearly,
`;

let index = 0;

document.onwheel = e => {
	let random = Math.floor(Math.random() * 7) + 1;

	if (e.deltaY < 0 && index > 0) index -= random;
	if (e.deltaY > 0 && index < TEXT.length) index += random;

	content.innerHTML = TEXT.substring(0, index);

	tip.hidden = index > 0;
};
