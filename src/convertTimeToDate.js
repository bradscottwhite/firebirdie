export const convertTimeToDate = time => {
	if (!time) return ''

	time = new Date(time)
	const year = time.getFullYear()
	const month = time.getMonth()
	const day = time.getDay()
	const hours = time.getHours()
	let min = time.getMinutes()
	//const sec = time.getSeconds()

	const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

	const amOrPm = hours < 12
	const hour = amOrPm ? hours : (hours - 12)
	if (min < 10) min = `0${min}`

	return {
		time: `${hour}:${min} ${amOrPm ? 'AM' : 'PM'}`,
		date: `${months[month]} ${day}, ${year}`
	}
};
