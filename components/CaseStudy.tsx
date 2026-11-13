export default function CaseStudy() {
  return (
    <section className="sec" id="mediqueue">
      <div className="blk">
        <span className="tag">Case Study</span>
        <div className="sh">
          <h2>
            MediQueue, <mark style={{ background: 'var(--lime)', color: '#000' }}>inside</mark>
          </h2>
          <div className="r">
            The problem, the people it serves, what it does, and what I built.
            <hr />
            <a
              className="btn"
              style={{ color: '#fff', borderColor: '#fff' }}
              href="https://github.com/Hurerah41/Mediqueue-Smart-Clinic-and-Online-Consultation-System"
              target="_blank"
              rel="noopener"
            >
              <span className="ic">↗</span>View on GitHub
            </a>
          </div>
        </div>
        <div className="cs">
          <div>
            <h3 style={{ marginTop: 0 }}>The problem</h3>
            <p>
              In many clinics and hospitals, patients face long waiting times, manual appointment processes and trouble finding nearby doctors. MediQueue connects patients with healthcare providers through one central platform.
            </p>
            <h3>Who it's for</h3>
            <ul>
              <li>Patients looking for nearby doctors and healthcare services</li>
              <li>Doctors managing appointments and patient queues</li>
              <li>Clinics and hospitals managing their operations</li>
              <li>Administrators overseeing the whole platform</li>
            </ul>
            <h3>Built with</h3>
            <div className="chp">
              <span>PHP</span>
              <span>Laravel</span>
              <span>MySQL</span>
              <span>Tailwind CSS</span>
              <span>HTML / CSS / JS</span>
              <span>SMTP email</span>
            </div>
            <h3>My role</h3>
            <ul>
              <li>Backend development with Laravel and PHP</li>
              <li>Designed and managed MySQL database structures</li>
              <li>Built modules for patients, doctors, providers and admins</li>
              <li>Implemented booking and queue management workflows</li>
              <li>Built Tailwind interfaces and role-based dashboards</li>
            </ul>
            <p className="note">
              Payment gateway integration and AI-powered assistance are planned as future enhancements.
            </p>
          </div>
          <div>
            <h3 style={{ marginTop: 0 }}>Main features</h3>
            <div className="ft">
              <div>
                <b>Patient booking</b>Appointments or same-day tokens
              </div>
              <div>
                <b>Doctor profiles</b>Specialties and availability
              </div>
              <div>
                <b>Queue management</b>Tokens, positions, waiting times
              </div>
              <div>
                <b>Provider dashboard</b>Doctors, schedules, appointments
              </div>
              <div>
                <b>Doctor dashboard</b>Patients and queues
              </div>
              <div>
                <b>Patient dashboard</b>Bookings and health info
              </div>
              <div>
                <b>Online consultation</b>Remote healthcare visits
              </div>
              <div>
                <b>Prescriptions</b>Managed by doctors
              </div>
              <div>
                <b>Admin panel</b>Users, providers, platform
              </div>
              <div>
                <b>Provider applications</b>Apply to join the platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
