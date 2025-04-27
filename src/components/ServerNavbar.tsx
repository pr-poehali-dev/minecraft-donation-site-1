
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useMobile } from "@/hooks/use-mobile";

export function ServerNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  return (
    <div className="bg-[#1a1f2c]/90 backdrop-blur-sm sticky top-0 z-50 border-b border-[#3d4558]">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">MineCraft Сервер</span>
          </Link>
          
          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Главная
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#donate">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Донат
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#faq">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      FAQ
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {isMobile ? (
            <Button
              variant="ghost"
              className="text-[#9b87f5]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </Button>
          ) : (
            <>
              <Button
                variant="ghost"
                className="hover:bg-[#2c3445] text-[#9b87f5]"
              >
                Войти
              </Button>
              <Button className="bg-[#9b87f5] hover:bg-[#7e69ab] text-white">
                Купить донат
              </Button>
            </>
          )}
        </div>
      </div>
      
      {isMobile && mobileMenuOpen && (
        <div className="container px-4 py-3 bg-[#2c3445] border-b border-[#3d4558]">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-white hover:text-[#9b87f5]" onClick={() => setMobileMenuOpen(false)}>
              Главная
            </Link>
            <a href="#donate" className="text-white hover:text-[#9b87f5]" onClick={() => setMobileMenuOpen(false)}>
              Донат
            </a>
            <a href="#faq" className="text-white hover:text-[#9b87f5]" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
            <div className="flex gap-2 pt-2">
              <Button
                variant="ghost"
                className="hover:bg-[#1a1f2c] text-[#9b87f5] w-full"
              >
                Войти
              </Button>
              <Button className="bg-[#9b87f5] hover:bg-[#7e69ab] text-white w-full">
                Купить донат
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
