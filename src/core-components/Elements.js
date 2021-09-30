import React from "react";
import "../main.css";

const inputStyles =
	"Bdw(2px) Bds(s) Bdc(#bdbdbd) Bg(#fff) H(37px) Py(0) Px(9px) Fz(14px) C(#666) Bxs(bb)";

export const Field = ({ children, classes }) => (
	<div className={`Mx(0) My(25px) ${classes ? classes : ""}`}>{children}</div>
);

export const DateField = ({ children, label, classes }) => (
	<div className={`D(f) Fxd(c) Mt(6px) ${classes ? classes : ""}`}>
		<label className="C(#666) Fz(14px)">{label}</label>
		{children}
	</div>
);

export const Select = ({ children }) => (
	<select className={inputStyles}>{children}</select>
);

export const Radio = ({ values, title }) => (
	<div className="radios">
		{values.map((val, i) => (
			<div key={i}>
				<input type="radio" id={val} name={title} />
				<label htmlFor={val}>{val}</label>
			</div>
		))}
	</div>
);

export const Input = ({
	label,
	labelFor,
	type,
	val,
	handleInputChange,
	error,
}) => (
	<Field classes="Pos(r)">
		<label
			className="D(b) Fw(b) Fz(16px) Lh(19px) C(#000) Mb(5px)"
			htmlFor={labelFor}
		>
			{label}
		</label>
		<input
			value={val}
			name={type}
			type={type}
			id={labelFor}
			onChange={handleInputChange}
			className={`Bdw(2px) Bds(s) Bdc(#bdbdbd) Bg(#fff) H(37px) Py(0) Px(9px) Fz(14px) C(#666) Bxz(bb) W(290px)--lg W(100%)--sm ${
				error !== "" ? "Bdc(#eb5757)" : ""
			}`}
		/>
		{error !== "" && (
			<div className="Bg(#eb5757) Bdrs(3px) Fz(13px) C(#fff) B(0) D(ib) P(4px) Mt(5px) Mstart(5px)--md Start(100%)--md W(132px)--md Pos(a)--md">
				{error}
			</div>
		)}
	</Field>
);
