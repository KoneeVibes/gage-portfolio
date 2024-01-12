import { AcademicAwards, CommunityService, GameDevelopment, Nanshan, ScratchAndPythonClasses, SquashClub, StudentCouncil } from "../assets"

export const navlinks = [
    {
        name: "About",
        link: "#"
    },
    {
        name: "Projects",
        link: "#"
    },
    {
        name: "Contact",
        link: "#"
    }
]

export const projects = [
    {
        bgColor: "#262525",
        title: "Game Development",
        media: <GameDevelopment />,
        actionUrl: "#"
    },
    {
        bgColor: "#FE7562",
        title: "Weekly Scratch and Python Classes",
        media: <ScratchAndPythonClasses />,
        actionUrl: "#"
    },
    {
        bgColor: "#262525",
        title: "Nanshan Huitong Admission Receptions",
        media: <Nanshan />,
        actionUrl: "#"
    },
    {
        bgColor: "#262525",
        title: "Squash Club and Playing",
        media: <SquashClub />,
        actionUrl: "#"
    },
    {
        bgColor: "#262525",
        title: "Academic awards",
        media: <AcademicAwards />,
        actionUrl: "#"
    },
    {
        bgColor: "#262525",
        title: "Student Council",
        media: <StudentCouncil />,
        actionUrl: "#"
    },
    {
        bgColor: "#262525",
        title: "Community Service - Mission Hiring Hall (http://missionhiringhall.org) ",
        media: <CommunityService />,
        actionUrl: "#"
    },
]