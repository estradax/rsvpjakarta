import Layout from "@/components/Layout";
import styles from "./page.module.css";

export default function Home() {
  return (
	<Layout> 
		<main className={styles.container}>
			<div className="flex mt-5 ">
				<h1 className='w-full font-bold uppercase mx-auto text-center tracking-widest leading-tight'>
					<div>
						<div className='pt-2 text-2xl lg:text-5xl'>Welcome to <span className='text-red-400'>R.S.V.P. JAKARTA</span></div>
					</div>  
					<div className="text-1xl lg:text-5xl">Your</div>
					<div className='mt-2' id='flip'>
						<div>
							<div className="text-1xl lg:text-5xl">Boutique PR</div>
						</div>
						<div>
							<div className="text-1xl lg:text-5xl">Communications Agency</div>
						</div>
					</div>
				</h1>
			</div>
			<div className={styles.break}></div>
			<section className="lg:w-1/2 mt-10 mx-2">
				<div className="px-3 py-4">
					<p className="text-base text-justify">
					At R.S.V.P. JAKARTA, we are a dynamic and integrated communications agency specializing in public relations, events, content creation, and brand strategy. With a diverse clientele spanning luxury, lifestyle, hospitality, F&B, education, embassy, art, and culture, we bring extensive expertise and a passion for excellence to every project we undertake.
					</p>
				</div>
			</section>
			<section className="flex mx-2">
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
	</Layout>
  );
}
