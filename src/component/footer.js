import React from 'react';
import "./footer.css"
import  "./font-awesome-4.7.0/css/font-awesome.min.css";

function Footer(prop) {
    const data = prop.prop.footer
    return (
        <div className="footer-conteiner padding">
            {[data].map((item, index )=> <div className="footer-conteiner-row" key={index}>
                <div>
                    <h1 className="footer-conteiner-row-h1">{item[0].title}
                         <span className="footer-conteiner-row-span"> Ex</span></h1>
                    <p className="footer-conteiner-row-p">{item[0].text}</p>
                    <svg className="footer-conteiner-row-svg"
                        width="68"
                         height="68"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0.57 0 59.907 68" fill="#ff8a8a">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="68" height="68"
                             viewBox="1.589 4.328 41.427 46.344">
                            <path    d="M13.336 6.687a2360.677 2360.677 0 0 0 23.728 13.922c7.936 4.594 7.936 9.188 0 13.782a2355.055 2355.055 0 0 0-23.728 13.922C5.453 53 1.537 50.703 1.59 41.422c.053-9.281.053-18.563 0-27.844C1.537 4.298 5.453 2 13.336 6.687z"/>
                        </svg>
                    </svg>
                </div>
                <div className="footer-row">
                    <h1 className="footer-conteiner-row-h1">{item[1].title}</h1>
                    {item[1].Support.map((list,index)=> <li className="footer-item" key={index}>{list}</li>)}
                </div>
                <div>
                    <h1 className="footer-conteiner-row-h1">{item[2].title}</h1>
                    {item[2].AboutUS.map((list,index)=> <li className="footer-item" key={index}>{list}</li>)}
                </div>
                <div className="footer-form">
                    <h1 className="footer-conteiner-row-h1">{item[3].title}</h1>
                    <input className="footer__input" name="email" placeholder="EMAIL "/>
                    <button className="footer__send"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                    <div className="footer-social">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <i className="fa fa-google-plus-official" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                </div>

            </div>)}

        </div>
    );
}

export default Footer;