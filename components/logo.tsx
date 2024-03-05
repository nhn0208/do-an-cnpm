import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href={'/'}>
        <Image src={"/logo.png"} alt='' priority width={160} height={67}/>
    </Link>
  )
}

export default Logo