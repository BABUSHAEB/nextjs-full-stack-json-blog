import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div>
      <Image src={"/Loading.gif"} fill alt="Loading" />
    </div>
  );
}
