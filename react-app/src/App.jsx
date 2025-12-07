import { useState } from "react"

const Card = ({ tittle }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card" >
      <h2>{tittle}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>



    </div>
  )
}





const App = () => {


  return (
    <div className="card-container">


      <Card tittle="Wednesday" rating={5} iscool={true} />
      <Card tittle="Avatar" />
      <Card tittle="Star Wars" />



    </div>
  )
}

export default App
