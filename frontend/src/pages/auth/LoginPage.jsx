import { useNavigate } from "react-router-dom";
import { PageHeader } from "../../components/common/PageHeader";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { AuthCard } from "../../components/auth/AuthCard";
import { AuthInput } from "../../components/auth/AuthInput";
import { AuthButton } from "../../components/auth/AuthButton";
import { AuthDivider } from "../../components/auth/AuthDivider";
import { AuthGuestButton } from "../../components/auth/AuthGuestButton";
import { AuthFooter } from "../../components/auth/AuthFooter";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-app-background px-4 py-3">
      <PageHeader title="Sign In" />

      <AuthHeader
        title="Welcome Back"
        description="Sign in to access your favourites and manage your account."
      />

      <AuthCard>
        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <div className="-mt-2 mb-5 flex justify-end">
          <button
            type="button"
            className="text-xs font-medium text-brand"
          >
            Forgot Password?
          </button>
        </div>

        <AuthButton>
          Sign In
        </AuthButton>
      </AuthCard>

      <AuthDivider />

      <AuthGuestButton onClick={()=>navigate('/')} />

      <AuthFooter
        text="Don't have an account?"
        linkText="Create Account"
        to="/register"
      />
    </div>
  );
};
