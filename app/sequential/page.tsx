import Link from "next/link";
import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;

  available: boolean;
};

async function getfictionBooks() {
  try {
    const url = "https://simple-books-api.glitch.me/books?type=fiction";
    const res = await fetch(url, { cache: "no-store" });
    const data = res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    } else return data;
  } catch (error: any) {
    return ["Something went wrong " + error.message];
  }
}

async function getNonfictionBooks() {
  try {
    const url = "https://simple-books-api.glitch.me/books?type=non-fiction";
    const res = await fetch(url, { cache: "no-store" });
    const data = res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    } else return data;
  } catch (error: any) {
    return ["Something went wrong " + error.message];
  }
}

export default async function sequential() {
  const fictionBooks = await getfictionBooks();
  const nonfictionBooks = await getNonfictionBooks();

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
          <strong> Sequential</strong> Data Fetching Page
        </h1>
      </div>
      <h1 className="text-center">Fiction Books</h1>
      <div className="flex justify-center m-5">
        <table>
          <thead>
            <tr className="text-center">
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Book Type</th>
              <th>IN Stock</th>
            </tr>
          </thead>
          <tbody>
            {fictionBooks.map((book: Book) => (
              <tr key={book.id} className="text-center">
                <td>{book.id}.</td>
                <td className="text-left">{book.name} </td>
                <td className="text-left">{book.type}</td>
                <td>{book.available ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-center">Non Fiction </h2>
      <div className="flex justify-center m-5">
        <table>
          <thead>
            <tr className="text-center">
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Book Type</th>
              <th>IN Stock</th>
            </tr>
          </thead>
          <tbody>
            {nonfictionBooks.map((book: Book) => (
              <tr key={book.id} className="text-center">
                <td>{book.id}.</td>
                <td className="text-left">{book.name} </td>
                <td className="text-left">{book.type}</td>
                <td>{book.available ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
