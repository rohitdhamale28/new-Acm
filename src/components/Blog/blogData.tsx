import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Prof. Dr. Sonali D Patil",
    paragraph:
      "Dear Reader, greetings to you! The Vision of the Department is to be a Premier Hub in Computer Engineering. The faculties here exhibit good expertise in their respective domains to train the students according to the current market scenario and of course in the pandemic situations too!",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "HOD Computer Department",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Prof. Rahul Pitale",
    paragraph:
      "Computer Engineering Student Association's shibboleth is “Association of students for students and by students” which amplifies students as major stakeholders wherein the student body contributes to the overall development of students personally and professionally.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "CESA Co-ordinator",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Prof. Kapil Tajane",
    paragraph:
      "The Computer Engineering Student Association stands by the motto: For Students, By Students, Empowering Students. This highlights the central role students play as key stakeholders, fostering a collaborative environment where the student body actively contributes to both personal and professional development.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "CESA Co-ordinator",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
