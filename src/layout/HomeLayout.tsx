import { HeroSection } from '@features/home/components/HeroSection';
import { BookingStepCard } from '@features/home/components/BookingStepCard';
import { LocationAndReviewsCard } from '@features/home/components/LocationAndReviewsCard';
import { useTitle } from '@shared/hooks/useTitle';
function HomeLayout() {
  const setTitle = useTitle();
  setTitle('Inicio - Lumen');
  return (
    <>
      <HeroSection />
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BookingStepCard />
          <LocationAndReviewsCard />
        </div>
      </section>
    </>
  );
};

export default HomeLayout;