import bannerImage from "@/assets/hero_img.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="py-12 md:py-20" >
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-6 md:p-10 lg:p-14 shadow-xl">
          {/* Decorative circle */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            {/* Content */}
            <div className="space-y-6 text-white">
              <span className="inline-block rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/20">
                📚 Discover your next favorite book
              </span>

              <h2 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                Freshen Up Your{" "}
                <span className="text-emerald-400">Bookshelf</span>
              </h2>

              <p className="max-w-lg text-base leading-7 text-slate-300 md:text-lg">
                Explore amazing books, discover new stories, and find something
                exciting to read. Your next great adventure is just a click
                away.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn border-0 bg-emerald-500 px-6 text-white hover:bg-emerald-600">
                  Explore Books →
                </button>

                <button className="btn btn-outline border-slate-500 text-white hover:border-white hover:bg-white hover:text-slate-900">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
                <Image
                  src={bannerImage}
                  alt="A collection of books"
                  className="h-auto w-full rounded-xl object-cover transition duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-3 shadow-xl">
                <p className="text-xs font-medium text-slate-500">
                  Find your next
                </p>
                <p className="font-bold text-slate-900">Great Read ✨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
