import React from "react";
import Form from "./components/Form";
import "./core-components/Radio.css";
import heroSm from "./images/hero-sm.png";
import hero from "./images/hero.png";
import "./main.css";

function App() {
	return (
		<div className="D(f) Jc(c) Ai(c) H(100vh) Pos(r)">
			<div
				className="Bg(#c7acda) Pos(a) W(100%) H(100%) T(0) Z(0) D(n)--sm"
				style={{ clipPath: "ellipse(78% 30% at 50% 16%)" }}
			/>
			<div className="Maw(760px) D(f) Bxs(bxsh) Bxsh(myshadow) Bdrs(5px) Ov(initial) Fxd(c)--sm W(100%)--sm H(100%)--sm">
				<div className="Pos(r)">
					<img
						src={hero}
						className="W(100%) H(100%) D(n)--sm"
						alt="hero"
					/>
					<img
						src={heroSm}
						className="W(100%) H(270px) D(n)--lg"
						alt="hero"
					/>
					<div className="Pos(a) T(50%) Start(50%) Translate(-50%,-50%) Py(0) Px(44px) W(100%) Bxz(bb) C(#fff)">
						<h1>Sample heading</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
							<br />
							Laborum distinctio incidunt quae voluptas tempore
							dolorem, autem officia libero soluta.
						</p>
					</div>
				</div>
				<Form />
			</div>
		</div>
	);
}

export default App;
