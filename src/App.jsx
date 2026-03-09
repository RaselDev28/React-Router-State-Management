import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Componants/DaisyNav/DaisyNav'
import Navbar from './Componants/Navbar/Navbar'
import PricingOptions from './Componants/PricingOptions/PricingOptions'
import ResultChart from './Componants/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './Componants/MarksChart/MarksChart'

const pricingPromis=fetch('pricingData.json')
.then(res=>res.json());
const marksPromise=axios.get('marksData.json')

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

    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <MarksChart marksPromise={marksPromise}></MarksChart>
    </Suspense>

    <ResultChart></ResultChart>
    </main>

  
    </>
  )
}

export default App
