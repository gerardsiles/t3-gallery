"use client";

import React from "react";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div className="container mx-auto flex justify-between">
        <a href="/" className="text-white">
          Gallery
        </a>
        <div className="flex flex-row">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
