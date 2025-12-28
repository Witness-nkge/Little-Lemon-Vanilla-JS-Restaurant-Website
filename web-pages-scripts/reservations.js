document.getElementById('reserve-button').addEventListener('click',submitForm)

function submitForm(e) {
    e.preventDefault()

    if (!document.getElementById('date').value){
        alert("please input the date for table reservation")
    } else if (!document.getElementById('radio-one').checked && !document.getElementById('radio-two').checked){
        alert("please choose where you would like to seat")
    } else if (document.getElementById('noDiners').value == 0) {
        alert("please select the number of diners for the table")
    } else if (!document.getElementById('occasion').value) {
        alert("please select the occasion for table reservation")
    } else if (!document.getElementById('time').value) {
        alert("please select the time for table reservation")
    } else {
        alert("You have reserved a table")
    }
}
