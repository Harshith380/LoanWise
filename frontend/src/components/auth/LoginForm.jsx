import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <div className="bg-gray-100 min-h-screen pt-32 pb-12">

      <div className="max-w-lg mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          Login
        </h1>

        <LoginForm />

      </div>

    </div>
  );
}

export default Login;