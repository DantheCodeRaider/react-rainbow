import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './colorBlock.js'
import ColorForm from './colorForm.js'

function App(){
  const addColor = (newColor) => {
    setColors([...colors, newColor])
}

let [colors, setColors] = useState([
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'
])
    
  let colorMap = colors.map((color, i) => {
      return (
          <ColorBlock key={i} color={color} />
      )
})

  return (
      <div className="App">
          <div>
            {colorMap}
          </div>
          <ColorForm addColor={addColor} />
      </div>
  )
}

export default App;
