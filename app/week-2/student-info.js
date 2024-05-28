import Link from "next/link";


export default function StudentInfo() {

    const name = "Richard Vergara";
    const gitHub = "https://github.com/RichardVergara09/cprg306-assignments";
    return (
        <main>
            <h1>{name}</h1>
            <Link  href={gitHub} className="underline text-cyan-600  hover:text-cyan-300">My GitHub Repository</Link>
        </main>
    );
}