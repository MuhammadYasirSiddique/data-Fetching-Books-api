import Link from "next/link";
import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;

  available: boolean;
};

let isFetchOk1 = true;
let isFetchOk2 = true;

async function getfictionBooks() {
  try {
    const url = "https://simple-books-api.glitch.me/books?type=fiction";
    const res = await fetch(url, { cache: "no-store" });
    const data = res.json();
    if (!res.ok) {
      isFetchOk1 = false;
      throw new Error("Failed to fetch data");
    } else return data;
  } catch (error: any) {
    return ["Something went wrong " + error.message];
  }
}

async function getNonfictionBooks() {
  try {
    const url = "https://simple-books-api.glitch.me/books?type=non-fictio";
    const res = await fetch(url, { cache: "no-store" });
    const data = res.json();
    if (!res.ok) {
      isFetchOk2 = false;
      throw new Error("Failed to fetch data");
    } else return data;
  } catch (error: any) {
    return ["Something went wrong " + error.message];
  }
}

async function parallel() {
  const fictionBooks = getfictionBooks();
  const nonfictionBooks = getNonfictionBooks();

  const [fiction, nonfiction] = await Promise.all([
    fictionBooks,
    nonfictionBooks,
  ]);

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
      <div className="">
        <h1 className="text-center m-10">
          {" "}
          <strong> Parallel</strong> Data Fetching Page
        </h1>
      </div>
      <h2
        className={
          isFetchOk1
            ? "text-center text-2xl font-extrabold "
            : "text-center text-2xl font-extrabold text-red-800"
        }
      >
        Fiction Books
      </h2>
      <div className="flex justify-center m-5">
        {isFetchOk1 ? (
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
              {fiction.map((book: Book) => (
                <tr key={book.id} className="text-center">
                  <td>{book.id}.</td>
                  <td className="text-left">{book.name} </td>
                  <td className="text-left">{book.type}</td>
                  <td>{book.available ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="text-xl text-center">
            {" "}
            <strong>
              {" "}
              Something Went Wrong, Data could not be fetched.{" "}
            </strong>{" "}
          </h1>
        )}
      </div>

      <h2
        className={
          isFetchOk2
            ? "text-center text-2xl font-extrabold"
            : " text-center text-2xl font-extrabold text-red-800"
        }
      >
        Non Fiction{" "}
      </h2>

      <div className="flex justify-center m-5">
        {isFetchOk2 ? (
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
              {nonfiction.map((book: Book) => (
                <tr key={book.id} className="text-center">
                  <td>{book.id}.</td>
                  <td className="text-left">{book.name} </td>
                  <td className="text-left">{book.type}</td>
                  <td>{book.available ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="text-xl text-center">
            {" "}
            <strong>
              {" "}
              Something Went Wrong, Data could not be fetched.{" "}
            </strong>{" "}
          </h1>
        )}
      </div>
    </div>
  );
}

export default parallel;
