import { nanoid } from "nanoid";
import post1 from "../Images/Default_young_pale_skinny_white_girl_Black_background_black_a_1_33a4dcf4-3c50-4c22-8213-cabb48cddea0_1.jpg";
import post2 from "../Images/Leonardo_Diffusion_a_beautiful_and_pretty_warior_girl_with_lon_0 (2).jpg";
import post3 from "../Images/Leonardo_Diffusion_4k_character_images_01_auto_x2.jpg";
import post4 from "../Images/Default_Character_Sheet_complex_3d_render_ultra_detailed_of_a_0_3d09cc7e-5017-4542-ba82-8fc89185e70b_1.jpg";
import post5 from "../Images/Default_dark_fantasy_theme_mystical_zoomed_Dark_theme_underworld_them_0_71119337-d983-48ff-9f20-e315f78c4cb9_1.jpg";
import post6 from "../Images/Leonardo_Diffusion_greate_warrior_with_matte_white_color_backg_0 (1).jpg";
import post7 from "../Images/Leonardo_Diffusion_greate_warrior_with_matte_white_color_backg_1.jpg";
import profile1 from "../Images/Leonardo_Diffusion_a_beautiful_and_pretty_warior_girl_with_lon_0 (2).jpg";
// import profile2 from "../Images/Leonardo_Diffusion_4k_character_images_0 (1)_auto_x2_light_ai.jpg";
import profile3 from "../Images/Leonardo_Diffusion_greate_warrior_with_matte_color_background_1.jpg";
import userRepliedImg from "../Images/Default_full_body_a_young_woman_with_a_mane_of_blonde_hair_her_2_146707eb-7564-4052-935b-e912f245ad47_1.jpg";

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

function EachComment(): Comments[] {

    const comment = [
        {
            id: nanoid(),
            userName: "Anna Cramlen",
            userImg: userRepliedImg,
            text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
            like: {
                liked: true,
                num: 12
            },
            reply: [
                {
                    userName: "reply 1",
                    userImg: userRepliedImg,
                    text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
                },
                {
                    userName: "reply 2",
                    userImg: userRepliedImg,
                    text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
                },
                {
                    userName: "reply 1",
                    userImg: userRepliedImg,
                    text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
                },
            ]
        },
        {
            id: nanoid(),
            userName: "Botez Sister",
            userImg: userRepliedImg,
            text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
            like: {
                liked: false,
                num: 53,
            },
            reply: [
                {
                    userName: "reply 1",
                    userImg: userRepliedImg,
                    text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
                },
                {
                    userName: "reply 2",
                    userImg: userRepliedImg,
                    text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
                },
                {
                    userName: "reply 1",
                    userImg: userRepliedImg,
                    text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
                },
            ]
        },
        {
            id: nanoid(),
            userName: "Magnus",
            userImg: userRepliedImg,
            text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
            like: {
                liked: false,
                num: 12
            },
            reply: [
                {
                    userName: "reply 1",
                    userImg: userRepliedImg,
                    text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
                },
                {
                    userName: "reply 2",
                    userImg: userRepliedImg,
                    text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
                },
                {
                    userName: "reply 3",
                    userImg: userRepliedImg,
                    text: "The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.",
                },
            ]
        },
    ];

    return comment;
}

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
            num : 34653,
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
            num : 34653,
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
            num : 34653,
        },
        save: false,
        comment: EachComment(),
        caption: `In the quiet stillness of the morning, the sun began to rise above the horizon, casting a warm glow across the land. The trees swayed gently in the breeze, their leaves rustling softly in the wind. Birds chirped and sang, filling the air with their joyful melodies. It was a peaceful moment, a moment to savor and enjoy.`,
    },
]





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
