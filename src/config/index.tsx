import { CommunityService, FacebookIcon, GameDev1, GameDev2, GameDevelopment, HuitonAdmission, InstagramIcon, LinkedInIcon, Nanshan, ScratchAndPython1, ScratchAndPython2, ScratchAndPython3, ScratchAndPythonClasses, Squash1, Squash2, SquashClub, StudentCouncil, StudentCouncil1, TwitterIcon, YTIcon } from "../assets"

export const navlinks = [
    {
        name: "About",
        link: "/#about"
    },
    {
        name: "Projects",
        link: "/#projects"
    },
    {
        name: "Contact",
        link: "#footer"
    }
]

export const projects = [
    {
        title: "Game Development",
        media: <GameDevelopment />,
        actionUrl: "gamedevelopment"
    },
    {
        title: "Weekly Scratch and Python Classes",
        media: <ScratchAndPythonClasses />,
        actionUrl: "weeklyscratchandpythonclasses"
    },
    {
        title: "Nanshan Huitong Admission Receptions",
        media: <Nanshan />,
        actionUrl: "nanshanhuitongadmissionreceptions"
    },
    {
        title: "Squash Club and Playing",
        media: <SquashClub />,
        actionUrl: "squashclubandplaying"
    },
    {
        title: "Student Council",
        media: <StudentCouncil />,
        actionUrl: "studentcouncil"
    },
    {
        title: "Community Service - Mission Hiring Hall (http://missionhiringhall.org) ",
        media: <CommunityService />,
        actionUrl: "communityservice"
    },
]

export const SMIcons = [
    <FacebookIcon />, <LinkedInIcon />, <TwitterIcon />, <YTIcon />, <InstagramIcon />
]

export const projectdetails = [
    {
        title: "Game Development",
        media1: <GameDev1 />,
        media2: <GameDev2 />,
        body: "I used to love to play video games from the time I was five. I think everyone does at that age. Gradually I have been able to turn my love for video games into a passion for programming. I have moved on from video game developing more to computer science focused competitions and AI. However, I do look back fondly on two projects I did a couple years ago. The first was a submission for the Apple WWDC scholarship (Description: If you are a student or developer with high-end software and app development knowledge, applying for the WWDC Scholarship in 2023 is the best fit.) where I was the second youngest person in second youngest student in the world and youngest in Asia Pacific for this chemistry teaching APP. The second was the China National competition for Roblox where my project that let players experience Chinese Culture and holidays won the National Roblox Youth Developer and Outside Mainland China categories. You can see more in the articles.",
        links: [
            {
                text: "12-13-2021 - Roblox Award Article by Roblox (Chinese)",
                href: "https://zhuanlan.zhihu.com/p/444653348"
            },
            {
                text: "11-08-2021 - Apple WWDC Scholarship and Roblox Award Article by NY Times (Chinese) ",
                href: "https://mp.weixin.qq.com/s/wcc_kPvnF7Ku6BUXvAgVqg"
            },
            {
                text: "07-07-2021 - Another Article about the Apple WWDC Scholarship (Chinese)",
                href: "https://mp.weixin.qq.com/s/z7EIp6r-JFJh9LdWCGLqXg"
            },
            {
                text: "07-07-2021 - Another Article about the Apple WWDC Scholarship (English Translation)",
                href: "https://luxurious-spinach-b3f.notion.site/Gage-Hakim-s-Portfolio-209e7d0197804e5ab551c70350b17fd8"
            }
        ]
    },
    {
        title: "Weekly Scratch and Python Classes",
        media1: <ScratchAndPython1 />,
        media2: <ScratchAndPython2 />,
        media3: <ScratchAndPython3 />,
        body: "I am a teacher’s assistant for AP Economics at Huitong school and on the weekend I teach weekly free scratch and python classes to lower schoolers. Here are some recordings from some of this years classes. If you would like to enroll or you are a parent that would like to enroll your children for the winter 2024 term, feel free to email me.",
        links: [
            {
                text: "Fall 2023 Scratch Classes 2023-10-15 2023-09-24 ",
                href: "https://meeting.tencent.com/user-center/shared-record-info?id=65d6638f-7e89-48db-8953-c6e2ae04fb07&from=3"
            },
            {
                text: "Spring 2023 Scratch Classes 2023-04-16 2023-01-29 ",
                href: "https://meeting.tencent.com/v2/cloud-record/share?id=c830bd82-a24e-4adb-874d-6f69fab3bc55&from=3&is-single=true"
            },
            {
                text: "Winter 2024 Python Class 2024-01-06",
                href: "https://meeting.tencent.com/user-center/shared-record-info?id=2a8f9eb4-bfcb-4d94-858d-5188aea95cff&from=3&is-single=true"
            }
        ]
    },
    {
        title: "Nanshan Huitong Admission Receptions",
        media1: <HuitonAdmission />,
        body: "I really have gotten a lot out of Huitong School and have been joining the principal, Jim Hawkins, to present my school experience to the parents of potential students. Jim Hawkins is very impressive brining in his experience of seven years leading Harrow boarding school in the UK and he is really moving the school forward. The advisors and teachers are great if you like learning. If you are interested in attending Huitong, you can hear about my experience here:",
        links: [
            {
                text: "English Chinese",
                href: "https://www.youtube.com/watch?v=Sob05dH25Cg&feature=youtu.be"
            },
            {
                text: "Presentation Slides",
                href: "https://drive.google.com/file/d/17XrZDZBm1jJfmGeIKcRpVwwNeymL7OcQ/view?usp=drive_link"
            },
        ]
    },
    {
        title: "Squash Club and Playing",
        media1: <Squash1 />,
        media2: <Squash2 />,
        body: "I have been playing Squash for the last two years mostly with a coach. There were not a lot of people my age to play against at the courts I play so I started a squash club at Huitong school in the start of the 2023-2024 school year. I have located a squash club about a ten minute taxi ride from school. Going to the squash club and back leaves less time for playing but we still have fun. We are a small group now but it is growing. If you are at Nanshan Huitong school and want to join, please contact me. Here is a video hitting with the coach.I have had a three different coaches so far and he is the best but he often participates in tournaments so I still practice with the other coaches.You can check to see if you feel my skills are decent after picking up a squash racket for the first time less than two years ago.If you do and are interested in taking the next step with your squash playing and live in the Nanshan area, contact me and I will put you in touch.",
        links: [
            {
                text: "Squash Video",
                href: "https://www.youtube.com/watch?v=iHomkcmjbcA&t=7s"
            }
        ]
    },
    {
        title: "Student Council",
        media1: <StudentCouncil1 />,
        body: "I feel lucky to have gotten a position with the student council. I am on the events organizing committee and am enjoying it. I get to interact with a lot of great people from all the high school grades. I am really enjoying and look forward to continuing throughout my high school years."
    },
]
