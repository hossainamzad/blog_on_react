import React from 'react';

const Footer = () => {
  var date = new Date();
  date = date.getFullYear();
  return (
      <div className="footer">
        <div className="copyright">Copyright: Amzad Hossain || {date}</div>
      </div>
    )
}
export default Footer;

