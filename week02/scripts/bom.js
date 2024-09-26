// Select the input, button, and list elements
const input = document.querySelector('#favchap'); // Input field
const addButton = document.querySelector('button'); // Add Chapter button
const list = document.querySelector('#list'); // Unordered list

// Add event listener for the 'Add Chapter' button
addButton.addEventListener('click', function() {
    // Check if the input is not empty
    if (input.value.trim() !== '') {
        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = input.value; // Set the li text content to the input value

        // Create the delete button for the list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; // Set the text content of the delete button
        deleteButton.classList.add('delete'); // Add a class for styling (optional)

        // Append the delete button to the li
        li.appendChild(deleteButton);

        // Append the li to the list
        list.appendChild(li);

        // Clear the input field for the next entry
        input.value = '';

        // Add event listener to the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li); // Remove the li when delete button is clicked
        });

        // Focus back on the input field for convenience
        input.focus();
    } else {
        // Focus back to the input field if it's empty
        input.focus();
    }
});
