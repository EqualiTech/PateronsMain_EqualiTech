var globalCalDate;

// this works - over the makeCalendar() func - why?? Idk
var picker = new Pikaday({ field: document.getElementById('dateCentered'), format:'MM/DD/YYYY', onSelect: async function() { 
  document.getElementById('grid').innerHTML = "";
  // HTMLStringForAdmin = "";
  await pullDateFromPopupCalendar();
} });

function makeCalendar(){
    new Pikaday(document.getElementById('dateCentered'), {
        format: 'MM DD, YYYY',
        // text: {
        //   title: 'Pick a date',
        // },
        onSelect: async function() {
          //             // await changeTodayAndRunWithIt();
          //             console.log(this.getMoment().format('MM/DD/YYYY'));
          //             globalCalDate = this.getMoment().format("MM/DD/YYYY");
          document.getElementById('grid').innerHTML = "";
          HTMLStringForAdmin = "";
          await pullDateFromPopupCalendar();
      }
  })
}

// document.getElementById('newDate').addEventListener('click', ()=>{
//     document.getElementById('newDate').blur();
// });