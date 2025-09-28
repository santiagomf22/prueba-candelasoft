import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/layout';
import { Card, GridIcon, Button } from '../components/ui';
import { ColorGrid } from '../components/features';
import { BottomNavigation } from '../components/navigation';

const ProductionPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [contarColores, setContarColores] = useState(true);
  const [descartarColores, setDescartarColores] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      logout();
      navigate('/');
    }, 500);
  };

  const colors = [
    { name: "Rojo", icon: "/assets/icons 1/Group 290327.svg" },
    { name: "Azul", icon: "/assets/icons 1/Group 290277.svg" },
    { name: "Verde", icon: "/assets/icons 1/Group 290325.svg" },
    { name: "Amarillo", icon: "/assets/icons 1/Group 290329.svg" },
    { name: "Blanco", icon: "/assets/icons 1/Group 290328.svg" },
    { name: "Negro", icon: "/assets/icons 1/Group 290330.svg" }
  ];

  return (
    <div className="page-transition relative">
      {isLoggingOut && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
            <p className="text-white text-lg">Cerrando sesión...</p>
          </div>
        </div>
      )}
      <PageLayout
        title="PROGRAMA"
        activeTab="production"
        customBottomNav={
          <BottomNavigation 
            activeTab="production"
          />
        }
      >
      <div className="px-3 sm:px-4 md:px-6 h-full flex flex-col">
        <Card 
          title="Colores" 
          className="flex-1"
          color="#2d2d2d"
          onClose={() => handleLogout()}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between 3xl:mt-5">
            <Card title="Colores" className="w-full sm:w-[25%] h-max" hasHeader>
              <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-2 space-y-2 md:space-y-5 3xl:space-y-8 pt-5 3xl:px-5">
                {colors.map((color, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <GridIcon
                      src={color.icon}
                      alt={color.name}
                      size="large"
                      className="mb-1 sm:mb-2"
                    />
                    <span className="text-xs 3xl:text-base text-center">{color.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="space-y-2 sm:space-y-3 md:space-y-4 flex flex-col w-full sm:w-[52%] lg:w-[50%] xl:w-[48%] 2xl:w-[40%] mt-8">
              <ColorGrid
                title="Contar Colores"
                isActive={contarColores}
                onToggle={setContarColores}
                hasSpecialIcon={true}
              />

              <ColorGrid
                title="Descartar Colores"
                isActive={descartarColores}
                onToggle={setDescartarColores}
                hasSpecialIcon={false}
              />
            </div>

            <div className="flex flex-col w-full mt-8 sm:mt-0 sm:w-[20%] pr-1 md:pr-4 3xl:pr-16">
              <Card className='flex-2'>
                <div className="bg-[#414141] rounded-lg p-2 ">
                  <div className="bg-gradient-to-b from-blue-800 to-cyan-400 rounded-lg h-[164px] lg:h-[220px] 3xl:h-[339px] 4xl:h-[400px]"></div>
                </div>
              </Card>
              
              <div className="space-y-2 sm:space-y-3 mt-2 sm:mt-3 md:mt-4 flex-1">
                <Button className="w-full py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-extralight !bg-[#383838]">
                  Reset
                </Button>
                <Button className="w-full py-2 sm:py-2.5 md:py-3 text-sm sm:text-base !bg-[#383838]">
                  Guardar
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
    </div>
  );
};

export default ProductionPage;