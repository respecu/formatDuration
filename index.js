console.log(formatDuration(3600 * 24 * 365 * 2 + (3600 * 9) + (1571)));
console.log(formatDuration(3600 * 24 * 366 + (3600 * 9) + (1571)));
console.log(formatDuration(71));
console.log(formatDuration(62));
console.log(formatDuration(3662));
console.log(formatDuration(60));
console.log(formatDuration(30));
console.log(formatDuration(1));
console.log(formatDuration(0));

function formatDuration(totalSeconds) {
    if(totalSeconds < 0) {
        return null;
    }
    else if(totalSeconds === 0) {
        return "now";
    }

    let result = '';

    const years = Math.floor(totalSeconds / (3600*24*365));
    const yearsReamin = Math.floor(totalSeconds % (3600*24*365));

    const days = Math.floor(yearsReamin / (3600*24));
    const daysRemain = Math.floor(yearsReamin % (3600*24));

    const hours = Math.floor(daysRemain / 3600);
    const hoursRemain = Math.floor(daysRemain % 3600);

    const minutes = Math.floor(hoursRemain / 60);
    const minutesRemain = Math.floor(hoursRemain % 60);

    const seconds = Math.floor(minutesRemain % 60);

    // console.log('years : ', years);
    // console.log('days : ', days);
    // console.log('hours : ', hours);
    // console.log('minutes : ', minutes);
    // console.log('seconds : ', seconds);

    if(years > 1) {
        result = `${years} years, `;
    }
    else if(years > 0) {
        result = `${years} year, `;
    }

    if(days > 1) {
        result += `${days} days, `
    }
    else if(days > 0) {
        result += `${years} day, `;
    }

    if(hours > 1) {
        result += `${hours} hours, `
    }
    else if(hours > 0) {
        result += `${hours} hour, `;
    }

    if(minutes > 1) {
        result += `${minutes} minutes `
        if(minutesRemain > 0) {
            result += 'and ';
        }
    }
    else if(minutes > 0) {
        result += `${minutes} minute `;
        if(minutesRemain > 0) {
            result += 'and ';
        }
    }

    if(seconds > 1) {
        result += `${seconds} seconds`
    }
    else if(seconds > 0) {
        result += `${seconds} second`;
    }

    return result;
}



