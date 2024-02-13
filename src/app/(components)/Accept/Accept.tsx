import Image from "next/image"

type AcceptProps = {}

const Confess = (props: AcceptProps) => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Image src={"/accept.png"} height={100} width={100} alt="accept img" />
            <p className="h-20">{`You have already accepted <3 ❤️`}</p>
        </div>
    )
}

export default Confess