export default function About() {

  const tools = [
    { name: "Java", icon: "./assets/Java.png" },
    { name: "Python", icon: "./assets/Python.png" },
    { name: "Node", icon: "./assets/Node.js.png" },
    { name: "Django", icon: "./assets/dnjgo.png" },
    { name: "React", icon: "./assets/React.png" },
    { name: "MongoDB", icon: "./assets/mongodb.png" },
    { name: "Git", icon: "./assets/git.png" },
  ];

  const data = [
    {
      name: "Frontend",
      icon1: "./assets/code-icon.png",
      icon2: "./assets/code-icon-dark.png",
      description: "React, HTML, CSS, Bootstrap — responsive UI building",
    },
    {
      name: "Backend",
      icon1: "./assets/code-icon.png",
      icon2: "./assets/code-icon-dark.png",
      description: "Spring Boot, Django, Node.js — REST API development",
    },
    {
      name: "Database",
      icon1: "./assets/code-icon.png",
      icon2: "./assets/code-icon-dark.png",
      description: "MongoDB & PostgreSQL data handling",
    },
    {
      name: "Problem Solving",
      icon1: "./assets/code-icon.png",
      icon2: "./assets/code-icon-dark.png",
      description: "DSA fundamentals & logical thinking",
    },
    {
      name: "Education",
      icon1: "./assets/edu-icon.png",
      icon2: "./assets/edu-icon-dark.png",
      description:
        "Commerce graduate transitioned into Full-Stack Development",
    },
    {
      name: "Projects",
      icon1: "./assets/project-icon.png",
      icon2: "./assets/project-icon-dark.png",
      description: "Built RD system & finance tracker with real dashboards",
    },
  ];

  return (
    <section>
      <div
        id="about"
        className="w-full px-6 sm:px-10 lg:px-[12%] py-10 scroll-mt-20"
      >
        {/* Heading */}
        <h4 className="text-center mb-2 text-base sm:text-lg font-semibold opacity-70">
          Introduction
        </h4>

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          About Me
        </h2>

        {/* Main Layout */}
        <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-12 lg:my-20">

          {/* Image */}
          <div className="max-w-max mx-auto relative">
            <img
              src="./assets/anchal.jpeg"
              alt=""
              className="w-52 sm:w-64 md:w-80 rounded-3xl shadow-lg"
            />

            <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">

              <img
                src="./assets/logo-icon.png"
                alt="Logo"
                className="w-full animate-spin_slow"
              />

              <img
                src="./assets/dev-icon.png"
                alt="dev"
                className="w-1/4 absolute"
              />

            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">

            <p className="mb-10 max-w-2xl font-Ovo text-sm sm:text-base leading-relaxed">
              Java Full-Stack Developer focused on building scalable web
              applications using Spring Boot, React, REST APIs, and modern
              databases. Experienced in dashboard systems, API integration,
              and clean UI design. Passionate about solving real-world
              problems with efficient code.
            </p>

            {/* Cards */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto lg:mx-0">

              {data.map((item) => (
                <li
                  key={item.name}
                  className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
                >
                  <img
                    src={item.icon1}
                    alt=""
                    className="w-7 mt-3 dark:hidden"
                  />

                  <img
                    src={item.icon2}
                    alt=""
                    className="w-7 mt-3 hidden dark:block"
                  />

                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {item.description}
                  </p>
                </li>
              ))}

            </ul>

            {/* Tools */}
            <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
              Tools i use
            </h4>

            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5">

              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex items-center justify-center w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-5 sm:w-7"
                  />
                </li>
              ))}

            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}