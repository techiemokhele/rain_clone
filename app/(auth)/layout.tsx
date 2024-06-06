import NavigationComponent from "@/components/layout/NavigationComponent";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col h-screen w-full font-inter">
      <NavigationComponent />
      <div className="flex-grow">{children}</div>
    </main>
  );
}
