const GITHUB_API="https://api.github.com"


export async function getRepos(username:String){
    const res=await fetch(
        `${GITHUB_API}/users/${username}/repos?per_page=100`,
        {
            headers:{
                Authorization:`Bearer ${process.env.GITHUB_TOKEN ??""}`,
            },
            next:{revalidate:3600},
        }
    )
    if(!res.ok){
        throw new Error("failed to fetch repos")
    }
    return res.json()
    
}