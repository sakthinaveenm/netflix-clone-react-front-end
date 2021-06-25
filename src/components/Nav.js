import React,{useEffect,useState} from 'react';
import "./Nav.css";

function Nav() {
    const [show,handleShow] = useState([]);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100)
            {
                handleShow(true);
            }else handleShow(false);
        });
        return() =>{
            window.removeEventListener("scroll");
        };
    },[]);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
             src="https://davidblaine.com/wp-content/uploads/2017/04/netflix-logo.png"
             className="nav_logo"
             alt ="Netflix Logo"
            />

            <img 
             src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57"
             className="nav_avatar"
             alt ="Netflix Logo"
            />
            
        </div>
    )
}

export default Nav;
