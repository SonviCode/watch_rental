const Contact = () => {
  return (
    <div className="text-center">
      <h1 data-testid="contact-title">
        Vous avez une question, vous souhaitez avoir plus d'informations? <br />
        Envoyez nous un e-mail et notre équipe vous répondra dans les meilleurs
        délais
      </h1>
      <div className="p-4 mx-auto max-w-xl bg-blacklight rounded-lg mt-10">
        <h1 className="text-xl text-center">Contactez-nous !</h1>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Nom"
            required
            className="w-full text-white bg-black rounded-md py-3 px-4 focus:bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full text-white bg-black rounded-md py-3 px-4 focus:bg-transparent"
          />
          <input
            type="text"
            placeholder="Sujet"
            required
            className="w-full text-white bg-black rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent"
          />
          <textarea
            placeholder="Message"
            rows={6}
            required
            className="w-full text-white bg-black rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent pt-3"
          ></textarea>
          <button
            type="button"
            className="bg-purple hover:bg-purplelight tracking-wide rounded-md text-sm px-4 py-3 w-full"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
