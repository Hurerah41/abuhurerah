import Image from 'next/image';

export default function Projects() {
  return (
    <section className="sec" id="projects" style={{ paddingTop: '90px' }}>
      <div className="blk">
        <div style={{ textAlign: 'center' }}>
          <span className="tag">Portfolio</span>
          <h2
            style={{
              fontSize: 'clamp(28px,4.4vw,48px)',
              margin: '22px auto 0',
              maxWidth: '640px',
              lineHeight: 1.2,
            }}
          >
            Take a look at the latest projects I&apos;ve done
          </h2>
        </div>
        <div className="pj">
          <article className="pc f">
            <div className="im">
              <Image
                src="/images/mediqueue.jpg"
                alt="MediQueue mockup"
                width={900}
                height={675}
                sizes="(max-width: 820px) 100vw, 60vw"
                loading="lazy"
              />
            </div>
            <div className="tx">
              <div className="tg">
                <span>Laravel</span>
                <span>MySQL</span>
                <span>Tailwind CSS</span>
              </div>
              <h3>MediQueue</h3>
              <p>
                A healthcare platform for finding doctors, booking appointments and managing patient queues, built for a vision competition.
              </p>
              <p style={{ marginTop: '16px' }}>
                <a href="#mediqueue" style={{ color: 'var(--lime)' }}>
                  Read the case study ↓
                </a>
              </p>
            </div>
          </article>

          <article className="pc">
            <div className="im">
              <Image
                src="/images/apex-auto.jpg"
                alt="Apex Auto Detailing mockup"
                width={700}
                height={525}
                sizes="(max-width: 820px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="tx">
              <div className="tg">
                <span>Next.js</span>
                <span>Tailwind CSS</span>
                <span>GSAP</span>
              </div>
              <h3>Apex Auto Detailing</h3>
              <p>
                A car detailing business website for DHA Karachi with smooth GSAP animations.
              </p>
            </div>
          </article>

          <article className="pc">
            <div className="im">
              <Image
                src="/images/marketlink.jpg"
                alt="MarketLink eBasket mockup"
                width={700}
                height={525}
                sizes="(max-width: 820px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="tx">
              <div className="tg">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>
              <h3>MarketLink eBasket</h3>
              <p>
                A MERN pre-ordering platform connecting customers, farmers and admins at local farmers markets.
              </p>
            </div>
          </article>

          <article className="pc">
            <div className="im">
              <Image
                src="/images/forge-athletics.png"
                alt="Forge Athletics mockup"
                width={700}
                height={525}
                sizes="(max-width: 820px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="tx">
              <div className="tg">
                <span>Website</span>
                <span>Landing page</span>
              </div>
              <h3>Forge Athletics</h3>
              <p>
                A bold website for a Karachi strength and Hyrox training facility, with programs and free-trial booking.
              </p>
            </div>
          </article>

          <article className="pc">
            <div className="im">
              <Image
                src="/images/kcom-store.jpg"
                alt="KCOM store mockup"
                width={700}
                height={674}
                sizes="(max-width: 820px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="tx">
              <div className="tg">
                <span>WordPress</span>
                <span>WooCommerce</span>
              </div>
              <h3>KCOM WooCommerce Store</h3>
              <p>
                A fashion e-commerce site with category filters, featured products and an easy-to-manage backend.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
