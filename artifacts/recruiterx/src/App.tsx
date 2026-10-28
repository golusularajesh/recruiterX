import { useState, type FormEvent } from 'react';
import { ArrowDownRight, ArrowUpRight, MapPin, Menu, X } from 'lucide-react';

const navItems = [
  ['About', '#about'],
  ['Training', '#training'],
  ['Specializations', '#specializations'],
  ['For business', '#raas'],
  ['Admissions', '#admissions'],
  ['FAQs', '#faqs'],
];

const curriculum = [
  'Fundamentals of US IT and Non-IT staffing',
  'Understanding job descriptions and hiring requirements',
  'Candidate sourcing and resume screening',
  'Recruitment communication and candidate engagement',
  'Recruitment databases, tools and workflow fundamentals',
  'Interview coordination and recruitment process management',
  'Professional communication, teamwork and workplace etiquette',
  'Time management, accountability and recruiter productivity',
];

const capabilities = [
  'Candidate sourcing and talent identification',
  'Resume screening and shortlist support',
  'Recruitment coordination and pipeline management',
  'US IT and Non-IT staffing support',
  'Dedicated recruitment resource models',
  'Recruitment workflow and productivity support',
];

const faqs = [
  {
    q: 'What is RecruiterX?',
    a: 'RecruiterX by AV HUB is a US staffing talent development and recruitment services initiative focused on training, supervised internships and recruitment resource support.',
  },
  {
    q: 'How long is the training program?',
    a: 'The program is eight weeks long: four weeks of in-person classroom training followed by four weeks of supervised company internship.',
  },
  {
    q: 'Is the program conducted online or offline?',
    a: 'The program is designed for 100% in-person learning at AV HUB, Madhapur, Hyderabad.',
  },
  {
    q: 'What is the program fee?',
    a: 'The stated fee is ₹19,999 per student, including applicable GST. Admission is subject to screening and available capacity.',
  },
  {
    q: 'Who can apply?',
    a: 'Graduates from degree, engineering, management, computer applications, commerce, science and other relevant disciplines may apply, subject to admission criteria. No prior recruitment experience is required for entry-level applicants.',
  },
  {
    q: 'Will I receive a job after completing the program?',
    a: 'RecruiterX aims to provide career guidance, interview assistance and opportunities to be considered for relevant openings. Employment is not guaranteed and depends on candidate suitability, performance and available vacancies.',
  },
  {
    q: 'What is the internship component?',
    a: 'The internship is designed to provide supervised practical exposure to recruitment workflows and workplace expectations through participating companies in the AV HUB ecosystem. Specific activities depend on the internship assignment.',
  },
  {
    q: 'Can US staffing companies work with RecruiterX?',
    a: 'Yes. Staffing companies can enquire about recruitment resource support through the proposed Recruitment as a Service model. Engagements depend on agreed scope, resource availability and commercial terms.',
  },
];

type Enquiry = {
  name: string;
  email: string;
  phone: string;
  qualification: string;
  interest: string;
};

