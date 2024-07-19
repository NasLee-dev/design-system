import { vars } from '@ds/themes'
import Image from 'next/image'
import { MobileFirstLayout } from '../components/view/MobileFirstLayout'

const PlaygroundPage = () => {
  return (
    <MobileFirstLayout>
      <h1>{vars.colors.$scale.gray[900]}</h1>
      <Image 
        src={`/page_builder_sample_images/1.webp`}
        alt="Next.js logo"
        width={200}
        height={200}
      />
    </MobileFirstLayout>
  )
}

export default PlaygroundPage
