document.addEventListener("DOMContentLoaded", function () {
 const form = document.getElementById("form")

 // Event listener for form submission
 form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    //Get the values from the data
    const Name = document.getElementById("Name").value;
    const Age = document.getElementById("Age").value;
    const Semester = document.getElementById("Semester").value;
    const Address = document.getElementById("Address").value;
    const Number = document.getElementById("Number").value;

    //Display data in alert
    alert(
        `
        Name: ${Name}
        Age: ${Age}
        Semester: ${Semester}
        Address: ${Address}
        Number: ${Number}
        `
    );
});
});