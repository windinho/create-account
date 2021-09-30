const validate = (inputs) => {
	const errors = { email: "", password: "" };
	if (!inputs.email) {
		errors.email = "Enter Email";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
		errors.email = "Please add valid email address";
	}

	if (!inputs.password) {
		errors.password = "Enter Password";
	} else if (!/(?=.*)(?=.*\d)(?=.{6}).*$/i.test(inputs.password)) {
		errors.password = "Password must have a numeric value";
	}

	errors.email === "" &&
		errors.password === "" &&
		alert("Form submitted successfully");

	return errors;
};

export default validate;
