import AuthFormComponent from "@/components/sections/auth/AuthFormComponent";

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[110px]">
      <p className="text-blue-600 text-[52px] font-[900]">welcome back</p>

      <div className="mt-4">
        <AuthFormComponent />
      </div>
    </div>
  );
};

export default SignInPage;
