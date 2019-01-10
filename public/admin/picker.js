// var picker = new Pikaday({ field: document.getElementById('newDate') });


var picker = new Pikaday({
    field: document.getElementById('newDate'),
    format: 'D MMM YYYY',
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});