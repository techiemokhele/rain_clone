import NavigationComponent from "@/components/layout/NavigationComponent";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <div className="flex size-full flex-col">
        <NavigationComponent />
        {children}
      </div>
    </main>
  );
}
