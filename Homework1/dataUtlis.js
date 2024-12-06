function formatDate(date, format) {
    const newDate= new Date(date)
    const year = newDate.getFullYear()
    const month = (newDate.getMonth() + 1 < 10 ? '0' : '') + (newDate.getMonth() + 1)
    const day = (newDate.getDate() < 10 ? '0' : '') + newDate.getDate()
    const obj = { 'YYYY': year,
         'MM': month,
          'DD': day };
  for (const i in obj) {
    format = format.replace(i, obj[i]);
  }
return format
}
function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
}
function daysBetween(date1, date2) {
    const diff = Math.abs(date1 - date2);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
module.exports = { formatDate, isWeekend, daysBetween };