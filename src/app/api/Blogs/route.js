import * as fs from "fs";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, response) {
  // get slug from request
  // const { searchParams } = new URL(request.url);
  // console.log(searchParams.get("slug"));

  let fileData = await fs.promises
    .readdir("src/app/blogPostData/")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return { message: "There is No Blog Data" };
    });

  let allBlogs = [];
  let myFiles;

  for (let index = 0; index < fileData.length; index++) {
    const file = fileData[index];
    myFiles = await fs.promises
      .readFile("src/app/blogPostData/" + file, "utf-8")
      .then((data) => {
        allBlogs.push(JSON.parse(data));
      });
  }

  console.log(allBlogs, "filedata");
  return NextResponse.json(allBlogs, { status: 200 });
}
