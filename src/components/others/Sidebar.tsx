import React, { useState } from "react";
import clsx from "clsx";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleClose = () => {
    setShowSubMenu(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-30" onClick={handleClose}></div>
      )}

<div
  className={clsx(
    "fixed left-0 bottom-14 w-72 sm:w-80 h-[calc(100vh-56px)] bg-white z-30 p-6 transition-transform duration-300 overflow-y-auto",
    isOpen ? "translate-x-0" : "-translate-x-full"
  )}
>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Categories</h2>
          <button onClick={handleClose} className="text-lg font-bold">
            ✕
          </button>
        </div>

        <ul className="space-y-4">
          <li>
            <button
              className="w-full flex justify-between items-center text-base font-medium border-b border-primary pb-2 hover:text-primary transition"
              onClick={() => setShowSubMenu(!showSubMenu)}
            >
              Women Clothing
            </button>
            {showSubMenu && (
              <ul className="mt-2 ml-4 space-y-2 text-sm text-gray-700">
                <li className="hover:text-primary cursor-pointer">
                  Jamdhani Sharee
                </li>
                <li className="hover:text-primary cursor-pointer">
                  Three Pieces
                </li>
                <li className="hover:text-primary cursor-pointer">
                  Unstitched Party Dress
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
