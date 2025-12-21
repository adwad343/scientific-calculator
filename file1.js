// Create a button element
const x = document.createElement("button");
// Set visible text and an id/class if needed
x.textContent = "New button";
x.id = "dynamicBtn";

// Insert the button into the DOM. Append to body by default.
// If you want to insert before an existing button, use the first button as reference.
const firstBtn = document.getElementsByTagName("button")[0];
if (firstBtn && firstBtn.parentNode) {
	// insert before the first existing button
	firstBtn.parentNode.insertBefore(x, firstBtn);
} else {
	// no existing buttons: append to the body
	document.body.appendChild(x);
}