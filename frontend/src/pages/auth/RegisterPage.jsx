import { useNavigate } from "react-router-dom";
import { PageHeader } from "../../components/common/PageHeader";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { AuthCard } from "../../components/auth/AuthCard";
import { AuthInput } from "../../components/auth/AuthInput";
import { AuthButton } from "../../components/auth/AuthButton";
import { AuthDivider } from "../../components/auth/AuthDivider";
import { AuthGuestButton } from "../../components/auth/AuthGuestButton";
import { AuthFooter } from "../../components/auth/AuthFooter";

export const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-app-background px-4 py-3">
      <PageHeader title="Create Account" />

      <AuthHeader
        title="Create Your Account"
        description="Create an account to save favourites and access your profile across devices."
      />

      <AuthCard>
        <AuthInput
          label="Full Name"
          placeholder="Enter your full name"
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Create a password"
        />

        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
        />

        <AuthButton>
          Create Account
        </AuthButton>
      </AuthCard>

      <AuthDivider />

      <AuthGuestButton onClick={()=>navigate('/')} />

      <AuthFooter
        text="Already have an account?"
        linkText="Sign In"
        to="/login"
      />
    </div>
  );
};
