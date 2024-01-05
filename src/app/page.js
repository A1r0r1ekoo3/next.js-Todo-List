"use client";
import Link from "next/link";

async function getData(id) {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 3600 },
  });
  const data = await req.json();
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="flex justify-center ">
      <div className="overflow-x-auto w-3/4 ">
        <h1 className="text-3xl py-5 text-sky-700 font-bold text-center">
          Todo List
        </h1>
        <div className="flex flex-col gap-6">
          {/* head */}
          <div className="flex items-center justify-between font-medium">
            <h2 className="text-xl md:2xl lg:3xl">Title</h2>
            <h2 className="text-xl md:2xl lg:3xl">Item About</h2>
          </div>
          <ul className="flex flex-col gap-6">
            {data.map((item) => {
              return (
                <li
                  key={item.id}
                  className="w-full flex flex-col md:flex-row md:items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="md:text-base text-red-600  ">
                      {item.id}
                    </span>
                    <h3 className="md:text-base text-blue-800">{item.title}</h3>
                  </div>
                  <Link
                    href={`about/${item.id}`}
                    className="link link-secondary md:text-lg"
                  >
                    Read More
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
