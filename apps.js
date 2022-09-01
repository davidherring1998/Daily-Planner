
//setting current day and time 
const currentDay = document.getElementById('currentDay');
const current = moment().format('llll');
currentDay.textContent = current;


// changing color based on time 
const event9 = document.getElementsByClassName('event-block-9');
const event10 = document.getElementsByClassName('event-block-10');
const event11 = document.getElementsByClassName('event-block-11');
const event12 = document.getElementsByClassName('event-block-12');
const event1 = document.getElementsByClassName('event-block-1');
const event2 = document.getElementsByClassName('event-block-2');
const event3 = document.getElementsByClassName('event-block-3');
const event4 = document.getElementsByClassName('event-block-4');
const event5 = document.getElementsByClassName('event-block-5');

const myTime = new Date ();
// hour 9
if(myTime.getHours() > 8 && myTime.getHours() < 9 )  {
    $(event9).css('background-color', 'red');
    console.log('current');
} else if (myTime.getHours() > 9 ) {
    console.log('past 9pm')
    $(event9).css('background-color', 'lightblue');
} else {
    $(event9).css('background-color', 'green');
}

//hour 10
if(myTime.getHours() >= 10 && myTime.getHours() < 11 )  {
    $(event10).css('background-color', 'red');
    console.log('current');
} else if (myTime.getHours() >= 11 ) {
    console.log('past 10pm')
    $(event10).css('background-color', 'lightblue');
} else {
    $(event10).css('background-color', 'green');
}

//hour 11 
if(myTime.getHours() >= 11 && myTime.getHours() < 12 )  {
    $(event11).css('background-color', 'red');
    console.log('current');
} else if (myTime.getHours() >= 12 ) {
    console.log('past 11pm')
    $(event11).css('background-color', 'lightblue');
} else {
    $(event11).css('background-color', 'green');
}

//hour 12
if(myTime.getHours() >= 12 && myTime.getHours() < 13 )  {
    $(event12).css('background-color', 'red');
    console.log('current');
} else if (myTime.getHours() >= 12 ) {
    console.log('past 12pm')
    $(event12).css('background-color', 'lightblue');
} else {
    $(event12).css('background-color', 'green');
}

// 1pm
if(myTime.getHours() >= 13 && myTime.getHours() < 14 )  {
    $(event1).css('background-color', 'red');
    console.log('current');
} else if (myTime.getHours() >= 13 ) {
    console.log('past 1pm')
    $(event1).css('background-color', 'lightblue');
} else {
    $(event1).css('background-color', 'green');
}

// 2pm
if(myTime.getHours() >= 14 && myTime.getHours() < 15 )  {
    $(event2).css('background-color', 'red');
    console.log('current');
} else if (myTime.getHours() >= 15 ) {
    console.log('past 2pm')
    $(event2).css('background-color', 'lightblue');
} else {
    $(event2).css('background-color', 'green');
}

// 3pm
if(myTime.getHours() >= 15 && myTime.getHours() < 16 )  {
    $(event3).css('background-color', 'red');
    console.log('current');
} else if (myTime.getHours() >= 16 ) {
    console.log('past 3pm')
    $(event3).css('background-color', 'lightblue');
} else {
    $(event3).css('background-color', 'green');
}

// 4pm
if(myTime.getHours() >= 16 && myTime.getHours() < 17 )  {
    $(event4).css('background-color', 'red');
    console.log('current');
} else if (myTime.getHours() >= 17 ) {
    console.log('past 4pm')
    $(event4).css('background-color', 'lightblue');
} else {
    $(event4).css('background-color', 'green');
}

// 5pm
if(myTime.getHours() >= 17 && myTime.getHours() < 18 )  {
    $(event5).css('background-color', 'red');
    console.log('current');
} else if (myTime.getHours() >= 18 ) {
    console.log('past 1pm')
    $(event5).css('background-color', 'lightblue');
} else {
    $(event5).css('background-color', 'green');
}

// setting option to add to event 
const event = document.getElementById('events')
const saveBtn1 = document.getElementById('saveBtn');


saveBtn1.addEventListener('click', function (event) {
    event.preventDefault();
    const listItem = document.getElementById('event-input').value
    const text = document.createTextNode(listItem);
    const newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('list').appendChild(newItem);
    localStorage.setItem('9am', listItem);
})

//second block
const saveBtn2 = document.getElementById('btn-2');

saveBtn2.addEventListener('click', function (event) {
    event.preventDefault();
    const listItem = document.getElementById('event-input2').value
    const text = document.createTextNode(listItem);
    const newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('list-2').appendChild(newItem);
    localStorage.setItem('10am', listItem);
})

//third block
const saveBtn3 = document.getElementById('btn-3');

saveBtn3.addEventListener('click', function (event) {
    event.preventDefault();
    const listItem = document.getElementById('event-input3').value
    const text = document.createTextNode(listItem);
    const newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('list-3').appendChild(newItem);
    localStorage.setItem('11am', listItem);
})

//fourth block
const saveBtn4 = document.getElementById('btn-4');

saveBtn4.addEventListener('click', function (event) {
    event.preventDefault();
    const listItem = document.getElementById('event-input4').value
    const text = document.createTextNode(listItem);
    const newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('list-4').appendChild(newItem);
    localStorage.setItem('12pm', listItem);
})

//fifth block
const saveBtn5 = document.getElementById('btn-5');

saveBtn5.addEventListener('click', function (event) {
    event.preventDefault();
    const listItem = document.getElementById('event-input5').value
    const text = document.createTextNode(listItem);
    const newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('list-5').appendChild(newItem);
    localStorage.setItem('1pm', listItem);
})

//sixth block
const saveBtn6 = document.getElementById('btn-6');

saveBtn6.addEventListener('click', function (event) {
    event.preventDefault();
    const listItem = document.getElementById('event-input6').value
    const text = document.createTextNode(listItem);
    const newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('list-6').appendChild(newItem);
    localStorage.setItem('2pm', listItem);
})

//seventh block
const saveBtn7 = document.getElementById('btn-7');

saveBtn7.addEventListener('click', function (event) {
    event.preventDefault();
    const listItem = document.getElementById('event-input7').value
    const text = document.createTextNode(listItem);
    const newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('list-7').appendChild(newItem);
    localStorage.setItem('3pm', listItem);
})

//eight block
const saveBtn8 = document.getElementById('btn-8');

saveBtn8.addEventListener('click', function (event) {
    event.preventDefault();
    const listItem = document.getElementById('event-input8').value
    const text = document.createTextNode(listItem);
    const newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('list-8').appendChild(newItem);
    localStorage.setItem('4pm', listItem);
})

//ninth block
const saveBtn9 = document.getElementById('btn-9');

saveBtn9.addEventListener('click', function (event) {
    event.preventDefault();
    const listItem = document.getElementById('event-input9').value
    const text = document.createTextNode(listItem);
    const newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('list-9').appendChild(newItem);
    localStorage.setItem('5pm', listItem);
})


// past events 

const pastBtn = document.getElementById('past-events');

pastBtn.addEventListener('click', () => {
    for (let i = 0; i < localStorage.length; i++){
        key = localStorage.key(i);
        val = localStorage.getItem(key);

    const keyList = key;
    const pastListItems = val;
    const pastText = document.createTextNode(pastListItems);
    const pastTextKey = document.createTextNode(keyList + ": ");
    newLiItem = document.createElement('li');
    newLiItem.appendChild(pastTextKey);
    newLiItem.appendChild(pastText);
    document.getElementById('past-list').appendChild(newLiItem);
    console.log(key)
    }

})

