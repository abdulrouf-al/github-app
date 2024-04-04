import Repo from "@/app/components/Repo";
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";

function RepoPage({ params: { name } }) {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        {" "}
        Back To Repositories
      </Link>
      <Repo name={{ name }} />
      <Suspense fallback={<div>Loading repo...</div>}></Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={{ name }} />
      </Suspense>
    </div>
  );
}

export default RepoPage;
