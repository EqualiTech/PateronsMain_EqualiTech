// var picker = new Pikaday({ field: document.getElementById('newDate') });

// function makeCalendar(){
    var picker = new Pikaday({
        field: document.getElementById('dateCentered'),
        format: 'MM/DD/YYYY',
        onSelect: async function() {
            await changeTodayAndRunWithIt();
            console.log(this.getMoment().format('Do MMMM YYYY'));
            
        }, 
        position:'Bottom left',
        // reposition: false,
    });

// }

// document.getElementById('newDate').addEventListener('click', ()=>{
//     document.getElementById('newDate').blur();
// });