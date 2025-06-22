import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,146,172,0.1)_1px,transparent_1px)] [background-size:60px_60px] opacity-20"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Качественные академические работы
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              для студентов
            </span>
          </h1>

          <p className="font-open-sans text-xl md:text-2xl mb-8 text-purple-100 max-w-2xl mx-auto animate-fade-in">
            Курсовые работы, рефераты, презентации и доклады от опытных авторов.
            Гарантируем качество, уникальность и своевременную сдачу.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Icon name="PenTool" className="mr-2" size={20} />
              Заказать работу
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-8 py-3 text-lg rounded-full"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Получить консультацию
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                500+
              </div>
              <div className="text-purple-200">Выполненных работ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-purple-200">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                24/7
              </div>
              <div className="text-purple-200">Поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                100%
              </div>
              <div className="text-purple-200">Уникальность</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
