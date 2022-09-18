import { FC, useEffect, useState } from "react";
import Typist from "react-typist";

export interface Props {
	texts: string[];
}

const TypistLoop: FC<Props> = ({ texts }) => {
	const [typing, setTyping] = useState(true);

	useEffect(() => setTyping(true), [typing]);

	return typing ? (
		<Typist
			className="h-24"
			cursor={{ show: false }}
			onTypingDone={() => setTyping(false)}
		>
			{texts.map(text => (
				<div key={text}>
					<Typist.Delay ms={1000} />
					<div className="text-center text-4xl text-sapphire select-none">
						{text}
					</div>
					<Typist.Backspace count={text.length} delay={1500} />
				</div>
			))}
		</Typist>
	) : (
		<></>
	);
};

export default TypistLoop;
