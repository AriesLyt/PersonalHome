import React from "react";

import TopNav from "comp/TopNav";

// ! scss
import "./index.scss"

const Main: React.FC = () => {
    return (
        <div className="main-w">
            <TopNav />
            <div className="main-bg">
                Bg-Img
            </div>
            <div className="main-wrap">
                <div className="main-title">
                    <div>
                        山高路远.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main