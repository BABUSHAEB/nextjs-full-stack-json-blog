import { NextResponse, NextRequest } from "next/server";
import * as fs from "fs";

export async function GET(request, content) {
  // console.log(content.params.blogpost, "Params");
  let message = { message: "Internal Server Error", status: 500 };

  let fileData = await fs.promises
    .readFile(`src/app/blogPostData/${content.params.blogpost}.json`, "utf-8")
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      return message;
    });

  return NextResponse.json(fileData, { status: 200 });
}
