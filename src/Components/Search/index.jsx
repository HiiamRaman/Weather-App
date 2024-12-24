
export default function Search({search,setSearch,handleSearch}){
    return <div> 
       <input 
       type="text"
       placeholder="Enter City name"
       value={search}
       name="search"
       onChange={(event)=>setSearch(event.target.value)}
       
       />


       <button onClick={handleSearch}> Search Now</button>
    </div>
    
}
