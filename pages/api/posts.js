let test = {
    datas : [{
            title: "title",
            author : "John",
            content : "machin",
            date: "2021-02-21T11:55:50.733Z"
        },
        {
            title: "title",
            author : "John",
            content : "Something",
            date: "2021-02-21T11:55:50.733Z"
        },
        {
            title: "title",
            author : "John",
            content : "Something",
            date: "2021-02-21T11:55:50.733Z"
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