import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            Created By
            <i className="fa-solid fa-heart"></i>
            <a href="https://www.linkedin.com/in/md-shahbaz-alam-6a8679197/" target="_blank">
                Md Shahbaz Alam
            </a>
            <i className="fa-solid fa-copyright"></i>
            {year}
            <strong style={{marginLeft: '5px'}}>
                Food<span>Fire</span>
            </strong>
        </div>
    );
};

export default Footer;