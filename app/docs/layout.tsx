import Rightbar from "@/components/RightBar";
import Sidebar from "@/components/Sidebar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-8">
      <Sidebar />
      <div className="flex-[5.25]">{children}</div>
      <Rightbar />
    </div>
  );
}