type BusinessEnquiry = {
  company: string;
  contact: string;
  email: string;
  need: string;
};

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="RecruiterX by AV HUB home">
      <span className="brand-mark" aria-hidden="true">R</span>
      <span>
        <span className="brand-name">RecruiterX</span>
        <span className="brand-by">by AV HUB</span>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [admissionPreview, setAdmissionPreview] = useState<Enquiry | null>(null);
  const [businessPreview, setBusinessPreview] = useState<BusinessEnquiry | null>(null);

  const prepareAdmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setAdmissionPreview({
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      phone: String(form.get('phone') || ''),
      qualification: String(form.get('qualification') || ''),
      interest: String(form.get('interest') || ''),
    });
  };

  const prepareBusiness = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setBusinessPreview({
      company: String(form.get('company') || ''),
      contact: String(form.get('contact') || ''),
      email: String(form.get('email') || ''),
      need: String(form.get('need') || ''),
    });
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          <nav id="primary-navigation" className={`main-nav${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
          <a className="nav-cta" href="#admissions">Explore the program <ArrowUpRight size={14} /></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="eyebrow">A career platform for the staffing industry</div>
              <h1 id="hero-title">Building the next generation of <em>recruiters.</em></h1>
              <p className="hero-copy">
                Learn recruitment. Experience the industry. Build your future.
                Practical US staffing training, supervised internship exposure,
                and recruitment resource support—all connected through AV HUB.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#training">Explore training <ArrowUpRight size={15} /></a>
                <a className="button button-light" href="#raas">Explore RaaS solutions <ArrowUpRight size={15} /></a>
              </div>
              <div className="hero-location"><MapPin size={14} /> AV HUB · Madhapur, Hyderabad</div>
            </div>
            <div className="hero-art" aria-label="RecruiterX connects learning, industry experience and career development">
              <div className="orbit"><span className="orbit-dot" /></div>
              <span className="orbit-label label-top">Talent, in motion</span>
              <span className="orbit-label label-bottom">Hyderabad → US staffing</span>
              <div className="art-core"><strong>RX</strong><span>Recruiter ecosystem</span></div>
              <div className="art-tag tag-a"><b>Learn</b>Build the fundamentals</div>
              <div className="art-tag tag-b"><b>Experience</b>Practise with supervision</div>
            </div>
          </div>
          <div className="ticker" aria-label="Our approach">
            <div className="ticker-inner" aria-hidden="true">
              {[0, 1].map((copy) => (
                <span key={copy}>Real training <span>Real internship</span><span>Real career readiness</span><span>Built in Hyderabad</span><span>For people and businesses</span></span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-inner">
            <div className="intro-grid">
              <div>
                <div className="eyebrow section-kicker">01 / About RecruiterX</div>
                <h2 className="section-heading">More than a training institute.</h2>
                <p className="section-lede">
                  A recruitment talent ecosystem, built to bridge the gap between
                  academic learning and the professional world of US staffing.
                </p>
              </div>
              <div className="intro-statement">
                Recruiters are made through <span>knowledge, practice, feedback</span> and a real understanding of how recruitment teams work.
              </div>
            </div>
            <div className="values-row">
              <article className="value"><strong>Practical learning</strong><p>Connect concepts with real recruitment workflows.</p></article>
              <article className="value"><strong>Industry exposure</strong><p>Professional interaction and supervised workplace experience.</p></article>
              <article className="value"><strong>Continuous development</strong><p>Build skills, confidence and long-term career potential.</p></article>
              <article className="value"><strong>Integrity</strong><p>Transparent learning outcomes and responsible career guidance.</p></article>
            </div>
          </div>
        </section>

        <section className="section program-section" id="training">
          <div className="section-inner">
            <div className="program-head">
              <div>
                <div className="eyebrow section-kicker">02 / Training & internship</div>
                <h2 className="section-heading">Eight weeks.<br />Two real-world phases.</h2>
              </div>
              <p className="section-lede">Turn your graduation into a professional skill set through structured learning and supervised experience in the AV HUB ecosystem.</p>
            </div>
            <div className="program-canvas">
              <div className="phase-row">
                <article className="phase">
                  <span className="phase-duration">WEEKS 1—4</span>
                  <span className="phase-label">Phase 01 · In-person learning</span>
                  <h3>Classroom training</h3>
                  <p>Develop recruitment fundamentals, sourcing techniques, candidate screening, communication skills and knowledge of US staffing processes.</p>
                </article>
                <article className="phase">
                  <span className="phase-duration">WEEKS 5—8</span>
                  <span className="phase-label">Phase 02 · Supervised experience</span>
                  <h3>Company internship</h3>
                  <p>Learn alongside recruitment professionals, understand daily workflows, observe industry practices and practise relevant skills under supervision.</p>
                </article>
              </div>
              <div className="program-facts">
                <div className="fact"><span>Duration</span><strong>8 weeks</strong></div>
                <div className="fact"><span>Format</span><strong>100% in-person</strong></div>
                <div className="fact"><span>Program fee</span><strong className="price">₹19,999</strong></div>
                <div className="fact"><span>Location</span><strong>Madhapur, Hyderabad</strong></div>
              </div>
              <p className="program-note">Fee includes applicable GST. Admission is subject to screening and available capacity. Target batch size: 20 students. Internship activities depend on the assignment and participating company.</p>
            </div>
            <div className="curriculum">
              <h3>What you will<br />learn and practise</h3>
              <div className="curriculum-list">
                {curriculum.map((item) => <div key={item}>{item}</div>)}
              </div>
            </div>
            <div className="specializations" id="specializations">
              <article className="specialization">
                <span className="number">TRACK 01</span>
                <h3>US IT Staffing</h3>
                <p>Learn the fundamentals of recruiting technology professionals for US staffing requirements. Focus areas: technical job descriptions, IT candidate sourcing, resume screening and recruitment workflows.</p>
              </article>
              <article className="specialization">
                <span className="number">TRACK 02</span>
                <h3>US Non-IT Staffing</h3>
                <p>Understand recruitment processes for business and non-technical positions across relevant industries. Focus areas: role understanding, candidate identification, screening, communication and hiring coordination.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section readiness">
          <div className="section-inner">
            <div className="readiness-grid">
              <div>
                <div className="eyebrow section-kicker">03 / Career readiness</div>
                <h2 className="section-heading">From learning the process to understanding the profession.</h2>
                <p className="section-lede">Our goal is to help participants develop skills they can continue to build throughout their careers.</p>
              </div>
              <div className="steps">
                <article className="step"><span className="step-index">01 / UNDERSTAND</span><h3>Get the context</h3><p>Learn recruitment terminology, job requirements and the structure of the US staffing industry.</p></article>
                <article className="step"><span className="step-index">02 / PRACTISE</span><h3>Build the skills</h3><p>Develop sourcing, screening, communication and coordination skills through structured exercises.</p></article>
                <article className="step"><span className="step-index">03 / EXPERIENCE</span><h3>See the work</h3><p>Participate in supervised internship activities and gain exposure to professional workflows.</p></article>
                <article className="step"><span className="step-index">04 / DEVELOP</span><h3>Grow with purpose</h3><p>Build confidence, workplace discipline and an understanding of recruitment role expectations.</p></article>
              </div>
            </div>
            <div className="why-strip">
              <h3>Grounded in a working industry ecosystem.</h3>
              <p>AV HUB provides the foundation for RecruiterX through its professional network, recruitment ecosystem and workplace infrastructure in Hyderabad. RecruiterX builds its own identity and operating model while drawing on relevant infrastructure and professional connections.</p>
              <div className="why-tags">
                <span>Structured classroom learning</span><span>Experienced staffing professionals</span><span>Supervised internship activities</span><span>Career guidance</span><span>Talent pipeline</span>
              </div>
            </div>
            <p className="section-lede" style={{ marginTop: 27, fontSize: 11 }}>
              Successful participants may receive career guidance, interview preparation and opportunities to be considered for relevant openings with participating companies or other staffing organizations. Employment is not guaranteed and depends on individual performance and available vacancies.
            </p>
          </div>
        </section>

        <section className="section business-section" id="raas">
          <div className="section-inner">
            <div className="eyebrow section-kicker">04 / Recruitment as a Service</div>
            <h2 className="section-heading">Recruitment talent<br />that supports your business.</h2>
            <p className="section-lede">A proposed resource model for US staffing companies seeking additional sourcing and recruiting capacity, with talent based in Hyderabad.</p>
            <div className="business-grid">
              <div>
                <div className="eyebrow section-kicker">RaaS capabilities</div>
                <div className="capabilities" style={{ marginTop: 20 }}>
                  {capabilities.map((item) => <div className="capability" key={item}>{item}</div>)}
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.8, color: '#fff0e7', marginTop: 27, maxWidth: 490 }}>
                  Match recruitment resources to client requirements, support structured delivery and develop talent for long-term client relationships.
                </p>
              </div>
              <div className="pricing-card">
                <h3>Proposed monthly resource pricing</h3>
                <p>Indicative monthly fees for discussion</p>
                <div className="price-row"><span>Junior Sourcer / Recruiter</span><strong>$1,000</strong></div>
                <div className="price-row"><span>Experienced Recruiter</span><strong>$1,500</strong></div>
                <div className="price-row"><span>Senior Recruiter</span><strong>$2,000</strong></div>
                <p className="pricing-caveat">Pricing is indicative and subject to final scope, resource experience, working arrangements, service terms and client agreement.</p>
                <a className="button button-dark" href="#business-enquiry">Discuss your requirements <ArrowUpRight size={14} /></a>
              </div>
            </div>
            <div className="business-bottom">
              <p>Let's build your recruitment capacity.</p>
              <a href="#business-enquiry" className="button">Request a RaaS consultation <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>

        <section className="section admissions" id="admissions">
          <div className="section-inner admissions-grid">
            <div>
              <div className="eyebrow section-kicker">05 / Admissions</div>
              <h2 className="section-heading">Your next step starts here.</h2>
              <p className="section-lede">Share your details to prepare an enquiry preview. Our team can discuss curriculum, fee, schedule and admission requirements.</p>
              <div className="admission-steps">
                <article className="admission-step"><span>01</span><div><strong>Prepare an enquiry</strong><p>Share your contact details, educational background and area of interest.</p></div></article>
                <article className="admission-step"><span>02</span><div><strong>Connect with our team</strong><p>Learn about the curriculum, fee, schedule and admission requirements.</p></div></article>
                <article className="admission-step"><span>03</span><div><strong>Complete screening</strong><p>Participate in the admission process and confirm your suitability.</p></div></article>
                <article className="admission-step"><span>04</span><div><strong>Confirm your seat</strong><p>Complete the required admission formalities and fee payment.</p></div></article>
              </div>
            </div>
            <div className="enquiry-card">
              <h3>Enquire about RecruiterX</h3>
              <p>Use this form to prepare an enquiry on this page. It does not send or submit your information to the company.</p>
              <form onSubmit={prepareAdmission}>
                <div className="form-grid">
                  <div className="field"><label htmlFor="student-name">Full name</label><input id="student-name" name="name" required autoComplete="name" placeholder="Your name" /></div>
                  <div className="field"><label htmlFor="student-email">Email address</label><input id="student-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></div>
                  <div className="field"><label htmlFor="student-phone">Phone number</label><input id="student-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91" /></div>
                  <div className="field"><label htmlFor="qualification">Highest qualification</label>
                    <select id="qualification" name="qualification" required defaultValue="">
                      <option value="" disabled>Select qualification</option><option>B.A. / B.Com / B.Sc</option><option>B.Tech / Engineering</option><option>BBA / BCA</option><option>MBA / MCA</option><option>Other graduate degree</option>
                    </select>
                  </div>
                  <div className="field full"><label htmlFor="program-interest">Interested program</label>
                    <select id="program-interest" name="interest" required defaultValue="">
                      <option value="" disabled>Choose your area of interest</option><option>US IT Staffing</option><option>US Non-IT Staffing</option><option>Both Programs</option>
                    </select>
                  </div>
                </div>
                <div className="form-action"><button className="button button-dark" type="submit">Prepare my enquiry <ArrowDownRight size={15} /></button><small>Local preview only. Nothing is transmitted or submitted.</small></div>
              </form>
              {admissionPreview && (
                <div className="preview" role="status" aria-live="polite">
                  <h4>Your enquiry preview</h4>
                  <p>{`${admissionPreview.name} · ${admissionPreview.email} · ${admissionPreview.phone}\n${admissionPreview.qualification} · ${admissionPreview.interest}`}</p>
                  <p className="preview-note">Prepared in this browser only. This preview has not been sent to RecruiterX.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faqs">
          <div className="section-inner faq-grid">
            <div>
              <div className="eyebrow section-kicker">06 / Good to know</div>
              <h2 className="section-heading">Clear answers.<br />No guesswork.</h2>
              <p className="section-lede">The details matter. Here is what to know before taking your next step.</p>
            </div>
            <div className="faq-list">
              {faqs.map(({ q, a }) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section business-section" id="business-enquiry" style={{ background: '#d9ded0', color: 'var(--ink)' }}>
          <div className="section-inner admissions-grid">
            <div>
              <div className="eyebrow section-kicker">For staffing businesses</div>
              <h2 className="section-heading">Tell us what capacity looks like for you.</h2>
              <p className="section-lede">Share your staffing requirements to prepare a local consultation preview. Engagements depend on agreed scope, resource availability and commercial terms.</p>
              <p className="section-lede" style={{ marginTop: 22, fontSize: 12 }}>Recruitment resource support from Hyderabad. Aligned to your hiring needs, delivery model and working arrangements.</p>
            </div>
            <div className="enquiry-card">
              <h3>Request a RaaS consultation</h3>
              <p>This on-page form prepares a local preview only. It does not send or submit your information.</p>
              <form onSubmit={prepareBusiness}>
                <div className="form-grid">
                  <div className="field"><label htmlFor="company-name">Company</label><input id="company-name" name="company" required autoComplete="organization" placeholder="Company name" /></div>
                  <div className="field"><label htmlFor="contact-name">Contact name</label><input id="contact-name" name="contact" required autoComplete="name" placeholder="Your name" /></div>
                  <div className="field full"><label htmlFor="business-email">Work email</label><input id="business-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></div>
                  <div className="field full"><label htmlFor="business-need">Recruitment support needed</label><textarea id="business-need" name="need" required rows={3} placeholder="Roles, team capacity or delivery needs" /></div>
                </div>
                <div className="form-action"><button className="button button-dark" type="submit">Prepare consultation preview <ArrowDownRight size={15} /></button><small>Local preview only. Nothing is transmitted or submitted.</small></div>
              </form>
              {businessPreview && (
                <div className="preview" role="status" aria-live="polite">
                  <h4>Your consultation preview</h4>
                  <p>{`${businessPreview.company} · ${businessPreview.contact} · ${businessPreview.email}\nSupport requested: ${businessPreview.need}`}</p>
                  <p className="preview-note">Prepared in this browser only. This preview has not been sent to RecruiterX.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-inner">
            <div>
              <div className="eyebrow">RecruiterX by AV HUB</div>
              <h2>The future of recruitment starts with <em>talent.</em></h2>
              <p>For aspiring recruiters, a path to develop industry-relevant skills. For staffing businesses, recruitment talent aligned with real business needs.</p>
              <a className="button button-primary" href="#admissions">Learn. Practise. Develop. Grow. <ArrowUpRight size={15} /></a>
            </div>
            <div className="final-links">
              <a href="#training">Explore the 8-week program</a>
              <a href="#raas">Explore recruitment resource support</a>
              <a href="#admissions">Prepare a program enquiry</a>
              <a href="#business-enquiry">Prepare a business enquiry</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <Brand />
          <span>AV HUB · Madhapur, Hyderabad</span>
          <span className="footer-note">Learn. Practise. Develop. Grow.<br />Employment is not guaranteed.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
