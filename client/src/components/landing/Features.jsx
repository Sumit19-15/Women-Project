const features = [
  { title: "SOS Alerts", desc: "Instant emergency alerts", icon: "Bell" },
  {
    title: "Family Notification",
    desc: "Auto-notify trusted contacts",
    icon: "Users",
  },
  {
    title: "Nearby Police",
    desc: "Locate nearest police stations",
    icon: "PoliceCar",
  },
  {
    title: "Buddy Seeker",
    desc: "Find nearby trusted companions",
    icon: "UsersThree",
  },
];

export default function Features() {
  return (
    <section className="flex flex-col gap-10 px-4 py-10">
      <div>
        <h1 className="text-white text-4xl font-bold">Features</h1>
        <p className="text-white text-base">
          Empowering women with tools for safety and support.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 border border-[#533c3d] bg-[#261c1c] p-4 rounded-lg"
          >
            <div className="text-white">{feature.icon}</div>
            <div>
              <h2 className="text-white text-base font-bold">
                {feature.title}
              </h2>
              <p className="text-[#b89d9f] text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
