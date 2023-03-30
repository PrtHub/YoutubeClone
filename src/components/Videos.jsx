import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {
  return (
    <Stack direction={ direction ||"row"} flexWrap="wrap" justifyContent='center' gap={4}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
