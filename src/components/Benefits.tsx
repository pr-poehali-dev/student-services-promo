import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      title: "Опытные авторы",
      description:
        "Команда квалифицированных специалистов с высшим образованием и опытом в академическом письме",
      icon: "Users",
    },
    {
      title: "Соблюдение сроков",
      description:
        "Гарантируем выполнение работы в указанные сроки без ущерба для качества",
      icon: "Clock",
    },
    {
      title: "Уникальность текста",
      description:
        "Все работы проходят проверку на антиплагиат с гарантией уникальности от 70%",
      icon: "Shield",
    },
    {
      title: "Доступные цены",
      description:
        "Справедливые цены без переплат с возможностью поэтапной оплаты",
      icon: "DollarSign",
    },
    {
      title: "Бесплатные правки",
      description:
        "Внесение корректировок в течение 14 дней после сдачи работы бесплатно",
      icon: "RefreshCw",
    },
    {
      title: "Конфиденциальность",
      description:
        "Полная анонимность и защита персональных данных наших клиентов",
      icon: "Lock",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Почему выбирают нас?
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Мы заботимся о каждом клиенте и гарантируем высокое качество наших
            услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={benefit.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>

              <h3 className="font-montserrat text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                {benefit.title}
              </h3>

              <p className="font-open-sans text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600">выполненных работ</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">авторов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
              <div className="text-gray-600">средний рейтинг</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
