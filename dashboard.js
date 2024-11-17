const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-supabase-api-key';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const loadDataButton = document.getElementById('load-data');
  const stat1Value = document.getElementById('stat-1-value');
  const stat2Value = document.getElementById('stat-2-value');
  const stat3Value = document.getElementById('stat-3-value');
  const rootElement = document.documentElement;

  themeToggle.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      rootElement.setAttribute('data-theme', 'light');
    } else {
      rootElement.setAttribute('data-theme', 'dark');
    }
  });

  loadDataButton.addEventListener('click', loadDashboardData);

  async function loadDashboardData() {
    try {
      const { data, error } = await supabase
        .from('estatisticas')
        .select('*');

      if (error) {
        console.error('Erro ao carregar dados:', error);
        return;
      }

      if (data && data.length > 0) {
        stat1Value.textContent = data[0].stat1 || '0';
        stat2Value.textContent = data[0].stat2 || '0';
        stat3Value.textContent = data[0].stat3 || '0';
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  }

  loadDashboardData();
});
