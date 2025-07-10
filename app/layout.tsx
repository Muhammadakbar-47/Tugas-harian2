import '@/app/ui/global.css';
import NavLinks from './ui/landing/nav-links';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <div className="flex justify-start h-20  bg-cyan-600 text-white items-center px-10 py-10 rounded-md ">
      <NavLinks />
      </div>
      <div className= "flex justify-start py-5 ml-3  font-semibold  text-cyan-600">
         <body>{children}</body>
      </div>
      
    </html>
  );
}
