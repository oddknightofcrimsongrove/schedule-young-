// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
const containerEl = $('#container-lg px-5');
const saveBtn = $('.saveBtn');
const present = $('#present');
const Past = $('#past');
const future = $('#future');
const hour = dayjs().hour();
console.log(hour);
const today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

for(let i=9; i<18; i++){
  $('#hour-'+ i).children('.saveBtn').on('click', function(){
    const toDo = $('#hour-'+ i).children('.description').val();
    console.log(toDo);
    localStorage.setItem("hour-"+ i, toDo);
  })
}

for(let i = 9; i < 18; i++) {
const toDo = localStorage.getItem("hour-" + i) || '';
$('#hour-'+ i).children('.description').val(toDo);

if (i < hour) {
  $('#hour-' + i).children('.description').addClass('past');
} else if (i === hour) {
  $('#hour' + i).children('.description').addClass('present');
} else {
  $('#hour' + i).children('.description').addClass('future');
}
}


