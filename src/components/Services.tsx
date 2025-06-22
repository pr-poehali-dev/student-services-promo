import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Курсовые работы",
      description:
        "Качественные курсовые работы по любым дисциплинам с соблюдением всех требований",
      icon: "BookOpen",
      features: ["Любая тематика", "Строгие сроки", "Антиплагиат от 70%"],
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Рефераты",
      description:
        "Информативные рефераты с актуальными источниками и правильным оформлением",
      icon: "FileText",
      features: [
        "Актуальные источники",
        "ГОСТ оформление",
        "Быстрое выполнение",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Презентации",
      description:
        "Яркие и содержательные презентации для защиты ваших работ и докладов",
      icon: "Presentation",
      features: ["Современный дизайн", "Анимации", "Готовность к защите"],
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Доклады",
      description:
        "Структурированные доклады с четкой логикой и убедительной аргументацией",
      icon: "Mic",
      features: [
        "Четкая структура",
        "Убедительные аргументы",
        "Готовые тезисы",
      ],
      color: "from-green-500 to-blue-600",
    },
    {
      title: "Дипломные работы",
      description:
        "Серьезные дипломные проекты с глубокой проработкой темы и исследованием",
      icon: "GraduationCap",
      features: [
        "Глубокое исследование",
        "Научный подход",
        "Поддержка до защиты",
      ],
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Эссе и сочинения",
      description:
        "Творческие работы с оригинальным подходом и литературным стилем",
      icon: "Edit",
      features: ["Творческий подход", "Литературный стиль", "Оригинальность"],
      color: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Наши услуги
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр академических услуг для студентов всех курсов и
            специальностей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-white hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={service.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-open-sans text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
