import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import bgImage from "/assets/img/BG 01 1.png";
import { Numpad, RoleCard } from "../components/forms";
import { BottomNavigation } from "../components/navigation";
import { LogoAndSphere } from "../components/features";
import { ErrorMessage } from "../components/ui";

const AuthPage = () => {
  const [selectedRole, setSelectedRole] = useState("tecnico");
  const [pinCode, setPinCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleNumberClick = (number) => {
    if (pinCode.length < 4) {
      const newPinCode = pinCode + number;
      setPinCode(newPinCode);

      if (newPinCode.length === 4) {
        if (selectedRole) {
          setIsLoading(true);
          setTimeout(() => {
            const success = login({ role: selectedRole, pin: newPinCode });
            if (success) {
              navigate("/production");
            } else {
              setError("Código incorrecto");
              setIsLoading(false);
            }
          }, 800);
        } else {
          setError("Selecciona un rol");
        }
      }
    }
  };

  const handleDelete = () => {
    setPinCode((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setPinCode("");
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setError("");
  };

  const handleBottomNavClick = (tabId) => {
    if (tabId === "production") {
      navigate("/production");
    }
  };

  return (
    <div
      className="h-full sm:h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden page-transition"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "#0a0a0a",
      }}
    >
      <div className="relative z-10 h-full sm:h-screen flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 relative">
          <LogoAndSphere
            logoSize="default"
            sphereSize="default"
            showSphere={true}
            className="md:flex-1"
          />
        </div>

        <BottomNavigation activeTab="menu" onTabClick={handleBottomNavClick} />

        <div className="absolute inset-0 bg-gray-900 opacity-50 h-0 sm:h-screen w-screen z-0"></div>
        <div className="absolute bg-white right-0 opacity-[0.04] h-0 sm:h-screen w-1/2 z-[1] rounded-tl-[60px] rounded-bl-[60px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1/6 bg-gradient-to-t from-[#353537]/70 via-[#353537]/90 to-transparent z-[2]"></div>

        <div className="right-0 top-0 md:top-1/2 md:pb-14 md:-translate-y-1/2 md:translate-x-10 lg:translate-x-15 3xl:translate-x-36 w-full md:w-1/2 flex-2 md:h-1/2 flex items-start md:items-center justify-center sm:relative z-10">
          <div className="flex flex-col sm:flex-row items-center lg:items-center space-x-4 lg:space-y-0 lg:space-x-8">
            <div className="flex flex-1 flex-col space-y-2 sm:space-y-3 2xl:space-y-4 self-stretch w-full sm:w-48 2xl:w-64 3xl:w-96">
              <RoleCard
                role="manager"
                label="Manager"
                icon="/assets/icons 2/Icon.svg"
                isSelected={selectedRole === "manager"}
                onSelect={handleRoleSelect}
              />

              <RoleCard
                role="tecnico"
                label="Técnico"
                icon="/assets/icons 2/Icon-1.svg"
                isSelected={selectedRole === "tecnico"}
                onSelect={handleRoleSelect}
              />
            </div>

            <Numpad
              pinCode={pinCode}
              onNumberClick={handleNumberClick}
              onClear={handleClear}
              onDelete={handleDelete}
            />
          </div>

          <ErrorMessage
            message={error}
            position="top-left"
            onClose={() => setError("")}
          />
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <div className="text-white text-sm">Iniciando sesión...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
