import React from "react";
import { PencilSimple, Phone, HandWaving } from "phosphor-react";

const steps = [
  {
    title: "Sign Up",
    desc: "Quick registration",
    icon: <PencilSimple size={24} />,
  },
  {
    title: "Set Emergency Contacts",
    desc: "Add trusted people",
    icon: <Phone size={24} />,
  },
  {
    title: "Get Help Instantly",
    desc: "One-tap emergency response",
    icon: <HandWaving size={24} />,
  },
];

export default function HowItWorks() {
  return (
    <section>
      <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">
        How It Works
      </h2>
      <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className="text-white">{step.icon}</div>
              {index !== steps.length - 1 && (
                <div className="w-[1.5px] bg-[#533c3d] flex-grow"></div>
              )}
            </div>
            <div className="flex flex-col py-3">
              <p className="text-white text-base font-medium">{step.title}</p>
              <p className="text-[#b89d9f] text-base">{step.desc}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
