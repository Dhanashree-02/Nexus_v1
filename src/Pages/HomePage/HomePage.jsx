import FadeInSection from '../../Hookes/useInView'; 
import Course from '../../Components/Home/Course/Course';
import Home from '../../Components/Home/Hero/Hero';
import UpcomingBatches from '../../Components/Home/UpcomingBatches/UpcomingBatches';
import UpcomingEvents from '../../Components/Home/UpcomingEvents/UpcomingEvents';
import WhyJoin from '../../Components/Home/WhyJoin/WhyJoin';

function HomePage() {
  return (
    <div>
      <FadeInSection>
        <Home />
      </FadeInSection>
      <FadeInSection>
        <UpcomingBatches />
      </FadeInSection>
      <FadeInSection>
        <Course />
      </FadeInSection>
      <FadeInSection>
        <WhyJoin />
      </FadeInSection>
      <FadeInSection>
        <UpcomingEvents />
      </FadeInSection>
    </div>
  );
}

export default HomePage;
