document.getElementById('card-customization-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Retrieve the entered data
    const recipientName = document.getElementById('recipient-name').value;
    const greetingMessage = document.getElementById('greeting-message').value;
  
    // Perform actions with the entered data (e.g., generate the card)
    // For demonstration purposes, you can log the data to the console
    console.log(`Recipient's Name: ${recipientName}`);
    console.log(`Greeting Message: ${greetingMessage}`);
  
    // You can create the card dynamically, modify the DOM, or perform other actions here
    // This example only logs the entered data to the console
  });
  