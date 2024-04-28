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



  
});