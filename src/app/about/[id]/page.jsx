import Link from "next/link";

async function getData(id) {
  const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 3600 },
  });
  const data = await req.json();
  return data;
}

export default async function Page({ params }) {
  const data = await getData(params.id);
 
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card w-96 bg-primary text-primary-content">
        <ul className="card-body">
          <li>
            <h2 className="card-title mb-2">{data.title}</h2>
            <p> completed: {data.completed ? "✅" : "❌"}</p>
            <div className="card-actions justify-end">
              <Link href="/" className="btn">
                Back
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
