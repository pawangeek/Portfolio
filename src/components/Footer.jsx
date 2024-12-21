const Footer = () => {
  return (
    <footer>
      <div className="section-footer-2 position-relative">
        <div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
          <div className="text-center">
            <a className="d-flex main-logo align-items-center justify-content-center mb-3" href="">
              <span className="fs-4 ms-2">Pawan Jain</span>
            </a>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.linkedin.com/in/pawan-jain/">
                <i className="ri-linkedin-fill fs-18"></i>
              </a>
              <a href="https://github.com/pawangeek">
                <i className="ri-github-fill fs-18"></i>
              </a>
              <a href="https://stackoverflow.com/users/15960341/pawan-jain">
                <i className="ri-stack-overflow-fill fs-18"></i>
              </a>
              <a href="mailto:pawanjain.432@gmail.com">
                <i className="ri-mail-add-fill fs-18"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;