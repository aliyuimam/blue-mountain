const card = () => {
  return (
    <section className="card overflow-hidden">
   <div className="row grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-4 text-center py-2 px-4">
  <a className="col max-w-sm hover:scale-105 transition-transform rounded-lg">
    <div className="h-48">
      <img
        src="https://t4.ftcdn.net/jpg/00/63/83/29/240_F_63832907_SA64nRfoIU8qaPKDkcYT7Ax2T0eVFJDY.jpg"
        className="rounded-lg h-full w-full object-cover"
        alt=""
      />
    </div>
    <p className="mt-2 truncate text-blue-600 font-bold">Up to 50% Off</p>
  </a>

  <a href="" className="col max-w-sm hover:scale-105 transition-transform rounded-lg">
    <div className="h-48">
      <img
        src="https://t3.ftcdn.net/jpg/02/85/93/38/240_F_285933897_077d15KSailGJf7pKDBTEekbX4KdR4jH.jpg"
        className="rounded-lg h-full w-full object-cover"
        alt=""
      />
    </div>
    <p className="mt-2 truncate text-blue-600 font-bold">Clearance Sale</p>
  </a>

  <a href="" className="col max-w-sm hover:scale-105 transition-transform rounded-lg">
    <div className="h-48">
      <img
        src="https://t3.ftcdn.net/jpg/07/95/99/70/240_F_795997016_DErJEnWmmukQkxTaKoPIjoVQ0GcLEKQE.jpg"
        className="rounded-lg h-full w-full object-cover"
        alt=""
      />
    </div>
    <p className="mt-2 truncate text-blue-600 font-bold">Flash Sales</p>
  </a>

  <a href="" className="col max-w-sm hover:scale-105 transition-transform rounded-lg">
    <div className="h-48">
      <img
        src="https://t4.ftcdn.net/jpg/02/73/83/07/240_F_273830764_jlTKfFB0gBRPgWm10z27TbFgp975FADp.jpg"
        className="rounded-lg h-full w-full object-cover"
        alt=""
      />
    </div>
    <p className="mt-2 truncate text-blue-600 font-bold">New Arrivals</p>
  </a>

  <a href="" className="col max-w-sm hover:scale-105 transition-transform rounded-lg">
    <div className="h-48">
      <img
        src="https://t4.ftcdn.net/jpg/05/15/03/09/240_F_515030976_kVpyi2nts650yioqDrFnPiduftYKUUqa.jpg"
        className="rounded-lg h-full w-full object-cover"
        alt=""
      />
    </div>
    <p className="mt-2 truncate text-blue-600 font-bold">Mega Sale</p>
  </a>
</div>

  </section>
  
  )
}

export default card
