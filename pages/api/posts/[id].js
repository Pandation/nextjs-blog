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
            content : "Super contenu",
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

    res.status(200).json(test.datas[1]);
}
