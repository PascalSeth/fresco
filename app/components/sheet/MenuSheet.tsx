import Link from 'next/link'; // Import Link from next/link
import { menuList } from "@/app/data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Info, Contact, Server } from "lucide-react";
import Image from "next/image";

export function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button><Menu /></Button>
      </SheetTrigger>
      <SheetContent className="bg-white h-full z-[9999] p-4">
        <SheetHeader>
          <SheetTitle className="flex items-center mb-4">
            <Image src="/logo.png" alt='logo' width={80} height={60} />
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {menuList.map((item:any) => (
            <Link key={item.id} href={item.path} className="flex items-center p-2 text-black hover:bg-gray-100 rounded-md transition-colors" passHref>
                <div className="mr-3">
                  {item.icon === "home" && <Home />}
                  {item.icon === "info" && <Info />}
                  {item.icon === "services" && <Server />}
                  {item.icon === "contact" && <Contact />}
                </div>
                <span>{item.name}</span>
            </Link>
          ))}
        </div>

      </SheetContent>
    </Sheet>
  );
}
