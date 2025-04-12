import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Prashant Prajapati",
    title: "Senior Developer at Infosys",
    message: "Working with you was an absolute pleasure! Your dedication and skills in software development are truly remarkable.",
    image: "/1722100183888.jpg",
    rating: 5,
  },
  {
    name: "Nitin Shrivastav",
    title: "Machine Learning Engineer at AVIZA",
    message: "Your Commitment to delivering high-quality solutions on time has made a signigicant impact on our projects. Great Work!",
    image: "/1710610762265.jpg",
    rating: 5
  },
  {
    name: "Abhishek Yadav",
    title: "Freelance Full-Stack Developer",
    message: "Your ability to tackle complex problems and find efficient solutions is impressive. Keep up the fantastic work!",
    rating: 4,
  },
];

// eslint-disable-next-line react/prop-types
const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-2">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: i < rating ? 1 : 0.8 }}
          transition={{ duration: 0.2, delay: i * 0.1 }}
        >
          <FaStar
            size={20}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        </motion.div>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className=" bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center cursor-default">
        <motion.h2
          className="text-4xl font-bold text-purple-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="max-w-sm bg-white p-6 shadow-lg rounded-lg flex flex-col transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center mb-4">
                {testimonial.image ? (
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    loading="lazy"
                    decoding="async"
                    transition={{ duration: 0.4 }}
                  />
                ) : (
                  <motion.h2
                    className="w-16 h-16 rounded-full mr-4 bg-purple-800 text-white text-2xl flex justify-center items-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {testimonial.name[0]}
                  </motion.h2>
                )}
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.title}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;{testimonial.message}&quot;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
