import { nanoid } from "nanoid";
import post1 from "../Images/post1.jpg";
import post2 from "../Images/post2.jpg";
import post3 from "../Images/post3.jpg";
import post4 from "../Images/post4.jpg";
import post5 from "../Images/post5.jpg";
import post6 from "../Images/post6.jpg";
import post7 from "../Images/post7.jpg";
import profile1 from "../Images/post2.jpg";
import profile3 from "../Images/profile3.jpg";
import userRepliedImg from "../Images/userRepliedImg.jpg";

import { IconsType, PostContentType, Comments } from "../Data_Types/Home_Components";



const icons: IconsType[] = [
    {
        id: nanoid(),
        name: "heart-outline",
        className: "Like",
    },
    {
        id: nanoid(),
        name: "chatbubbles-outline",
        className: "Comment",
},
    {
        id: nanoid(),
        name: "paper-plane-outline",
        className: "Send",
    },
    {
        id: nanoid(),
        name: "bookmark-outline",
        className: "Save",
    },
]


const Posts_Content: PostContentType[] = [
    {
        id: nanoid(),
        profile: profile1,
        name: "elizabeth",
        userName: "Justin Bieber",
        imgs:[post1, post2, post3, post4],
        imgSize: "4/5",
        icons,
        like: {
            liked: false,
            num : 5463,
        },
        save: false,
        comment: EachComment(),
        caption: `In the quiet stillness of the morning, the sun began to rise above the horizon, casting a warm glow across the land. The trees swayed gently in the breeze, their leaves rustling softly in the wind. Birds chirped and sang, filling the air with their joyful melodies. It was a peaceful moment, a moment to savor and enjoy.`,
    },
    {
        id: nanoid(),
        profile: userRepliedImg,
        name: "ariana_Julie",
        userName: "Justin Bieber",
        imgs: [post2],
        imgSize: "1/1",
        icons,
        like: {
            liked: false,
            num : 2400,
        },
        save: false,
        comment: EachComment(),
        caption: `In the quiet stillness of the morning, the sun began to rise above the horizon, casting a warm glow across the land. The trees swayed gently in the breeze, their leaves rustling softly in the wind. Birds chirped and sang, filling the air with their joyful melodies. It was a peaceful moment, a moment to savor and enjoy.`,
    },
    {
        id: nanoid(),
        profile: profile3,
        name: "angilina",
        userName: "Justin Bieber",
        imgs:[post5, post6, post7], 
        imgSize: "4/5",
        icons,
        like: {
            liked: false,
            num : 3013,
        },
        save: false,
        comment: EachComment(),
        caption: `In the quiet stillness of the morning, the sun began to rise above the horizon, casting a warm glow across the land. The trees swayed gently in the breeze, their leaves rustling softly in the wind. Birds chirped and sang, filling the air with their joyful melodies. It was a peaceful moment, a moment to savor and enjoy.`,
    },
]



function EachComment(): Comments[] {

    let text: string = "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.";

    const comment = [
        {
            id: nanoid(),
            userName: "Anna Cramlen",
            userImg: userRepliedImg,
            text: text,
            like: {
                liked: true,
                num: 452
            },
            reply: [
                {
                    userName: "reply 1",
                    userImg: userRepliedImg,
                    text: text,
                },
                {
                    userName: "reply 2",
                    userImg: userRepliedImg,
                    text: text,
                },
                {
                    userName: "reply 3",
                    userImg: userRepliedImg,
                    text: text,
                },
            ]
        },
        {
            id: nanoid(),
            userName: "Botez Sister",
            userImg: userRepliedImg,
            text: text,
            like: {
                liked: false,
                num: 523,
            },
            reply: [
                {
                    userName: "reply 3",
                    userImg: userRepliedImg,
                    text: text,
                },
            ]
        },
        {
            id: nanoid(),
            userName: "Magnus",
            userImg: userRepliedImg,
            text: text,
            like: {
                liked: false,
                num: 12
            },
            reply: [
            ]
        },
        {
            id: nanoid(),
            userName: "Gotham Chess",
            userImg: userRepliedImg,
            text: text,
            like: {
                liked: false,
                num: 1212
            },
            reply: [
                {
                    userName: "reply 2",
                    userImg: userRepliedImg,
                    text: text,
                },
                {
                    userName: "reply 3",
                    userImg: userRepliedImg,
                    text: text,
                },
            ]
        },
        {
            id: nanoid(),
            userName: "Hikaru",
            userImg: userRepliedImg,
            text: text,
            like: {
                liked: false,
                num: 437
            },
            reply: []
        },
        {
            id: nanoid(),
            userName: "Jakck",
            userImg: userRepliedImg,
            text: text,
            like: {
                liked: false,
                num: 664
            },
            reply: [
                {
                    userName: "reply 1",
                    userImg: userRepliedImg,
                    text: text,
                },
                {
                    userName: "reply 2",
                    userImg: userRepliedImg,
                    text: text,
                },
                {
                    userName: "reply 3",
                    userImg: userRepliedImg,
                    text: text,
                },
            ]
        },
    ];

    return comment;
}




export { Posts_Content };
export type { PostContentType };






/* 

    {
        id: nanoid(),
        name: "ariana_Julie",
        user_name: "Justin Bieber",
        imgs: {
            img:[post2],
            img_length: 0
        },
        icons,
        like: {
            liked: false,
            num : 2628,
        },
        save: {
            saved: false,
        },
        Comment: [
            {
                userImg: "",
                text: ""
            }
        ],
        caption: `"In the quiet stillness of the morning, the sun began to rise above the horizon, casting a warm glow across the land. The trees swayed gently in the breeze, their leaves rustling softly in the wind. Birds chirped and sang, filling the air with their joyful melodies. It was a peaceful moment, a moment to savor and enjoy.`,
    },
    {
        id: nanoid(),
        name: "angilina",
        user_name: "Justin Bieber",
        imgs: {
            img:[post3],
            img_length: 0
        },
        icons,
        like: {
            liked: false,
            num : 89000,
        },
        save: {
            saved: false,
        },
        Comment: [
            {
                userImg: "",
                text: ""
            }
        ],
        caption: `"In the quiet stillness of the morning, the sun began to rise above the horizon, casting a warm glow across the land. The trees swayed gently in the breeze, their leaves rustling softly in the wind. Birds chirped and sang, filling the air with their joyful melodies. It was a peaceful moment, a moment to savor and enjoy.`,
    },


*/
