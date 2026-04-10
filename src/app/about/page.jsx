import Image from "next/image";


export const metadata = {
  title: 'About',
  description: 'This is about page',
}
 

const AboutPage = () => {
    return (
        <div>
            <h2 className="text-4xl text-center font-extrabold text-red-500">This is about page</h2>

            <Image src="/sch.jpg" alt="School Pic" width='500' height='300'></Image>
        </div>
    );
};

export default AboutPage;