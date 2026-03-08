import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Componants/DaisyNav/DaisyNav'
import Navbar from './Componants/Navbar/Navbar'
import PricingOptions from './Componants/PricingOptions/PricingOptions'

const pricingPromis=fetch('pricingData.json')
.then(res=>res.json());

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      </header>
    <main>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
      <PricingOptions pricingPromis={pricingPromis}></PricingOptions>
    </Suspense>
    </main>

  
    </>
  )
}

export default App
