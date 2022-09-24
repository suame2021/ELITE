import ContentColumn from "./contentColumn";
import FooterComponent from "./footerComponent";
// import { useState } from "react";
import NavbarComponent from "./navbarComponent";
const HomeComponent = () => {
    
    return (  
        <div>
            <NavbarComponent/>
            <ContentColumn/>
            <FooterComponent/>
        </div>
    );
}
 
export default HomeComponent;