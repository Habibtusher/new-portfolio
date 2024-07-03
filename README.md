
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Head>
        <title>Data Engineering Services</title>
        <meta name="description" content="Learn more about our data engineering services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center">
          <div className="bg-green-500 rounded-full p-3 inline-block mb-4">
            {/* Icon (you can replace it with an SVG or an image) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4h-1m4-4v4m-4-4v4m4-4h1v-4h1m-4 4h1v-4h1"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Are you interested in learning more about our data engineering services?
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Discuss Your Requirements
          </button>
        </div>

        <div className="bg-blue-800 p-4 rounded-lg mt-6">
          <h3 className="text-xl font-semibold mb-4">What happens after you contact us?</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Our solutions experts schedule a secure meeting within 24 hours.</li>
            <li>They recommend tailored skills and hiring models.</li>
            <li>You make informed decisions based on our expert guidance.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
