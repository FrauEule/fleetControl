document.getElementById('searchInput').addEventListener('keyup', function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const locoNumber = row.cells[1].textContent.toLowerCase();
        const operator = row.cells[2].textContent.toLowerCase();

        if (locoNumber.includes(filter) || operator.includes(filter)) {
            row.style.display = ''; // Show the row
        } else {
            row.style.display = 'none'; // Hide the row
        }
    });
});

function sortTable(sortField) {
    const table = document.querySelector('table tbody');
    const rows = Array.from(table.rows);
    let contentField = 'sortSelect'+sortField.getAttribute('data-id');

    const sortOrder = document.getElementById(contentField).value;

    if (sortField.getAttribute('data-type') === "date") {
        rows.sort((a, b) => {
            const dateA = new Date(a.cells[sortField.getAttribute('data-id')].textContent.split('.').reverse().join('-'));
            const dateB = new Date(b.cells[sortField.getAttribute('data-id')].textContent.split('.').reverse().join('-'));    
            return sortOrder === 'earliest' ? dateA - dateB : dateB - dateA;
        });
        
    } else {
        // Sort table based on text
        rows.sort((a, b) => {
            const textA = a.cells[sortField.getAttribute('data-id')].textContent.trim().toLowerCase();
            const textB = b.cells[sortField.getAttribute('data-id')].textContent.trim().toLowerCase();
            if (sortOrder === 'ascending') {
                return textA.localeCompare(textB);
            } else {
                return textB.localeCompare(textA);
            }
        });
    }

    // Append sorted rows back to the table
    rows.forEach(row => table.appendChild(row));
}

function filterTable(inputField) {
    const filter = inputField.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const locoNumber = row.cells[inputField.getAttribute('data-id')].textContent.toLowerCase();

        if (locoNumber.includes(filter) ) {
            row.style.display = ''; // Show the row
        } else {
            row.style.display = 'none'; // Hide the row
        }
    });
}

/*
document.getElementById('sortButton').addEventListener('click', function() {
    const table = document.querySelector('table tbody');
    const rows = Array.from(table.rows);

    // Sort rows based on the "Next Inspection" column (index 4)
    rows.sort((a, b) => {
        const dateA = new Date(a.cells[4].textContent.split('.').reverse().join('-')); // Convert to YYYY-MM-DD
        const dateB = new Date(b.cells[4].textContent.split('.').reverse().join('-')); // Convert to YYYY-MM-DD
        return dateA - dateB; // Sort in ascending order
    });

    // Remove existing rows
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // Append sorted rows back to the table
    rows.forEach(row => table.appendChild(row));
});




//Table sort and search

function sortMileage() {
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const sortedRows = rows.sort((a, b) => {
        const mileageA = parseInt(a.cells[3].textContent.replace('KM', '').trim());
        const mileageB = parseInt(b.cells[3].textContent.replace('KM', '').trim());
        return mileageA - mileageB; // Ascending order
    });
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    sortedRows.forEach(row => tbody.appendChild(row));
}

function sortInspection() {
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const sortedRows = rows.sort((a, b) => {
        const dateA = new Date(a.cells[4].textContent.split('.').reverse().join('-'));
        const dateB = new Date(b.cells[4].textContent.split('.').reverse().join('-'));
        return dateA - dateB; // Ascending order
    });
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    sortedRows.forEach(row => tbody.appendChild(row));
}


document.getElementById('sortSelect').addEventListener('click', function() {
    const options = this.querySelectorAll('.hidden-option');
    options.forEach(option => {
        option.style.display = 'block'; // Show options when clicked
    });
});

function sortBy(order) {
    if (order === 'dateAsc') {
        // Implement sorting logic for ascending order
        console.log("Sorting by date ascending");
    } else if (order === 'dateDesc') {
        // Implement sorting logic for descending order
        console.log("Sorting by date descending");
    }
}



console.log('Data being checked:', {
    locoNumber,
    operator,
    mileage,
    lastInspection,
    ultrasonic,
    trainControl,
    br12,
    notes,
    comments
});


console.log('Filter values:', {
    locoNumberFilter,
    operatorFilter,
    mileageFilter,
    lastInspectionFilter,
    ultrasonicFilter,
    trainControlFilter,
    br12Filter,
    notesFilter,
    commentsFilter
});

if (
    (locoNumber && locoNumber.toLowerCase().includes(locoNumberFilter.toLowerCase())) ||
    (operator && operator.toLowerCase().includes(operatorFilter.toLowerCase())) ||
    (mileage && mileage.toLowerCase().includes(mileageFilter.toLowerCase())) ||
    (lastInspection && lastInspection.toLowerCase().includes(lastInspectionFilter.toLowerCase())) ||
    (ultrasonic && ultrasonic.toLowerCase().includes(ultrasonicFilter.toLowerCase())) ||
    (trainControl && trainControl.toLowerCase().includes(trainControlFilter.toLowerCase())) ||
    (br12 && br12.toLowerCase().includes(br12Filter.toLowerCase())) ||
    (notes && notes.toLowerCase().includes(notesFilter.toLowerCase())) ||
    (comments && comments.toLowerCase().includes(commentsFilter.toLowerCase()))
) {
    row.style.display = ''; // Show the row
} else {
    row.style.display = 'none'; // Hide the row
}

const locoNumber = "12345"; // Example hardcoded value
const locoNumberFilter = "123"; // Example filter
// Repeat for other variables...



if (
    (locoNumber && locoNumber.toLowerCase().includes(locoNumberFilter.toLowerCase())) &&
    (operator && operator.toLowerCase().includes(operatorFilter.toLowerCase())) &&
    (mileage && mileage.toLowerCase().includes(mileageFilter.toLowerCase())) &&
    (lastInspection && lastInspection.toLowerCase().includes(lastInspectionFilter.toLowerCase())) &&
    (ultrasonic && ultrasonic.toLowerCase().includes(ultrasonicFilter.toLowerCase())) &&
    (trainControl && trainControl.toLowerCase().includes(trainControlFilter.toLowerCase())) &&
    (br12 && br12.toLowerCase().includes(br12Filter.toLowerCase())) &&
    (notes && notes.toLowerCase().includes(notesFilter.toLowerCase())) &&
    (comments && comments.toLowerCase().includes(commentsFilter.toLowerCase()))
) {
    row.style.display = ''; // Show the row
} else {
    row.style.display = 'none'; // Hide the row
}



 
*/