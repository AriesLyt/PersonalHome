import React, { useEffect, useRef, useState } from "react";


// ! scss
import "./index.scss"

// ! hitokoto text
import { getHitoKoto } from "utils/request";

// ! components
import TopNav from "comp/TopNav";
import MyFooter from "../Myfooter"
import History from "../History"
import Footer from "comp/Footer"

// ! interface
interface HitoKoto {
    hitokoto: string,
    from_who: string,
    from: string
}

const Main: React.FC = () => {

    const bgRef = useRef<HTMLDivElement>(null)

    const [hitoText, setHitoText] = useState<HitoKoto | null>(null)

    useEffect(() => {
        bgRef.current!.className = "tscale"
        getHitoKoto().then((res) => {setHitoText(res)});
        consoleFun()
    }, [])

    const consoleFun = ():void => {
        console.log('%c Hello, 这里是lyt的个人主页', 'color: #229453;')
        console.log('%c 山高路远 道阻且长', 'color: #229453;')
        console.log('%c 我的故事 从这开始', 'color: #eea2a4;')
    }

    return (
        <div className="main-w">
            <TopNav />
            <div ref={bgRef} id="main-bg-top">
            </div>
            <div id="main-bg-under">
            </div>
            <div className="main-wrap">
                <div className="main-title">
                    <div className="title-content">
                        山高路远,道阻且长.
                    </div>
                    <div id="hitoText">
                        { hitoText?.hitokoto }
                    </div>
                </div>
            </div>
            <MyFooter />
            <History />
            <Footer />
        </div>
    )
}

export default Main