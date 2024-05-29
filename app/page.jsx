import Header from "./components/header";


const testimonials = [
  { text: "EventHub made it so easy to find and book events. Highly recommended!", author: "Jessica Thompson" },
  { text: "A fantastic platform with a great selection of events.", author: "Michael Johnson" },
  // Add more testimonials as needed
];

export default function Home() {
  return (
    <div>
      <Header />
      <main className=" ">
  {/* About EventHub Section */}
  <section className="bg-blue-100 text-center py-20 px-4">
    <h2 className="text-4xl font-bold text-blue-600 mb-8">About EventHub</h2>
    <p className="text-xl text-gray-700 max-w-prose mx-auto">
      EventHub is your go-to platform for discovering and booking exciting events near you. From concerts to workshops, we bring you the best events in your city.
    </p>
  </section>

  {/* Benefits Section */}
  <section className="bg-green-100 text-center py-20 px-4">
    <h2 className="text-4xl font-bold text-green-600 mb-8">Why Choose EventHub?</h2>
    <ul className="space-y-4 text-xl text-gray-700 max-w-prose mx-auto">
      <li>
        <strong className="text-green-600">Easy Booking:</strong> Effortlessly book tickets for your favorite events.
      </li>
      <li>
        <strong className="text-green-600">Wide Variety:</strong> Find events that match your interests.
      </li>
  
      <li>
        <strong className="text-green-600">Secure Payments:</strong> Enjoy secure and reliable payment options.
      </li>
    </ul>
  </section>

  {/* Testimonials Section */}
  <section className="bg-yellow-100 py-12 px-4">
    <h2 className="text-2xl md:text-3xl font-semibold text-center text-yellow-600 mb-6">What Our Users Say</h2>
    <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {testimonials.map((testimonial, index) => (
  <div key={index} className="bg-white shadow rounded-lg p-6 flex flex-col justify-between h-full">
    <blockquote className="text-gray-600 text-lg mb-6 relative pb-6">
      <div className="relative pt-8 pl-8">
        <svg className="w-8 h-8 text-gray-400 absolute top-0 left-0 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
        <p>{testimonial.text}</p>
      </div>
      <svg className="w-8 h-8 text-gray-400 absolute bottom-0 right-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
      </svg>
    </blockquote>
    <p className="text-gray-800 font-semibold text-md">- {testimonial.author}</p>
  </div>
))}
    </div>
  </section>
</main>
    </div>
  );
}