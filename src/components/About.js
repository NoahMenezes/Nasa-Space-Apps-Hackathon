import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';

const About = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="about-container">
            <header className="about-hero">
                <div className="about-hero-content">
                    <h1>Beyond the Horizon</h1>
                    <p className="subtitle">Unveiling the mysteries of the universe, one pixel at a time</p>
                </div>
                <div className="hero-overlay"></div>
            </header>

            <main className="about-content">
                <section className="about-section mission-section">
                    <div className="section-content">
                        <h2>Our Cosmic Mission</h2>
                        <div className="divider"></div>
                        <p>
                            <span className="highlight">Cosmos Explorer</span> was born from a singular passion: to make the vast, complex, and stunning beauty of space accessible to everyone. We believe that curiosity is the engine of discovery, and our platform is the telescope through which you can explore the celestial wonders.
                        </p>
                        <p>
                            We are dedicated to providing the most accurate, up-to-date, and visually captivating data on stars, galaxies, nebulae, and beyond. From the <span className="highlight">Pale Blue Dot</span> to the furthest reaches of the observable universe, our mission is to inspire the next generation of astronomers, physicists, and dreamers.
                        </p>
                    </div>
                </section>

                <section className="about-section team-section">
                    <div className="section-content">
                        <h2>Meet Our Team</h2>
                        <div className="divider"></div>
                        <p className="team-intro">
                            A small, dedicated crew of developers, designers, and stargazers, united by a love for the final frontier. We code by starlight and design with the cosmos in mind.
                        </p>

                        <div className="team-grid">
                            <div className="team-member">
                                <div className="member-avatar">
                                    <span>AS</span>
                                </div>
                                <h3>Anya Sharma</h3>
                                <p className="role">Chief Architect & Star Mapper</p>
                                <p className="bio">The visionary who engineered the celestial database.</p>
                            </div>
                            <div className="team-member">
                                <div className="member-avatar">
                                    <span>KV</span>
                                </div>
                                <h3>Dr. Kaelen Varrick</h3>
                                <p className="role">Lead Data Scientist</p>
                                <p className="bio">Ensures the accuracy of every planetary trajectory.</p>
                            </div>
                            <div className="team-member">
                                <div className="member-avatar">
                                    <span>JR</span>
                                </div>
                                <h3>Jax 'Nova' Rylan</h3>
                                <p className="role">UX/UI Specialist</p>
                                <p className="bio">Crafted the interface and user experience flow.</p>
                            </div>
                            <div className="team-member">
                                <div className="member-avatar">
                                    <span>EC</span>
                                </div>
                                <h3>Elara Chen</h3>
                                <p className="role">Community Liaison</p>
                                <p className="bio">Connects our mission with space enthusiasts.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="about-section tech-section">
                    <div className="section-content">
                        <h2>Our Technology</h2>
                        <div className="divider"></div>
                        <p>
                            Our application is powered by cutting-edge, <span className="highlight">open-source technology</span>, leveraging data feeds from major space agencies (NASA, ESA) and astronomical observatories. We use a proprietary rendering engine, the *'Nebula Renderer'*, to display realistic, high-fidelity visualizations of deep-space objects.
                        </p>
                        <p>
                            This commitment to modern tech ensures that your journey through the cosmos is smooth, interactive, and constantly evolving with the latest discoveries in the scientific community.
                        </p>
                        <div className="tech-stack">
                            <div className="tech-item">
                                <div className="tech-icon">🌌</div>
                                <h4>NASA APIs</h4>
                                <p>Real-time space data and imagery</p>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">🚀</div>
                                <h4>React & Three.js</h4>
                                <p>Interactive 3D visualizations</p>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">🔭</div>
                                <h4>WebGL</h4>
                                <p>High-performance rendering</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;