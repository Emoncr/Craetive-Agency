import Link from "next/link";
async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/HeroList");
    if (!res.ok) {
        throw new Error("HeroList Calling Fail");
    }
    return res.json();
}

const Hero = async () => {
    const data = await getData();
    return (
        <h1 className="heading ">this is hero</h1>
    );
};

export default Hero;