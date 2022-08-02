import axios from "axios"

// ! 只是简单封装下请求 [一言] 接口

function getHitoKoto() {
    return axios.get("https://v1.hitokoto.cn?c=b&c=d&c=h&c=i")
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log("[ 一言 ] : ", error)
        })
}

export {
    getHitoKoto
}