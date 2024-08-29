// document.addEventListener("DOMContentLoaded", function () { //if script is linked in head tag
 var form = document.getElementById("form")

 // Event listener for form submission
 form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    //Get the values from the data
    var Name = document.getElementById('Name').value;
    var Age = document.getElementById('Age').value;
    var Semester = document.getElementById('Semester').value;
    var Address = document.getElementById('Address').value;
    var Number = document.getElementById('Number').value;

    var formdata = (
        `
        Name: ${Name}
        Age: ${Age}
        Semester: ${Semester}
        Address: ${Address}
        Number: ${Number}
        `
    );
    alert(formdata);
});
// });