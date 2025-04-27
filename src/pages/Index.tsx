
import { Hero } from "@/components/Hero";
import { ServerNavbar } from "@/components/ServerNavbar";
import { ServerInfo } from "@/components/ServerInfo";
import { DonationPackages } from "@/components/DonationPackages";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#1a1f2c] text-white">
      <ServerNavbar />
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <ServerInfo />
        
        <section id="donate" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-[#9b87f5]">Донат-привилегии</h2>
            <p className="text-lg text-[#a7afca] max-w-2xl mx-auto">
              Поддержите развитие сервера и получите дополнительные возможности
            </p>
          </div>
          
          <DonationPackages />
        </section>
        
        <section id="faq" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-[#9b87f5]">Часто задаваемые вопросы</h2>
            <p className="text-lg text-[#a7afca] max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о донате и привилегиях
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-[#2c3445] rounded-lg border border-[#3d4558] p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-[#3d4558]">
                <AccordionTrigger className="text-white hover:text-[#9b87f5]">
                  Как долго действуют донат-привилегии?
                </AccordionTrigger>
                <AccordionContent className="text-[#a7afca]">
                  Все донат-привилегии на нашем сервере выдаются навсегда. После покупки вы сможете пользоваться ими до тех пор, пока существует сервер.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-[#3d4558]">
                <AccordionTrigger className="text-white hover:text-[#9b87f5]">
                  Как происходит активация привилегии?
                </AccordionTrigger>
                <AccordionContent className="text-[#a7afca]">
                  После оплаты привилегия активируется автоматически в течение 5 минут. Если активация не произошла, обратитесь к администрации сервера через Discord.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-[#3d4558]">
                <AccordionTrigger className="text-white hover:text-[#9b87f5]">
                  Можно ли повысить уже купленную привилегию?
                </AccordionTrigger>
                <AccordionContent className="text-[#a7afca]">
                  Да, вы можете повысить свою привилегию, доплатив разницу между текущей и желаемой. Обратитесь к администрации для уточнения деталей.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        <div className="text-center py-8 border-t border-[#3d4558]">
          <p className="text-[#a7afca]">© 2025 Minecraft Сервер. Все права защищены.</p>
          <p className="text-sm text-[#8E9196] mt-2">Наш сервер не связан с Mojang AB.</p>
        </div>
      </div>
    </div>
  );
}
