(document.querySelector("#continue") as HTMLButtonElement).onclick = () => {
	document.querySelector("#nav")?.scrollIntoView({ behavior: "smooth" });
};
