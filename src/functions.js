export function handleChangeBase(e) {
	setBasePx(e.target.value);
}
export function handleChangePx(e) {
	setPx(e.target.value);
}
export function handleChangeRem(e) {
	setRem(e.target.value);
}
export function convertPx(px) {
	return (px/basePx).toFixed(2);
}
export function convertRem(rem) {
	return (rem*basePx).toFixed(2);
}
