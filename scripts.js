






/* To edit */

let arrayTask = JSON.parse(localStorage.getItem("task")) || []

const initialValues = [
	{ value: "Hit the gym", checked: false },
	{ value: "pay bills", checked: true },
	{ value: "Meet George", checked: false },
	{ value: "Buy eggs", checked: false },
	{ value: "Read a book", checked: false },
	{ value: "Organizeo office", checked: false }
]
/*MyCode*/

const createLi = (target) => {

	const newItem = `
	<li>Hit the gym</li>
			<li class="checked" >Pay bills</li>
			<li >Meet George</li>
			<li >Buy eggs</li>
			<li >Read a book</li>
			<li >Organize office</li>
	`;
	target.innerHTML += newItem;
}

const addArray = (value, arrayTask) => {
	arrayTask.push(value)
	saveToStorage(arrayTask);
}

const saveToStorage = (arrayTask) => {
	const myJSON = JSON.stringify(arrayTask);
	localStorage.setItem('task', myJSON);
}
/*EndCode*/

/* end of the edited */

const removeItemoArray = (value, arr) => {
	return arr.filter(function (listValue) {
		return listValue !== value
	})
}


// Create a "close" button and append it to each list item
const listNodes = Array.from(document.getElementsByTagName("LI"));
listNodes.map((node) => {
	const span = document.createElement("SPAN");
	const txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	node.appendChild(span);

});

// Click on a close button to hide the current list item
const close = Array.from(document.getElementsByClassName("close"));
debugger
close.map((node) => {
	node.onclick = (event) => {
		const li = event.target.parentElement;
		
		arrayTask = removeItemoArray(li.childNodes[0].textContent, arrayTask)
		console.log(arrayTask)
		li.remove();
		saveToStorage(arrayTask)
	};
});

// Add a "checked" symbol when clicking on a list item
const checkedFunction = () => {
	const list = document.querySelector("ul");
	list.addEventListener(
		"click",
		function (ev) {
			if (ev.target.tagName === "LI") {
				ev.target.classList.toggle("checked");
			}
		},
		false
	);
}

const createListItemInDom = (value) => {
	const li = document.createElement("li");
	const t = document.createTextNode(value);

	li.appendChild(t);
	document.getElementById("myUL").appendChild(li);

	const span = document.createElement("SPAN");
	const txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	close.push(li);
	
	close.map((node) => {
		node.onclick = (event) => {
			const li = event.target.parentElement;
			const text = li.childNodes[0].textContent;
			arrayTask = removeItemoArray(text, arrayTask)
			console.log(arrayTask)
			saveToStorage(arrayTask)
			li.remove();
		};
	});
}
// Create a new list item when clicking on the "Add" button
function newElement() {
	const inputValue = document.getElementById("myInput").value;

	if (inputValue === "") {
		alert("You must write something!");
	} else {
		addArray(inputValue, arrayTask);
		createListItemInDom(inputValue)
	}
	document.getElementById("myInput").value = "";
	checkedFunction();
}

const onloadPart = () => {
	arrayTask.map((task) => {
		createListItemInDom(task)
	})

}