import Image from "next/image"

export function Header() {
    return (
        <div className="header">
        <div>
          <h1>Hi, i'm André!</h1>
          <h2>Student of Computer Engineering</h2>
        </div>
        <Image
          src="/me.jpeg"
          alt="foto do andré"
          width={325}
          height={310}
          priority
        />
      </div>
    )
}