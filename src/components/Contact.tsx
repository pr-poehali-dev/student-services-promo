import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactMethods = [
    {
      title: "Telegram",
      description: "Быстрая связь в мессенджере",
      icon: "MessageCircle",
      value: "@academic_help",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "WhatsApp",
      description: "Удобное общение и отправка файлов",
      icon: "Phone",
      value: "+7 (999) 123-45-67",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Email",
      description: "Официальные запросы и документы",
      icon: "Mail",
      value: "info@student-help.ru",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь с нами
          </h2>
          <p className="font-open-sans text-xl text-purple-200 max-w-2xl mx-auto">
            Готовы обсудить вашу работу? Выберите удобный способ связи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center`}
                >
                  <Icon
                    name={method.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl font-bold text-white">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-purple-200">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="font-open-sans text-lg font-semibold text-yellow-400 mb-4">
                  {method.value}
                </div>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-purple-900 transition-all duration-200"
                >
                  Связаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <h3 className="font-montserrat text-3xl font-bold mb-4">
            Начните прямо сейчас!
          </h3>
          <p className="font-open-sans text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            Опишите вашу задачу, и мы предложим оптимальное решение с расчетом
            стоимости и сроков выполнения
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-semibold px-8 py-3 text-lg rounded-full shadow-lg"
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Заказать работу
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-purple-900 font-semibold px-8 py-3 text-lg rounded-full"
            >
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
          </div>
        </div>

        {/* Working hours */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Icon name="Clock" size={20} className="text-green-400 mr-2" />
            <span className="text-purple-200">
              Работаем 24/7 • Ответим в течение 15 минут
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
