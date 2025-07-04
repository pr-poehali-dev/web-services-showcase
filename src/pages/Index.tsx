import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
            Видеопроизводство
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Профессиональные услуги по созданию и обработке видео контента
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <div className="flex items-center gap-2 text-green-600">
              <Icon name="Film" size={40} />
              <span className="text-lg font-medium">Анимация</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Icon name="Scissors" size={40} />
              <span className="text-lg font-medium">Монтаж</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Icon name="Sparkles" size={40} />
              <span className="text-lg font-medium">Эффекты</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-green-50 rounded-full">
                <Icon name="Camera" size={48} className="text-green-600" />
              </div>
              <CardTitle className="text-2xl">Оживление картинок</CardTitle>
              <CardDescription>
                Превращаем статичные изображения в живые видео
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Создаем динамичные видеоролики из ваших фотографий с помощью
                современных технологий
              </p>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Узнать больше
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-green-50 rounded-full">
                <Icon name="Scissors" size={48} className="text-green-600" />
              </div>
              <CardTitle className="text-2xl">Монтаж видео</CardTitle>
              <CardDescription>Простой и сложный монтаж</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                От базовой обрезки до сложных многослойных композиций с
                эффектами и переходами
              </p>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Узнать больше
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-green-50 rounded-full">
                <Icon name="Sparkles" size={48} className="text-green-600" />
              </div>
              <CardTitle className="text-2xl">Renderforest</CardTitle>
              <CardDescription>Создание видео в Renderforest</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Профессиональное создание видеороликов с помощью платформы
                Renderforest
              </p>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Узнать больше
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews & Support Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Отзывы и поддержка
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
          >
            <Icon name="Star" size={20} className="mr-2" />
            Отзывы
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto"
          >
            <Icon name="HeadphonesIcon" size={20} className="mr-2" />
            Техподдержка
          </Button>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Контакты
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <Icon name="Youtube" size={48} className="text-red-600" />
                </div>
                <CardTitle>YouTube канал</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  Перейти на канал
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <Icon
                    name="MessageCircle"
                    size={48}
                    className="text-blue-600"
                  />
                </div>
                <CardTitle>Telegram канал</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Перейти в Telegram
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
