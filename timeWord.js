// function timeWord (hh,mm) {
//     const today = new Date();
//     const h = today.getHours();
//     const m = today.getMinutes();

//     const hours = [
//         'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'noon'
//     ];

//     const minutes = [
//         "oh",  "one", "two", "three", 
//         "four", "five", "six", "seven", "eight", "nine", 
//        "ten", "eleven", "twelve", "thirteen", "fourteen", 
//         "fifteen", "sixteen", "seventeen", 
//         "eighteen", "nineteen"
//     ];

//     for (let i = 20; i < 60; i += 10) {
//         minutes[i] = minutes[i - 10] + ' ' + minutes[i % 10];
//     }

//     let result = '';

//     if ( h=== 12 && m === 0) {
//         result = 'noon';
//     } else {
//         const period = h < 12 ? 'am' : 'pm';
//         const formattedHour = hours[h % 12];
//         const formattedMinute = minutes[m];

//         result = `${formattedHour} ${formattedMinute} ${period}`;
//     }

//     return result;

// }



function timeWord (time) {
    const hours = [
        'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'noon'
    ];

    const minutes = [
        "oh",  "one", "two", "three", 
        "four", "five", "six", "seven", "eight", "nine", 
       "ten", "eleven", "twelve", "thirteen", "fourteen", 
        "fifteen", "sixteen", "seventeen", 
        "eighteen", "nineteen"
    ];

    for (let i = 20; i < 60; i += 10) {
        minutes[i] = minutes[i - 10] + ' ' + minutes[i % 10];
    }

    const [hour, minute] = time.split(':').map(Number);

    let result = '';

    if (hour === 12 && minute === 0) {
        result = 'noon';
    } else if (hour === 0 && minute === 0){
        result = 'midnight'
    } else {
        const period = hour < 12 ? 'am':'pm';
        const formattedHour = hours[hour % 12];
        const formattedMinute = minutes[minute];

        result = `${formattedHour} ${formattedMinute} ${period}`;
        
    }
    return result;
}

module.exports = timeWord;