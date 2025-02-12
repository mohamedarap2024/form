document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    
    let userId = document.getElementById("userId").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    
    if (!userId || !phoneNumber) {
        alert("Please enter both ID and phone number.");
        return;
    }
    
    let message = `Hello ${userId}, this is a test message from WhatsApp API.`;
    
    let apiUrl = "https://api.ultramsg.com/instance106967/messages";
    let token = "8z9nyx18b5r7ie54";
    
    let data = {
        token: token,
        to: phoneNumber,
        body: message,
        priority: 10,
        referenceId: ""
    };
    
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.sent) {
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message. Check API credentials.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    });
});
