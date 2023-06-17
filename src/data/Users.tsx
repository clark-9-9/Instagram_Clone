import User from "../Images/post5.jpg";
import { nanoid } from "nanoid";

interface Users_Type {
    id: string;
    img: string;
    name: string;
    user_name: string;
    followers: string;
}


const Users: Users_Type[] = [
    {
        id: nanoid(),
        img: User,
        name: "justinbieber",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "ariana_Julie",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "angilina",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "elizabeth",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "henry",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "peter",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "jack",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "ammy",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "anna",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "robert",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "jacson",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "jason",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "Rose",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "Emily",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "adriano",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "jenifer",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
    {
        id: nanoid(),
        img: User,
        name: "lopez",
        user_name: "Justin Bieber",
        followers: "287M followers"
    },
]



export { Users };