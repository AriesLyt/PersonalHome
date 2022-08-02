import React from "react";

// ! scss
import "./index.scss"

const MyFooter: React.FC = () => {
    return (
        <div className="myfooter-w">
            <div id="myfooter-t">
                <span>我,</span>
                一个向往田园生活的前端苦手
            </div>
            <div id="myfooter-l">
                <ul>
                    <li>
                        2020年 迈入前端大门
                    </li>
                    <li>
                        2022年 成功成为前端苦手一名, 在一家中小公司当打工人
                    </li>
                    <li>
                        以后的故事 还在继续...
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MyFooter