export const convertTime = time => {
	if (!time) return ''
// time is from new Date().toISOString() fn
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

	if (year - curYear > 1)
		return `${year - curYear} year(s) ago`
	else if (month - curMonth > 1)
		return `${month - curMonth} month(s) ago`
	else if (day - curDay > 1)
		return `${day - curDay} day(s) ago`
	else if (hours - curHours > 1)
		return `${hours - curHours} hours(s) ago`
	else if (min - curMin > 1)
		return `${min - curMin} minute(s) ago`
	else if (sec - curSec > 1)
		return `${sec - curSec} second(s) ago`
};
