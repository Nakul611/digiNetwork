import Hero from './components/heroSection/Hero';
import Navbar from './components/navbar/Navbar';
import { Separator } from './components/ui/separator';

function App() {
  return (
    <>
      <Navbar />
      <Separator className='bg-black'/>
      <Hero />
    </>
  )
}

export default App;