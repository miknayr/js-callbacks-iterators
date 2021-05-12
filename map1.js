let forecast = [
    {
        day: 'Monday',
        high: 55,
        low: 53,
    },
    {
        day: 'Tuesday',
        high: 65,
        low: 60,
    },
    {
        day: 'Wednesday',
        high: 63,
        low: 58,
    },
    {
        day: 'Thursday',
        high: 61,
        low: 57,
    },
    {
        day: 'Friday',
        high: 60,
        low: 53,
    },
    {
        day: 'Saturday',
        high: 61,
        low: 58,
    },
    {
        day: 'Sunday',
        high: 57,
        low: 54,
    },
]

// Build an array of strings using the forecast objects above with the following pattern:
// "Monday will have a high of 55F and a low of 53F."

//Your code here



let pattern = forecast.map(x => `${x.day} will have a high of ${x.high}F and a low of ${x.low}F.`)
console.log(pattern)

// the x parameter, represents the whole string
// using pattern as a variable, forecast is the array that holds the set of strings we need.
// calling on x as its container, x.day is filled in accordingly interporlating ${x.day} .