"use client";

import Link from "next/link";
import React from "react";
import useSWR from "swr";

const url = "https://api.quotable.io/random?tags=technology";

const fetchData = (url: string) => fetch(url).then((res) => res.json());

export default function ClientPage() {
  const { data, error, isLoading } = useSWR(url, fetchData);
  if (error) return <div>ERROR</div>;
  if (isLoading)
    return (
      <div>
        <div className="flex justify-evenly">
          <Link href="/">HOME</Link>
          <Link href={"/static"}> Static Page</Link>

          <Link href={"/server"}> Server Page</Link>

          <Link href={"/client"}> Client Page</Link>
          <Link href={"/parallel"}> Parallel Page</Link>
          <Link href={"/sequential"}> Sequential Page</Link>
        </div>
        <div className="text-center">
          <h1 className="text-center m-10">
            {" "}
            <strong> Client</strong> Data Fetching Page
          </h1>
        </div>
        <div className="text-center">Loading Data. . .</div>
      </div>
    );
  return (
    <div>
      <div className="flex justify-evenly">
        <Link href="/">HOME</Link>
        <Link href={"/static"}> Static Page</Link>

        <Link href={"/server"}> Server Page</Link>

        <Link href={"/client"}> Client Page</Link>
        <Link href={"/parallel"}> Parallel Page</Link>
        <Link href={"/sequential"}> Sequential Page</Link>
      </div>
      <div className="text-center">
        <h1 className="text-center m-10">
          {" "}
          <strong> Client</strong> Data Fetching Page
        </h1>
      </div>
      <div className="text-center">{data.content}</div>
    </div>
  );
}
