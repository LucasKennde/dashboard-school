async function signUp(email, password) {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error(error);
      return;
    }
    console.log('Usuário registrado:', user);
  }
  async function signIn(email, password) {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      console.error(error);
      return;
    }
    console.log('Usuário logado:', user);
  }
  