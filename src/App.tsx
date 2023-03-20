import Header from "./components/Header" 
import Auction from "./components/Auction"

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center pt-5 px-8 bg-[#FCFCFD]">
      <Header/>
      <Auction/>
    </div>
  )
}

export default App
