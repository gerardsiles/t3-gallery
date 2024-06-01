import React from "react";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-uplaod-button";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div className="container mx-auto flex justify-between">
        <a href="/" className="text-white">
          Gallery
        </a>
        <div className="flex flex-row items-center gap-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SimpleUploadButton />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
