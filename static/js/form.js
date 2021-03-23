window.submitLoginForm = function (form) {
	//eslint-disable-next-line
	console.log(getData(form));
};
window.submitSigninForm = function (form) {
	//eslint-disable-next-line
	console.log(getData(form));
};
window.saveChanges = function (form) {
	//eslint-disable-next-line
	console.log(getData(form));
};
window.savePassword = function (form) {
	//eslint-disable-next-line
	console.log(getData(form));
};

function getData(form) {
	const data = {};

	if (form && form.hasChildNodes()) {
		form.childNodes.forEach((node) => {
			if (node.hasChildNodes()) {
				Object.assign(data, getData(node));
			} else if (node.nodeName === 'INPUT') {
				data[node.name] = node.value;
			}
		});
	}

	return data;
}
