export const convertTime = time => {
	if (!time) return ''

	time = new Date(time)
	const year = time.getFullYear()
	const month = time.getMonth()
	const day = time.getDay()
	const hours = time.getHours()
	const min = time.getMinutes()
	const sec = time.getSeconds()
	
	const curTime = new Date()
	const curYear = curTime.getFullYear()
	const curMonth = curTime.getMonth()
	const curDay = curTime.getDay()
	const curHours = curTime.getHours()
	const curMin = curTime.getMinutes()
	const curSec = curTime.getSeconds()

	if (curYear - year > 0)
		return `${curYear - year} year(s) ago`
	else if (curMonth - month > 0)
		return `${curMonth - month} month(s) ago`
	else if (curDay - day > 0)
		return `${curDay - day} day(s) ago`
	else if (curHours - hours > 0)
		return `${curHours - hours} hours(s) ago`
	else if (curMin - min > 0)
		return `${curMin - min} minute(s) ago`
	else if (curSec - sec > 0)
		return `${curSec - sec} second(s) ago`
};
