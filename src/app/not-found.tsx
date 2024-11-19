import Link from "next/link";

const NotFound = () => {
    return (
        <div>
        <h1>404 - Not Found</h1>
        <Link className="underline" href={"/"}>Return to home</Link>
        </div>
    );
};

export default NotFound;