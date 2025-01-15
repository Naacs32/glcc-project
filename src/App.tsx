import React, { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import { Globe, Mail, Phone, MapPin, Instagram, Clock, Check, GraduationCap, Calendar, FileText, Send, Heart, Target, BookOpen } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState('fr');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const tagManagerArgs = {
        gtmId: 'GTM-P7V2H7B8'
    };
    TagManager.initialize(tagManagerArgs);
}, []);

  const content = {
    fr: {
      nav: {
        about: 'À propos',
        services: 'Nos services',
        contact: 'Contactez-nous'
      },
      hero: {
        title: 'German Language and Culture Center',
        subtitle: 'Votre passerelle vers l\'excellence en langue allemande au Burundi',
        year: 'Année scolaire 2025/2026',
        cta: 'Inscrivez-vous maintenant'
      },
      about: {
        title: 'À Propos de Nous',
        description: 'Nous sommes un centre allemand dédié à créer des ponts entre les cultures et à créer des opportunités. Notre mission est de fournir une éducation exceptionnelle en langue allemande, un enrichissement culturel et un soutien professionnel tout en promouvant activement le potentiel culturel et économique du Burundi sur la scène mondiale.',
        values: {
          title: 'Nos Valeurs',
          description: 'Nous priorisons l\'éducation, l\'échange culturel et le développement professionnel. Nous nous engageons à soutenir les individus dans leur parcours d\'apprentissage de l\'allemand et leur intégration dans les environnements germanophones tout en célébrant et promouvant la culture burundaise.'
        },
        vision: {
          title: 'Notre Vision',
          description: 'Notre vision est de créer une communauté interculturelle dynamique où les personnes du Burundi et d\'ailleurs peuvent apprendre, grandir et se connecter à travers la langue et la culture allemandes. Nous visons à être un pont principal entre l\'Allemagne et le Burundi, favorisant les opportunités de développement personnel et professionnel et renforçant la présence mondiale du Burundi.'
        },
        philosophy: {
          title: 'Notre Philosophie',
          description: 'Nous croyons que maîtriser une langue et comprendre une culture ouvre les portes à des opportunités infinies. Notre philosophie est fondée sur l\'idée que l\'apprentissage d\'une langue n\'est pas seulement une question de communication, mais de création de liens et d\'élargissement des horizons.'
        }
      },
      services: {
        title: 'Notre Programme Complet',
        items: [
          'Cours d\'allemand du niveau A1 à B2',
          'Préparation et passage du test Goethe',
          'Obtention d\'un contrat de formation professionnelle de 3 ans',
          'Assistance aux procédures de visa et frais de visa',
          'Assistance à la préparation du voyage en Allemagne et frais de voyage'
        ]
      },
      schedule: {
        title: 'Calendrier Académique',
        start: 'Début de l\'année: 24 février 2025',
        end: 'Fin de l\'année: 27 février 2026',
        hours: {
          title: 'Horaires',
          details: 'Les cours ont lieu 5 jours par semaine, 4 heures par jour, du lundi au vendredi, de 8h à 12h'
        },
        holidays: {
          title: 'Vacances',
          easter: 'Pâques: du 18 avril 2025 au 25 avril 2025',
          summer: 'Vacances d\'été: du 15 août 2025 au 29 août 2025',
          christmas: 'Noël et Nouvel An: du 19 décembre 2025 au 2 janvier 2026'
        }
      },
      requirements: {
        title: 'Conditions d\'Admission',
        age: 'Être âgé de 18 à 38 ans',
        diploma: 'Être titulaire d\'un diplôme d\'études secondaires',
        documents: {
          title: 'Documents Requis',
          items: [
            'Diplôme d\'études secondaires',
            'CV',
            'Deux photos passeport',
            'Photocopie de la carte d\'identité'
          ]
        }
      },
      fees: {
        title: 'Frais de Programme',
        amount: '15.000.000 BIF',
        details: 'Payable en totalité à l\'inscription',
        payment_plan: 'Possibilité de paiement échelonné avec des délais raisonnables',
        deadline: 'Date limite d\'inscription: Jeudi 30 janvier 2025'
      },
      contact: {
        title: 'Contactez-nous',
        subtitle: 'Nous sommes là pour vous aider',
        address: 'Buyenzi, Avenue de la Santé, à côté du Poste de Police de Buyenzi, Bureau N°3, Bujumbura, Burundi',
        email: 'glcc.bujumbura@gmail.com',
        phone: '+257 67 333 333',
        hours: 'Lundi à vendredi, de 8h00 à 12h00',
        social: {
          instagram: '@glcc.burundi'
        },
        form: {
          title: 'Envoyez-nous un message',
          name: 'Nom complet',
          email: 'Adresse e-mail',
          message: 'Votre message',
          submit: 'Envoyer',
          placeholder: {
            name: 'Entrez votre nom',
            email: 'Entrez votre email',
            message: 'Écrivez votre message ici...'
          }
        }
      }
    },
    de: {
      nav: {
        about: 'Über uns',
        services: 'Unsere Dienste',
        contact: 'Kontakt'
      },
      hero: {
        title: 'German Language and Culture Center',
        subtitle: 'Ihr Tor zur deutschen Sprachexzellenz in Burundi',
        year: 'Schuljahr 2025/2026',
        cta: 'Jetzt einschreiben'
      },
      about: {
        title: 'Über Uns',
        description: 'Wir sind ein engagiertes deutsches Zentrum, das Kulturen verbindet und Chancen schafft. Unsere Mission ist es, außergewöhnliche deutsche Sprachausbildung, kulturelle Bereicherung und Karriereunterstützung zu bieten und dabei aktiv das kulturelle und wirtschaftliche Potenzial Burundis auf globaler Ebene zu fördern.',
        values: {
          title: 'Unsere Werte',
          description: 'Wir priorisieren Bildung, kulturellen Austausch und berufliche Entwicklung. Wir engagieren uns dafür, Einzelpersonen auf ihrem Weg zum Deutschlernen und bei der Integration in deutschsprachige Umgebungen zu unterstützen, während wir die burundische Kultur feiern und fördern.'
        },
        vision: {
          title: 'Unsere Vision',
          description: 'Unsere Vision ist es, eine lebendige interkulturelle Gemeinschaft zu schaffen, in der Menschen aus Burundi und darüber hinaus durch die deutsche Sprache und Kultur lernen, wachsen und sich verbinden können. Wir streben danach, eine führende Brücke zwischen Deutschland und Burundi zu sein, die Möglichkeiten für persönliche und berufliche Weiterentwicklung fördert und Burundis globale Präsenz stärkt.'
        },
        philosophy: {
          title: 'Unsere Philosophie',
          description: 'Wir glauben, dass die Beherrschung einer Sprache und das Verständnis einer Kultur Türen zu endlosen Möglichkeiten öffnet. Unsere Philosophie basiert auf der Idee, dass Sprachenlernen nicht nur eine Frage der Kommunikation ist, sondern des Aufbaus von Verbindungen und der Erweiterung von Horizonten.'
        }
      },
      services: {
        title: 'Unser Komplettes Programm',
        items: [
          'Deutschkurse von A1 bis B2',
          'Vorbereitung und Ablegen der Goethe-Prüfung',
          'Erhalt eines 3-jährigen Berufsausbildungsvertrags',
          'Unterstützung bei Visumverfahren und Visumgebühren',
          'Unterstützung bei der Reisevorbereitung nach Deutschland und Reisekosten'
        ]
      },
      schedule: {
        title: 'Akademischer Kalender',
        start: 'Schuljahresbeginn: 24. Februar 2025',
        end: 'Schuljahresende: 27. Februar 2026',
        hours: {
          title: 'Unterrichtszeiten',
          details: 'Der Unterricht findet 5 Tage pro Woche, 4 Stunden täglich, Montag bis Freitag, von 8:00 bis 12:00 Uhr statt'
        },
        holidays: {
          title: 'Ferien',
          easter: 'Osterferien: 18. April 2025 bis 25. April 2025',
          summer: 'Sommerferien: 15. August 2025 bis 29. August 2025',
          christmas: 'Weihnachts- und Neujahrsferien: 19. Dezember 2025 bis 2. Januar 2026'
        }
      },
      requirements: {
        title: 'Aufnahmebedingungen',
        age: 'Alter zwischen 18 und 38 Jahren',
        diploma: 'Abitur oder gleichwertiger Schulabschluss',
        documents: {
          title: 'Erforderliche Dokumente',
          items: [
            'Schulabschlusszeugnis',
            'Lebenslauf',
            'Zwei Passfotos',
            'Kopie des Personalausweises'
          ]
        }
      },
      fees: {
        title: 'Programmgebühren',
        amount: '15.000.000 BIF',
        details: 'Zahlbar bei der Anmeldung',
        payment_plan: 'Ratenzahlung möglich mit angemessenen Fristen',
        deadline: 'Anmeldefrist: Donnerstag, 30. Januar 2025'
      },
      contact: {
        title: 'Kontaktieren Sie uns',
        subtitle: 'Wir sind für Sie da',
        address: 'Buyenzi, Avenue de la Santé, neben der Polizeistation Buyenzi, Büro Nr. 3, Bujumbura, Burundi',
        email: 'glcc.bujumbura@gmail.com',
        phone: '+257 67 333 333',
        hours: 'Montag bis Freitag, 8:00 bis 12:00 Uhr',
        social: {
          instagram: '@glcc.burundi'
        },
        form: {
          title: 'Senden Sie uns eine Nachricht',
          name: 'Vollständiger Name',
          email: 'E-Mail-Adresse',
          message: 'Ihre Nachricht',
          submit: 'Senden',
          placeholder: {
            name: 'Geben Sie Ihren Namen ein',
            email: 'Geben Sie Ihre E-Mail ein',
            message: 'Schreiben Sie Ihre Nachricht hier...'
          }
        }
      }
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/YourGLCCLogo.png" 
                alt="GLCC Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToContact}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                {t.nav.contact}
              </button>
              <div className="flex space-x-2">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`text-2xl ${language === 'fr' ? 'opacity-100' : 'opacity-50'}`}
                  title="Français"
                >
                  🇫🇷
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`text-2xl ${language === 'de' ? 'opacity-100' : 'opacity-50'}`}
                  title="Deutsch"
                >
                  🇩🇪
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
          alt="Students graduating"
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-4">{t.hero.subtitle}</p>
            <p className="text-xl font-semibold text-yellow-400">{t.hero.year}</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.about.title}</h2>
          
          {/* Main Description */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.description}
            </p>
          </div>
          
          {/* Values, Vision, and Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold">{t.about.values.title}</h3>
              </div>
              <p className="text-gray-600">
                {t.about.values.description}
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold">{t.about.vision.title}</h3>
              </div>
              <p className="text-gray-600">
                {t.about.vision.description}
              </p>
            </div>
            
            {/* Philosophy */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold">{t.about.philosophy.title}</h3>
              </div>
              <p className="text-gray-600">
                {t.about.philosophy.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {t.services.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 mx-auto mb-4 text-red-600">
                  {index === 0 && <GraduationCap className="w-full h-full" />}
                  {index === 1 && <FileText className="w-full h-full" />}
                  {index === 2 && <Check className="w-full h-full" />}
                  {index === 3 && <Globe className="w-full h-full" />}
                  {index === 4 && <MapPin className="w-full h-full" />}
                </div>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.schedule.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-xl font-semibold">{t.schedule.hours.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{t.schedule.start}</p>
              <p className="text-gray-600 mb-4">{t.schedule.end}</p>
              <p className="text-gray-600">{t.schedule.hours.details}</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-xl font-semibold">{t.schedule.holidays.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{t.schedule.holidays.easter}</p>
              <p className="text-gray-600 mb-4">{t.schedule.holidays.summer}</p>
              <p className="text-gray-600">{t.schedule.holidays.christmas}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.requirements.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Conditions</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t.requirements.age}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t.requirements.diploma}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">{t.requirements.documents.title}</h3>
              <ul className="space-y-4">
                {t.requirements.documents.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.fees.title}</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-4xl font-bold text-red-600">{t.fees.amount}</span>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">{t.fees.details}</p>
              <p className="text-gray-600">{t.fees.payment_plan}</p>
              <p className="text-gray-600 font-semibold">{t.fees.deadline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-section" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                <span>{t.contact.address}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-2" />
                <a href={`mailto:${t.contact.email}`}>
                  <span>{t.contact.email}</span>
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <span>{t.contact.phone} (WhatsApp)</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-red-600 mr-2" />
                <span>{t.contact.hours}</span>
              </div>
              <div className="flex items-center">
                <Instagram className="h-5 w-5 text-red-600 mr-2" />
                <a href="https://www.instagram.com/glcc.burundi" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
                  {t.contact.social.instagram}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">{t.contact.form.title}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder={t.contact.form.placeholder.name}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder={t.contact.form.placeholder.email}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder={t.contact.form.placeholder.message}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-2">
            <Instagram className="h-6 w-6" />
            <a href="https://www.instagram.com/glcc.burundi" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
              {t.contact.social.instagram}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;