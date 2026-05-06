export default function ContactPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="animate__animated animate__fadeInDown text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="animate__animated animate__fadeInDown animate__delay-1s mt-2 text-lg leading-8 text-gray-600">
            Have questions about our tiles? We're here to help you find the perfect aesthetic.
          </p>
        </div>
        
        <div className="animate__animated animate__fadeInUp animate__delay-1s mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">Email</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">hello@tilesgallery.com</p>
            </div>
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">Phone</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">+1 (555) 000-0000</p>
            </div>
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">Office</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                123 Tile Street, Design District<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
