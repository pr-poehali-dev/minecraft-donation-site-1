
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const packages = [
  {
    id: "vip",
    name: "VIP",
    price: "199₽",
    description: "Базовый набор привилегий для начала игры",
    features: [
      "Префикс [VIP] в чате",
      "Доступ к команде /kit vip",
      "Телепортация к игрокам",
      "3 точки дома"
    ],
    color: "#7E69AB",
    popular: false
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "399₽",
    description: "Продвинутые возможности для комфортной игры",
    features: [
      "Все возможности VIP",
      "Префикс [PREMIUM] в чате",
      "Доступ к команде /kit premium",
      "Возможность летать в лобби",
      "5 точек дома",
    ],
    color: "#9b87f5",
    popular: true
  },
  {
    id: "elite",
    name: "ELITE",
    price: "799₽",
    description: "Максимальные привилегии для настоящих фанатов",
    features: [
      "Все возможности PREMIUM",
      "Префикс [ELITE] в чате",
      "Доступ к команде /kit elite",
      "Возможность менять время",
      "Креатив в специальной зоне",
      "10 точек дома"
    ],
    color: "#6E59A5",
    popular: false
  }
];

export function DonationPackages() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg) => (
        <Card 
          key={pkg.id} 
          className={`bg-[#2c3445] border border-[#3d4558] ${pkg.popular ? 'relative overflow-hidden ring-2 ring-[#9b87f5]' : ''}`}
        >
          {pkg.popular && (
            <div className="absolute top-0 right-0 bg-[#9b87f5] text-white px-3 py-1 text-sm font-medium rounded-bl-md">
              Популярный
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-2xl" style={{ color: pkg.color }}>{pkg.name}</CardTitle>
            <CardDescription className="text-[#a7afca]">{pkg.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">{pkg.price}</span>
              <span className="text-[#a7afca] ml-1">/ навсегда</span>
            </div>
            <ul className="space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0" style={{ color: pkg.color }} />
                  <span className="text-[#a7afca]">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full text-white" 
              style={{ backgroundColor: pkg.color }}
            >
              Купить {pkg.name}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
