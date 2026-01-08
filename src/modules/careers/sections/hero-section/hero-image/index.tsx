import Image from 'next/image'
import Hero from "../assets/hero.svg?url"

const HeroImage = () => {
  return (
    <div>
      <div className="laptop-frame">
        <Image
          src={Hero}
          alt="Laptop Dashboard"
          width={600}
          height={400}
          className="laptop-img"
        />
      </div>
    </div>
  )
}

export default HeroImage