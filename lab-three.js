function getDayOfTheWeek(year, month, day) {
    const monthcode = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    const daycode = ["Saturday", "Sunday",  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    let step0 = (year % 100);
    let step1 = parseInt(step0 / 12 .toFixed(0));
    let step2 = (step0 % 12);
    let step3 = parseInt(step2 / 4 .toFixed(0));
    let step4 = day;
    let leapyearvalue
    if (isLeapYear(year) && (month == 1 || month == 2)) {
        leapyearvalue = 1    
    } else { 
        leapyearvalue = 0    
    }
    let sum = (step1 + step2 + step3 + step4 + monthcode[month - 1] - leapyearvalue + getCenturyCode(year));
    let result = sum % 7

    return daycode[result];
}

function isLeapYear(year) {
    if ((year % 4) != 0) {
        return false
    }
    else if ((year % 100) != 0) {
        return true
    }
    else if ((year % 400) != 0) {
        return true
    } else {
        return true
}
}

function getCenturyCode(year) {
    let centurycode
    if ((year - (year % 100)) == 1600) {
        centurycode = 6
        return centurycode
    }
    else if ((year - (year % 100)) == 1700) {
        centurycode = 4
        return centurycode
    }
    else if ((year - (year % 100)) == 1800) {
        centurycode = 2
        return centurycode
    }
    else if ((year - (year % 100)) == 2000) {
        centurycode = 6
        return centurycode
    }
    else if ((year - (year % 100)) == 2100) {
        centurycode = 4
        return centurycode
    } else {
        return 0
}
}

function makeCalendar() {
    const day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 

    let i = 0;
    while(i < 12) {
        let j = 1;
        while(j <= day[i]) {
            console.log(month[i] + "-" + j + "-" + "2020 is a " + getDayOfTheWeek(2020, (i + 1), j));
            j++
        }
        i++
    }
}

makeCalendar()

module.exports = { makeCalendar, getDayOfTheWeek, isLeapYear, getCenturyCode }