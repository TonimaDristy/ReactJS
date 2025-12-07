import { useEffect, useState } from "react"

const Card = ({ tittle }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(() => {

    console.log(`${tittle} has been liked: ${hasLiked}`);

  });



  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{tittle} <br /> {count}</h2>

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
