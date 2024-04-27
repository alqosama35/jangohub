document.addEventListener("DOMContentLoaded", function() {
    const fileList = document.querySelector("#file-list tbody");
    const addFileForm = document.getElementById("add-file-form");

    addFileForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const fileName = document.getElementById("file-name").value;
        const fileDate = document.getElementById("file-date").value;
        const fileTag = document.getElementById("file-tag").value || "None";
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
});