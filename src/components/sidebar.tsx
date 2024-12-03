// src/Sidebar.tsx
import React from "react";
import { User, Twitter, Info } from "lucide-react";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const sidebarItems: SidebarItem[] = [
  {
    icon: <Twitter size={24} />, // Lucide icon with a size of 24 pixels
    label: "Go to X",
    onClick: () => (window.location.href = "https://www.x.com"),
  },
  {
    icon: <Info size={24} />,
    label: "Random Fact",
    onClick: () => alert(getRandomBusinessFact()),
  },
  {
    icon: <User size={24} />,
    label: "About Dev",
    onClick: () => (window.location.href = "https://www.x.com/forloopcodestwo"),
  },
];

const getRandomBusinessFact = () => {
  const facts = [
    "Over 80% of small businesses fail within the first year.",
    "The first product ever sold online was a pizza.",
    "Businesses with a strong social media presence grow 32% faster.",
    "E-commerce sales are expected to make up 22% of global retail sales by 2025.",
    "The average time a user spends on a website is less than 15 seconds.",
  ];
  const randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex];
};

const Sidebar: React.FC = () => {
  return (
    <div className="h-full hidden w-72 lg:flex flex-col items-start p-4">
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className="sidebar-item flex text-xl items-center space-x-4 py-4 px-3 gap-2 opacity-80 font-normal cursor-pointer rounded-lg transition"
          onClick={item.onClick}
        >
          <span className="text-white text-2xl">{item.icon}</span>
          <span className="text-white">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
