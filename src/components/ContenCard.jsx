import './ContenCardStyles.css'

export const ContenCard = ({ item, category }) => {
  return (
  // <div className="b-card">

   <div className="content-card">
    <div className="box">
    <div className="imgBx">
        <video src={item.video} type='video/mp4' autoPlay loop muted/>
      </div>
    </div>
    <div className="box">
      <div className="content">
        <h2>{item.name}<br/><span>{category.name}</span></h2>
        <ul>
          {
            item.links.map((i, index) => {
              const follwers = Math.floor(Math.random() * 100)
              return (
                <li key={index}>
                  <a href={i.url} target="_blank>">{i.name}</a>
                  <span>{follwers}</span>
                </li>
              )
            })
            }
          {/* <li>Posts<span>62</span></li>
          <li>Posts<span>120</span></li>
          <li>Posts<span>62</span></li> */}
        </ul>
        <button>Follow</button>
      </div>
    </div>
    <div className="circle">
      <div className="imgBx">
        <img src={category?.icon}/>
      </div>
    </div>
   </div>
  // </div>
  )
}
