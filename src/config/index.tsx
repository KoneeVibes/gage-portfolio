import { Awards, CommunityService, GameDev1, GameDev2, GameDevelopment, GmailIcon, HuitonAdmission, Nanshan, ScratchAndPython1, ScratchAndPython2, ScratchAndPython3, ScratchAndPythonClasses, Squash1, Squash2, SquashClub, StudentCouncil, StudentCouncil1, WeChatIcon, YTIcon, ZoomIcon, CommunityService1, Awards1, Awards4, } from "../assets";

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
        title: "Community Service ",
        media: <CommunityService />,
        actionUrl: "communityservice"
    },
    {
        title: "Awards",
        media: <Awards />,
        actionUrl: "awards"
    },
]

export const SMIcons = [
    {
        icon: < ZoomIcon />,
        url: "https://meeting.tencent.com/user-center/shared-record-info?id=65d6638f-7e89-48db-8953-c6e2ae04fb07&from=3"
    },
    {
        icon: <WeChatIcon />,
        url: "gageidhakim"
    },
    {
        icon: <GmailIcon />,
        url: "mailto:gage@gagehakim.com"
    },
    {
        icon: <YTIcon />,
        url: "https://www.youtube.com/@GageHakim"
    },
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
                text: "12-13-2021 - Roblox Award Article by Roblox (English)",
                href: "/../files/Roblox_article_by_Roblox_English.pdf",
                download: "Roblox_article_by_Roblox_English",
            },
            {
                text: "11-08-2021 - Apple WWDC Scholarship and Roblox Award Article by NY Times (Chinese) ",
                href: "https://mp.weixin.qq.com/s/wcc_kPvnF7Ku6BUXvAgVqg"
            },
            {
                text: "11-08-2021 - Apple WWDC Scholarship and Roblox Award Article by NY Times (English) ",
                href: "/../files/Apple_WWDC_Scholarship_and_Roblox_Award_Article_by_NY_Times_English.docx",
                download: "Apple_WWDC_Scholarship_and_Roblox_Award_Article_by_NY_Times_English",
            },
            {
                text: "07-07-2021 - Another Article about the Apple WWDC Scholarship (Chinese)",
                href: "https://mp.weixin.qq.com/s/z7EIp6r-JFJh9LdWCGLqXg"
            },
            {
                text: "07-07-2021 - Another Article about the Apple WWDC Scholarship (English Translation)",
                href: "https://drive.google.com/file/d/1ca3SgKHBcKKUZTRoT6F2B68xf2dUYzo5/view?usp=drive_link"
            },
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
                sectionTitle: "Fall 2023 Scratch Classes",
                sections: [
                    {
                        date: "2023-10-15",
                        href: "https://meeting.tencent.com/v2/cloud-record/share?id=65d6638f-7e89-48db-8953-c6e2ae04fb07&from=3"
                    },
                    {
                        date: "2023-09-24",
                        href: "https://meeting.tencent.com/v2/cloud-record/share?id=c830bd82-a24e-4adb-874d-6f69fab3bc55&from=3&is-single=true"
                    },
                ],
            },
            {
                sectionTitle: "Spring 2023 Scratch Classes",
                sections: [
                    {
                        date: "2023-04-16",
                        href: "https://meeting.tencent.com/v2/cloud-record/share?id=2a8f9eb4-bfcb-4d94-858d-5188aea95cff&from=3&is-single=true"
                    },
                    {
                        date: "2023-01-29",
                        href: "https://meeting.tencent.com/v2/cloud-record/share?id=04b9f39d-4cfc-429c-b9d3-74e950bba6e7&from=3"
                    },
                ],
            },
            {
                sectionTitle: "Winter 2024 Python Class",
                sections: [
                    {
                        date: "2024-01-06",
                        href: "https://meeting.tencent.com/user-center/shared-record-info?id=953f474c-4328-4421-9910-4b449662a986&from=3"
                    },
                ],
            },
        ]
    },
    {
        title: "Nanshan Huitong Admission Receptions",
        media1: <HuitonAdmission />,
        body: "I really have gotten a lot out of Huitong School and have been joining the principal, Jim Hawkins, to present my school experience to the parents of potential students. Jim Hawkins is very impressive bringing in his experience of seven years leading Harrow boarding school in the UK and he is really moving the school forward. The advisors and teachers are great if you like learning. If you are interested in attending Huitong, you can hear about my experience here:",
        links: [
            {
                text: "English",
                href: "https://youtu.be/Sob05dH25Cg"
            },
            {
                text: "Chinese",
                href: "https://www.youtube.com/watch?v=YYIlDarP8Ao&feature=youtu.be&ab_channel=GageHakim"
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
    {
        title: "Community Service",
        media1: <CommunityService1 />,
        body: `Last August, I did a one-month internship at Mission Hiring Hall in San Francisco. It was a whole new experience for me helping people better their lives. I followed Michelle and Omar around and was their assistant. I went to meetings at government buildings and helped at job fairs. Probably my biggest contribution was to help automate some of their internal processes. I hope that when I go back next summer, I can add more value to this great organization. Go to [Mission Hiring Hall](http://missionhiringhall.org) to learn more.`
    },
    {
        title: "Awards",
        media1: <Awards1 />,
        media4: <Awards4 />,
        body: "I have won a few awards outside of computer related competitions. Here are some of them."
    },
]

export const aboutLinks = [
    {
        title: "11-28-2023 - General Article by Huitong School (Chinese)",
        url: "https://mp.weixin.qq.com/s/Ei1wCG5EctX0dUMg7yWzLg",
    },
    {
        title: "11-23-2022 - About Me by Huitong School (Chinese)",
        url: "https://mp.weixin.qq.com/s/h9IR3hk_4IluD14r3Tn6tA",
    },
]
