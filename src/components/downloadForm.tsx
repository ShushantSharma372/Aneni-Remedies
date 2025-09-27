// src/components/forms/DownloadForm.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DownloadForm({ resourceTitle }: { resourceTitle?: string }) {
  return (
    <form className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" type="text" placeholder="John Doe" required />
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="you@example.com" required />
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" type="text" placeholder="Company Name" />
      </div>

      <div>
        <Label htmlFor="country">Country</Label>
        <Input id="country" type="text" placeholder="India" />
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" placeholder="+91 9876543210" />
      </div>

      <div className="pt-4">
        <Button type="submit" className="w-full">
          Download {resourceTitle ? `– ${resourceTitle}` : ""}
        </Button>
      </div>
    </form>
  );
}
