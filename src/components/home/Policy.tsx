import React from 'react';

import { RefreshCw, BadgeCheck, Headphones } from "lucide-react";
const Policy = () => {
    return (
       <div className="bg-pink-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {/* Policy 1 */}
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="w-12 h-12" />
          <h3 className="font-bold text-lg sm:text-xl">Easy Exchange Policy</h3>
          <p className="text-sm sm:text-base">
            We offer hassle-free exchange policy
          </p>
        </div>

        {/* Policy 2 */}
        <div className="flex flex-col items-center gap-3">
          <BadgeCheck className="w-12 h-12" />
          <h3 className="font-bold text-lg sm:text-xl">3 Days Return Policy</h3>
          <p className="text-sm sm:text-base">
            We provide 3 days free return policy
          </p>
        </div>

        {/* Policy 3 */}
        <div className="flex flex-col items-center gap-3">
          <Headphones className="w-12 h-12" />
          <h3 className="font-bold text-lg sm:text-xl">Best Customer Support</h3>
          <p className="text-sm sm:text-base">
            We provide 24/7 customer support
          </p>
        </div>
      </div>
    </div>
    );
};

export default Policy;