// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
import newLogo from "./images/morty.jpg"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/ship.bmp";
import Logo1 from "./images/domino.png";
import Logo3 from "./images/google_reviews.jpeg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "maudiaz221";

export const navLogo = newLogo;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="mdi:linkedin" />;



/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
      "I have a passion for coding and maths, I love spending time with my friends and family, and working out. I love challenging myself and always pushing my boundaries. "
/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="teenyicons:python-outline" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="bxl:java" className="display-4" />,
    name: "Java",
  },
  {
    id: 3,
    skill: <Icon icon="devicon:sqldeveloper" className="display-4" />,
    name: "SQL",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 5,
    skill: <Icon icon="devicon-plain:bash" className="display-4" />,
    name: "Bash",
  },
  {
    id: 6,
    skill: <Icon icon="simple-icons:r" className="display-4" />,
    name: "R",
  },
  {
    id: 7,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="devicon-plain:prolog" className="display-4" />,
    name: "Prolog",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://beige-bette-86.tiiny.site";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["alienInvasionAI", "Domino", "Market-Analysis-Google-Reviews"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "alienInvasionAI",
    image: Logo,
  },
  {
    name:"Domino",
    image:Logo1,
  },
  {
    name:"Market-Analysis-Google-Reviews",
    image:Logo3,
  }
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xeqbvqjl";
                     
