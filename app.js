const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome');
    }
    if(req.url === '/bruh'){
        res.end('BRUH PAGE');
    }
    res.end('Error 404');
})

//znaci da bi sve lepo poslao na git trebas prvo da uradis "git add ." a zatim "git commit -m "poruka"" i zatim "git push origin main"