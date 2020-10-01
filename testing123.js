// For 2000 - 2099

function getDayOfTheWeek(year, month, day) {
    let step0 = (year % 100);
    let step1 = parseInt(step0 / 12 .toFixed(0));
    let step2 = (step0 % 12);
    let step3 = parseInt(step2 / 4 .toFixed(0));
    let step4 = (day);
    if (month == 1) {
        console.log((step1 + step2 + step3 + day + 7) % 7);
    } else if (month == 2) {
        console.log((step1 + step2 + step3 + day + 10) % 7);
    } else if (month == 3) {
        console.log((step1 + step2 + step3 + day + 10) % 7);
    } else if (month == 4) {
        console.log((step1 + step2 + step3 + day + 6) % 7);
    } else if (month == 5) {
        console.log((step1 + step2 + step3 + day + 8) % 7);
    } else if (month == 6) {
        console.log((step1 + step2 + step3 + day + 11) % 7);
    } else if (month == 7) {
        console.log((step1 + step2 + step3 + day + 6) % 7);
    } else if (month == 8) {
        console.log((step1 + step2 + step3 + day + 9) % 7);
    } else if (month == 9) {
        console.log((step1 + step2 + step3 + day + 12) % 7);
    } else if (month == 10) {
        console.log((step1 + step2 + step3 + day + 7) % 7);
    } else if (month == 11) {
        console.log((step1 + step2 + step3 + day + 10) % 7);
    } else { month == 12
        console.log((step1 + step2 + step3 + day + 12) % 7);
}}
getDayOfTheWeek(2020, 8, 1);

// Sat = 0, Sun = 1, Mon = 2, Tue = 3, Wed = 4, Thu = 5, Fri = 6