import About from '@/Components/About'
import Contact from '@/Components/Contact'
import CTA from '@/Components/CTA'
import FAQ from '@/Components/FAQ'
import Feature from '@/Components/Features'
import FeaturesTab from '@/Components/FeaturesTab'
import FunFact from '@/Components/FunFact'
import Hero from '@/Components/Hero'
import Testimonial from '@/Components/Testimonial'
import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'

export default function Welcome({ user }: { user?: { name: string } }) {
  return (
      <Guest user={user}>
        <Head title='Beranda' />
        <Hero />
        {/* <Brands /> */}
        <Feature />
        <About />
        <FeaturesTab />
        <FunFact />
        {/* <Integration /> */}
        <CTA />
        <FAQ />
        <Testimonial />
        {/* <Pricing /> */}
        <Contact />
        <div className='mt-5 mb-5'>

        </div>
      </Guest>
  )
}

