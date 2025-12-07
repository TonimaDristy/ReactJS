const Card = ({ tittle }) => {

  return (
    <div style={{
      border: '1px solid #4b5362',
      padding: '20px',
      margin: '10px',
      backgroundColor: 'red',
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
