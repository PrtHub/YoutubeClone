import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components";


const App = () => {
  return (
    <Box sx={{backgroundColor: '#0f0f0f', color: '#f1f1f1'}}>
     <Navbar/>
     <Routes>
      <Route path="/" element={ <Feed/>}/>
      <Route path="/video/:id" element={ <VideoDetail />}/>
      <Route path="/channel/:id" element={ <ChannelDetail/>}/>
      <Route path="/search/:searchTerm" element={ <SearchFeed/>}/>
     </Routes>
    </Box>
  )
}

export default App
