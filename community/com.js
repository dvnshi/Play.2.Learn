function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;
  
    if (messageText.trim() !== '') {
      const messages = document.getElementById('messages');
      const messageElement = document.createElement('div');
      messageElement.className = 'message';
      messageElement.textContent = 'You: ' + messageText;
      messages.appendChild(messageElement);
  
      messageInput.value = '';
      messages.scrollTop = messages.scrollHeight;
    }
  }
  