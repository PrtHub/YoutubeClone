import {AiOutlineHome} from 'react-icons/ai';
import {MdOutlinePodcasts, MdLiveTv, MdOutlineSportsSoccer, MdTheaterComedy, MdOutlineWatchLater } from 'react-icons/md';
import { BiCode, BiMoviePlay, BiBitcoin, BiTrendingUp } from 'react-icons/bi';
import {BsMusicNoteList} from 'react-icons/bs';
import { IoIosSchool } from 'react-icons/io';
import { CgGym } from 'react-icons/cg';
import { FaShoppingCart } from 'react-icons/fa';
import { SiMyanimelist } from 'react-icons/si'
import {GiGamepad} from 'react-icons/gi'


export const categories = [
  { name: 'Home', icon: <AiOutlineHome/>, },
  { name: 'Trending', icon: <BiTrendingUp/>, },
  { name: 'New', icon: <MdOutlineWatchLater/>, },
  { name: 'Anime', icon: <SiMyanimelist/>, },
  { name: 'Coding', icon: <BiCode />, },
  { name: 'Music', icon: <BsMusicNoteList /> },
  { name: 'Movie', icon: <BiMoviePlay />, },
  { name: 'Gaming', icon: <GiGamepad />, },
  { name: 'Gym', icon: <CgGym />, },
  { name: 'Sport', icon: <MdOutlineSportsSoccer />, },
  { name: 'Live', icon: <MdLiveTv />, },
  { name: 'Crypto', icon: <BiBitcoin />, },
  { name: 'Comedy', icon: <MdTheaterComedy />, },
  { name: 'Podcast', icon: <MdOutlinePodcasts />, },
  { name: 'Education', icon: <IoIosSchool />, },
  { name: 'Fashion', icon: <FaShoppingCart />, },
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'