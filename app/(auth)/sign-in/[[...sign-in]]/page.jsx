import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://itsedway.com/wp-content/uploads/2024/12/rb_3863.png" // Updated background image URL
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="absolute top-0 left-0 p-4 bg-white rounded-full">
            <a className="block" href="#">
              <span className="sr-only">Home</span>
              <img
                className="h-8 sm:h-10"
                src="/logo.svg" // Reference to the logo in the public folder
                alt="Logo"
              />
            </a>
          </div>

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Itsedway's AI Interview Simulator 🚀
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Prepare for success with our AI-driven mock interviews, designed to help you ace your job interviews with confidence and ease.
            </p>
          </div>
        </section>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <img
                  className="h-8 sm:h-10"
                  src="/logo.svg" // Reference to the logo in the public folder
                  alt="Logo"
                />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Squid 🚀
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>

            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
