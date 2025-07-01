// import { getContactInfo } from '@/lib/strapi';

export default async function ContactPage() {
  // const contactInfo = await getContactInfo();

  const defaultContact = {
    email: 'shoshi@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Art Studio Street, Creative City, CC 12345',
    socialLinks: {
      instagram: 'https://instagram.com/shoshiart',
      facebook: 'https://facebook.com/shoshiart',
      twitter: 'https://twitter.com/shoshiart',
    },
  };

  // const displayContact = contactInfo?.attributes || defaultContact;
  const displayContact = defaultContact;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h1>
          <p className="text-lg text-gray-600">
            Get in touch to discuss commissions, purchases, or collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                <a
                  href={`mailto:${displayContact.email}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {displayContact.email}
                </a>
              </div>

              {displayContact.phone && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Phone</h3>
                  <a
                    href={`tel:${displayContact.phone}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {displayContact.phone}
                  </a>
                </div>
              )}

              {displayContact.address && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
                  <p className="text-gray-600">{displayContact.address}</p>
                </div>
              )}

              {displayContact.socialLinks && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Follow Me
                  </h3>
                  <div className="flex space-x-4">
                    {displayContact.socialLinks.instagram && (
                      <a
                        href={displayContact.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800"
                      >
                        Instagram
                      </a>
                    )}
                    {displayContact.socialLinks.facebook && (
                      <a
                        href={displayContact.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Facebook
                      </a>
                    )}
                    {displayContact.socialLinks.twitter && (
                      <a
                        href={displayContact.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 