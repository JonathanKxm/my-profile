function MsgForm() {
  return (
    <form
      className="text-gray-800 font-bold text-xl mb-2 mt-10 md:mt-0"
      action="https://getform.io/f/aqonmeqa"
      method="POST"
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="mb-2 w-full rounded-md border border-jonathan-light py-2 pl-2 pr-4"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="mb-2 w-full rounded-md border border-jonathan-light py-2 pl-2 pr-4"
      />

      <textarea
        name="message"
        required
        cols={30}
        rows={4}
        placeholder="Your Message"
        className="mb-2 w-full rounded-md border border-jonathan-light py-2 pl-2 pr-4"
      />
      <button
        type="submit"
        className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-jonathan-main"
      >
        Send a message
      </button>
    </form>
  )
}

export default MsgForm
