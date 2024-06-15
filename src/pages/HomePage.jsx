import { SignOutButton, useUser } from "@clerk/clerk-react";

export default function HomePage() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  if (isSignedIn) {
    return (
      <div>
        Hello {user.fullName}!
        <SignOutButton
          redirectUrl="/sign-in"
          className="bg-primary py-2 px-2 rounded text-white"
        />
      </div>
    );
  } 

  return <div>Not signed in</div>;
}
