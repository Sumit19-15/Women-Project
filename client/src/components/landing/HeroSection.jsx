import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCum0hzpHuKEZ9pRyRubksPqYuQT28ZfhyjAjM0iusHZbZ46AvDa09yiEGX3AI5RctJ37mJSoeDOKPic7wYE6cb1-mystz_QnhezqR6MWdzPXg2Vsy6QqFIFBUaBdNlQR3L9TUH6g_ns3qDoRIRsPPm6antxQqrF-qPFZqCn3E02ZWHrHtUXkc-6yo_OSn4sxR0xQSC5vGUeuZKCnTV-exAXKMsvFnjXRWuvt15tI1CIXeDwyDyOxM1g1IJRUDZiBu8ln612z8MZdU")',
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Your Safety, Our Priority
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Quick help at your fingertips. Stay connected. Stay safe.
            </h2>
          </div>
          <Link to="/emergency">
            <button className="flex min-w-[84px] max-w-[480px]  hover:opacity-60 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e92932] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
              <span className="truncate">Emergency</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
