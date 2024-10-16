// Function to generate a random message
export function generateRandomMessage() {
    const messages = [
      "Hello, world!",
      "Keep pushing forward!",
      "Believe in yourself!",
      "Every day is a new opportunity!",
      "Have a great day!",
      "Success is a journey, not a destination."
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }
  