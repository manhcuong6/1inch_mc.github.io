const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();
const port = process.env.PORT || 80; 

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index_MC.html'));
});

const priceProxy = createProxyMiddleware('/price/v1.1/1', {
    target: 'https://api.1inch.dev',
    changeOrigin: true,
    pathRewrite: {
        '/price/v1.1/1': '/price/v1.1/1', 
    },
    onProxyReq: (proxyReq) => {

        proxyReq.setHeader('Authorization', 'uguz5vVsBYdEua6wStLph4QpxxnqWTAy');
    },
});

const gasProxy = createProxyMiddleware('/gas-price/v1.4/1', {
    target: 'https://api.1inch.dev',
    changeOrigin: true,
    pathRewrite: {
        '/gas-price/v1.4/1': '/gas-price/v1.4/1', 
    },
    onProxyReq: (proxyReq) => {

        proxyReq.setHeader('Authorization', 'uguz5vVsBYdEua6wStLph4QpxxnqWTAy');
    },
});

async function swap(params){
    let data
    let urlParams = []
    for (const key in params) {
        if (params[key] !== "") {
          urlParams.push(`${key}=${encodeURIComponent(params[key])}`);
        }
      }
    const url = "https://api.1inch.dev/swap/v5.2/1/swap?" + urlParams.join("&");
    await fetch(url,{
        method: "GET",
        headers: {
        "accept": "application/json",
        "Authorization": "uguz5vVsBYdEua6wStLph4QpxxnqWTAy",
        "Content-Type": "application/json"
        }
    })
        .then( function(response) {
            if (!response.ok) {
            throw new Error('Network response was not ok');
        } 
        return response.json();
        })
        .then( function(responseData) {
            // console.log("check data", responseData)
            data = responseData
        })
  
        .catch( function(error) {
            console.error('Có lỗi xảy ra: ', error);
             
        });
    // console.log("check2", data)
    return data
    
 }
app.use('/api-endpoint',express.json());
app.post('/api-endpoint', async (req, res) => {
    const postData = req.body; // Lấy dữ liệu từ yêu cầu POST
    let dataRes = await swap(postData)
    // console.log("final" , dataRes)
    // const responseData = {resData: dataRes };
    // console.log(responseData)
    res.json(dataRes);

});

app.use('/price/v1.1/1', priceProxy);
app.use('/gas-price/v1.4/1', gasProxy)

app.listen(port, () => {
    console.log(`Máy chủ đang chạy tại http://localhost:${port}`);
});
