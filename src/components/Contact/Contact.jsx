import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contato</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nome
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Seu nome"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Seu email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Mensagem
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Sua mensagem"
                rows="5"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Enviar
              </button>
            </div>
          </form>
          <div className="flex flex-col space-y-4">
            <a
              href="https://github.com/FWsantos"
              className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 inline-block mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.261.793-.579v-2.17c-3.338.724-4.043-1.617-4.043-1.617-.547-1.39-1.335-1.76-1.335-1.76-1.09-.746.083-.73.083-.73 1.205.084 1.837 1.24 1.837 1.24 1.07 1.834 2.81 1.305 3.495.997.108-.776.418-1.305.76-1.605-2.666-.3-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.52.116-3.164 0 0 1.01-.323 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.553 3.29-1.23 3.29-1.23.653 1.645.241 2.86.118 3.164.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.192.697.8.578C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/seu-usuario"
              className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 inline-block mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M20.447 20.452H16.9v-5.604c0-1.336-.026-3.055-1.863-3.055-1.864 0-2.15 1.454-2.15 2.959v5.7h-3.552V9h3.414v1.561h.05c.475-.899 1.635-1.847 3.363-1.847 3.594 0 4.25 2.366 4.25 5.45v6.288zM5.337 7.433c-1.144 0-2.071-.927-2.071-2.07 0-1.143.927-2.07 2.07-2.07s2.07.927 2.07 2.07c0 1.143-.926 2.07-2.07 2.07zm1.774 13.019H3.563V9h3.548v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.227.792 24 1.771 24h20.451C23.208 24 24 23.227 24 22.271V1.728C24 .774 23.208 0 22.225 0z"
                  clipRule="evenodd"
                />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:seu-email@example.com"
              className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              <svg
                className="w-6 h-6 inline-block mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.35 4H3.65C2.74 4 2 4.74 2 5.65v12.7C2 19.26 2.74 20 3.65 20h16.7c.91 0 1.65-.74 1.65-1.65V5.65C22 4.74 21.26 4 20.35 4zM20 7.28l-7.88 4.95c-.24.15-.54.15-.78 0L4 7.28V6l8 5 8-5v1.28z"
                />
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
