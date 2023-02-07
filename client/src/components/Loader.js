import React, {useState} from "react";
import ClimbingBoxLoader from "react-spinners/BarLoader"

function Loader() {

    let [loading, setLoading] = useState(true);

    return (
        <div style={{marginTop: '150px', justifyContent: "center"}}>
            <div className="sweet-loading text-center">
                <ClimbingBoxLoader
                    color='#000'
                    loading={loading}
                    cssOverride=''
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    )
}

export default Loader