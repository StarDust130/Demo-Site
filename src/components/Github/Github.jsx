import { useLoaderData } from "react-router-dom"


function Github() {
   const data =  useLoaderData()
    
    
  return (
    <div className="text-center m-4 bg-gray-500 text-white text-3xl ">Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git-image" width={300} />
    
    </div>
  )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/user/StarDust130")
    return response.json
}