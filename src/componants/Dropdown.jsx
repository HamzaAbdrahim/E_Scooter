
const Dropdown = (prop) => {
  return (
    prop.state && (

       <div className='p-10 shadow-2xl text-xl border-solid border-4 border-primary rounded-2xl absolute top-24 z-50 bg-whity'>
      <h1 className="mb-3 hover:underline cursor-pointer">Scooter</h1>
      <h1 className="mb-3 hover:underline cursor-pointer">Parts</h1>
      <h1 className="mb-3 hover:underline cursor-pointer">Battery Images</h1>
      <h1>Built Quality</h1>
    </div>)
  )
}

export default Dropdown