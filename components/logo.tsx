import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href={'/'}>
        <Image src={"/logo.png"} alt='' width={160} height={40} style={{width:'auto', height: 'auto'}} />
    </Link>
  )
}

export default Logo