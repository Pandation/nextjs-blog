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
            content : "Super contenu",
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
    res.status(200).json(test.datas[1]);
}
