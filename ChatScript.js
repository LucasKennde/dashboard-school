document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendMessageButton = document.getElementById('send-message');
    const chatBox = document.getElementById('chat-box');
  
    sendMessageButton.addEventListener('click', () => {
      const message = messageInput.value;
      if (message.trim() !== '') {
        addMessageToChat(message);
        messageInput.value = '';
      }
    });
  
    function addMessageToChat(message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', 'mb-2');
      messageElement.textContent = message;
      chatBox.appendChild(messageElement);
    }
  });
  