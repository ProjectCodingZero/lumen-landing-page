import { LocationAndReviewsCard, BookingStepCard, HeroSection } from '@features/home/index.ts';
import { useTitle } from '@/shared/index.ts';
export default function HomeLayout() {
  const setTitle = useTitle();
  setTitle('Lumen - Inicio');
  return (
    <main>
      <HeroSection />
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BookingStepCard />
          <LocationAndReviewsCard />
        </div>
      </section>
    </main>
  );
};
