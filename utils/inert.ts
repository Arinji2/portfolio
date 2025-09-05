import { version } from "react";

const inertBooleanSupported = Number(version.split(".")[0]) >= 19;
/**
 * Before version 19, react JSX treats empty string "" as truthy for inert prop.
 * @see {@link https://stackoverflow.com/questions/72720469}
 * */
export const isInert: (x: boolean) => boolean | undefined =
	inertBooleanSupported ? (x) => x : (x) => (x ? true : undefined);
