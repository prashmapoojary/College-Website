function ContactUs() {
    return (
        <div className="college-page-container py-12 px-4">
            <div className="max-w-6xl mx-auto college-glass-card p-6 md:p-10 space-y-12">
                {/* Hero / Header Section */}
                <div className="text-center space-y-4">
                    <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 py-4 px-6 rounded-2xl shadow-xl border-y border-amber-500/40 tracking-wider uppercase">
                        📞 Contact Information
                    </h1>
                    <p className="text-xl text-slate-900 font-bold">Reach us for all enquiries</p>
                    <p className="text-slate-700 text-lg font-medium">
                        Mahatma Gandhi Memorial College, Udupi Taluk and District,<br /> Karnataka, India – <strong className="text-amber-700">PIN: 576102</strong>
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Office */}
                    <div className="bg-white/95 p-6 rounded-xl shadow-lg border border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-500 text-center">
                        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-2xl font-bold">
                            🏢
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Office</h3>
                        <a href="tel:+918202520359" className="text-base text-slate-700 hover:text-amber-600 block my-1 font-medium">
                            0820 - 2520359
                        </a>
                        <a href="tel:+918202530410" className="text-base text-slate-700 hover:text-amber-600 block my-1 font-medium">
                            0820 - 2530410
                        </a>
                    </div>

                    {/* Fax */}
                    <div className="bg-white/95 p-6 rounded-xl shadow-lg border border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-500 text-center">
                        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-2xl font-bold">
                            📠
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Fax</h3>
                        <a href="tel:+918202530410" className="text-base text-slate-700 hover:text-amber-600 block my-1 font-medium">
                            0820 - 2530410
                        </a>
                    </div>

                    {/* Email */}
                    <div className="bg-white/95 p-6 rounded-xl shadow-lg border border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-500 text-center">
                        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-2xl font-bold">
                            ✉️
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">E-mail</h3>
                        <a href="mailto:principal_mgm@yahoo.co.in" className="text-base text-slate-700 hover:text-amber-600 block my-1 font-medium break-all">
                            principal_mgm@yahoo.co.in
                        </a>
                    </div>
                </div>

                {/* Location Section */}
                <div className="text-center pt-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">📍 Our Location</h2>
                    <p className="text-lg text-slate-600 mb-6 font-medium">
                        Visit us at our campus in Udupi, Karnataka:
                    </p>
                    <div className="max-w-full mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.0700921552516!2d74.76380090792652!3d13.345915986950684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb5bfb1466e7%3A0xf0d4b8e58c838485!2sMahathma%20Gandhi%20Memorial%20(MGM)%20College!5e0!3m2!1sen!2sin!4v1755338012887!5m2!1sen!2sin"
                            width="100%"
                            height="420"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="MGM College Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;