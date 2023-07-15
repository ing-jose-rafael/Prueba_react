import './FooterStyles.css'
export const Footer = () => {
  return (
    <>
    <div className="waves">
      <div className="wave" id='wave1'></div>
      <div className="wave" id='wave2'></div>
      <div className="wave" id='wave3'></div>
      <div className="wave" id='wave4'></div>
    </div>
    <ul className="social_icons">
      <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-twitch"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
    </ul>
    <ul className="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Privacy Policy</a></li>
    </ul>
    <p>@2023 React App | All Rights Reserved</p>
    </>
  )
}
