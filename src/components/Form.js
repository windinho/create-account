import React from "react";
import { Field, Input, Radio } from "../core-components/Elements";
import DateInput from "./DateInput";
import useForm from "./UseForm";
import validate from "./Validate";

const Form = () => {
	const { inputs, handleInputChange, handleSubmit, errors } = useForm(
		{ email: "", password: "" },
		validate
	);

	return (
		<form
			noValidate="novalidate"
			className="Bg(#fff) Py(32px) Px(50px) Z(1) W(290px)--lg H(100%)--sm"
			onSubmit={(e) => {
				e.preventDefault();
				e.nativeEvent.stopImmediatePropagation();
				handleSubmit();
			}}
		>
			<h2 className="M(0)">Create an account</h2>
			<Input
				label="Enter your email"
				labelFor="email"
				type="email"
				val={inputs.email}
				handleInputChange={handleInputChange}
				error={errors["email"]}
			/>
			<Field>
				<label className="D(b) Fw(b) Fz(16px) Lh(19px) C(#000) Mb(5px)">
					Date of birth{" "}
					<span className="Fz(11px)" style={{ fontSize: "12px" }}>
						(Optional)
					</span>
				</label>
				<DateInput />
			</Field>
			<Input
				label="Choose a strong password"
				labelFor="password"
				type="password"
				val={inputs.password}
				handleInputChange={handleInputChange}
				error={errors["password"]}
			/>
			<Field>
				<label className="D(b) Fw(b) Fz(16px) Lh(19px) C(#000) Mb(5px)">
					Are you an agency or individual?
				</label>
				<Radio title="agency" values={["Individual", "Agency"]} />
			</Field>
			<Field>
				<button className="H(44px) W(188px) Bd(n) Bg(#2d9cdb) C(#fff) Bdrs(4px) Fz(18px) Fw(500)">
					Submit
				</button>
			</Field>
		</form>
	);
};
export default Form;
