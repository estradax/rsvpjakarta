import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className="flex mt-5 ">
        <h1 className='w-full font-bold text-2xl uppercase mx-auto text-center tracking-widest leading-tight lg:text-5xl'>
          <div>
            <div className='pt-2'>Welcome to <span className='text-red-400'>R.S.V.P. JAKARTA</span></div>
          </div>  
          <div>Your</div>
          <div className='mt-2' id='flip'>
            <div>
              <div>Boutique PR</div>
            </div>
            <div>
              <div>Communications Agency</div>
            </div>
          </div>
        </h1>
      </div>
      <div className={styles.break}></div>
      <section className="lg:w-1/2 mt-10">
        <div className="px-3 py-4">
          <p className="text-base text-justify">
          At R.S.V.P. JAKARTA, we are a dynamic and integrated communications agency specializing in public relations, events, content creation, and brand strategy. With a diverse clientele spanning luxury, lifestyle, hospitality, F&B, education, embassy, art, and culture, we bring extensive expertise and a passion for excellence to every project we undertake.
          </p>
        </div>
      </section>
      <section className="flex">
        <div className="lg:w-1/2"></div>
        <div className="lg:w-1/2">
          <div className="px-3 py-4">
            <p className="text-base text-justify">
            Established in 2020, we have quickly become a trusted advisor in communications, PR, and strategy for numerous brands and businesses entering the Indonesian market. Today, we stand as a boutique agency with a reputation for delivering results-driven solutions that set our clients apart.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
