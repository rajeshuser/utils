#!/usr/bin/env node

const argument = process.argv[2];
const fs = require("fs");

if (!argument) {
	console.log("cool works");
}

if (argument === "create-sample") {
	fs.writeFile("sample.txt", "sample text", () => {
		console.log("sample file is created");
	});
}

if (argument === "create-react-component") {
	const reactComponent = `import React from "react";

	export default function Component(props) {
		return <div>Component</div>;
	}`;
	fs.writeFile("component.jsx", reactComponent, () => {
		console.log("react component is created");
	});
}

if (argument === "random-color") {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
	console.log(`rgb(${red}, ${green}, ${blue})`);
}

if (argument === "time") {
	console.log(Date());
}
