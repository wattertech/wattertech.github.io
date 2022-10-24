(document.querySelector("#continue") as HTMLButtonElement).onclick = () => {
	document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
};
