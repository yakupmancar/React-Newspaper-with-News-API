import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        document.body.style.background = 'linear-gradient(to right, #ff6e7f, #bfe9ff)';

        return () => {
            document.body.style.background = 'white';
        };
    }, []);

    return (

        <div className="flex flex-col gap-y-32 text-gray-800 lg:mx-0">

            <section className="flex items-center justify-evenly max-w-5xl mx-auto pt-16 lg:pt-8 px-12 lg:px-0">
                <div className="w-1/2 flex flex-col gap-y-2 lg:gap-y-4">
                    <h1 className="font-medium text-3xl md:text-5xl xl:text-6xl">Hello everyone!</h1>
                    <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">I'm Yakup. I'm a Frontend Developer</h1>
                </div>

                <div className="w-1/2">
                    <img className="ml-auto w-2/3" src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg" />
                </div>
            </section>

            <section className="flex items-center justify-evenly max-w-5xl mx-auto px-12 xl:px-0">
                <div className="w-1/2">
                    <img className="mr-auto w-1/2" src="./src/img/coding.jpg" alt="" />
                </div>

                <div className="w-1/2 flex flex-col">
                <h1 className="text-4xl xl:text-5xl font-medium pb-4">About Me</h1>
                <p className="text-lg font-medium">Hi there, my name is Yakup Mancar</p>
                <p className="lg:text-lg">I am 23 years old. I live in Kocaeli. I am a computer engineering student 4th year at Sivas Cumhuriyet University. <br /> I made my 3rd year summer internship at UyumSoft. As an internship project, I created a full stack food ordering system project using .NET MVC and PostgreSQL. <br/> I am improving myself in the field of frontend and web technologies. I created projects using HTML, Css, JavaScript and React. I mostly use TailwindCss as a CSS framework, but I have also developed projects with Bootstrap. I am not at a very good level yet and I am aware that I have not developed enough projects but i try to improve myself every day. I want to be a good developer in the future.</p>
                </div>
            </section>


            <section className="mx-auto w-full max-w-6xl px-12 lg:px-0 my-10 lg:my-20">
                <h1 className="flex justify-center text-4xl xl:text-5xl mb-6 font-medium">My Skills</h1>
                <div className="flex gap-x-5 font-medium text-sm">
                    <div className="flex flex-col items-center w-1/3 shadow-xl gap-y-2">
                        <img className="w-36 h-20 sm:h-36" src="./src/img/html.jpg" alt="" />
                        <h3 className="mr-auto pl-2">HTML</h3>
                    </div>

                    <div className="flex flex-col items-center w-1/3 shadow-xl gap-y-2">
                        <img className="w-36 h-20 sm:h-36" src="./src/img/css.jpg" alt="" />
                        <h3 className="mr-auto pl-2">CSS</h3>
                    </div>

                    <div className="flex flex-col items-center w-1/3 shadow-xl gap-y-2">
                        <img className="w-36 h-20 sm:h-36" src="./src/img/javascript.jpg" alt="" />
                        <h3 className="mr-auto pl-2">JAVASCRIPT</h3>
                    </div>

                    <div className="flex flex-col items-center w-1/3 shadow-xl gap-y-2">
                        <img className="w-36 h-20 sm:h-36" src="./src/img/react.png" alt="" />
                        <h3 className="mr-auto pl-2">REACT</h3>
                    </div>

                    <div className="flex flex-col items-center w-1/3 shadow-xl gap-y-2">
                        <img className="w-36 h-20 sm:h-36" src="https://www.svgrepo.com/show/333609/tailwind-css.svg" alt="" />
                        <h3 className="mr-auto pl-2">TailwindCss</h3>
                    </div>

                </div>
            </section>


        </div>
    )
}

export default About