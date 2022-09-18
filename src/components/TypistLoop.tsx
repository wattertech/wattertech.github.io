import { FC } from "react";
import Typist from "react-typist-component";

export interface Props {
	texts: string[];
}

const TypistLoop: FC<Props> = ({ texts }) => (
	<div className="h-24">
		<Typist typingDelay={100} loop>
			{texts.map(text => (
				<div key={text}>
					<Typist.Delay ms={1000} />
					<div className="text-center text-4xl text-sapphire select-none">
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
