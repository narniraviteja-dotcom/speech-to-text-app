import { supabase } from "./supabase";

function Login() {
    const signInWithGoogle = async () => {
const { error } = await
 supabase.auth.signInWithOAuth({
  provider: "google",
  options: {
    queryParams: {
        promt:"select_account",
    },
   },
});

if (error) {
  console.log(error);
}
  };
supabase.auth.getSession().then(({ data }) => {
  console.log("Session:", data.session);
});
  return (
    <div>
      <h1>Google Login Successful ✅</h1>
      <button onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
}

export default Login;