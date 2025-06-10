import React from "react";
import clsx from "clsx";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30"
          onClick={onClose}
        />
      )}

      <div
        className={clsx(
          "fixed top-0 right-0 w-[350px] h-full bg-white z-40 transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="pt-5 px-5">
          <div className="flex justify-between items-center bg-gray-200 px-3 py-2.5 rounded-md mb-6">
            <h2 className="text-base">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-xl font-semibold text-gray-500"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto px-5">
            {/* Cart items here */}
            <p className="text-sm text-gray-400">No items in the cart.</p>
          </div>

          <div className="border-t border-gray-300 px-5 pb-28">
            <div className="flex justify-between my-3 text-lg font-semibold">
              <span>Subtotal:</span>
              <span>৳ 0</span>
            </div>
            <div className="flex gap-3">
              <button className="w-full bg-gray-200 py-2 rounded">
                Clear All
              </button>
              <button className="w-full bg-primary text-white py-2 rounded">
                Checkout →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
