import { LoginForm } from "./LoginForm";

export default function Login(props) {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
