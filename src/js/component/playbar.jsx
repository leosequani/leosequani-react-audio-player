
import React from "react";
//create your first component
const Songs = (props) => {
    
    return (
        <>
            <div className="btn-group p-4" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off"/>
                    <label className="btn btn-outline-primary" for="btncheck1">back</label>
                    <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"/>
                        <label className="btn btn-outline-primary" for="btncheck2" onClick={(e)=>{props.clickfunction()}}>Pause</label>
                        <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"/>
                            <label className="btn btn-outline-primary" for="btncheck3">forward</label>
                        </div>
        </>
                    )
}


                    export default Songs;

