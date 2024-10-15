const Contact = () => {
    return (
      <div className="max-w-[1000px] mx-auto mb-20 mt-10 flex gap-x-4">
        <div className="relative">
          <img
            src="contact.jpg"
            alt="Contact"
            width={2000}
            height={2000}
            className="rounded-md backdrop-blur-sm"
          />
          <p className="absolute -top-4 cursor-pointer right-0 bg-orange-500 rounded-md p-3">Contact</p>
        </div>
        <div>
          <h1 className="font-bold mb-10">Get in Touch with Us</h1>
          <p>
            Have any inquiries or feedback? We’d love to hear from you! Feel free to reach out to us via email at [contact-email@example.com]
            or give us a call at [contact-phone-number]. You can also visit our office at [office-address] or fill out the contact form on our website.
            We’re here to assist you with any questions or concerns.
          </p>
        </div>
      </div>
    )
  }
  
  export default Contact;
  