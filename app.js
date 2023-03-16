// target all DOM elements
let container = document.querySelector('.container')
let hour_span = document.querySelector('.hour')
let min_span = document.querySelector('.minute')
let sec_span = document.querySelector('.seconds')
let month_span = document.querySelector('.month')
let day_span = document.querySelector('.day')
let date_span = document.querySelector('.date')
let year_span = document.querySelector('.year')
let greet_span = document.querySelector('.greeting')
let am_span = document.querySelector('.am_pm')

// logic starts here
setInterval(()=>{
    let time = new Date
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()


    // logic for time
    if(hour < 9){
        hour_span.innerHTML = '0' + hour
    }else{
        hour_span.innerHTML = hour
    }

    if(minute < 9){
        min_span.innerHTML = '0' + minute
    }else{
        min_span.innerHTML = minute
    }

    if(second < 9){
        sec_span.innerHTML = '0' + second
    }else{
        sec_span.innerHTML = second
    }

    // logic for greeting
    let greeting = ""
    if(hour < 12){
        greeting = "Good Morning"
        container.style.backgroundImage = 'url("morning.png")'
        am_span.innerHTML = "AM"
    }else if(hour >= 12 && hour <= 16){
        greeting = "Good Afternoon"
        container.style.backgroundImage = ' url("afternoon.jpg")'
        am_span.innerHTML = "PM"
    }else{
        greeting = "Good Evening"
        container.style.backgroundImage = 'url("evening.jpg")'
        am_span.innerHTML = "PM"
    }

    greet_span.innerHTML = greeting

    // logic for date
    let date = time.getDate()
    let day = time.getDay()
    let month = time.getMonth()
    let year = time.getFullYear()

    date_span.innerHTML = date
    year_span.innerHTML = year

    let day_name = ""
    if(day == 0){
        day_name = "Sunday"
    }else if(day == 1){
        day_name = "Monday"
    }else if(day == 2){
        day_name = "Tuesday"
    }else if(day == 3){
        day_name = "Wednesday"
    }else if(day == 4){
        day_name = "Thursday"
    }else if(day == 5){
        day_name = "Friday"
    }else if(day == 6){
        day_name = "Saturday"
    }

    day_span.innerHTML = day_name

    let month_name = ""
    if(month == 0){
        month_name = "January"
    }else if(month == 1){
        month_name = "Febuary"
    }else if(month == 2){
        month_name = "March"
    }else if(month == 3){
        month_name = "April"
    }else if(month == 4){
        month_name = "May"
    }else if(month == 5){
        month_name = "June"
    }else if(month == 6){
        month_name = "July"
    }else if(month == 7){
        month_name = "August"
    }else if(month == 8){
        month_name = "September"
    }else if(month == 9){
        month_name = "October"
    }else if(month == 10){
        month_name = "November"
    }else if(month == 11){
        month_name = "December"
    }

    month_span.innerHTML = month_name

},1000)
