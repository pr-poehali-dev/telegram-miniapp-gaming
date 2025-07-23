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
  const [isRouletteSpinning, setIsRouletteSpinning] = useState(false);
  const [rouletteResult, setRouletteResult] = useState<number | null>(null);

  const games = [
    {
      id: 1,
      name: 'Рулетка',
      description: 'Классическая игра с множителями до x36',
      icon: 'RotateCcw',
      color: 'from-casino-red to-casino-darkRed',
      emoji: '🎯'
    },
    {
      id: 2,
      name: 'Блэкджек',
      description: 'Карточная игра против дилера',
      icon: 'Spade',
      color: 'from-casino-gold to-casino-darkGold',
      emoji: '🃏'
    },
    {
      id: 3,
      name: 'Слоты',
      description: 'Игровые автоматы с джекпотом',
      icon: 'Zap',
      color: 'from-casino-green to-casino-darkGreen',
      emoji: '🎰'
    },
    {
      id: 4,
      name: 'Покер',
      description: 'Техасский холдем онлайн',
      icon: 'Heart',
      color: 'from-purple-500 to-purple-700',
      emoji: '♠️'
    }
  ];

  const tasks = [
    { id: 1, name: 'Ежедневный бонус', reward: '100 монет', completed: false, emoji: '🎁' },
    { id: 2, name: 'Пригласить друга', reward: '500 монет', completed: true, emoji: '👥' },
    { id: 3, name: 'Сыграть 5 игр', reward: '200 монет', completed: false, emoji: '🎮' },
    { id: 4, name: 'Выиграть 1000 монет', reward: '250 монет', completed: false, emoji: '💰' }
  ];

  const tabs = [
    { id: 'home', name: 'Главная', icon: 'Home' },
    { id: 'games', name: 'Игры', icon: 'Gamepad2' },
    { id: 'tasks', name: 'Задания', icon: 'Trophy' },
    { id: 'profile', name: 'Профиль', icon: 'User' }
  ];

  const spinRoulette = () => {
    if (isRouletteSpinning) return;
    
    setIsRouletteSpinning(true);
    setRouletteResult(null);
    
    setTimeout(() => {
      const result = Math.floor(Math.random() * 37); // 0-36
      setRouletteResult(result);
      setIsRouletteSpinning(false);
    }, 3000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6 pb-4">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-casino-gold to-orange-500 rounded-full flex items-center justify-center relative overflow-hidden mb-4">
                <div className="text-3xl">🎰</div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse"></div>
              </div>
              
              <h1 className="text-3xl font-bold bg-gradient-to-r from-casino-gold via-orange-400 to-casino-gold bg-clip-text text-transparent">
                CASINO ROYAL
              </h1>
              
              <p className="text-casino-lightGray text-sm px-4 leading-relaxed">
                Добро пожаловать в премиум казино! Испытайте удачу в рулетке, блэкджеке и других азартных играх. Выполняйте задания, получайте награды и поднимайтесь в рейтинге игроков.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 px-2">
              <div className="text-center">
                <div className="text-xl font-bold text-casino-gold">2,350</div>
                <div className="text-casino-lightGray text-xs">Баланс</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-casino-gold">15</div>
                <div className="text-casino-lightGray text-xs">Уровень</div>  
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-casino-gold">7</div>
                <div className="text-casino-lightGray text-xs">Серия</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card 
                  className="game-card group p-4 text-center"
                  onClick={() => setActiveTab('games')}
                >
                  <div className="space-y-2">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-casino-gold to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Gamepad2" size={20} className="text-black" />
                    </div>
                    <h3 className="text-white font-medium text-sm">Играть</h3>
                    <p className="text-casino-lightGray text-xs">Начать игру</p>
                  </div>
                </Card>

                <Card 
                  className="game-card group p-4 text-center"
                  onClick={() => setActiveTab('tasks')}
                >
                  <div className="space-y-2">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-casino-gold to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Trophy" size={20} className="text-black" />
                    </div>
                    <h3 className="text-white font-medium text-sm">Задания</h3>
                    <p className="text-casino-lightGray text-xs">Получить награды</p>
                  </div>
                </Card>
              </div>

              {/* Daily Bonus Card */}
              <Card className="bg-gradient-to-r from-casino-gold/10 to-orange-500/10 border border-casino-gold/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-casino-gold rounded-full flex items-center justify-center">
                      <Icon name="Gift" size={18} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm">Ежедневный бонус</h3>
                      <p className="text-casino-gold text-xs">+500 монет доступно</p>
                    </div>
                  </div>
                  <Badge className="bg-casino-gold text-black font-medium text-xs px-3 py-1">
                    Получить
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        );

      case 'games':
        return (
          <div className="space-y-6 pb-4">
            <div className="text-center space-y-2 py-4">
              <h2 className="text-2xl font-bold text-casino-gold">🎮 Игры</h2>
              <p className="text-casino-lightGray text-sm">Выберите игру для начала</p>
            </div>
            
            <div className="space-y-4">
              {games.map((game) => (
                <Card 
                  key={game.id} 
                  className="game-card group"
                  onClick={() => {
                    if (game.id === 1) { // Рулетка
                      spinRoulette();
                    }
                  }}
                >
                  <div className="flex items-center space-x-4 p-2">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${game.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform ${game.id === 1 && isRouletteSpinning ? 'animate-spin' : ''}`}>
                      {game.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white">{game.name}</h3>
                      <p className="text-casino-lightGray text-sm">{game.description}</p>
                      {game.id === 1 && rouletteResult !== null && (
                        <p className="text-casino-gold text-sm font-medium">
                          Результат: {rouletteResult} {rouletteResult === 0 ? '(Зеро)' : rouletteResult % 2 === 0 ? '(Черное)' : '(Красное)'}
                        </p>
                      )}
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-casino-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'tasks':
        return (
          <div className="space-y-6 pb-4">
            <div className="text-center space-y-2 py-4">
              <h2 className="text-2xl font-bold text-casino-gold">🏆 Задания</h2>
              <p className="text-casino-lightGray text-sm">Выполняйте задания и получайте награды</p>
            </div>
            
            <div className="space-y-4">
              {tasks.map((task) => (
                <Card key={task.id} className="game-card p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                        task.completed ? 'bg-casino-green' : 'bg-casino-gold'
                      }`}>
                        {task.completed ? '✓' : task.emoji}
                      </div>	
                      <div>
                        <h3 className="font-medium text-white text-sm">{task.name}</h3>
                        <p className="text-casino-gold text-xs">{task.reward}</p>
                      </div>
                    </div>
                    {!task.completed && (
                      <Button size="sm" className="bg-casino-gold text-black hover:bg-casino-darkGold text-xs px-3 py-1">
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
          <div className="space-y-6 pb-4">
            <div className="text-center space-y-4 py-6">
              <div className="relative">
                <Avatar className="w-20 h-20 mx-auto border-2 border-casino-gold">
                  <AvatarFallback className="bg-casino-gold text-black text-2xl font-bold">
                    🎭
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -inset-1 border border-casino-gold/30 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Игрок #1337</h2>
                <Badge className="bg-casino-gold text-black font-medium mt-2 text-xs">VIP статус</Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="game-card text-center p-4">
                <div className="space-y-2">
                  <Icon name="Coins" size={20} className="text-casino-gold mx-auto" />
                  <h3 className="font-medium text-white text-sm">Баланс</h3>
                  <p className="text-casino-gold font-bold">2,350</p>
                </div>
              </Card>
              <Card className="game-card text-center p-4">
                <div className="space-y-2">
                  <Icon name="Trophy" size={20} className="text-casino-gold mx-auto" />
                  <h3 className="font-medium text-white text-sm">Уровень</h3>
                  <p className="text-casino-gold font-bold">15</p>
                </div>
              </Card>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-casino-gold text-black hover:bg-casino-darkGold font-medium py-3">
                <Icon name="Plus" size={18} />
                Пополнить баланс
              </Button>
              <Button variant="outline" className="w-full border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-black">
                <Icon name="Settings" size={18} />
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
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-casino-black via-casino-darkGray/20 to-casino-black"></div>
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-casino-gold/40 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-16 w-1 h-1 bg-casino-gold/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-casino-gold/50 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-8 w-1 h-1 bg-casino-gold/40 rounded-full animate-pulse delay-1200"></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4 relative z-10 bg-casino-black/80 backdrop-blur-sm border-b border-casino-gold/10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-casino-gold rounded-full flex items-center justify-center">
            <Icon name="Crown" size={16} className="text-black" />
          </div>
          <span className="text-sm text-casino-lightGray font-medium">Casino Royal</span>
        </div>
        
        <DropdownMenu open={isProfileOpen} onOpenChange={setIsProfileOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="hover:bg-casino-darkGray/50 transition-colors">
              <Avatar className="w-8 h-8 border border-casino-gold">
                <AvatarFallback className="bg-casino-gold text-black text-sm font-bold">
                  🎭
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-casino-darkGray/95 backdrop-blur-sm border-casino-gold/20 w-48">
            <DropdownMenuItem className="text-white hover:bg-casino-gold/10 cursor-pointer">
              <Icon name="User" size={16} />
              Профиль
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-casino-gold/10 cursor-pointer">
              <Icon name="Wallet" size={16} />
              Кошелек
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-casino-gold/10 cursor-pointer">
              <Icon name="Settings" size={16} />
              Настройки
            </DropdownMenuItem>
            <DropdownMenuItem className="text-casino-red hover:bg-casino-red/10 cursor-pointer">
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
      <div className="fixed bottom-0 left-0 right-0 bg-casino-black/95 backdrop-blur-sm border-t border-casino-gold/20 z-20 safe-area-pb">
        <div className="max-w-md mx-auto px-2 py-2">
          <div className="flex justify-around">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`nav-item flex-1 ${activeTab === tab.id ? 'active' : ''} transition-all duration-200 py-2`}
              >
                <Icon name={tab.icon as any} size={20} className="mx-auto" />
                <span className="text-xs mt-1 block">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;