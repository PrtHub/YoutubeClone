import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchApiData } from "../utils/fetchApiData";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchApiData(`search?part=snippet&q=${searchTerm}`)
   .then((data) => setVideos(data.items))
  }, [searchTerm])
  

  return (
    <Box p={2} minHeight="95vh" className='text'>
    <Typography variant="h4" fontWeight={900} color="white" mb={3} >
      search results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
    </Typography>
    <Box display="flex">
      <Box  sx={{ mr: { sm: '50px', md: '0px' } }}/>
      {<Videos videos={videos} />}
    </Box>
  </Box>
  )
}

export default SearchFeed;