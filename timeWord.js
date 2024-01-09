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

    const multiplesOfTen = ['','ten', 'twenty', 'thirty', 'forty', 'fifty'];

    const [hour, minute] = time.split(':').map(Number);

    let results = '';

    if (hour === 12 && minute === 0) {
        results = 'noon';
    } else if (hour === 0 && minute === 0){
        results = 'midnight'
    } else {
        const period = hour < 12 ? 'am':'pm';
        const formattedHour = hours[hour % 12];

        let formattedMinute;
        
        if(minute < 10) {
            formattedMinute = ' ' + minutes[minute];
        } else {
            formattedMinute = multiplesOfTen[Math.floor(minute / 10)] + (minute % 10 === 0 ? '' : ' ' + minutes[minute % 10]);
        }
        
        results = `${formattedHour} ${minute < 10 ? 'oh' : ''}${formattedMinute} ${period}`;
        
    }
    return results;
}


module.exports = timeWord;

