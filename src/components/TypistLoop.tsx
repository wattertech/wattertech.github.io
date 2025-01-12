import React, { FC } from "react";
import Typist from "react-typist-component";

export interface Props {
	texts: string[];
}

const shuffle = (array: string[]) =>
	array
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

const TypistLoop: FC<Props> = ({ texts }) => (
	<div className="h-24">
		<Typist typingDelay={100} loop>
			{shuffle(texts).map(text => (
				<div key={text}>
					<Typist.Delay ms={1000} />
					<div className="text-center text-4xl text-sapphire select-none neon">
						{text}
					</div>
					<Typist.Delay ms={1500} />
					<Typist.Backspace count={text.length} />
				</div>
			))}
		</Typist>
	</div>
);

export default TypistLoop;
