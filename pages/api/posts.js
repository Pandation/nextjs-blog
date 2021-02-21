let test = {
    datas : [{
            title: "title",
            author : "John",
            content : "machin",
            date: new Date().toDateString()
        },
        {
            title: "title",
            author : "John",
            content : "Something",
            date: new Date().toDateString()
        },
        {
            title: "title",
            author : "John",
            content : "Something",
            date: new Date().toDateString()
        }
    ]
}
export default async function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json(test)
    } else if (req.method === 'POST') {
        test.datas[0] = {
            title : "new thing",
            data :"Something else again"
        } ;
        res.writeHead(301 , {
            Location : "/"
        })
        res.end()
    } else {
        res.status(400).json({ success : "failed" })
    }
} 