import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "neog.camp",
    username: "neogcamp",
    password: "neogcamp",
    bio: `India’s best web devs are built here | Taught by 
    @tanaypratap
     | Job oriented | Project focused learning | 
    @reactjs
     at core`,
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1656264614/socially/glWYSyvy_400x400_disnox.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    link: "https://neog.camp/",
  },
  {
    _id: uuid(),
    fullName: "Snehal Kanekar",
    username: "snehalkanekar",
    password: "snehal@123",
    bio: "Frontend Developer🚀",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1656265515/socially/avatar1_kq4wi5.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    link: "https://snehalcodes.hashnode.dev/",
  },
  {
    _id: uuid(),
    fullName: "Akshay Saini",
    username: "akshaymarch7",
    password: "@akshaymarch7",
    bio: "Founder, NamasteDev | Teacher - YouTuber",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1656252090/socially/XD94Q6D1_400x400_vcrxlu.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    link: "https://appopener.com/yt/lfu59c3v6",
  },

  {
    _id: uuid(),
    fullName: "Anjana Vakil",
    username: "AnjanaVakil",
    password: "AnjanaVakil@123",
    bio: "Engineering & teaching & learning✨ Software Engineer & Developer Advocate✨ ",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1656255813/socially/l2B8K-Vn_400x400_tiswgw.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    link: "",
  },
  {
    _id: uuid(),
    fullName: "Tanay Pratap",
    username: "tanaypratap",
    password: "tanaypratap@123",
    bio: `Founder 
    @invactHQ
     | x 
    @Microsoft
     | Fixing education | Mentored 100+ students to first tech job | Tweets: Tech, Education, Career, Metaverse and Startups.`,
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1652868138/socially/5_2plEJW_400x400_ujfjhu.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    link: "",
  },
  {
    _id: uuid(),
    fullName: "Virat Kholi",
    username: "imVkholi",
    password: "virat@123",
    bio: "A proud husband and father ❤️",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1652868350/socially/bKUpXvlc_400x400_grtnm6.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    link: "",
  },

  {
    _id: uuid(),
    fullName: "Swapnil Agarwal 🚀",
    username: "SwapAgarwal",
    password: "SwapAgarwal@123",
    bio: `🧪 CEO 
    @roc8HQ
    ; fixing tech hiring
    🚧 Lifelong learner, playing long-term games
    📚 Runs 
    @ReademyCafe
    
    🏖 MCU∙Adler∙AEW∙Ghibli∙INFP
    ✈️ Prev: Amazon SDE, Meesho PM`,
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1656264050/socially/uzn7oAUG_400x400_1_z76etp.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    link: "https://swapnilagarwal.com/",
  },
  {
    _id: uuid(),
    fullName: "JavaScript",
    username: "JavaScript",
    password: "JavaScript@123",
    bio: "JavaScript conversations from Oracle DevRel ",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1656262931/socially/1Ked07gR_400x400_mgkibx.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    link: "https://developer.oracle.com/team/",
  },
  {
    _id: uuid(),
    fullName: "Shruti Kapoor",
    username: "shrutikapoor08",
    password: "shrutikapoor08",
    bio: "Follow for JavaScript, React, GraphQL✨Tech Speaker✨DevJoke👸✨",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1656263509/socially/ruhsrBQT_400x400_f90jyt.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    link: "https://discord.com/invite/rgqyH75Saf",
  },
];
