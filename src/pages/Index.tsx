import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const games = [
    {
      id: 1,
      name: 'Рулетка',
      description: 'Классическая игра с множителями до x36',
      icon: 'Target',
      color: 'from-casino-red to-casino-darkRed'
    },
    {
      id: 2,
      name: 'Блэкджек',
      description: 'Карточная игра против дилера',
      icon: 'Spade',
      color: 'from-casino-gold to-casino-darkGold'
    },
    {
      id: 3,
      name: 'Слоты',
      description: 'Игровые автоматы с джекпотом',
      icon: 'Zap',
      color: 'from-casino-green to-casino-darkGreen'
    },
    {
      id: 4,
      name: 'Покер',
      description: 'Техасский холдем онлайн',
      icon: 'Heart',
      color: 'from-casino-red to-casino-darkRed'
    }
  ];

  const tasks = [
    { id: 1, name: 'Ежедневный бонус', reward: '100 монет', completed: false },
    { id: 2, name: 'Пригласить друга', reward: '500 монет', completed: true },
    { id: 3, name: 'Сыграть 5 игр', reward: '200 монет', completed: false }
  ];

  const tabs = [
    { id: 'home', name: 'Главная', icon: 'Home' },
    { id: 'games', name: 'Игры', icon: 'Gamepad2' },
    { id: 'tasks', name: 'Задания', icon: 'Trophy' },
    { id: 'profile', name: 'Профиль', icon: 'User' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-casino-gold to-casino-darkGold bg-clip-text text-transparent">
                🎰 Casino Royal
              </h1>
              <p className="text-casino-lightGray text-lg">
                Испытай удачу в премиум казино с крупными выигрышами
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Icon name="Coins" size={16} className="text-casino-gold" />
                  <span className="text-casino-gold font-semibold">2,350</span>
                </div>
                <div className="w-px h-4 bg-casino-gray"></div>
                <div className="flex items-center space-x-1">
                  <Icon name="Flame" size={16} className="text-casino-red" />
                  <span className="text-casino-red font-semibold">7 дней</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {games.slice(0, 4).map((game) => (
                <Card key={game.id} className="game-card group">
                  <div className="text-center space-y-3">
                    <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${game.color} flex items-center justify-center group-hover:animate-pulse-gold`}>
                      <Icon name={game.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{game.name}</h3>
                      <p className="text-xs text-casino-lightGray">{game.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button 
                className="gold-button"
                onClick={() => setActiveTab('games')}
              >
                <Icon name="Gamepad2" size={20} />
                Все игры
              </Button>
              <Button 
                className="gold-button"
                onClick={() => setActiveTab('tasks')}
              >
                <Icon name="Gift" size={20} />
                Бонусы
              </Button>
            </div>
          </div>
        );

      case 'games':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-casino-gold text-center">🎮 Игры</h2>
            <div className="grid grid-cols-1 gap-4">
              {games.map((game) => (
                <Card key={game.id} className="game-card group">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${game.color} flex items-center justify-center group-hover:animate-pulse-gold`}>
                      <Icon name={game.icon as any} size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg">{game.name}</h3>
                      <p className="text-casino-lightGray">{game.description}</p>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-casino-gold" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'tasks':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-casino-gold text-center">🏆 Задания</h2>
            <div className="space-y-4">
              {tasks.map((task) => (
                <Card key={task.id} className="game-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        task.completed ? 'bg-casino-green' : 'bg-casino-gray'
                      }`}>
                        <Icon name={task.completed ? "Check" : "Clock"} size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{task.name}</h3>
                        <p className="text-casino-gold text-sm">{task.reward}</p>
                      </div>
                    </div>
                    {!task.completed && (
                      <Button size="sm" className="gold-button">
                        Выполнить
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <Avatar className="w-20 h-20 mx-auto border-2 border-casino-gold">
                <AvatarFallback className="bg-casino-gold text-casino-black text-2xl font-bold">
                  👤
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-white">Игрок #1337</h2>
                <p className="text-casino-lightGray">VIP статус</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="game-card text-center">
                <div className="space-y-2">
                  <Icon name="Coins" size={24} className="text-casino-gold mx-auto" />
                  <h3 className="font-semibold text-white">Баланс</h3>
                  <p className="text-casino-gold font-bold">2,350</p>
                </div>
              </Card>
              <Card className="game-card text-center">
                <div className="space-y-2">
                  <Icon name="Trophy" size={24} className="text-casino-gold mx-auto" />
                  <h3 className="font-semibold text-white">Уровень</h3>
                  <p className="text-casino-gold font-bold">15</p>
                </div>
              </Card>
            </div>

            <div className="space-y-3">
              <Button className="w-full gold-button">
                <Icon name="Plus" size={20} />
                Пополнить баланс
              </Button>
              <Button variant="outline" className="w-full border-casino-gold text-casino-gold">
                <Icon name="Settings" size={20} />
                Настройки
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-casino-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-casino-darkGray/20 to-transparent pointer-events-none" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-casino-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-casino-red/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between p-4 relative z-10">
        <div className="flex items-center space-x-2">
          <Icon name="Sparkles" size={24} className="text-casino-gold animate-spin-slow" />
          <span className="text-sm text-casino-lightGray">Royal Casino</span>
        </div>
        
        <DropdownMenu open={isProfileOpen} onOpenChange={setIsProfileOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="hover:bg-casino-gray">
              <Avatar className="w-8 h-8 border border-casino-gold">
                <AvatarFallback className="bg-casino-gold text-casino-black text-sm font-bold">
                  👤
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-casino-darkGray border-casino-gold/20">
            <DropdownMenuItem className="text-white hover:bg-casino-gray">
              <Icon name="User" size={16} />
              Профиль
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-casino-gray">
              <Icon name="Wallet" size={16} />
              Кошелек
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-casino-gray">
              <Icon name="Settings" size={16} />
              Настройки
            </DropdownMenuItem>
            <DropdownMenuItem className="text-casino-red hover:bg-casino-gray">
              <Icon name="LogOut" size={16} />
              Выход
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-20 relative z-10">
        <div className="max-w-md mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-casino-darkGray/95 backdrop-blur-sm border-t border-casino-gold/20 z-20">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex justify-around">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
              >
                <Icon name={tab.icon as any} size={24} />
                <span className="text-xs mt-1">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;