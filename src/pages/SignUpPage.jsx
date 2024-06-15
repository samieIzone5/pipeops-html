import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp
        // path="/sign-up"
        // signInUrl="/sign-in"
        routing="virtual"
        forceRedirectUrl="/home"
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-[#2563eb] hover:bg-[#2563eb] text-sm normal-case",
          },
        }}
      />
    </div>
  );
}
