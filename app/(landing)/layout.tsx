import { NavHeader } from "@/components/sharing/nav-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavHeader></NavHeader>
      {children}
    </div>
  );
}
