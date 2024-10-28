import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Ganesh Mahajan</h3>
        <p>
          Empowering your vision with innovative web solutions and captivating
          content, let's create something extraordinary together!
        </p>
        <div className="social-links">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Personal Profile</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed By <a href="#">Ganesh Mahajan</a>
        </div>
      </div>
    </footer>
  );
}
