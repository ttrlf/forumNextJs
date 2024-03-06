import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(500).json("제목써라");
    }
    let request = 요청.body;
    let db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();
    if (
      result.filter((e) => {
        return e.title == request.title;
      }).length < 1
    ) {
      db.collection("post").insertOne(요청.body);
      응답.redirect(302, "/list");
    }
    else 응답.json("ㅅㄱ");
  }
}
