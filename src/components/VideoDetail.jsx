import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchApiData } from "../utils/fetchApiData";
import Videos from "./Videos";


const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApiData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchApiData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  // const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box sx={{ minHeight: "92vh" }} className="text">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{ width: "100%", position: "sticky", top: "86px" }}
            padding="3px"
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics?.viewCount
                  ).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics?.likeCount
                  ).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
            <hr />
            <Typography sx={{ fontSize: "12px", p: "13px" }}>
              {videoDetail?.snippet?.description}
            </Typography>
          </Box>
        </Box>
        <Box
          px={3}
          py={{ md: 2, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
