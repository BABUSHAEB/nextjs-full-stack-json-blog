import { NextResponse } from "next/server";
import * as fs from "fs";

export async function POST(request) {
  try {
    let res = await request.json();

    if (
      !res.heading ||
      !res.description ||
      !res.author ||
      !res.metadesc ||
      !res.category ||
      !res.slug
    ) {
      throw new Error(
        { error: "Key Missing !", success: false },
        { status: 500 }
      );
    }
    let filename = await fs.promises.writeFile(
      `src/app/blogPostData/${res.slug}.json`,
      JSON.stringify(res)
    );
    if (!filename) {
      return NextResponse.json(
        { results: res, success: true },
        { status: 201 }
      );
    }
  } catch (e) {
    console.log("Parameter Missing !");
    return NextResponse.json(
      { error: "Key Missing !", success: false },
      { status: 500 }
    );
  }
}
