
import React, { useState } from 'react';
export default function Work() {
const [selectedProject, setSelectedProject] = useState(null);
const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const work = [
    {
      name: "Recurring Deposit Management System",
      description:
        "Full‑stack app with Spring Boot + React for deposit tracking, CRUD APIs, dashboards, and real‑time summaries.",
      tech: "Spring Boot • React • REST API • MySQL",
      images: [
    "./assets/rd-mock.png",
      "./assets/s1.png",   // Main Table
      "./assets/s2.png",    // Add User Popup
      "./assets/s3.png",    // Passbook Entries
      "./assets/s4.png",
       "./assets/s5.png"
     // "./assets/rd-entries.png"       // Update User
    ],
    
      link: "#",
    },
    {
      name: "Personal Transaction Manager",
      description:
        "Finance tracker with transaction modules, balance calculations, and responsive dashboards.",
      tech: "React • Context API • Axios • Bootstrap",
     // icon: "./assets/work-1.png",
      images: [
        "./assets/transaction-app.jpg",
         "./assets/per1.jpeg",
          "./assets/per2.jpeg",
           "./assets/per3.jpeg"
 
    ],
      link: "#",
    },
    {
      name: "Backend API Internship Work",
      description:
        "Designed REST APIs, handled database integration, and ensured structured JSON responses.",
      tech: "Spring Boot • JPA • PostgreSQL",
     // icon: "./assets/work-1.png",
      images: ["./assets/sws.png",
"./assets/sws1.png",
"./assets/sws3.png",
"./assets/sws2.png"
      ],
      link: "#",
    },
  ];
  const nextImage = (e) => {
    e.stopPropagation(); // Modal band hone se rokne ke liye
    setCurrentImgIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

  // Previous Image function
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">Featured Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"> Selected projects demonstrating backend architecture, frontend UI,
    and real-world application development.</p>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5 dark:text-black">
     {/* <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">*/}
        {work.map((project,index) => (
          <div
            key={index}
            onClick={() => {
                setSelectedProject(project);
                setCurrentImgIndex(0);
            }}
            className="aspect-square bg-no-repeat bg-cover bg-top rounded-lg relative cursor-pointer group border border-gray-200"
            style={{ backgroundImage: `url(${project.images[0]})` }}
          >
         {/*className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${work.icon})` }}
          
          > */}

{/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/40 transition duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-semibold border border-white px-4 py-2 rounded-full">View Project</span>
            </div>
            {/* Project Info Card */}
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div> 

                <h2 className="font-semibold">{project.name}</h2>
                <p className="text-sm text-gray-700">{project.tech}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src="./assets/send-icon.png" alt="" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
{/* --- IMAGE MODAL / LIGHTBOX --- */}
      {selectedProject && (
<div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            {/* Close Button */}
            <button className="absolute -top-12 right-0 text-white text-4xl hover:text-lime-400">&times;</button>
            
            {/* Main Image */}
            <img 
              src={selectedProject.images[currentImgIndex]} 
              alt="Preview" 
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl border border-white/20"
            />
            {/* Slider Controls (Sirf tab dikhenge jab 1 se zyada images hon) */}
            {selectedProject.images.length > 1 && (
              <div className="flex items-center gap-8 mt-6">
                <button onClick={prevImage} className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition">← Prev</button>
                <span className="text-white font-mono">{currentImgIndex + 1} / {selectedProject.images.length}</span>
                <button onClick={nextImage} className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition">Next →</button>
              </div>
            )}
            
            <p className="text-white mt-4 text-center italic">{selectedProject.name} - Screenshot {currentImgIndex + 1}</p>
          </div>
        </div>
      )}
      {/* Show More Button */}
      <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
        Show more
        <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
      </a>
    </div>

  );
}
      {/* --- IMAGE MODAL / LIGHTBOX --- */}
    {/*}  <a
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
      >
        Show more
        <img
          src="./assets/right-arrow-bold.png"
          alt=""
          className="w-4 dark:hidden"
        />
        <img
          src="./assets/right-arrow-bold-dark.png"
          alt=""
          className="w-4 hidden dark:block"
        />
      </a>*
    </div>
  );
}*/}
