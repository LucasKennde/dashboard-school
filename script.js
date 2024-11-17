const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-supabase-api-key';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
});

async function loadUsers() {
  const { data, error } = await supabase
    .from('users')
    .select('*');

  if (error) {
    console.error(error);
    return;
  }

  // Populando listas de usuários
  const userList = document.getElementById('user-list');
  data.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.role})`;
    userList.appendChild(li);
  });
}
