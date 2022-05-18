import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Adarsh Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "this is my bio",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1652528175/socially/hacker_obpy2s.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "Snehal Kanekar",
    username: "snehalkanekar",
    password: "snehal@123",
    bio: "this is my bio",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1652866709/socially/IMG_20190404_181111-min_tjvnvy.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "Vedant Kanekar",
    username: "vedantkanekar",
    password: "vednat@123",
    bio: "this is my bio",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1652867848/socially/profile_1_tpbsuk.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    fullName: "Sukanya Sen",
    username: "sukanyasen",
    password: "sukanya@123",
    bio: "this is my bio",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1652867247/socially/profile_hcosib.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "Prabhav Sharma",
    username: "prabhavsharma",
    password: "prabhav@123",
    bio: "this is my bio",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1652867848/socially/profile_1_tpbsuk.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
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
  },

  {
    _id: uuid(),
    fullName: "Sharath Nair",
    username: "sharathnair",
    password: "sharath@123",
    bio: "this is my bio",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1652867848/socially/profile_1_tpbsuk.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "Prathmesh Jagtap",
    username: "prathmesh",
    password: "prathmesh@123",
    bio: "this is my bio",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1652867848/socially/profile_1_tpbsuk.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "Leena Kanekar",
    username: "leena123",
    password: "leena@123",
    bio: "this is my bio",
    profileImage:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1652867247/socially/profile_hcosib.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
