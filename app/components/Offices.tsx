'use client';

import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';

export default function Offices() {
  const headquarters = {
    city: 'Hafizabad',
    country: 'Pakistan',
    flag: '🇵🇰',
    address: 'Sunny Garden Usama Block, Sargodha Road, Hafizabad, Pakistan',
    phone: '+92 54 1234 5678',
    email: 'hafizabad@riserx.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM PKT'
  };

  const branchOffices = [
    {
      city: 'Faisalabad',
      country: 'Pakistan',
      flag: '🇵🇰',
      phone: '+92 41 555-0198',
      email: 'faisalabad@riserx.com',
    },
    {
      city: 'Sargodha',
      country: 'Pakistan',
      flag: '🇵🇰',
      phone: '+92 30 1234 5678',
      email: 'sargodha@riserx.com',
    },
    {
      city: 'Jaranwala',
      country: 'Pakistan',
      flag: '🇵🇰',
      phone: '+92 30 1234 5678',
      email: 'jaranwala@riserx.com',
    },
  ];

  return (
    <section className="py-16 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(24,69,179)] mb-5">
            Our Global Offices
          </h2>
          <div className="w-24 h-1 bg-[rgb(24,69,179)] mx-auto mb-5"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With offices around the world, we&apos;re always close to you wherever you are
          </p>
        </div>

        {/* Headquarters */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="text-[rgb(24,69,179)]" size={24} strokeWidth={2.5} />
            <h3 className="text-2xl font-bold text-gray-900">Main Office</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.8261747843625!2d73.68376607535946!3d32.172429773859624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392173e1c5f1e1a7%3A0x5e8c8c8c8c8c8c8c!2sHafizabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1735234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Headquarters Location Map"
              ></iframe>
            </div>
            {/* Office Details */}
            <div className="bg-linear-to-br from-[rgb(24,69,179)] to-[rgb(20,58,150)] rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="text-6xl">{headquarters.flag}</div>
                <div>
                  <h4 className="text-3xl font-bold mb-1">{headquarters.city}</h4>
                  <p className="text-blue-100 text-lg">{headquarters.country}</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-blue-50">{headquarters.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="shrink-0" strokeWidth={2} />
                  <p className="text-blue-50">{headquarters.hours}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="shrink-0" strokeWidth={2} />
                  <a href={`tel:${headquarters.phone}`} className="text-blue-50 hover:text-white transition-colors">
                    {headquarters.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="shrink-0" strokeWidth={2} />
                  <a href={`mailto:${headquarters.email}`} className="text-blue-50 hover:text-white transition-colors">
                    {headquarters.email}
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Branch Offices */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Globe className="text-[rgb(24,69,179)]" size={24} strokeWidth={2.5} />
            <h3 className="text-2xl font-bold text-gray-900">Branch Offices</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {branchOffices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{office.flag}</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{office.city}</h4>
                    <p className="text-sm text-gray-600">{office.country}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={16} className="text-[rgb(24,69,179)] shrink-0" strokeWidth={2} />
                    <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-[rgb(24,69,179)] transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={16} className="text-[rgb(24,69,179)] shrink-0" strokeWidth={2} />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-[rgb(24,69,179)] transition-colors break-all">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
