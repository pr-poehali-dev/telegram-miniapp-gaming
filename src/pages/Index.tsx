import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const StarIcon = ({ size = 16, className = "" }) => (
    <div className={`${className}`} style={{ fontSize: size }}>✦</div>
  );

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
          <div className="space-y-8 py-8">
            {/* Hero Section */}
            <div className="text-center space-y-6 relative">
              {/* Floating Stars */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <StarIcon size={20} className="absolute top-4 left-8 text-casino-gold animate-pulse" />
                <StarIcon size={16} className="absolute top-12 right-12 text-casino-gold/60 animate-pulse delay-500" />
                <StarIcon size={12} className="absolute top-20 left-16 text-casino-gold/40 animate-pulse delay-1000" />
                <StarIcon size={14} className="absolute top-6 right-6 text-casino-gold/80 animate-pulse delay-300" />
                <StarIcon size={18} className="absolute top-16 left-1/3 text-casino-gold/50 animate-pulse delay-700" />
              </div>

              {/* Logo and Title */}
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="w-full h-full bg-gradient-to-br from-casino-gold to-orange-500 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="text-4xl">🐸</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-casino-gold/20 to-transparent animate-pulse"></div>
                  </div>
                  <div className="absolute -inset-2 border-2 border-casino-gold/30 rounded-full animate-spin-slow"></div>
                </div>
                
                <h1 className="text-5xl font-bold bg-gradient-to-r from-casino-gold via-orange-400 to-casino-gold bg-clip-text text-transparent tracking-wide">
                  STARSHUB
                </h1>
                
                <div className="flex items-center justify-center space-x-2 mt-3">
                  <StarIcon size={12} className="text-casino-gold animate-pulse" />
                  <p className="text-casino-lightGray text-lg font-light">
                    Premium Gaming Experience
                  </p>
                  <StarIcon size={12} className="text-casino-gold animate-pulse delay-500" />
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex justify-center space-x-8 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-casino-gold">2.5K</div>
                <div className="text-casino-lightGray text-sm">Баланс</div>
              </div>
              <div className="w-px h-12 bg-casino-gold/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-casino-gold">15</div>
                <div className="text-casino-lightGray text-sm">Уровень</div>
              </div>
              <div className="w-px h-12 bg-casino-gold/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-casino-gold">7</div>
                <div className="text-casino-lightGray text-sm">Серия</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-casino-darkGray/80 to-casino-black/80 border border-casino-gold/20 p-6 text-center hover:border-casino-gold/40 transition-all duration-300 cursor-pointer group"
                  onClick={() => setActiveTab('games')}>
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-casino-gold to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Gamepad2" size={24} className="text-black" />
                    </div>
                    <h3 className="text-white font-semibold">Играть</h3>
                    <p className="text-casino-lightGray text-sm">Начать игру</p>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-casino-darkGray/80 to-casino-black/80 border border-casino-gold/20 p-6 text-center hover:border-casino-gold/40 transition-all duration-300 cursor-pointer group"
                  onClick={() => setActiveTab('tasks')}>
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-casino-gold to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Trophy" size={24} className="text-black" />
                    </div>
                    <h3 className="text-white font-semibold">Задания</h3>
                    <p className="text-casino-lightGray text-sm">Получить награды</p>
                  </div>
                </Card>
              </div>

              {/* Daily Bonus */}
              <Card className="bg-gradient-to-r from-casino-gold/10 to-orange-500/10 border border-casino-gold/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-casino-gold rounded-full flex items-center justify-center">
                      <Icon name="Gift" size={20} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Ежедневный бонус</h3>
                      <p className="text-casino-gold text-sm">+500 монет доступно</p>
                    </div>
                  </div>
                  <Badge className="bg-casino-gold text-black font-semibold">
                    Получить
                  </Badge>
                </div>
              </Card>
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
              <div className="relative">
                <Avatar className="w-20 h-20 mx-auto border-2 border-casino-gold">
                  <AvatarFallback className="bg-casino-gold text-casino-black text-2xl font-bold">
                    🐸
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -inset-1 border border-casino-gold/30 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Игрок #1337</h2>
                <Badge className="bg-casino-gold text-black font-semibold mt-2">VIP статус</Badge>
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
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-casino-black via-casino-darkGray/20 to-casino-black"></div>
        {/* Floating Stars Background */}
        <div className="absolute top-20 left-10 text-casino-gold/30 animate-pulse" style={{ fontSize: '12px' }}>✦</div>
        <div className="absolute top-40 right-16 text-casino-gold/20 animate-pulse delay-1000" style={{ fontSize: '8px' }}>✦</div>
        <div className="absolute top-60 left-1/4 text-casino-gold/40 animate-pulse delay-500" style={{ fontSize: '10px' }}>✦</div>
        <div className="absolute top-80 right-1/3 text-casino-gold/25 animate-pulse delay-700" style={{ fontSize: '14px' }}>✦</div>
        <div className="absolute bottom-40 left-12 text-casino-gold/35 animate-pulse delay-300" style={{ fontSize: '16px' }}>✦</div>
        <div className="absolute bottom-60 right-8 text-casino-gold/20 animate-pulse delay-1200" style={{ fontSize: '12px' }}>✦</div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4 relative z-10">
        <div className="flex items-center space-x-2">
          <StarIcon size={20} className="text-casino-gold animate-spin-slow" />
          <span className="text-sm text-casino-lightGray font-medium">StarsHub</span>
        </div>
        
        <DropdownMenu open={isProfileOpen} onOpenChange={setIsProfileOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="hover:bg-casino-gray">
              <Avatar className="w-8 h-8 border border-casino-gold">
                <AvatarFallback className="bg-casino-gold text-casino-black text-sm font-bold">
                  🐸
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