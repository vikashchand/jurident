export const truncWithEllipsis = (str, chars = 50) => {
	return str.length > chars ? `${str.slice(0, chars)}...` : str;
};
