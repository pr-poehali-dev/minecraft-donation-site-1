
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { ServerNavbar } from "@/components/ServerNavbar";
import { DonationPackages } from "@/components/DonationPackages";
import { ServerInfo } from "@/components/ServerInfo";
import { Hero } from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#212837] text-white">
      <ServerNavbar />
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <ServerInfo />
        
        <Separator className="my-12 bg-[#505771]" />
        
        <section id="donate" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-[#9b87f5]">Поддержи наш сервер</h2>
            <p className="text-lg text-[#a7afca] max-w-2xl mx-auto">
              Приобретая донат, вы получаете особые привилегии и помогаете развитию нашего проекта
            </p>
          </div>
          
          <DonationPackages />
        </section>
        
        <Separator className="my-12 bg-[#505771]" />
        
        <section id="faq" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-[#9b87f5]">Часто задаваемые вопросы</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-[#2c3445] border-[#3d4558]">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Как долго действуют привилегии?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#a7afca]">Все донат-привилегии действуют бессрочно и сохраняются при смене ника.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#2c3445] border-[#3d4558]">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Как быстро я получу привилегии после оплаты?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#a7afca]">Привилегии выдаются автоматически сразу после оплаты. Если этого не произошло, обратитесь к администрации.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#2c3445] border-[#3d4558]">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Можно ли сменить купленный донат на другой?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#a7afca]">Да, вы можете доплатить разницу и перейти на более высокий ранг в любое время.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#2c3445] border-[#3d4558]">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Как связаться с администрацией?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#a7afca]">Вы можете связаться с нами через Discord или группу ВКонтакте, указанные в подвале сайта.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      
      <footer className="bg-[#1a1f2c] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">MineСraft Сервер</h3>
              <p className="text-[#a7afca]">© 2025 Все права защищены</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" className="text-[#9b87f5] hover:text-white hover:bg-[#2c3445]">
                Discord
              </Button>
              <Button variant="ghost" className="text-[#9b87f5] hover:text-white hover:bg-[#2c3445]">
                ВКонтакте
              </Button>
              <Button variant="ghost" className="text-[#9b87f5] hover:text-white hover:bg-[#2c3445]">
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
