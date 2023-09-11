import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer content">
  <nav>
    <h3 className="title">Services</h3> 
    <a className="link">Branding</a>
    <a className="link">Design</a>
    <a className="link">Marketing</a>
    <a className="link">Advertisement</a>
  </nav> 
  <nav>
    <h3 className="title">Company</h3> 
    <a className="link">About us</a>
    <a className="link">Contact</a>
    <a className="link">Jobs</a>
    <a className="link">Press kit</a>
  </nav> 
  <nav>
    <h3 className="title">Legal</h3> 
    <a className="link">Terms of use</a>
    <a className="link">Privacy policy</a>
    <a className="link">Cookie policy</a>
  </nav>
</footer>
    </>
  )
}

export default Footer