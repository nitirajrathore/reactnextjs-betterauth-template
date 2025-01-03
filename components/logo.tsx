import { SVGProps } from "react";

export const Logo = (props: SVGProps<any>) => {
	return (
		<svg
			width="60"
			height="45"
			viewBox="0 0 60 45"
			fill="none"
			className="w-5 h-5"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d={process.env.NEXT_PUBLIC_LOGO_SVG_DATA}
				className="fill-black dark:fill-white"
			/>
		</svg>
	);
};
