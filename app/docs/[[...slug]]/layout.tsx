import Rightbar from "@/components/RightBar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-8">
      <div className="flex-[5.25]">{children}</div>
      <Rightbar />
    </div>
  );
}