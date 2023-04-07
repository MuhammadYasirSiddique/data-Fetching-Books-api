import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="text-center my-5">
      <h1 className="my-10 text-4xl">
        {" "}
        <strong>MAIN MENU</strong>
      </h1>
      <div className="block justify-center ">
        <Link href={"/static"} className="mx-5">
          {" "}
          Static Fetching
        </Link>

        <Link href={"/server"} className="mx-5">
          {" "}
          Server-side Fetching
        </Link>
      </div>
      <div className="block justify-center my-10">
        <Link href={"/client"} className="mx-5">
          {" "}
          Client-side Fetching
        </Link>
        <Link href={"/parallel"} className="mx-5">
          {" "}
          Parallel Fetching
        </Link>
        <Link href={"/sequential"} className="mx-5">
          {" "}
          Sequential Page
        </Link>
      </div>
    </div>
  );
}

export default page;
