import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
}

const Index = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Анна М.",
      text: "Отличная идея! Очень важно давать молодежи возможность выразить себя.",
      date: "2 дня назад"
    },
    {
      id: 2,
      author: "Дмитрий К.",
      text: "Поддерживаю инициативу. Журнал поможет многим ребятам найти свой путь.",
      date: "1 день назад"
    }
  ]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  const addComment = () => {
    if (newComment.trim() && authorName.trim()) {
      setComments([...comments, {
        id: Date.now(),
        author: authorName,
        text: newComment,
        date: "Только что"
      }]);
      setNewComment('');
      setAuthorName('');
    }
  };

  const publications = [
    {
      title: "От семян к урожаю",
      description: "Как труд на земле помогает в реабилитации и становлении личности",
      author: "Мария С.",
      date: "15 августа 2024",
      category: "Агротерапия",
      icon: "Wheat"
    },
    {
      title: "Зеленые ростки надежды",
      description: "Личная история восстановления через работу в теплице",
      author: "Александр В.",
      date: "12 августа 2024",
      category: "Истории",
      icon: "Sprout"
    },
    {
      title: "Сад как учитель жизни",
      description: "Уроки терпения и заботы в садоводческих мастерских",
      author: "Елена П.",
      date: "10 августа 2024",
      category: "Мастерские",
      icon: "TreePine"
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Sprout" size={32} className="text-primary" />
              <div>
                <h1 className="text-3xl font-bold text-secondary">РОСТОК</h1>
                <p className="text-muted-foreground text-sm">Агро-молодежный журнал • Растем вместе</p>
              </div>
            </div>
            <nav className="flex space-x-6">
              <a href="#" className="text-card-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#publications" className="text-card-foreground hover:text-primary transition-colors">Публикации</a>
              <a href="#about" className="text-card-foreground hover:text-primary transition-colors">О проекте</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Icon name="Wheat" size={48} className="text-white" />
          </div>
          <div className="absolute top-20 right-20">
            <Icon name="TreePine" size={40} className="text-white" />
          </div>
          <div className="absolute bottom-16 left-1/4">
            <Icon name="Flower2" size={36} className="text-white" />
          </div>
          <div className="absolute bottom-10 right-16">
            <Icon name="Sprout" size={44} className="text-white" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Seedling" size={48} className="text-green-200" />
            <h2 className="text-4xl font-bold">Проект "РОСТОК"</h2>
            <Icon name="Leaf" size={48} className="text-green-200" />
          </div>
          <p className="text-lg opacity-90 leading-relaxed">
            Агро-молодежный журнал о росте, развитии и новых возможностях
          </p>
          <p className="text-base opacity-80 mt-2">
            Создание журнала силами участников программы реабилитации
          </p>
        </div>
      </section>

      {/* Main Article */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-card-foreground leading-relaxed mb-6">
                  В Республике Башкортостан в Государственном бюджетном учреждение Республиканский центр психолого-педагогической реабилитации и коррекции несовершеннолетних ежегодно проходят реабилитацию более 1000 детей, подростков и молодежи, употребляющих наркотические вещества.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <img 
                    src="https://cdn.poehali.dev/files/ac532cae-7469-4e76-a107-64b1897b71d3.jpg" 
                    alt="Литературная газета - пример молодежных публикаций" 
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                  <img 
                    src="https://cdn.poehali.dev/files/3725076a-6ebe-4447-8e80-7d86222e4391.jpg" 
                    alt="Групповые занятия в центре реабилитации" 
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                </div>
                
                <p className="text-card-foreground leading-relaxed mb-6">
                  Во время реабилитации для них проводятся занятия по арт-терапии, создаются квесты от лучших игротехников Республики Башкортостан, проводятся конкурсы и занятия для адаптации и облегчения периода реабилитации.
                </p>
                
                <p className="text-card-foreground leading-relaxed mb-6">
                  Излюбленным мероприятием ребят стали литературные вечера, где каждый может рассказать стих или поделиться своим рассказом, или даже статьей. Во время одного из мероприятий было выдвинуто предложение со стороны реабилитантов, о создании молодежного журнала, где они будут сами авторами, писателями и редакторами.
                </p>
                
                <p className="text-card-foreground leading-relaxed mb-6">
                  Будут писать статьи, а по окончанию месяца журнал будет печататься и бесплатно тиражироваться в Молодежных центрах и учреждениях республики Башкортостан. Основные темы, которые будут подниматься, это здоровый образ жизни, добрые дела, а также жизненные истории, лучшие стихи и рассказы участников проекта.
                </p>
                
                <p className="text-card-foreground leading-relaxed mb-6">
                  Дети, подростки и молодежь зачастую рано взрослеют и попадают не в самые лучшие компании и сталкиваются со страшными заболеваниями и проблемами. Наркомания – заболевание, ставшее серьезной проблемой для человечества. Согласно официальным данным ООН за последние 10 лет количество наркозависимых в России возросло в 10 раз, и проблема наркомании уже много лет является актуальной, к сожалению, и для Республики Башкортостан.
                </p>

                <p className="text-card-foreground leading-relaxed mb-6">
                  В докладе по наркоситуации по РБ Утвержденным протоколом заседания антинаркотической комиссии Республики Башкортостан от 22.03.2018 No 48 было проведено социологическое исследование, Институтом повышения квалификации профсоюзных кадров Республики Башкортостан, в соответствии с Методикой и пунктом 3.1.1 подпрограммы «Противодействие злоупотреблению наркотиками и их незаконному обороту» государственной программы «Обеспечение общественной безопасности в Республике Башкортостан на 2015-2020 годы», утвержденной постановлением Правительства Республики Башкортостан от 31.12.2014 № 670, изучено мнение населения о доступности и распространенности различных видов психоактивных веществ.
                </p>

                <p className="text-card-foreground leading-relaxed mb-6">
                  По мнению опрошенных более половины респондентов, когда-либо употреблявших наркотики, впервые попробовали их в возрасте от 16 до 18 лет (47,2%) и в возрасте 19-25 лет (25,5%). Это возраст, когда молодой организм созревает в физиологическом и социальном плане. Изучая подобные документы возникают сомнения и вопросы, разве могут быть такие ситуации?! Разве могут подростки, молодёжь и тем более дети попасть в подобную ситуацию.
                </p>

                <p className="text-card-foreground leading-relaxed mb-6">
                  Ярким примером становится центр реабилитации, в котором мы ежемесячно проводим добровольческие акции и мероприятия, ведь в центре бывают ребята разных возрастов, молодые, красивые и интересные, но с трудной жизненной ситуации. Есть данные из практики, что реализация адаптационной программы с наличием арт-компонента повышает её эффективность более чем в половину.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <img 
                    src="https://cdn.poehali.dev/files/237d8e21-bb34-426e-a719-51d89efccd21.jpg" 
                    alt="Арт-терапия с использованием песочной анимации" 
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                  <img 
                    src="https://cdn.poehali.dev/files/d3b4650b-f38a-4f5b-ae3c-e3833254fa38.jpg" 
                    alt="Интерактивные занятия и групповые упражнения" 
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                </div>

                <p className="text-card-foreground leading-relaxed mb-6">
                  У зависимых отмечается повышение реабилитационного потенциалах, достигается высокая степень личностной, социальной и трудовой адаптации за счёт участия и заинтересованности в итоге коллективного творчества и совместных мероприятиях. Таким образом, реализацию данного проекта с учётом участия в разных мероприятиях разработчики рассматривают как комплексную многокомпонентную антинаркотическую работу с использованием методов волонтёрства.
                </p>
                
                <div className="my-8">
                  <img 
                    src="https://cdn.poehali.dev/files/a374240e-c3d7-4835-a055-b626f33062f9.jpg" 
                    alt="Творческие мастерские с использованием различных материалов" 
                    className="rounded-lg shadow-md w-full h-80 object-cover"
                  />
                </div>

                <div className="bg-muted p-6 rounded-lg mt-8">
                  <p className="text-card-foreground font-semibold mb-4">
                    Данный Проект решает сразу задачи первичной, вторичной и третичной профилактики наркомании.
                  </p>
                  <p className="text-card-foreground font-semibold">
                    По итогу был проведен анонимный опрос, где 90% опрошенных ответили положительно о создании журнала и готовы помогать в создании каждого тиража.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center gap-2">
                <Icon name="MessageCircle" size={24} className="text-primary" />
                Комментарии читателей
              </h3>
              
              {/* Existing Comments */}
              <div className="space-y-4 mb-8">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-l-4 border-primary pl-4 py-3">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-card-foreground">{comment.author}</span>
                      <span className="text-xs text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-card-foreground">{comment.text}</p>
                  </div>
                ))}
              </div>
              
              {/* Add Comment Form */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-card-foreground mb-4">Оставить комментарий</h4>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваш комментарий..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button onClick={addComment} className="bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить комментарий
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-card-foreground mb-4">Публикации и материалы</h3>
            <p className="text-muted-foreground">Статьи, написанные участниками программы</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name={pub.icon} size={20} className="text-primary" />
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {pub.category}
                    </span>
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2">{pub.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{pub.description}</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{pub.author}</span>
                    <span>{pub.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Icon name="Sprout" size={24} className="text-green-200" />
            <h3 className="text-xl font-bold">РОСТОК</h3>
            <Icon name="Leaf" size={24} className="text-green-200" />
          </div>
          <div className="text-center">
            <p className="mb-2">&copy; 2024 Агро-молодежный журнал "Росток"</p>
            <p className="text-sm opacity-75">Республиканский центр реабилитации • Растем и развиваемся вместе</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;