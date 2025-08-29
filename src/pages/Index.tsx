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
      title: "Здоровый образ жизни",
      description: "Как спорт помогает в реабилитации",
      author: "Мария С.",
      date: "15 августа 2024",
      category: "Здоровье"
    },
    {
      title: "Моя история",
      description: "Путь к новой жизни глазами участника программы",
      author: "Александр В.",
      date: "12 августа 2024",
      category: "Истории"
    },
    {
      title: "Творчество как терапия",
      description: "Арт-терапия в процессе восстановления",
      author: "Елена П.",
      date: "10 августа 2024",
      category: "Творчество"
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary">МОЛОДЕЖНЫЙ ЖУРНАЛ</h1>
              <p className="text-muted-foreground text-sm">Республиканский центр реабилитации</p>
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
      <section className="bg-gradient-to-br from-secondary to-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Краткая аннотация проекта</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Создание молодежного журнала силами участников программы реабилитации
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
                
                <p className="text-card-foreground leading-relaxed mb-6">
                  Во время реабилитации для них проводятся занятия по арт-терапии, создаются квесты от лучших игротехников Республики Башкортостан, проводятся конкурсы и занятия для адаптации и облегчения периода реабилитации.
                </p>
                
                <p className="text-card-foreground leading-relaxed mb-6">
                  Излюбленным мероприятием ребят стали литературные вечера, где каждый может рассказать стих или поделиться своим рассказом, или даже статьей. Во время одного из мероприятий было выдвинуто предложение со стороны реабилитантов, о создании молодежного журнала, где они будут сами авторами, писателями и редакторами.
                </p>
                
                <p className="text-card-foreground leading-relaxed mb-6">
                  Будут писать статьи, а по окончанию месяца журнал будет печататься и бесплатно тиражироваться в Молодежных центрах и учреждениях республики Башкортостан. Основные темы, которые будут подниматься, это здоровый образ жизни, добрые дела, а также жизненные истории, лучшие стихи и рассказы участников проекта.
                </p>
                
                <div className="bg-muted p-6 rounded-lg mt-8">
                  <p className="text-card-foreground font-semibold">
                    По итогу был проведен анонимный опрос, где 90% опрошенных ответили положительно о создании журнала и готовы помогать в создании каждого тиража.
                  </p>
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
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="FileText" size={16} className="text-primary" />
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

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Молодежный журнал. Республиканский центр реабилитации</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;