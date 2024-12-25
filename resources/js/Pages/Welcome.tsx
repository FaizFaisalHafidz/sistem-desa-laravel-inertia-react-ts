import About from '@/Components/About'
import Blog from '@/Components/Blog'
import Brands from '@/Components/Brands'
import Contact from '@/Components/Contact'
import CTA from '@/Components/CTA'
import FAQ from '@/Components/FAQ'
import Feature from '@/Components/Features'
import FeaturesTab from '@/Components/FeaturesTab'
import FunFact from '@/Components/FunFact'
import Hero from '@/Components/Hero'
import Integration from '@/Components/Integration'
import Pricing from '@/Components/Pricing'
import Testimonial from '@/Components/Testimonial'
import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'

const Welcome = () => {
  return (
      <Guest>
        <Head title='Beranda' />
        <Hero />
        <Brands />
        <Feature />
        <About />
        <FeaturesTab />
        <FunFact />
        <Integration />
        <CTA />
        <FAQ />
        <Testimonial />
        <Pricing />
        <Contact />
        <Blog />
      </Guest>
  )
}

export default Welcome
