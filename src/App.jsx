import { useState } from 'react'
import svg from './assets/hexagon-svgrepo-com.svg'

function App() {
  const [mapState, setMapState] = useState({one: false, two: false, three: false, four: false, five: false, six: false})
  const [currentData, setCurrentData] = useState(null)

  const farmData = {
    one: {
        name: 'one',
        size: 78,
        types: [{name: "orange", amount: 23}, {name: "coconut", amount: 153}],
    },
    two: {
        name: 'two',
        size: 102,
        types: [{name: "vanilla", amount: 11}, {name: "cacao", amount: 234}],
    },
    three: {
        name: 'three',
        size: 512,
        types: [{name: "coconut", amount: 314}],
    },
    four: {
        name: 'four',
        size: 243,
        types: [{name: "pineapple", amount: 23}, {name: "mango", amount: 39}],
    },
    five: {
        name: 'five',
        size: 54,
        types: [{name: "avacados", amount: 21}, {name: "ginger", amount: 42}],
    },
    six: {
        name: 'six',
        size: 123,
        types: [{name: "tumeric", amount: 15}, {name: "legumes", amount: 46}],
    },

}


  const handleClick = (name) => {
    setMapState({one: false, two: false, three: false, four: false, five: false, six: false, [name]: !mapState[name]})
    setCurrentData(farmData[name])
    console.log(currentData)
  }

  return (
    <div className='flex flex-row p-20'>
      <div>
    <div className='m-auto pt-20 w-40  grid grid-cols-2'>
          <div onClick={() => handleClick("one")} className={` ${mapState.one ? 'border-2' : ''} w-20 h-20 bg-red-500 cursor-pointer`}></div>
          <div onClick={() => handleClick("two")} className={` ${mapState.two ? 'border-2' : ''} w-20 h-20 bg-green-500 cursor-pointer`}></div>
          <div onClick={() => handleClick("three")} className={` ${mapState.three ? 'border-2' : ''} w-20 h-20 bg-blue-500 cursor-pointer`}></div>
          <div onClick={() => handleClick("four")} className={` ${mapState.four ? 'border-2' : ''} w-20 h-20 bg-yellow-500 cursor-pointer`}></div>
          <div onClick={() => handleClick("five")} className={` ${mapState.five ? 'border-2' : ''} w-20 h-20 bg-orange-500 cursor-pointer`}></div>
          <div onClick={() => handleClick("six")} className={` ${mapState.six ? 'border-2' : ''} w-20 h-20 bg-purple-500 cursor-pointer`}></div>

    </div>
    </div>
    {currentData && 
    <div>
      <div className='pt-20 pl-20 flex flex-col'>
        <h1>{'Farm plot ' + currentData.name}</h1>
        <img src={svg} alt="hexagon" className='w-20 h-20'/>
        <h2>Crops:</h2>
        <ul>
          {currentData.types.map((crop, index) => {
            return <li key={index}>{crop.name}: {crop.amount}</li>
          })}
        </ul>
        <h2>Size:</h2>
        <p>{currentData.size}{' acres'}</p>

      </div>
    </div>}

    </div>
  )
}

export default App
