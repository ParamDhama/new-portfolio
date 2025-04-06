import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGreaterThan, FaLessThan, FaTimes } from "react-icons/fa";

const achievementCertificates = [
    { id: 1, title: "C# Basic", imageUrl: "/Certificate/c_sharp_basic certificate.jpg" },
    // { id: 2, title: "CSS", imageUrl: "/Certificate/css certificate.jpg" },
    { id: 3, title: "Frontend Developer (React)", imageUrl: "/Certificate/frontend_developer_react certificate.jpg" },
    { id: 4, title: "Java Basic", imageUrl: "/Certificate/java_basic certificate.jpg" },
    { id: 5, title: "JavaScript Basic", imageUrl: "/Certificate/javascript_basic certificate.jpg" },
    { id: 6, title: "JavaScript Intermediate", imageUrl: "/Certificate/javascript_intermediate certificate.jpg" },
    { id: 7, title: "Node.js Basic", imageUrl: "/Certificate/nodejs_basic certificate.jpg" },
    { id: 8, title: "Node.js Intermediate", imageUrl: "/Certificate/nodejs_intermediate certificate.pdf.jpg" },
    { id: 9, title: "Problem Solving Basic", imageUrl: "/Certificate/problem_solving_basic certificate.jpg" },
    { id: 10, title: "Problem Solving Intermediate", imageUrl: "/Certificate/problem_solving_intermediate certificate.jpg" },
    { id: 11, title: "Python Basic", imageUrl: "/Certificate/python_basic certificate.jpg" },
    { id: 12, title: "React Basic", imageUrl: "/Certificate/react_basic certificate.jpg" },
    { id: 13, title: "REST API Intermediate", imageUrl: "/Certificate/rest_api_intermediate certificate.jpg" },
    { id: 14, title: "Software Engineer", imageUrl: "/Certificate/software_engineer certificate.jpg" },
    { id: 15, title: "Software Engineer Intern", imageUrl: "/Certificate/software_engineer_intern certificate.jpg" },
    { id: 16, title: "SQL Advanced", imageUrl: "/Certificate/sql_advanced certificate.jpg" },
    { id: 17, title: "SQL Basic", imageUrl: "/Certificate/sql_basic certificate.jpg" },
    { id: 18, title: "SQL Intermediate", imageUrl: "/Certificate/sql_intermediate certificate.jpg" },
];

const AchievementSection = () => {
    const [showMore, setShowMore] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);

    const toggleShowMore = () => setShowMore(!showMore);

    // Handle opening the modal
    const openModal = (cert) => setSelectedCert(cert);

    // Handle next certificate
    const nextAchivemnt = () => {
        setSelectedCert((prev) => {
            const currentIndex = achievementCertificates.findIndex((item) => item.id === prev.id);
            const nextIndex = (currentIndex + 1) % achievementCertificates.length;
            return achievementCertificates[nextIndex];
        });
    };

    // Handle previous certificate
    const prevAchivemnt = () => {
        setSelectedCert((prev) => {
            const currentIndex = achievementCertificates.findIndex((item) => item.id === prev.id);
            const prevIndex = (currentIndex - 1 + achievementCertificates.length) % achievementCertificates.length;
            return achievementCertificates[prevIndex];
        });
    };

    // Handle closing the modal
    const closeModal = () => setSelectedCert(null);

    const displayedCertificates = showMore ? achievementCertificates : achievementCertificates.slice(0, 3);

    return (
        <section id="achievement" className="bg-gray-100 py-16 px-6 md:px-12 pt-20">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-purple-600 mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Achievements
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-700 mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    A showcase of my top certifications and achievements demonstrating my skills and dedication.
                </motion.p>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {displayedCertificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            className="bg-white p-6 shadow-lg rounded-lg flex flex-col cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => openModal(cert)}
                        >
                            <img
                                src={cert.imageUrl}
                                alt={cert.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold text-purple-600">{cert.title}</h3>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.button
                    onClick={toggleShowMore}
                    className="mt-8 px-6 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {showMore ? "Show Less" : "Show More (+14)"}
                </motion.button>

                {/* Modal for Certificate Image */}
                {selectedCert && (
                    <motion.div
                        className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {/* Close Button */}
                        <button
                                className="absolute top-2 right-2 text-white hover:text-purple-500 z-[999]"
                                onClick={closeModal}
                            >
                                <FaTimes size={30} />
                            </button>

                            {/* Next Button */}
                            <button
                                className="absolute top-1/2 right-2 text-white hover:text-purple-500 transform -translate-y-1/2"
                                onClick={nextAchivemnt}
                            >
                                <FaGreaterThan size={30} />
                            </button>

                            {/* Previous Button */}
                            <button
                                className="absolute top-1/2 left-2 text-white hover:text-purple-500 transform -translate-y-1/2"
                                onClick={prevAchivemnt}
                            >
                                <FaLessThan size={30} />
                            </button>

                        <motion.div
                            key={selectedCert.id}
                            className="bg-white rounded-lg p-4 "
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            
                            {/* Certificate Image */}
                            <motion.img
                                src={selectedCert.imageUrl}
                                alt={selectedCert.title}
                                className="w-full max-h-[80vh] object-contain rounded-4xl"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                loading="lazy"
                                decoding="async"
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            />

                            {/* Full Size Link */}
                            <a
                                href={selectedCert.imageUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-purple-600 hover:text-purple-800"
                            >
                                <FaExternalLinkAlt className="inline-block mr-2" />
                                Open in Full Size
                            </a>
                        </motion.div>
                    </motion.div>
                )}

            </div>
        </section>
    );
};

export default AchievementSection;
