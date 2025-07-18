import React, { useState, useEffect, useRef } from 'react';

// Helper to combine class names conditionally
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

// Custom Hook for Intersection Observer
const useIntersectionObserver = (options) => {
    const [entry, setEntry] = useState(null);
    const [node, setNode] = useState(null);

    const observer = useRef(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        observer.current = new window.IntersectionObserver(([entry]) => {
            setEntry(entry);
        }, options);

        const { current: currentObserver } = observer;

        if (node) currentObserver.observe(node);

        return () => currentObserver.disconnect();
    }, [node, options]);

    return [setNode, entry];
};


// --- SVG Icon Components ---

const BoxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
);

const RustIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-4">
        <path d="M12 2L2 7l1.5 9L12 22l8.5-4L22 7zM12 2v20M2 7h20M12 2L5.5 4.5M12 2l6.5 2.5M12 22L5.5 19.5M12 22l6.5-2.5M2 7l3.5 12.5M22 7l-3.5 12.5"></path>
        <circle cx="12" cy="12" r="1.5"></circle>
    </svg>
);

const LayersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-4">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
);

const CodeIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-4">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-4">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-4">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-4">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
    </svg>
);

const TableIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-4">
        <path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18"></path>
    </svg>
);


// --- Page Section Components ---

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <BoxIcon />
                    <h1 className="text-2xl font-bold text-gray-800">Schemly</h1>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#about" className="text-gray-600 hover:text-blue-500 transition duration-300">About</a>
                    <a href="#features" className="text-gray-600 hover:text-blue-500 transition duration-300">Features</a>
                    <a href="https://github.com/DevPlus31/schemly" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 shadow-sm">
                        View on GitHub
                    </a>
                </nav>
            </div>
        </header>
    );
};

const Hero = () => {
    return (
        <section className="bg-gray-800 text-white text-center py-20 px-6 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Schemly</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300">
                Schemly is a command-line tool built with Rust for maximum performance and reliability. It streamlines Laravel development by automating the creation of essential code components like models, controllers, and migrations directly from simple, human-readable YAML files.
            </p>

            <p className="mb-4 text-gray-400 text-lg font-light">Supports Apple Silicom and Windows x86-64</p>
            <a target="_blank" href="https://github.com/DevPlus31/schemly/releases" className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-lg">
                Download
            </a>
        </section>
    );
};


// A wrapper component to apply the scroll animation
const AnimatedSection = ({ children }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
    const isVisible = entry?.isIntersecting;

    return (
        <div
            ref={ref}
            className={classNames(
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
        >
            {children}
        </div>
    );
};


const FeatureCard = ({ icon, title, children }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl flex flex-col items-center">
            {icon}
            <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
            <p className="text-gray-600">{children}</p>
        </div>
    );
};

const Features = () => {
    const projectFeatures = [
        { icon: <RustIcon />, title: "Blazing Fast & Reliable", description: "Built with Rust for maximum performance and safety." },
        { icon: <CodeIcon />, title: "YAML Configuration", description: "Define your models in simple, readable YAML." },
        { icon: <LayersIcon />, title: "Complete Laravel Support", description: "Generates all necessary Laravel components." },
        { icon: <ShieldIcon />, title: "Safe by Default", description: "Won't overwrite existing files unless forced." },
        { icon: <TargetIcon />, title: "Selective Generation", description: "Choose exactly which components to generate." },
        { icon: <LinkIcon />, title: "Relationship Support", description: "Full support for all Laravel relationship types." },
        { icon: <TableIcon />, title: "Pivot Tables", description: "Automatic pivot table generation for many-to-many." },
    ];

    return (
        <section id="features" className="py-20 px-6 bg-white">
            <div className="container mx-auto">
                <AnimatedSection>
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Core Features</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectFeatures.map((feature, index) => (
                            <FeatureCard key={index} icon={feature.icon} title={feature.title}>
                                {feature.description}
                            </FeatureCard>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-6">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} DevPlus31. All rights reserved.</p>
            </div>
        </footer>
    );
};


// --- Main App Component ---

export default function App() {
    return (
        <div className="bg-gray-50 font-sans antialiased">
            <Header />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </div>
    );
}
