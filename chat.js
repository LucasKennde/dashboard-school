const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-supabase-api-key';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const sendMessageButton = document.getElementById('send-message');
  const messageInput = document.getElementById('message-input');
  const chatBox = document.getElementById('chat-box');
  const rootElement = document.documentElement;

  themeToggle.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      rootElement.setAttribute('data-theme', 'light');
    } else {
      rootElement.setAttribute('data-theme', 'dark');
    }
  });

  sendMessageButton.addEventListener('click', sendMessage);

  async function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return;

    try {
      const { error } = await supabase
        .from('messages')
        .insert([{ message: message, user: 'User' }]);

      if (error) {
        console.error('Erro ao enviar mensagem:', error);
        return;
      }

      messageInput.value = '';
      loadMessages();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  }

  async function loadMessages() {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('id', { ascending: false });

      if (error) {
        console.error('Erro ao carregar mensagens:', error);
        return;
      }

      chatBox.innerHTML = '';
      data.forEach((message) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('p-2', 'border-b', 'border-gray-200');
        messageDiv.textContent = message.user + ': ' + message.message;
        chatBox.appendChild(messageDiv);
      });
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error);
    }
  }

  loadMessages();
});
