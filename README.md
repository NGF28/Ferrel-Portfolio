# Ferrel Ng — Personal Portfolio Website

## Project Overview

This is my personal portfolio website, created using HTML, CSS, and JavaScript. The purpose of the website is to introduce myself, show my programming skills, and share projects I have worked on. I also want employers to learn about my background and interests.

The website is a single page with four sections: Home, About, Projects, and Contact. It uses a black background, colorful headings, an SVG logo, and a button that shows or hides additional projects.

## Part 1: Content

### 1. What is your full name as you want it displayed professionally?

My name is Ferrel Ng.

### 2. What is the purpose of your portfolio website?

The purpose is to introduce myself, show my programming experience, and share projects with employers and other visitors.

### 3. Who is the target audience?

My main audience is employers and internship recruiters. Other students and people interested in my projects can also visit.

### 4. What skills do you want to highlight?

I want to highlight Python, HTML, CSS, JavaScript, Java, Git, GitHub, and basic Django.

### 5. What projects or work will you showcase?

I will showcase Market Health (in progress), a Python project related to stock market data and market ratings, and Star Night Website, a website about video games, anime, and music. and more in the future

### 6. How will you describe yourself in a short professional bio?

I am a Computer Programming / Information Systems student at Farmingdale State College. I enjoy Python programming, web development, and learning how to build software. I also work as a coach at Race Hub, where I help children learn Python. One of my goals is to create video games.

### 7. What pages will your site include?

My website will be one page with four sections: Home, About, Projects, and Contact. Visitors can reach each section using the navigation links.

### 8. What is your career goal or desired role?

My goal is to become a software developer. I am also interested in game development and would like to create my own games.

### 9. What technologies or tools do you have experience with?

I have experience with Python, Java, HTML, CSS, JavaScript, Git, GitHub, and basic Django. I use a code editor to write and test my projects.

### 10. What achievements or experiences are worth highlighting?

I am studying Computer Programming / Information Systems at Farmingdale State College, with a GPA of 3.55. I also have experience helping children learn Python at Race Hub.

### 11. What call-to-action should visitors take?

Visitors can use the View My Projects button to see my work. They can also visit my GitHub and LinkedIn profiles from the Contact section.

### 12. Will you include a resume? In what format?

I plan to add a downloadable PDF resume when the final version is ready. It is not included in the current website.

### 13. What social or professional links will you include?

- GitHub: https://github.com/NGF28
- LinkedIn: https://www.linkedin.com/in/ferrel-ng-10656926a/

---

## Part 2: Design

### 1. What overall style will best represent you?

I chose a simple, dark style with bright colors. It represents both my interest in programming and my personality and I like those color.

### 2. What color scheme will you use and why?

I will use black for the main background, grey behind my name and greeting, green for the letters in those two headings, red for navigation links and section titles, magenta for buttons, yellow for the footer, and white for normal text.

The bright colors do stand out against the dark background.

### 3. What fonts will you use for headings and body text?

I will use Arial, sans-serif for both headings and body text because it is simple and easy to read.

### 4. How will your design reflect your personality or field?

The dark background and bright colors give the website a style inspired by my personality, programming and video games. The SVG logo includes my initials and a star.

### 5. What layout will your homepage follow?

The page starts with a header and navigation menu, followed by a welcome section, information about me, project cards, contact links, and a footer.

### 6. How will you organize project sections visually?

Each project has a card containing its name, a short description, and the technology used. An extra project can be shown by pressing a button.

### 7. Will the site be mobile-friendly? How will you ensure responsiveness?

Yes. I will use flexible layouts, a CSS Grid for projects, and a media query to adjust spacing, text size, and navigation on smaller screens.

### 8. What visual hierarchy will guide visitors?

Visitors will see the green title and greeting first, followed by red section headings. The magenta buttons will make important actions easy to find.

### 9. How will consistency be maintained across pages?

Because this is a one-page website, every section will share the same font, colors, button style, and spacing through one CSS file.

### 10. How will accessibility be considered?

I will use readable text, clear headings, descriptive links, alternative text for my logo, and visible keyboard focus styles. I will also test the website on phones and computers.

### 11. Will you use icons, images, or illustrations? Why?

Yes. I will use an SVG logo with my initials. SVG works well because it stays clear at different sizes and does not need a large image file.

### 12. What portfolio websites inspired your design?

