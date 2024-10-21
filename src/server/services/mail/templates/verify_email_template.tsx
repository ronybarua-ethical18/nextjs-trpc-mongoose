import { Button } from "@/components/ui/button"; // Assuming ShadCN's button component is used
import Image from "next/image";
import Logo from "../../../../../public/images/company_logo.png";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export default function VerifyEmailTemplate() {
  return (
    <div className="bg-white py-12 px-4 md:px-[128px] flex flex-col justify-between items-center h-[608px]">
      <Image src={Logo} alt="Fradragsjakt logo" height={32} width={152} />
      <div className="text-center text-black space-y-6">
        <h1 className="text-[28px] font-semibold">Verify your email</h1>
        <p className="text-sm">
          Please provide the text of the email template you’d like me to verify,
          and I’ll do my best to assist you.
        </p>
        <Button className="bg-[#5B52F9] w-[350px] md:w-[500px] text-white hover:bg-blue-700">
          Verify your email
        </Button>
      </div>

      <div className="space-y-4 text-center text-[#64748B] font-medium">
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="#" className="text-gray-500 hover:text-blue-600">
            <IoLogoFacebook color="#5B52F9" size={30} />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-blue-600">
            <IoLogoLinkedin color="#5B52F9" size={30} />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-blue-600">
            <AiFillInstagram color="#5B52F9" size={30} />
          </Link>
        </div>

        <p className="text-xs ">
          Copyright © 2023 Fradragsjakt. All rights reserved.
        </p>

        <p className="text-[10px] ">
          Invoiceflow is an on growing invoice solution system. Invoice gives
          clients the freedom to use easier way to allowing vendors to easily
          manage their clients and solve money management anywhere anytime.
        </p>
      </div>
    </div>
  );
}
