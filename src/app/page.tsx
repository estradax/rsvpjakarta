import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="flex mt-5 ">
        <h1 className='w-100 font-bold text-5xl uppercase mx-auto text-center tracking-widest leading-tight'>
          <div className='relative'>
            <h3 className='pt-2'>Welcome to <span className='text-red-400'>R.S.V.P. JAKARTA</span></h3>
          </div>
          <div className='relative'>
            <h3 className='pt-2'>Your Boutique PR & Communications Agency</h3>
          </div>
        </h1>
      </div>
      <section className='flex w-3/5 mt-10 ml-6'>
        <p>
        At R.S.V.P. JAKARTA, we are a dynamic and integrated communications agency specializing in public relations, events, content creation, and brand strategy. With a diverse clientele spanning luxury, lifestyle, hospitality, F&B, education, embassy, art, and culture, we bring extensive expertise and a passion for excellence to every project we undertake.
        </p>
      </section>
      <section className='flex w-3/5 mt-10'>
        <div className="justify-end">
          <p>
          Established in 2020, we have quickly become a trusted advisor in communications, PR, and strategy for numerous brands and businesses entering the Indonesian market. Today, we stand as a boutique agency with a reputation for delivering results-driven solutions that set our clients apart.
          </p>
        </div>
      </section>
    </main>
  )
}
