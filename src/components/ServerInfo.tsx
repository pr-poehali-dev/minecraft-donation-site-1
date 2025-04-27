
import { Card, CardContent } from "@/components/ui/card";
import { Users, Server, Cpu, Shield } from "lucide-react";

export function ServerInfo() {
  return (
    <section id="about" className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3 text-[#9b87f5]">О нашем сервере</h2>
        <p className="text-lg text-[#a7afca] max-w-2xl mx-auto">
          Наш сервер предлагает уникальный геймплей и дружелюбное сообщество для всех любителей Minecraft
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-[#2c3445] border-[#3d4558]">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Users className="h-12 w-12 text-[#9b87f5] mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Дружелюбное сообщество</h3>
            <p className="text-[#a7afca]">Более 1500 активных игроков из разных стран мира</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2c3445] border-[#3d4558]">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Server className="h-12 w-12 text-[#9b87f5] mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Мощное оборудование</h3>
            <p className="text-[#a7afca]">Серверы с высокой производительностью для лучшего игрового опыта</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2c3445] border-[#3d4558]">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Cpu className="h-12 w-12 text-[#9b87f5] mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Оптимизированные плагины</h3>
            <p className="text-[#a7afca]">Тщательно настроенные плагины для стабильной и плавной игры</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2c3445] border-[#3d4558]">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-[#9b87f5] mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Защита от гриферов</h3>
            <p className="text-[#a7afca]">Надежная защита вашего имущества от злоумышленников</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-10 p-6 bg-[#2c3445] rounded-lg border border-[#3d4558]">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-3 text-[#9b87f5]">Как начать играть?</h3>
            <ol className="list-decimal list-inside space-y-2 text-[#a7afca]">
              <li>Установите Minecraft версии 1.19.2</li>
              <li>Запустите игру и перейдите во вкладку "Мультиплеер"</li>
              <li>Нажмите "Добавить сервер" и введите наш IP-адрес: <span className="text-white font-mono bg-[#1a1f2c] px-2 py-1 rounded">play.minecraft-server.ru</span></li>
              <li>Присоединяйтесь к серверу и наслаждайтесь игрой!</li>
            </ol>
          </div>
          <div className="md:w-1/2 bg-[#1a1f2c] p-4 rounded-lg border border-[#3d4558]">
            <div className="text-center text-[#a7afca]">
              <p className="mb-2">Статус сервера: <span className="text-green-400">Онлайн</span></p>
              <p className="mb-2">Версия: <span className="text-white">1.19.2</span></p>
              <p className="mb-2">Режим: <span className="text-white">Выживание + Мини-игры</span></p>
              <p>IP адрес:</p>
              <div className="bg-[#212837] p-2 rounded font-mono text-white text-lg my-2">
                play.minecraft-server.ru
              </div>
              <p className="text-sm">Онлайн игроков: <span className="text-[#9b87f5]">248 / 1000</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
