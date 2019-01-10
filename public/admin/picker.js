// var picker = new Pikaday({ field: document.getElementById('newDate') });


var picker = new Pikaday({
    field: document.getElementById('newDate'),
    format: 'MM/DD/YYYY',
    onSelect: function() {
        changeTodayAndRunWithIt();
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});