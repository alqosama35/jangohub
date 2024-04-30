document.addEventListener("DOMContentLoaded", function() {
    const fileList = document.querySelector("#file-list tbody");
    const addFileForm = document.getElementById("add-file-form");


    addFileForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const fileName = document.getElementById("file-name").value;
        const fileDate = document.getElementById("file-date").value;
        const fileTag = document.getElementById("file-tag").value || "others";
        const fileURL = document.getElementById("file-url").value;

        // Create a new table row with a link
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><a href="${fileURL}" target="_blank">${fileName}</a></td>
            <td>${fileDate}</td>
            <td>${fileTag}</td>
        `;

        // Append the new row to the file list
        fileList.appendChild(newRow);

        // Clear the form fields
        addFileForm.reset();
    });



    // Define a function to handle filtering
function filterFiles(filterLink) {
    // Add event listener to the filter link
    filterLink.addEventListener('click', function(event) {
        // Prevent the default behavior of the link
        event.preventDefault();
    
        // Get the selected tag value
        const selectedTag = filterLink.textContent.trim().toLowerCase();
        console.log(selectedTag);
        
        // Get all file items
        const fileItems = document.querySelectorAll('#file-list tbody tr');
        
        // Loop through each file item
        fileItems.forEach(fileItem => {
            // Get the tag column for the current file item
            const tagColumn = fileItem.querySelector('td:nth-child(3)');
            
            // Check if the tag column contains the selected tag
            if (tagColumn.textContent.trim().toLowerCase() === selectedTag) {
                // Show the file item if it matches the selected tag
                fileItem.style.display = 'table-row';
            } else {
                // Hide the file item if it doesn't match the selected tag
                fileItem.style.display = 'none';
            }
        });
    });
}

// Get the filter link elements
const filterLinks = document.querySelectorAll('.types li');

// Loop through each filter link and apply filtering functionality
filterLinks.forEach(filterLink => {
    // Apply filtering functionality
    filterFiles(filterLink);
});


//----------------------header
const logoutbtn = document.getElementById('logout');
    const loginbtn = document.getElementById('login');
    const themebtn = document.getElementById('theme');
    const body = document.getElementById('body');

if (!localStorage.getItem('signedin')) {
    // If not set, set it to 'true'
    localStorage.setItem('signedin', 'true');
}

const signedin = localStorage.getItem('signedin');
if (signedin === 'true') {
    logoutbtn.classList.add('active');
    loginbtn.classList.remove('active');
    
    


} else {
    logoutbtn.classList.remove('active');
    loginbtn.classList.add('active');

}

logoutbtn.addEventListener('click', function () {
    // Perform your action here
    localStorage.setItem('signedin', 'not');


});

loginbtn.addEventListener('click', function () {
    // Perform your action here
    localStorage.setItem('signedin', 'true');
    


});

//to change theme
themebtn.addEventListener('click', function () {
    // Perform your action here
    body.classList.toggle('dark');

    

});
  
// Get the input field
var dateInput = document.getElementById("file-date");

// Add a click event listener to the input field
dateInput.addEventListener("click", function() {
  // Trigger the click event of the input field
  this.click();
});

// Add event listener for input changes in the search bar
document.getElementById('search-input').addEventListener('input', function() {
    var filter = this.value.toUpperCase(); // Get the value of the search input and convert it to uppercase
    var tableRows = document.querySelector('table').getElementsByTagName('tr'); // Get all table rows
    
    // Loop through all table rows
    for (var i = 0; i < tableRows.length; i++) {
        var fileNameColumn = tableRows[i].getElementsByTagName('td')[0]; // Get the first column (file name column) of the current row
        
        // If the file name column exists
        if (fileNameColumn) {
            var fileName = fileNameColumn.textContent || fileNameColumn.innerText; // Get the text content of the file name column
            
            // Check if the file name contains the search filter
            if (fileName.toUpperCase().indexOf(filter) > -1) {
                tableRows[i].style.display = ''; // If the file name matches the search filter, display the row
            } else {
                tableRows[i].style.display = 'none'; // If the file name does not match the search filter, hide the row
            }
        }
    }
});

});