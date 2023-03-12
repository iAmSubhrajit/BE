const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('req received');
    // console.log('request', req);
    // console.log('headers', req.headers);
    // res.end('hello world')
    // res.end('<h1>hello World</h1>')
    // res.end('<iframe width="853" height="480" src="https://www.youtube.com/embed/xjv_wxx5AyY" title="Haaland is GOOD but Messi was out of this World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    console.log('url visited', req.url);

    if (req.url === '/') {
        res.end('<h1>Hello World!</h1><a href="/home">Home</a><br/><a href="/video">videos</a>')
    }
    else if (req.url === '/home') {
        res.end('<h1>Home Page</h1><a href="/about">about</a>')
    }
    else if (req.url === '/about') {
        res.end('<h1>About Page</h1><a href="/">default page</a>')
    }
    else if (req.url === '/video') {
           res.end('<iframe width="853" height="480" src="https://www.youtube.com/embed/xjv_wxx5AyY" title="Haaland is GOOD but Messi was out of this World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    }
    else if (req.url === '/users') {
        res.end('{name:"Subhrajit"}')
    }
    else {
        res.end('sending request...')
    }
})

//http server internally implements Event Module so we csn use
// server.on('error',()=>{
//     console.log('error inside server');
// })
// server.emit('error')

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})