// 15f

export function isWeekend(date) {
    const weekendDay = date.format('dddd');
    return weekendDay === 'Saturday' || weekendDay === 'Sunday';
}

export default isWeekend