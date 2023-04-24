import { useEffect, useState } from "react";
import { getPosts } from "../searchAndFilter/api/axios";
import "./SearchAndFilter.css";
import SearchBar from "./components/SearchBar";
import ListPage from "./components/ListPage";


const SearchAndFilter = () => {
    const [posts, setPosts ] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=>{
        getPosts().then((json)=>{
            setPosts(json)
            return json
        }).then((json)=>{
            setSearchResults(json)
        })

    },[])
    
  return (
    <>
        <SearchBar posts = {posts} setSearchResults={setSearchResults}/>
        <ListPage searchResults={searchResults}/>
    </>
  )
};

export default SearchAndFilter;
