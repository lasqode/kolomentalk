import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#FFFCF6] px-6 py-8 pb-28 md:ml-64 md:px-10 md:py-10 md:pb-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 font-medium text-green-800">
            Welcome to Kolomentalk
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-stone-900 md:text-5xl">
            Understand how we talk.
          </h1>

          <p className="mt-4 max-w-2xl text-stone-600">
            Discover Liberian expressions, explore their meanings, and translate
            everyday conversations into standard English.
          </p>
        </div>
      </main>
    </>
  );
}
