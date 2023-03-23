const content = document.getElementById("scroll")!;
const tip = document.getElementById("tip")!;

const TEXT = `
Neal Wang is a high schooler with over 6 years of coding experience.
He made this portfolio site using Astro, TypeScript, and TailwindCSS.
As someone who learns a lot, he loves to teach and inspire others.
Neal runs an educational programming YouTube channel, MathleteDev, with over 300 subscribers.
He is part of his school's IT team and loves to help teachers with technology issues.
In his free time, Neal enjoys athletics such as playing tennis and swimming.
He is part of Pullman High School's Math Team, Science Olympiad, Computer Science Club, and 4061 Robotics team.
He is a great violin player and artist.
Not quite so great at chess, but he likes to play it.
Furthermore, Neal is an avid Linux (NixOS) user and advocate for open source software.
Most of his projects are uploaded to GitHub under the GPL open source license.
Neal hopes to use these skills to make the world a better place!
`;

let index = 0;

document.onwheel = e => {
	let random = Math.floor(Math.random() * 7) + 1;

	if (e.deltaY < 0 && index > 0) index -= random;
	if (e.deltaY > 0 && index < TEXT.length) index += random;

	content.innerHTML = TEXT.substring(0, index);

	tip.hidden = index > 0;
};
