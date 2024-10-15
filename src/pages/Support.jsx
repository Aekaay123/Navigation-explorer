

const Support = () => {
  return (
    <div className="max-w-[1000px] mx-auto mb-20 mt-10 flex gap-x-4">
    <div className="relative">
      <img
        src="support.jpg"
        alt="Support"
        width={2000}
        height={2000}
        className="rounded-md backdrop-blur-sm"
      />
      <p className="absolute -top-4 cursor-pointer right-0 bg-orange-500 rounded-md p-3">Support</p>
    </div>
    <div>
      <h1 className="font-bold mb-10">We are Here to Help</h1>
      <p>
        Need assistance? Our support team is dedicated to providing fast and effective solutions to any issues you may encounter. 
        Whether you’re experiencing technical difficulties or have questions about our services, we’re just a message away. 
        Reach out to us at [support-email@example.com] or call our support line at [support-phone-number]. 
        You can also visit our help center for frequently asked questions and resources to guide you.
      </p>
    </div>
  </div>
  )
}

export default Support