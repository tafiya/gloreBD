import { Home, Menu, ShoppingBag, Users, PhoneCall, ShoppingCart } from 'lucide-react';

export default function BottomNavbar() {
  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 sm:hidden">
        <button className="relative bg-white p-3 rounded-full shadow-lg">
          <ShoppingCart className="text-black" />
          <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </button>
      </div>

      {/* Bottom Navbar for Small Devices */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-6 py-2 sm:hidden z-40">
        <button className="flex flex-col items-center text-black">
          <Menu size={20} />
          <span className="text-xs">Menu</span>
        </button>
        <button className="flex flex-col items-center text-black">
          <ShoppingBag size={20} />
          <span className="text-xs">Shop</span>
        </button>

        {/* Center Home Button */}
        <div className="relative -mt-8">
          <button className="bg-pink-500 text-white p-4 rounded-full shadow-lg">
            <Home />
          </button>
        </div>

        <button className="flex flex-col items-center text-black">
          <Users size={20} />
          <span className="text-xs">About Us</span>
        </button>
        <button className="flex flex-col items-center text-black">
          <PhoneCall size={20} />
          <span className="text-xs">Contact</span>
        </button>
      </div>
    </>
  );
}
