
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div 
      className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.9)), url(https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Лучший <span className="text-[#9b87f5]">MineCraft</span> сервер
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-[#a7afca]">
          Присоединяйтесь к сотням игроков и станьте частью нашего уникального сообщества
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7e69ab] text-white px-8">
            Начать играть
          </Button>
          <Button size="lg" variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#2c3445] px-8">
            О сервере
          </Button>
        </div>
        <div className="flex justify-center gap-8 mt-12">
          <div>
            <div className="text-3xl font-bold text-[#9b87f5]">1500+</div>
            <div className="text-[#a7afca]">Игроков</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#9b87f5]">99.9%</div>
            <div className="text-[#a7afca]">Аптайм</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#9b87f5]">4</div>
            <div className="text-[#a7afca]">Года онлайн</div>
          </div>
        </div>
      </div>
    </div>
  );
}
