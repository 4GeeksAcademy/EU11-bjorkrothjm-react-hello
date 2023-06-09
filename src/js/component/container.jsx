import React from "react";

const Container = (({children}) => {
    return (
        <div className="container" style={{width:"90%"}}>
            {children}
        </div>
    )
});

export { Container } 