import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top">
          <div className="left">
            <img src={Logo} alt="logo" />
            <div className="kontak">
              <div className="email">Email: contact@eksrifaa.my.id</div>
              <div className="nohp">No.Telp/WA: 081240506105</div>
            </div>
          </div>
          <div className="right">
            <h2>Navigation:</h2>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#wcu">Why Choose Us</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">Copyright BerkahCharcoal 2024 | <a href="https://instagram.com/eksrifaa">@eksrifaa</a></div>
      </footer>
    </>
  );
};

export default Footer;
