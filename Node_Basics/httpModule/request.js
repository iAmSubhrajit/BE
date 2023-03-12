const http = require('http');

http.request('http://localhost:5000/about', (res) => {
    console.log('response received');
    res.setEncoding('utf-8') //buffer res to string
    res.on('data',(data)=>{
        // console.log(data+"");
        // console.log(data.toString());
        console.log(data);
    })
})
.end()
//42 mins