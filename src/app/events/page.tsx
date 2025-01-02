import HeaderComponent from '@/components/header'
import Image from 'next/image'

export default function EventsPage() {
	return (
		<div>
			<HeaderComponent />

			{/* past events */}
			<div className='py-10 vertical-gap-40' id='events'>
				<div>
					<h2>Past events</h2>
					<p className='text-center text-sm mt-4'>
						Uniting AI minds to explore advancements and applications.
					</p>
				</div>
				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/past-event-1.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Discover a Thriving AI Community</h3>
						<p>
							Our past events and workshops have created a vibrant space for
							innovation and connection. Bringing together AI enthusiasts,
							researchers, and professionals, we’ve cultivated a community
							passionate about exploring the transformative power of artificial
							intelligence.
						</p>
					</div>
				</div>
				<div className='column column-reverse'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/past-event-2.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Explore Advanced AI Applications</h3>
						<p>
							For those ready to take their skills further, our Deep Learning
							Applications sessions focus on real-world projects. From image
							recognition to natural language processing, these workshops help
							participants apply neural networks to solve practical challenges.
						</p>
					</div>
				</div>
				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/past-event-3.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Gain Insights from Industry Experts</h3>
						<p>
							Many of our workshops feature guest speakers and panels with
							leading AI professionals. These sessions provide invaluable
							insights into emerging technologies, industry trends, and the
							future of artificial intelligence.
						</p>
					</div>
				</div>
			</div>

			{/* upcoming events */}
			<div className='py-10 flex flex-col items-center vertical-gap-40'>
				<h2>Upcoming events</h2>

				<div className='flex px-4 gap-4'>
					<picture>
						<Image
							src='/images/event-1.png'
							width={700}
							height={349}
							alt='event 1'
						/>
					</picture>
					<picture>
						<Image
							src='/images/event-2.png'
							width={700}
							height={349}
							alt='event 1'
						/>
					</picture>
				</div>
			</div>
		</div>
	)
}
