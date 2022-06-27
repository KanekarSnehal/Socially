import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "If you dream big and work towards it daily, there's nothing that can ever stop you✨",
    image:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1656284595/socially/satyajeet-mazumdar-fCsmYKhiHGo-unsplash_ttwtva.jpg",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "snehalkanekar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "SwapAgarwal",
        content: "True...",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "neogcamp",
        content: "Agreed!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `In India, everyone is a self taught developer. 

      Fact. Not kidding. The education part of college failed all of us.`,
    likes: {
      likeCount: 793,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    createdAt: new Date("07/25/2021"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "JavaScript",
        content:
          "Everybody is self taught in India. College is more for networking than learning.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "SwapAgarwal",
        content:
          "I learnt most stuff from Indian guys on YouTube while I was in college.😁",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `Explain GraphQL to me like I am five. 

      Going to feature some replies in my upcoming #GraphQL video.`,
    likes: {
      likeCount: 82,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shrutikapoor08",
    createdAt: new Date("06/04/2021"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "AnjanaVakil",
        content:
          "It’s like telling a friend you want a sandwich, what you want in it, how you’d like it cut, and knowing you’ll get back exactly what you asked for.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "tanaypratap",
        content:
          "Instead of buying an entire pack of Yankees baseball cards because you’re missing Derek Jeter, you can just buy his and only his card.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    content: `alright talked to some folks who have been wanting to consistently write but putting off for whatever reason

      running a 1-week cohort to fix this mostly for myself
      
      starting this saturday, join us to publish one piece in 1 week with feedback from like-minded peers`,
    likes: {
      likeCount: 49,
      likedBy: [],
      dislikedBy: [],
    },
    username: "SwapAgarwal",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "snehalkanekar",
        content:
          "Thank you to you! You are at my rescue. I am gonna be a part of it.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `I gave 14 interviews last month, I cracked all of them,
    got 14 offer letters, then I woke up!
    ..
    Stop setting unrealistic expectations for yourself. 🙏
    
    You will NEVER crack ALL the interviews you give.
    
    Failure is a part of success.`,
    likes: {
      likeCount: 596,
      likedBy: [],
      dislikedBy: [],
    },
    username: "akshaymarch7",
    createdAt: new Date("06/02/2022"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: `The hardest part of writing is getting started. ✍️
    To tackle this problem, neoG is running a neoBlogging marathon so students help each other write better, do in-depth research & review each other’s blogs. 
    Join in, Join in folks!`,
    likes: {
      likeCount: 36,
      likedBy: [],
      dislikedBy: [],
    },
    username: "neogcamp",
    createdAt: new Date("05/10/2022"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "akshaymarch7",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "AnjanaVakil",
        content: `Content Creation Industry Really Need this
        Thanks✨`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `The only mindset we all need: 
      ”I am gonna figure it out, no matter how many times I fail”.`,
    likes: {
      likeCount: 2569,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "akshaymarch7",
        content: "Always 😇",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "AnjanaVakil",
        content: "Failures makes a big success.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "It's our mission to not just evangelize JS, but to build supportive community by doing so. Recently, we failed to do that. It shouldn't matter what language you use or prefer, but that we lift each other up while improving as developers.",
    likes: {
      likeCount: 177,
      likedBy: [],
      dislikedBy: [],
    },
    username: "JavaScript",
    createdAt: new Date("04/02/2022"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "snehalkanekar",
    createdAt: new Date("05/15/2022"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "JavaScript",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shrutikapoor08",
        content:
          "You define your own life. Don’t let other people write your script.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Best wishes to our U-19 boys for the World Cup final. 🇮🇳💪",
    likes: {
      likeCount: 249,
      likedBy: [],
      dislikedBy: [],
    },
    username: "imVkholi",
    createdAt: new Date("02/05/2022"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "💯 For me virtual talks are so draining, because they give all of the stress but none of the strength",
    likes: {
      likeCount: 43,
      likedBy: [],
      dislikedBy: [],
    },
    username: "AnjanaVakil",
    createdAt: new Date("06/05/2022"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "neogcamp",
        content: "💯This",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "akshaymarch7",
        content:
          "I gave a couple of virtual talks when COVID hit but stopped completely because it was just no fun",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "What's the most intuitive/useful/beautifully-functioning API you've used recently?",
    likes: {
      likeCount: 561,
      likedBy: [],
      dislikedBy: [],
    },
    username: "JavaScript",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "akshaymarch7",
        content: "Twilio API. Used for messaging and voice calling within app.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "snehalkanekar",
        content: "OpenAI",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Don't be pushed around by the fears in your mind. Rather led by the dreams in your heart❤️✨",
    likes: {
      likeCount: 172,
      likedBy: [],
      dislikedBy: [],
    },
    username: "snehalkanekar",
    createdAt: new Date("06/22/2022"),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content: `It's almost time to create "projects 2022" folder 📂👩‍💻`,
    likes: {
      likeCount: 286,
      likedBy: [],
      dislikedBy: [],
    },
    username: "neogcamp",
    createdAt: new Date("12/31/2021"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "snehalkanekar",
        content: "It's done and waiting to be filled with amazing projects",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "With time, I'm internalizing I should write more as content scales well in the long run.",
    likes: {
      likeCount: 60,
      likedBy: [],
      dislikedBy: [],
    },
    username: "SwapAgarwal",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Who's out there living their best nomadic life using an iPad for dev/gaming while on the road? What's your setup? Inquiring minds want to know 👀",
    likes: {
      likeCount: 67,
      likedBy: [],
      dislikedBy: [],
    },
    username: "AnjanaVakil",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: `Most of the time, we all don’t know what we are doing. 

    Relax.`,
    likes: {
      likeCount: 65,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shrutikapoor08",
    createdAt: new Date("05/20/2022"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "JavaScript",
        content: "Actually this made me smile, exactly what I have to do :)",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "neogcamp",
        content: "but that means some of us do",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Some of my friends make insane amount of money, but are still broke by the end of the month. 🙂",
    likes: {
      likeCount: 174,
      likedBy: [],
      dislikedBy: [],
    },
    username: "akshaymarch7",
    createdAt: new Date("06/25/2022"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "snehalkanekar",
        content: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "SwapAgarwal",
        content: `They must read "Rich Dad Poor Dad" to learn more on how to manage their personal finances`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "A historic achievement and a massive moment for Indian badminton. Congratulations Team India on winning the Thomas Cup 🇮🇳🏆👏",
    likes: {
      likeCount: 190,
      likedBy: [],
      dislikedBy: [],
    },
    username: "imVkholi",
    createdAt: new Date("03/05/2022"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "AnjanaVakil",
        content: "Let’s gooo",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "tanaypratap",
        content: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
