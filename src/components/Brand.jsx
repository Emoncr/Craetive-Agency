const getData = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/BrandList")
  if (!res.ok) {
    throw new Error("BrandList Response Error ")
  }
  return res.json()
}



const Brand = async () => {
  const imagesData = await getData()



  return (
    <div className='py-11 bg-brandsBG'>
      <div className="flex items-center justify-between  container">
        {
          imagesData.map(imageData => <img src={imageData.image} alt={imageData.name} />)
        }
      </div>
    </div>
  )
}

export default Brand