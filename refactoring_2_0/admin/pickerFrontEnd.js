var globalCalDate;

var picker = new Pikaday({ field: document.getElementById('dateCentered'), format:'MM/DD/YYYY' });

// function makeCalendar(){
//     var picker = new Pikaday({
//         field: document.getElementById('dateCentered'),
//         format: 'MM/DD/YYYY',   
//         onSelect: async function() {
//             // await changeTodayAndRunWithIt();
//             console.log(this.getMoment().format('MM/DD/YYYY'));
//             globalCalDate = this.getMoment().format("MM/DD/YYYY");
//         }, 
//         position:'Bottom left',
//         // reposition: false,
//     });

// }

function makeCalendar(){
    new Picker(document.querySelector('#dateCentered'), {
        format: 'MMM D, YYYY',
        // text: {
        //   title: 'Pick a date',
        // },
      });
}

// document.getElementById('newDate').addEventListener('click', ()=>{
//     document.getElementById('newDate').blur();
// });