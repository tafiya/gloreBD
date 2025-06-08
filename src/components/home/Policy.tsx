import { Headset } from "lucide-react";
import Image from "next/image";
import React from "react";
import retu from "../../assets/return.webp";
import policy from "../../assets/download.png";
const Policy = () => {
  return (
    <div className="bg-accent py-10 px-4">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {/* Policy 1 */}
        <div className="flex flex-col items-center ">
          <Image src={policy} className="w-12 h-12 mb-4" alt="return"></Image>
          <h3 className="font-bold text-base">Easy Exchange Policy</h3>
          <p className="text-sm font-medium ">
            We offer hassle-free exchange policy
          </p>
        </div>

        {/* Policy 2 */}
        <div className="flex flex-col items-center ">
          <Image src={retu} className="w-12 h-12 mb-4" alt="return"></Image>
          {/* <BadgeCheck  /> */}
          <h3 className="font-bold text-base">3 Days Return Policy</h3>
          <p className="text-sm font-medium">
            We provide 3 days free return policy
          </p>
        </div>

        {/* Policy 3 */}
        <div className="flex flex-col items-center">
          <Headset className="w-12 h-12 mb-4" />
          <h3 className="font-bold text-base">Best Customer Support</h3>
          <p className="text-sm font-medium">
            We provide 24/7 customer support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