I took inspiration from simple one-page developer portfolios (like a resume) and GitHub profile pages. I chose my own colors and layout instead of copying an existing design.

---

## Part 3: Interactivity

### 1. What interactive elements will your site include?

My site includes navigation links, a View My Projects button, a Show More Projects button, and links to GitHub and LinkedIn.

### 2. Will your site include a contact form? How will it work?

Not in this version. The Contact section provides links to my GitHub and LinkedIn, where visitors can find out more about me and connect with me.

### 3. What JavaScript features will you implement?

JavaScript controls the Show More Projects / Show Less Projects button and automatically updates the year in the footer.

### 4. How will users receive feedback from interactions?

Links and buttons change appearance when hovered over or focused. When visitors click the project button, another project appears and the button text changes to Show Less Projects.

### 5. How does interactivity improve the user experience?

It makes the website easier to navigate and lets visitors choose whether to see more projects without leaving the page.

---

## Information Organization

1. **Home:** Welcome message and link to projects.
2. **About:** Short biography, skills, education, and work experience.
3. **Projects:** Market Health and a hidden Star Night project that can be revealed.
4. **Contact:** GitHub and LinkedIn links.
5. **Footer:** Copyright notice and automatic year.

---

## Wireframe Design

This is a simple wireframe showing the intended layout.

### Desktop Wireframe

    +----------------------------------------------------+
    | [SVG Logo]        Ferrel Ng Portfolio               |
    +----------------------------------------------------+
    |      Home      About      Projects      Contact     |
    +----------------------------------------------------+
    |             Welcome to my Portfolio                |
    |           Hello my name is Ferrel Ng.               |
    |              Short introduction                    |
    |               [View My Projects]                   |
    +----------------------------------------------------+
    | About Me                                           |
    | Biography, skills, education, and experience       |
    +----------------------------------------------------+
    | My Projects                                        |
    | +------------------------------------------------+ |
    | | Market Health (In Progress)                    | |
    | | Description and technology                     | |
    | +------------------------------------------------+ |
    |               [Show More Projects]                 |
    +----------------------------------------------------+
    | Contact Me                                         |
    |            [GitHub]       [LinkedIn]               |
    +----------------------------------------------------+
    |                   Footer / Year                    |
    +----------------------------------------------------+

### Mobile Wireframe

    +------------------------+
    |       SVG Logo         |
    |   Ferrel Ng Portfolio  |
    +------------------------+
    |    Home     About      |
    |  Projects   Contact    |
    +------------------------+
    |  Welcome message       |
    |  My name is Ferrel Ng  |
    |  Introduction          |
    |  [View My Projects]    |
    +------------------------+
    |  About Me              |
    |  Skills / Experience   |
    +------------------------+
    |  My Projects           |
    |  [Market Health Card]  |
    |  [Show More Projects]  |
    +------------------------+
    |  Contact Me            |
    |  [GitHub] [LinkedIn]   |
    +------------------------+
    |       Footer           |
    +------------------------+

---

## Technical Overview

- **HTML:** Builds the content and structure of the webpage.
- **CSS:** Controls the black, grey, green, red, magenta, yellow, and white design. It also makes the layout responsive.
- **JavaScript:** Shows and hides extra projects and updates the footer year.
- **SVG:** Provides a scalable logo.
- **GitHub:** Stores the project files.
- **GitHub Pages:** Hosts the finished website.

### Project Files

    portfolio/
    |-- index.html
    |-- script.js
    |-- README.md
    |-- css/
    |   `-- styles.css
    `-- images/
        `-- logo.svg

---

## Timeline / Project Milestones

| Step | Milestone | What I Will Do |
|---|---|---|
| 1 | Plan content | Write the project questions and decide what to include. |
| 2 | Build HTML | Create Home, About, Projects, and Contact sections. |
| 3 | Style with CSS | Add the colors, layout, and mobile adjustments. |
| 4 | Add interactivity | Make the Show More Projects button work with JavaScript. |
| 5 | Test the website | Check links, buttons, and phone/desktop layouts. |
| 6 | Publish | Upload files to GitHub and enable GitHub Pages. |

---

## External Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) — How to publish a website.
- [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) — HTML reference.
- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) — CSS reference.
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — JavaScript reference.

The website content, layout choices, and SVG logo are for this portfolio project. Any additional external code or images used later will be credited here.

---
