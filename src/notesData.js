import { v4 } from "uuid";

const notes = [
  {
    title: "Get Started",
    content:
      "Create a new note with a title and content. Add a tag, select a color and priority. These options can be changed later. A note can be pinned, archived or deleted.",
    tags: [{ tag: "task", id: v4() }],
    color: "#2c353a",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "27/05/22 5.27 PM",
    createdTime: new Date("Friday May 27 2022 17:27:05").getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "Tips",
    content:
      "<ol><li>Read your assignments before you begin. Note-taking becomes easier when you already have some understanding or knowledge of the content.</li><li>Get organized! Start by determining your steps and goals. It is important to set a deadline for each new step and prioritize your tasks.</li><li>Choose a note-taking strategy that works for you! There are different note-taking strategies to choose from to help you. Experiment and select the method that best reflects the way you listen, think, and process information.</li><li>Write down and ask questions when a problem arises. This will help you fill in potential gaps in your understanding and focus without wasting time.</li><li>After each assignment, review your notes. Reviewing your notes helps you remember, assess progress, and allows you to add unexpected elements.</li></ol>",
    tags: [{ tag: "task", id: v4() }],
    color: "#2c353a",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "27/05/22 8.28 PM",
    createdTime: new Date("Friday May 27 2022 20:28:01").getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "To Do",
    content:
      "Information overload can cloud clarity and lead to misunderstandings. Taking notes helps you turn things you need to do into things you have done.",
    tags: [{ tag: "task", id: v4() }],
    color: "#73370d",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "28/05/23 5.01 PM",
    createdTime: new Date("Sunday May 28 2023 17:01:00").getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "The Rules",
    content:
      "Dream, create, experiment, step out of the comfort zone, explore, take risks, break rules, make mistakes, learn and have fun ^_^/",
    tags: [{ tag: "learning", id: v4() }],
    color: "#1f4d19",
    priority: "medium",
    isPinned: false,
    isRead: false,
    date: "27/05/22 09.11 AM",
    createdTime: new Date("Friday May 27 2022 09:11:13").getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "Creative work",
    content:
      "You don't think your way to creative work. You work your way to creative thinking. —George Nelson",
    tags: [{ tag: "quotes", id: v4() }],
    color: "#13407c",
    priority: "none",
    isPinned: false,
    isRead: false,
    date: "28/05/23 5.01 PM",
    createdTime: new Date("Sunday May 28 2023 17:01:00").getTime(),
    editedTime: null,
    id: v4(),
  },
];

export default notes;
