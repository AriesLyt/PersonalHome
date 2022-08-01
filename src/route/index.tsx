import { Routes, Route } from "react-router-dom";

import Main from "views/index";

export default function MRoute():any {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    )
}