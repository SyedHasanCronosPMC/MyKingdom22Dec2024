import { LoginLayout } from "@/components/auth/layout/LoginLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { LoginTestimonials } from "@/components/auth/LoginTestimonials";

export default function Login() {
  return (
    <LoginLayout>
      <LoginLayout.Left>
        <LoginForm />
      </LoginLayout.Left>
      <LoginLayout.Right>
        <LoginTestimonials />
      </LoginLayout.Right>
    </LoginLayout>
  );
}