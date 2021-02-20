let test = {data : "Something"}
export default async function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json(test)
    } else if (req.method === 'POST') {
        test.data = "Something else again";
        res.writeHead(301 , {
            Location : "/"
        })
        res.end()
    } else {
        res.status(400).json({ success : "failed" })
    }
} 