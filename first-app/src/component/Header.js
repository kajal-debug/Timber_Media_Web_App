import React from 'react';
let Header =()=>{
    return(
        <React.Fragment>
                <div className="nav">
                    <div id="menu">
                    <span>need help?</span>
                    <span>call us</span>
                    <span><i class="fas fa-phone-square-alt"></i>+ 919348828696</span>
                    <span>IdNumber:A0001</span>
                    </div>
                    <div id="icon">
                    <span className="twitter"><i class="fab fa-twitter-square"></i></span>
                    <span className="facebook"><i class="fab fa-facebook"></i></span>
                    <span className="insta"><i class="fab fa-instagram-square"></i></span>
                    <span className="whatsapp"><i class="fab fa-whatsapp-square"></i></span>
                </div>
                </div>
                    <a  class="whats-app" href="#" >
                    <i class="fab fa-whatsapp"><div className="tooltip">WhatsappUs</div></i>
                              </a>

        </React.Fragment>
    );
}
export default Header;