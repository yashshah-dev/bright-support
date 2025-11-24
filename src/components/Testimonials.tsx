import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Kaylene Matthey',
    rating: 5,
    text: 'Excellent service and very professional staff. They genuinely care about their clients and provide outstanding support.',
  },
  {
    name: 'Julie Seaton',
    rating: 5,
    text: 'The team at Bright Support has been wonderful. They are reliable, compassionate, and always go the extra mile.',
  },
  {
    name: 'Kenneth Mccoll',
    rating: 5,
    text: 'Highly recommend Bright Support. Their support workers are skilled, friendly, and make a real difference in our lives.',
  },
  {
    name: 'Brenton Wilhelm',
    rating: 5,
    text: 'Professional and caring service. The staff are well-trained and understand the unique needs of each individual.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Hear What People Say About Us
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={26} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-slate-800">5.0</span>
          </div>
          <p className="text-slate-600">Based on 4 Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-2xl p-7 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 border border-slate-100 hover:border-indigo-200 group hover:-translate-y-1"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-5 leading-relaxed">{testimonial.text}</p>
              <p className="font-semibold text-slate-800">{testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=bright+support+shepparton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-purple-600 font-semibold transition-colors duration-300 group"
          >
            View all reviews on Google
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
