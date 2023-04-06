const Contact = () => {
  return (
    <div className='w-full h-[35rem] flex'>
      <div className="flex-1 p-4">
        <div className="text-[36px] text-center font-bold">
            <h1>Contact Us</h1>
        </div>
      </div>
      <div className="flex-1">
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.8408132807!2d7.379827471333515!3d9.0242493682335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1680764582216!5m2!1sen!2sng'
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
          className='w-full h-full p-4'
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
