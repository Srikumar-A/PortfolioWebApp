import PageTranistion from "@/components/PageTransition"
import { getRepos } from "@/lib/github"
import type { GithubRepo } from "@/lib/types"

export default async function Projects(){

    const repos:GithubRepo[]=await getRepos("srikumar-A")

    const projects=repos
    return(
        <>
        <PageTranistion>
             <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            className="border border-gray-800 rounded-lg p-4 hover:bg-gray-900 transition"
          >
            <h2 className="text-xl font-semibold">{repo.name}</h2>
            <p className="text-gray-400 text-sm">
              {repo.description}
            </p>
          </a>
        ))}
      </div>
    </section>
        </PageTranistion>
        </>
    )
}