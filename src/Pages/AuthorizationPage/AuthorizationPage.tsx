import AuthForm, { AuthFormProps } from "../../components/AuthForm/AuthForm";

const AuthorizationPage = ({ login }: AuthFormProps) => {
  return (
    <>
      <AuthForm login={login} />
    </>
  );
};

export default AuthorizationPage;
