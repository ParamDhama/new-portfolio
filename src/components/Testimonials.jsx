import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Prashant Prajapati",
    title: "Senior Developer at Infosys",
    message: "Working with you was an absolute pleasure! Your dedication and skills in software development are truly remarkable.",
    image: "/1722100183888.jpeg",
  },
  {
    name: "Nitin Shrivastav",
    title: "Machine Learning Engineer at AVIZVA",
    message: "Your commitment to delivering high-quality solutions on time has made a significant impact on our projects. Great work!",
    image: "/1710610762265.jpeg",
  },
  {
    name: "Abhishek Yadav",
    title: "Freelance Full-Stack Developer",
    message: "Your ability to tackle complex problems and find efficient solutions is impressive. Keep up the fantastic work!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="min-h-screen bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center cursor-default">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">Testimonials</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="max-w-sm bg-white p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {
                    testimonial.image?(<img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />):(
                        <h1
                        className="w-16 h-16 rounded-full mr-4 bg-purple-800 text-white text-2xl flex justify-center items-center"
                      > {testimonial.name[0]}</h1>
                      )
                }
                
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.message}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
