import './App.css'

function App() {
 const myName = 'Tanadol Khumin'
 const myAge = '19'
 const Num1 = 10
 const Num2 = 20
 const randomNumber = Math.random()
  return (
  <>
    <h2 style={{color : 'green' , fontSize: '24'}}>My Name is :{myName} i'am {myAge} year old</h2>
    <h2 className='text'>Sum of {Num1} + {Num2}  = {Num1 + Num2}</h2>
    <p>Random Number : {randomNumber}</p>
    {
      randomNumber < 0.5 ? <div>Your Lose</div> : <div>Your win</div>
    }
  </>
  )
}

export default App
