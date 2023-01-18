function Words() {
  const data = [
    "JavaScript",
    "HTML/CSS",
    "Sass",
    "Less",
    "TailWind",
    "Node JS",
    "Bootstrap",
    "React Js",
    "Ether Js",
    "DevTools",
    "Responsive Web Development",
    "Git",
    "Hosting",
    "Netlify",
    "Vercel",
    "Mobile-first development",
    "TypeScript",
    "Angular Js",
    "jQuery",
    "Figma",
    "GitHub",
    "GitLab",
    "IntelliJ IDEA",
    "CodeSandBox",
    "Visual Studio Code",
    "Customer Experience Management",
    "Customer Success",
    "Negotiation Skills",
    "Communication Skills",
    "Process Planning & Management",
  ];

  return (
    <ul className="words">
      {data.map((el) => {
        return <li>{el}</li>;
      })}
    </ul>
  );
}

export default Words;
