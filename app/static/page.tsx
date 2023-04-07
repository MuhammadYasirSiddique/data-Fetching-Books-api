import React from "react";
import Link from "next/link";

type Book = {
  id: number;
  name: string;
  type: string;

  available: boolean;
};

async function getBooks() {
  const url = "https://simple-books-api.glitch.me/books";
  const res = await fetch(url);
  const data = res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  } else return data;
}

async function staticPage() {
  const books = await getBooks();
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
      <div>
        <h1 className="text-center m-10">
          <strong> Static </strong> Data Fetching Page{" "}
        </h1>
      </div>
      <div className="flex justify-center m-5">
        <table>
          <thead>
            <tr className="">
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Book Type</th>
              <th>IN Stock</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: Book) => (
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

export default staticPage;
