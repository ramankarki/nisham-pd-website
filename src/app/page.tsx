import FooterComponent from '@/components/footer'
import HeaderComponent from '@/components/header'
import Image from 'next/image'

export default function Home() {
	return (
		<div>
			{/* header */}
			<HeaderComponent />

			{/* landing section */}
			<div className='column items-center py-10' id='banner'>
				<picture style={{ width: '100%' }}>
					<Image
						style={{ width: '100%' }}
						src='/images/banner.png'
						alt='bot'
						width={1120}
						height={363}
					/>
				</picture>
			</div>

			{/* services */}
			<div className='py-10 vertical-gap-40' id='services'>
				<div className='px-4 flex items-center gap-5'>
					<picture>
						<Image
							src='/images/our-service.png'
							alt='our service'
							width={180}
							height={156}
						/>
					</picture>
					<div>
						<h2 style={{ textAlign: 'left' }}>Our services</h2>
						<p>Empowering businesses with innovative AI tools</p>
					</div>
				</div>

				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/service-1.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
						<h3>Virtual assistance as a service</h3>
						<p>
							Boost productivity and streamline your business with our
							professional Virtual Assistance services. From administrative
							tasks and customer support to social media management and
							specialized projects, our skilled VAs handle it all.
						</p>
						<p>
							Enjoy flexible plans, cost-effective solutions, and 24/7 support
							tailored to your needs. Focus on growing your business while we
							handle the details.
						</p>
						<p className='column__cta'>Contact us to get started today!</p>
					</div>
					<div className='column__right'>
						<picture>
							<Image
								src='/images/service-2.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
						<h3>Prototyping as a Service</h3>
						<p>
							Turn your ideas into reality with our Prototyping as a Service.
							Whether it’s a product, app, or design concept, we help you
							visualize, test, and refine your vision quickly and efficiently.
						</p>
						<p>
							Our expert team delivers high-quality prototypes tailored to your
							specifications, ensuring faster development cycles and better
							decision-making. From concept to execution, we’re here to bring
							your innovation to life.
						</p>
						<p className='column__cta'>
							Let’s build your vision—contact us today!
						</p>
					</div>
				</div>
			</div>

			{/* customer feedback */}
			<div className='py-10' id='feedback'>
				<h2>Customers feedback</h2>

				<div className='column py-10'>
					<div className='column__left'>
						<div className='flex gap-5'>
							<picture style={{ width: 120, height: 120 }}>
								<Image
									src='/images/avatar-1.png'
									alt='avatar 1'
									width={120}
									height={120}
								/>
							</picture>

							<div className='flex flex-col gap-4 text-sm'>
								<p className='font-semibold'>Blake Weston, Find Fill Storage</p>
								<div className='flex items-center gap-1'>
									<picture>
										<Image
											src='/images/star.svg'
											alt='avatar 1'
											style={{ width: 18, height: 18 }}
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
								</div>
								<p>
									AI solutions have been a game-changer, simplifying complex
									tasks and saving me so much time!
								</p>
							</div>
						</div>
					</div>
					<div className='column__right'>
						<div className='flex gap-5'>
							<picture style={{ width: 120, height: 120 }}>
								<Image
									src='/images/avatar-2.png'
									alt='avatar 1'
									width={120}
									height={120}
								/>
							</picture>

							<div className='flex flex-col gap-4 text-sm'>
								<p className='font-semibold'>
									Sarah Scaife, Product owner, BAXTA
								</p>
								<div className='flex items-center gap-1'>
									<picture>
										<Image
											src='/images/star.svg'
											alt='avatar 1'
											style={{ width: 18, height: 18 }}
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
								</div>
								<p>
									From start to finish, AI solutions provided excellent guidance
									and made everything hassle-free.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='column py-10'>
					<div className='column__left'>
						<div className='flex gap-5'>
							<picture style={{ width: 120, height: 120 }}>
								<Image
									src='/images/avatar-3.png'
									alt='avatar 1'
									width={120}
									height={120}
								/>
							</picture>

							<div className='flex flex-col gap-4 text-sm'>
								<p className='font-semibold'>
									Mike Fields, Director, Care Careers
								</p>
								<div className='flex items-center gap-1'>
									<picture>
										<Image
											src='/images/star.svg'
											alt='avatar 1'
											style={{ width: 18, height: 18 }}
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
								</div>
								<p>
									Seamless, intuitive, and incredibly helpful, AI solutions are
									a must-have for any business!
								</p>
							</div>
						</div>
					</div>
					<div className='column__right'>
						<div className='flex gap-5'>
							<picture style={{ width: 120, height: 120 }}>
								<Image
									src='/images/avatar-3.png'
									alt='avatar 1'
									width={120}
									height={120}
								/>
							</picture>

							<div className='flex flex-col gap-4 text-sm'>
								<p className='font-semibold'>Maya doe, Developer, Cargo</p>
								<div className='flex items-center gap-1'>
									<picture>
										<Image
											src='/images/star.svg'
											alt='avatar 1'
											style={{ width: 18, height: 18 }}
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
									<picture>
										<Image
											src='/images/star.svg'
											style={{ width: 18, height: 18 }}
											alt='avatar 1'
											width={18}
											height={18}
										/>
									</picture>
								</div>
								<p>
									The AI services were innovative and effective, significantly
									improving our workflows and delivering great results.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<FooterComponent />
		</div>
	)
}
