"use client"

import { usePathname } from "next/navigation";

export default function TeamPage() {
  
  const pathName = usePathname();
  const name = "Long Vibol";

  return (
    <div>
      <h1>
       {name}{" "} {pathName}
      </h1>
    </div>
  );
}
