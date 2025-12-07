const Card = ({ tittle }) => {

  return (
    <div className="card" style={{
      border: '3px solid #790000ff',
      padding: '20px',
      margin: '10px',
      backgroundColor: 'white',
      borderRadius: '10px',
      minHeight: '100px',


    }} >
      <h2>{tittle}</h2>
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
