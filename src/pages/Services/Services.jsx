import { useLocation } from "react-router-dom";

import "./Services.css";

const Services = () => {
    const location = useLocation();
    const { state } = location;
    console.log(state);
    return (
        <main>
            
                <div className="service__heading__wrapper">
                    <h2 className="service__heading">{state.title}</h2>
                </div>
                <div className="service__para_wrapper">
                    <p className="service__para">{state.description}</p>
                </div>
         
        </main>
    );
};

export default Services;