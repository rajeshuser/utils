import React from "react";

export default function Divider({ text }) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				margin: "auto"
			}}
		>
			<div style={{ width: "100%", height: "1px", backgroundColor: "grey" }}></div>
			<div style={{ padding: "10px" }}>{text}</div>
			<div style={{ width: "100%", height: "1px", backgroundColor: "grey" }}></div>
		</div>
	);
}
