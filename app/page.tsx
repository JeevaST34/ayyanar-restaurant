import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import SignatureDishes from '../components/SignatureDishes';
import Menu from '../components/Menu';
import ReservationCTA from '../components/ReservationCTA';
import Gallery from '../components/Gallery';
import InstagramFeed from '../components/InstagramFeed';
import InstagramReels from '../components/InstagramReels';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ChefSpecials from '@/components/ChefSpecials';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <SignatureDishes />
      <Menu />
      {/* <ReservationCTA /> */}
      <Gallery />
      <ChefSpecials />
      <InstagramFeed />
      <InstagramReels />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
