import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Language detection options with cookie storage
const detectionOptions = {
  // Order and from where user language should be detected
  order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
  
  // Cache user language on
  caches: ['localStorage', 'cookie'],
  
  // Cookie settings
  cookieMinutes: 60 * 24 * 365, // 1 year
  cookieDomain: window.location.hostname,
  
  // Exclude certain language codes from detection
  excludeCacheFromCookie: false,
  
  // Check all of these for valid language codes
  checkWhitelist: true
};

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        team: 'Team',
        contact: 'Contact'
      },
      hero: {
        title: 'Revolutionary',
        subtitle: 'Software Development',
        location: 'from Germany',
        description: 'We create the future through cutting-edge technologies. From iOS apps to complex web solutions - Velyzo transforms your visions into digital reality with customized, high-performance solutions.',
        exploreProjects: 'Explore Projects',
        freeConsultation: 'Free Consultation',
        scrollDown: 'Scroll Down',
        stats: {
          activeProjects: 'Active Projects',
          founded: 'Founded',
          openSource: 'Open Source',
          coreDeveloper: 'Core Developer'
        }
      },
      about: {
        title: 'About Velyzo',
        subtitle: 'Velyzo is a coding organization founded by Devin Oldenburg',
        description: 'Our focus is on developing practical mobile applications, web tools and open source projects that meet real user needs. We combine innovative technologies with thoughtful design to create solutions that are not only functional, but exceptional.',
        mission: 'Our Mission',
        missionText: 'We create innovative software solutions that improve people\'s lives and help companies achieve their goals. Through the use of cutting-edge technologies and thoughtful development processes, we create products that are not only functional, but also user-friendly and future-proof.',
        values: {
          innovation: {
            title: 'Innovation First',
            description: 'We use cutting-edge technologies and methods to develop solutions that are ahead of their time.'
          },
          creative: {
            title: 'Creative Solutions',
            description: 'Our team combines technical expertise with creative thinking to solve complex problems elegantly.'
          },
          performance: {
            title: 'High Performance',
            description: 'We prioritize performance and efficiency in every project to ensure optimal user experiences.'
          }
        }
      },
      projects: {
        title: 'Our Projects',
        subtitle: 'Explore our portfolio of innovative projects that showcase our expertise and commitment to excellence.',
        openSource: 'All our major projects are open source and available on GitHub',
        visitGithub: 'Visit our GitHub',
        connecto: {
          description: 'HTTP request tool for iPhone and Apple Watch. Send and manage HTTP requests directly from your iOS devices with seamless synchronization.'
        },
        widgetdock: {
          description: 'Innovative store and platform for Mac to add custom widgets to the Touch Bar of MacBook Pros. Discover, install and manage widgets.'
        },
        passkit: {
          description: 'Powerful macOS tool to read and display all available data and system information about a connected iOS device.'
        },
        velink: {
          description: 'Modern Linktree alternative with advanced customization options. Create beautiful, personalized link pages.'
        },
        stryd: {
          description: 'Advanced step counter and fitness comparison tool. Track your daily activity and compare performance with friends.'
        },
        pivision: {
          description: 'Comprehensive Raspberry Pi monitoring tool for iPhone. Monitor your Pi\'s performance and manage services remotely.'
        },
        buttons: {
          github: 'GitHub',
          liveDemo: 'Live Demo',
          website: 'Website',
          download: 'Download',
          testflight: 'TestFlight'
        }
      },
      technologies: {
        title: 'Technologies We Use',
        subtitle: 'We use cutting-edge technologies to build robust and scalable solutions',
        continuous: 'Continuous Development',
        continuousText: 'We always stay up to date with technology and continuously expand our technology stack to develop the best solutions for our customers. From mobile development to modern web frameworks - we master the tools needed for successful projects.'
      },
      journey: {
        title: 'Our Journey',
        subtitle: 'Key milestones in Velyzo\'s evolution and growth',
        future: 'The Future',
        futureText: 'We are just at the beginning of our journey. With each new project, we expand our skills and create innovative solutions that improve the digital experience. The future holds many exciting possibilities.',
        milestones: {
          velisFounded: 'Velis Founded',
          velisFoundedDesc: 'Devin Oldenburg originally founded Velis with the goal of developing practical software tools and mobile applications.',
          initialProjects: 'Initial Projects',
          initialProjectsDesc: 'Development began on core projects including Connecto, Velink, Stryd and PiVision under the name Velis.',
          openSource: 'Open Source Commitment',
          openSourceDesc: 'All major projects were made open source and made available on GitHub for community collaboration.',
          rebranding: 'Rebranding to Velyzo',
          rebrandingDesc: 'Rebranding from Velis to Velyzo to create a stronger brand identity and reflect the company\'s growth.',
          continued: 'Continued Development',
          continuedDesc: 'Ongoing improvement and maintenance of existing projects while exploring new development opportunities under the new Velyzo brand.'
        }
      },
      team: {
        title: 'Our Team',
        subtitle: 'The founder and core developer behind Velyzo\'s projects and vision',
        founder: {
          title: 'Founder & Full-Stack Developer',
          description: 'Visionary leader who manages and develops everything at Velyzo. Expert in full-stack development, project management, and innovative technology solutions.'
        },
        servicesTitle: 'Services',
        services: {
          iosApp: 'iOS App Development',
          webDev: 'Web Development',
          reactNative: 'React Native',
          customSolutions: 'Custom Solutions'
        },
        teamwork: {
          title: 'Teamwork & Community',
          description: 'Although Velyzo is currently run by one person, we strongly believe in collaboration and community. Through open source projects, we work with developers from around the world to build the future of software together.'
        }
      },
      contact: {
        title: 'Contact',
        subtitle: 'Do you have a project in mind? Let\'s talk about it and create something great together.',
        sendMessage: 'Send Message',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        sending: 'Sending...',
        contactInfo: 'Contact Information',
        followUs: 'Follow Us',
        readyProject: 'Ready for your project?',
        readyProjectText: 'Whether you need a mobile app, web application or custom software solution - we are here to bring your ideas to life. Contact us for a non-binding consultation.',
        successMessage: 'Thank you for your message! We will get back to you soon.',
        errorMessage: 'There was a problem sending your message. Please try again later or contact us directly via email.',
        emailLabel: 'Email',
        location: 'Location',
        germany: 'Germany'
      },
      footer: {
        description: 'Revolutionary software development from Germany. We create the future through cutting-edge technologies.',
        quickLinks: 'Quick Links',
        services: 'Services',
        contact: 'Contact',
        copyright: '© {{year}} Velyzo. All rights reserved.',
        impressum: 'Legal Notice',
        allRights: 'All rights reserved.',
        language: 'Language'
      },
      services: {
        iosApp: 'iOS App Development',
        webDev: 'Web Development',
        reactNative: 'React Native',
        customSolutions: 'Custom Solutions'
      },
      impressum: {
        title: 'Legal Notice',
        provider: 'Information Provider',
        contact: 'Contact Information',
        liability: 'Liability',
        liabilityText: 'The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents\' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not under obligation to supervise merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.',
        copyright: 'Copyright',
        copyrightText: 'The content and works created by the site operators on these pages are subject to German copyright law. The duplication, processing, distribution and any kind of commercialization of such material beyond the scope of copyright law shall require the prior written consent of the author or creator.',
        dataProtection: 'Data Protection',
        dataProtectionText: 'We take the protection of your personal data very seriously. We treat your personal data confidentially and according to the legal data protection regulations as well as this privacy policy.'
      },
      cookies: {
        title: 'Cookie Notice',
        message: 'We use cookies to enhance your browsing experience and remember your language preference. By continuing to use our site, you agree to our use of cookies.',
        accept: 'Accept All',
        decline: 'Decline',
        necessary: 'Necessary Only'
      },
      cookiePolicy: {
        title: 'Cookie Policy',
        subtitle: 'This policy explains how Velyzo uses cookies and similar technologies on our website to enhance your browsing experience and provide personalized services.',
        lastUpdated: 'Last updated',
        whatAreCookies: {
          title: 'What are Cookies?',
          description: 'Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, which can make your next visit easier and the website more useful to you.',
          ourUse: 'We use cookies to improve your experience on our website, remember your language preferences, and analyze how our website is used to make improvements.'
        },
        categoriesTitle: 'Cookie Categories',
        categories: {
          necessary: {
            title: 'Strictly Necessary Cookies',
            description: 'These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot disable these cookies.'
          },
          functional: {
            title: 'Functional Cookies',
            description: 'These cookies enable enhanced functionality and personalization, such as remembering your language preference and other settings. They may be set by us or by third-party providers.'
          },
          analytics: {
            title: 'Analytics Cookies',
            description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We currently do not use any analytics cookies.'
          }
        },
        cookies: {
          i18next: {
            purpose: 'Stores your language preference to display the website in your chosen language',
            duration: '1 year',
            type: 'Functional'
          },
          cookieConsent: {
            purpose: 'Remembers your cookie consent preferences',
            duration: 'Persistent (until manually cleared)',
            type: 'Necessary'
          }
        },
        table: {
          name: 'Cookie Name',
          purpose: 'Purpose',
          duration: 'Duration',
          type: 'Type'
        },
        noCookiesInCategory: 'No cookies are currently used in this category.',
        yourChoices: {
          title: 'Your Choices',
          browserSettings: {
            title: 'Browser Settings',
            description: 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.'
          },
          ourSettings: {
            title: 'Our Cookie Settings',
            description: 'When you first visit our website, you will see a cookie notice that allows you to choose which categories of cookies you want to accept. You can change your preferences at any time by clearing your browser data and revisiting our website.'
          }
        },
        contact: {
          title: 'Contact Us',
          description: 'If you have any questions about our use of cookies, please contact us at'
        }
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projekte',
        team: 'Team',
        contact: 'Kontakt'
      },
      hero: {
        title: 'Revolutionäre',
        subtitle: 'Softwareentwicklung',
        location: 'aus Deutschland',
        description: 'Wir erschaffen die Zukunft durch modernste Technologien. Von iOS Apps bis hin zu komplexen Web-Lösungen - Velyzo verwandelt Ihre Visionen in digitale Realität mit maßgeschneiderten, hochperformanten Lösungen.',
        exploreProjects: 'Projekte Entdecken',
        freeConsultation: 'Kostenlose Beratung',
        scrollDown: 'Scroll Down',
        stats: {
          activeProjects: 'Active Projects',
          founded: 'Founded',
          openSource: 'Open Source',
          coreDeveloper: 'Core Developer'
        }
      },
      about: {
        title: 'About Velyzo',
        subtitle: 'Velyzo ist eine Coding-Organisation, die von Devin Oldenburg gegründet wurde',
        description: 'Unser Fokus liegt auf der Entwicklung praktischer mobiler Anwendungen, Web-Tools und Open-Source-Projekten, die echte Benutzerbedürfnisse erfüllen. Wir verbinden innovative Technologien mit durchdachtem Design, um Lösungen zu schaffen, die nicht nur funktional, sondern auch außergewöhnlich sind.',
        mission: 'Unsere Mission',
        missionText: 'Wir schaffen innovative Softwarelösungen, die das Leben der Menschen verbessern und Unternehmen dabei helfen, ihre Ziele zu erreichen. Durch den Einsatz modernster Technologien und durchdachter Entwicklungsprozesse entstehen bei uns Produkte, die nicht nur funktional, sondern auch benutzerfreundlich und zukunftssicher sind.',
        values: {
          innovation: {
            title: 'Innovation First',
            description: 'Wir nutzen modernste Technologien und Methoden, um Lösungen zu entwickeln, die ihrer Zeit voraus sind.'
          },
          creative: {
            title: 'Creative Solutions',
            description: 'Unser Team kombiniert technische Expertise mit kreativem Denken, um komplexe Probleme elegant zu lösen.'
          },
          performance: {
            title: 'High Performance',
            description: 'Wir priorisieren Performance und Effizienz in jedem Projekt, um optimale Benutzererfahrungen zu gewährleisten.'
          }
        }
      },
      projects: {
        title: 'Unsere Projekte',
        subtitle: 'Entdecken Sie unser Portfolio innovativer Projekte, die unsere Expertise und unser Engagement für Exzellenz demonstrieren.',
        openSource: 'Alle unsere Hauptprojekte sind Open Source und auf GitHub verfügbar',
        visitGithub: 'Besuchen Sie unseren GitHub',
        connecto: {
          description: 'HTTP request tool für iPhone und Apple Watch. Senden und verwalten Sie HTTP-Requests direkt von Ihren iOS-Geräten mit nahtloser Synchronisation.'
        },
        widgetdock: {
          description: 'Innovativer Store und Plattform für Mac, um individuelle Widgets auf der Touch Bar von MacBook Pros hinzuzufügen. Entdecke, installiere und verwalte Widgets.'
        },
        passkit: {
          description: 'Leistungsstarkes macOS-Tool, um alle verfügbaren Daten und Systeminformationen über ein angeschlossenes iOS-Gerät auszulesen und anzuzeigen.'
        },
        velink: {
          description: 'Moderne Linktree-Alternative mit erweiterten Anpassungsoptionen. Erstellen Sie schöne, personalisierte Link-Seiten.'
        },
        stryd: {
          description: 'Fortgeschrittener Schrittzähler und Fitness-Vergleichstool. Verfolgen Sie Ihre tägliche Aktivität und vergleichen Sie die Leistung mit Freunden.'
        },
        pivision: {
          description: 'Umfassendes Raspberry Pi Monitoring-Tool für iPhone. Überwachen Sie die Leistung Ihres Pi und verwalten Sie Services remote.'
        },
        buttons: {
          github: 'GitHub',
          liveDemo: 'Live Demo',
          website: 'Website',
          download: 'Download',
          testflight: 'TestFlight'
        }
      },
      technologies: {
        title: 'Technologien die wir nutzen',
        subtitle: 'Wir setzen auf modernste Technologien, um robuste und skalierbare Lösungen zu entwickeln',
        continuous: 'Kontinuierliche Weiterentwicklung',
        continuousText: 'Wir bleiben immer auf dem neuesten Stand der Technik und erweitern kontinuierlich unser Technologie-Stack, um die besten Lösungen für unsere Kunden zu entwickeln. Von mobiler Entwicklung bis hin zu modernen Web-Frameworks - wir beherrschen die Tools, die für erfolgreiche Projekte benötigt werden.'
      },
      journey: {
        title: 'Unsere Reise',
        subtitle: 'Wichtige Meilensteine in Velyzos Entwicklung und Wachstum',
        future: 'Die Zukunft',
        futureText: 'Wir sind erst am Anfang unserer Reise. Mit jedem neuen Projekt erweitern wir unsere Fähigkeiten und schaffen innovative Lösungen, die das digitale Erlebnis verbessern. Die Zukunft hält viele aufregende Möglichkeiten bereit.',
        milestones: {
          velisFounded: 'Velis Founded',
          velisFoundedDesc: 'Devin Oldenburg gründete ursprünglich Velis mit dem Ziel, praktische Software-Tools und mobile Anwendungen zu entwickeln.',
          initialProjects: 'Initial Projects',
          initialProjectsDesc: 'Entwicklungsbeginn der Kernprojekte einschließlich Connecto, Velink, Stryd und PiVision unter dem Namen Velis.',
          openSource: 'Open Source Commitment',
          openSourceDesc: 'Alle wichtigen Projekte wurden Open Source gemacht und auf GitHub für Community-Zusammenarbeit verfügbar.',
          rebranding: 'Rebranding to Velyzo',
          rebrandingDesc: 'Umbenennung von Velis zu Velyzo, um eine stärkere Markenidentität zu schaffen und das Wachstum des Unternehmens zu reflektieren.',
          continued: 'Continued Development',
          continuedDesc: 'Kontinuierliche Verbesserung und Wartung bestehender Projekte bei gleichzeitiger Erkundung neuer Entwicklungsmöglichkeiten unter der neuen Marke Velyzo.'
        }
      },
      team: {
        title: 'Unser Team',
        subtitle: 'Der Gründer und Kernentwickler hinter Velyzos Projekten und Vision',
        founder: {
          title: 'Founder & Full-Stack Developer',
          description: 'Visionärer Leader, der alles bei Velyzo verwaltet und entwickelt. Experte in Full-Stack-Entwicklung, Projektmanagement und innovativen Technologielösungen.'
        },
        servicesTitle: 'Services',
        services: {
          iosApp: 'iOS App Development',
          webDev: 'Web Development',
          reactNative: 'React Native',
          customSolutions: 'Custom Solutions'
        },
        teamwork: {
          title: 'Teamwork & Community',
          description: 'Obwohl Velyzo derzeit von einer Person geleitet wird, glauben wir stark an Zusammenarbeit und Community. Durch Open-Source-Projekte arbeiten wir mit Entwicklern aus der ganzen Welt zusammen und bauen gemeinsam die Zukunft der Software.'
        }
      },
      contact: {
        title: 'Kontakt',
        subtitle: 'Haben Sie ein Projekt im Kopf? Lassen Sie uns darüber sprechen und gemeinsam etwas Großartiges schaffen.',
        sendMessage: 'Nachricht senden',
        name: 'Name',
        email: 'Email',
        subject: 'Betreff',
        message: 'Nachricht',
        sending: 'Wird gesendet...',
        contactInfo: 'Kontaktinformationen',
        followUs: 'Folgen Sie uns',
        readyProject: 'Bereit für Ihr Projekt?',
        readyProjectText: 'Egal ob Sie eine mobile App, eine Webanwendung oder eine maßgeschneiderte Softwarelösung benötigen - wir sind hier, um Ihre Ideen zum Leben zu erwecken. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.',
        successMessage: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
        errorMessage: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.',
        emailLabel: 'E-Mail',
        location: 'Standort',
        germany: 'Deutschland'
      },
      footer: {
        description: 'Revolutionäre Softwareentwicklung aus Deutschland. Wir erschaffen die Zukunft durch modernste Technologien.',
        quickLinks: 'Schnelle Links',
        services: 'Dienstleistungen',
        contact: 'Kontakt',
        copyright: '© {{year}} Velyzo. Alle Rechte vorbehalten.',
        impressum: 'Impressum',
        allRights: 'Alle Rechte vorbehalten.',
        language: 'Sprache'
      },
      services: {
        iosApp: 'iOS App Development',
        webDev: 'Web Development',
        reactNative: 'React Native',
        customSolutions: 'Custom Solutions'
      },
      impressum: {
        title: 'Impressum',
        provider: 'Anbieter',
        contact: 'Kontaktinformationen',
        liability: 'Haftung',
        liabilityText: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen.',
        copyright: 'Urheberrecht',
        copyrightText: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
        dataProtection: 'Datenschutz',
        dataProtectionText: 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.'
      },
      cookies: {
        title: 'Cookie-Hinweis',
        message: 'Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern und Ihre Sprachpräferenz zu speichern. Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.',
        accept: 'Alle akzeptieren',
        decline: 'Ablehnen',
        necessary: 'Nur notwendige'
      },
      cookiePolicy: {
        title: 'Cookie-Richtlinie',
        subtitle: 'Diese Richtlinie erklärt, wie Velyzo Cookies und ähnliche Technologien auf unserer Website verwendet, um Ihr Browsing-Erlebnis zu verbessern und personalisierte Dienste zu bieten.',
        lastUpdated: 'Zuletzt aktualisiert',
        whatAreCookies: {
          title: 'Was sind Cookies?',
          description: 'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie helfen Websites dabei, Informationen über Ihren Besuch zu speichern, was Ihren nächsten Besuch einfacher und die Website für Sie nützlicher macht.',
          ourUse: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern, Ihre Sprachpräferenzen zu speichern und zu analysieren, wie unsere Website genutzt wird, um Verbesserungen vorzunehmen.'
        },
        categoriesTitle: 'Cookie-Kategorien',
        categories: {
          necessary: {
            title: 'Unbedingt erforderliche Cookies',
            description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. Sie ermöglichen Kernfunktionen wie Sicherheit, Netzwerkverwaltung und Barrierefreiheit. Diese Cookies können nicht deaktiviert werden.'
          },
          functional: {
            title: 'Funktionale Cookies',
            description: 'Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, wie das Speichern Ihrer Sprachpräferenz und anderer Einstellungen. Sie können von uns oder von Drittanbietern gesetzt werden.'
          },
          analytics: {
            title: 'Analyse-Cookies',
            description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden. Wir verwenden derzeit keine Analyse-Cookies.'
          }
        },
        cookies: {
          i18next: {
            purpose: 'Speichert Ihre Sprachpräferenz, um die Website in Ihrer gewählten Sprache anzuzeigen',
            duration: '1 Jahr',
            type: 'Funktional'
          },
          cookieConsent: {
            purpose: 'Speichert Ihre Cookie-Zustimmungseinstellungen',
            duration: 'Dauerhaft (bis zur manuellen Löschung)',
            type: 'Notwendig'
          }
        },
        table: {
          name: 'Cookie-Name',
          purpose: 'Zweck',
          duration: 'Dauer',
          type: 'Typ'
        },
        noCookiesInCategory: 'In dieser Kategorie werden derzeit keine Cookies verwendet.',
        yourChoices: {
          title: 'Ihre Wahlmöglichkeiten',
          browserSettings: {
            title: 'Browser-Einstellungen',
            description: 'Sie können Cookies nach Belieben kontrollieren und/oder löschen. Sie können alle Cookies löschen, die bereits auf Ihrem Computer sind, und die meisten Browser so einstellen, dass sie nicht gesetzt werden.'
          },
          ourSettings: {
            title: 'Unsere Cookie-Einstellungen',
            description: 'Wenn Sie unsere Website zum ersten Mal besuchen, sehen Sie einen Cookie-Hinweis, der es Ihnen ermöglicht zu wählen, welche Kategorien von Cookies Sie akzeptieren möchten. Sie können Ihre Einstellungen jederzeit ändern, indem Sie Ihre Browser-Daten löschen und unsere Website erneut besuchen.'
          }
        },
        contact: {
          title: 'Kontaktieren Sie uns',
          description: 'Wenn Sie Fragen zu unserer Verwendung von Cookies haben, kontaktieren Sie uns bitte unter'
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Acerca de',
        projects: 'Proyectos',
        team: 'Equipo',
        contact: 'Contacto'
      },
      hero: {
        title: 'Desarrollo de Software',
        subtitle: 'Revolucionario',
        location: 'desde Alemania',
        description: 'Creamos el futuro a través de tecnologías de vanguardia. Desde aplicaciones iOS hasta soluciones web complejas - Velyzo transforma tus visiones en realidad digital con soluciones personalizadas y de alto rendimiento.',
        exploreProjects: 'Explorar Proyectos',
        freeConsultation: 'Consulta Gratuita',
        scrollDown: 'Desplazar Abajo',
        stats: {
          activeProjects: 'Proyectos Activos',
          founded: 'Fundado',
          openSource: 'Código Abierto',
          coreDeveloper: 'Desarrollador Principal'
        }
      },
      about: {
        title: 'Acerca de Velyzo',
        subtitle: 'Velyzo es una organización de coding fundada por Devin Oldenburg',
        description: 'Nuestro enfoque está en desarrollar aplicaciones móviles prácticas, herramientas web y proyectos de código abierto que satisfagan las necesidades reales de los usuarios.',
        mission: 'Nuestra Misión',
        missionText: 'Creamos soluciones de software innovadoras que mejoran la vida de las personas y ayudan a las empresas a alcanzar sus objetivos.',
        values: {
          innovation: {
            title: 'Innovación Primero',
            description: 'Utilizamos tecnologías y métodos de vanguardia para desarrollar soluciones que están adelantadas a su tiempo.'
          },
          creative: {
            title: 'Soluciones Creativas',
            description: 'Nuestro equipo combina experiencia técnica con pensamiento creativo para resolver problemas complejos elegantemente.'
          },
          performance: {
            title: 'Alto Rendimiento',
            description: 'Priorizamos el rendimiento y la eficiencia en cada proyecto para garantizar experiencias de usuario óptimas.'
          }
        }
      },
      projects: {
        title: 'Nuestros Proyectos',
        subtitle: 'Explora nuestro portafolio de proyectos innovadores que demuestran nuestra experiencia y compromiso con la excelencia.',
        openSource: 'Todos nuestros proyectos principales son de código abierto y están disponibles en GitHub',
        visitGithub: 'Visitar nuestro GitHub',
        connecto: {
          description: 'Herramienta de solicitudes HTTP para iPhone y Apple Watch. Envía y gestiona solicitudes HTTP directamente desde tus dispositivos iOS con sincronización perfecta.'
        },
        widgetdock: {
          description: 'Tienda y plataforma innovadora para Mac para agregar widgets personalizados a la Touch Bar de MacBook Pros. Descubre, instala y gestiona widgets.'
        },
        passkit: {
          description: 'Herramienta poderosa de macOS para leer y mostrar todos los datos disponibles e información del sistema sobre un dispositivo iOS conectado.'
        },
        velink: {
          description: 'Alternativa moderna a Linktree con opciones de personalización avanzadas. Crea páginas de enlaces hermosas y personalizadas.'
        },
        stryd: {
          description: 'Contador de pasos avanzado y herramienta de comparación de fitness. Rastrea tu actividad diaria y compara el rendimiento con amigos.'
        },
        pivision: {
          description: 'Herramienta integral de monitoreo de Raspberry Pi para iPhone. Monitorea el rendimiento de tu Pi y gestiona servicios de forma remota.'
        },
        buttons: {
          github: 'GitHub',
          liveDemo: 'Demo En Vivo',
          website: 'Sitio Web',
          download: 'Descargar',
          testflight: 'TestFlight'
        }
      },
      technologies: {
        title: 'Tecnologías que Usamos',
        subtitle: 'Utilizamos tecnologías de vanguardia para construir soluciones robustas y escalables',
        continuous: 'Desarrollo Continuo',
        continuousText: 'Siempre nos mantenemos actualizados con la tecnología y expandimos continuamente nuestro stack tecnológico.'
      },
      journey: {
        title: 'Nuestro Viaje',
        subtitle: 'Hitos clave en la evolución y crecimiento de Velyzo',
        future: 'El Futuro',
        futureText: 'Estamos apenas al comienzo de nuestro viaje. Con cada nuevo proyecto, expandimos nuestras habilidades.',
        milestones: {
          velisFounded: 'Velis Fundado',
          velisFoundedDesc: 'Devin Oldenburg fundó originalmente Velis con el objetivo de desarrollar herramientas de software prácticas.',
          initialProjects: 'Proyectos Iniciales',
          initialProjectsDesc: 'Comenzó el desarrollo de proyectos principales incluyendo Connecto, Velink, Stryd y PiVision.',
          openSource: 'Compromiso de Código Abierto',
          openSourceDesc: 'Todos los proyectos principales se hicieron de código abierto y disponibles en GitHub.',
          rebranding: 'Cambio de Marca a Velyzo',
          rebrandingDesc: 'Cambio de marca de Velis a Velyzo para crear una identidad de marca más fuerte.',
          continued: 'Desarrollo Continuo',
          continuedDesc: 'Mejora y mantenimiento continuo de proyectos existentes bajo la nueva marca Velyzo.'
        }
      },
      team: {
        title: 'Nuestro Equipo',
        subtitle: 'El fundador y desarrollador principal detrás de los proyectos y visión de Velyzo',
        founder: {
          title: 'Fundador y Desarrollador Full-Stack',
          description: 'Líder visionario que gestiona y desarrolla todo en Velyzo. Experto en desarrollo full-stack, gestión de proyectos y soluciones tecnológicas innovadoras.'
        },
        servicesTitle: 'Servicios',
        services: {
          iosApp: 'Desarrollo de Apps iOS',
          webDev: 'Desarrollo Web',
          reactNative: 'React Native',
          customSolutions: 'Soluciones Personalizadas'
        },
        teamwork: {
          title: 'Trabajo en Equipo y Comunidad',
          description: 'Aunque Velyzo está dirigido actualmente por una persona, creemos fuertemente en la colaboración y comunidad. A través de proyectos de código abierto, trabajamos con desarrolladores de todo el mundo para construir juntos el futuro del software.'
        }
      },
      contact: {
        title: 'Contacto',
        subtitle: '¿Tienes un proyecto en mente? Hablemos de ello y creemos algo grandioso juntos.',
        sendMessage: 'Enviar Mensaje',
        name: 'Nombre',
        email: 'Email',
        subject: 'Asunto',
        message: 'Mensaje',
        sending: 'Enviando...',
        contactInfo: 'Información de Contacto',
        followUs: 'Síguenos',
        readyProject: '¿Listo para tu proyecto?',
        readyProjectText: 'Ya sea que necesites una aplicación móvil, aplicación web o solución de software personalizada - estamos aquí para dar vida a tus ideas.',
        successMessage: '¡Gracias por tu mensaje! Nos pondremos en contacto pronto.',
        errorMessage: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde o contáctanos directamente por email.',
        emailLabel: 'Correo Electrónico',
        location: 'Ubicación',
        germany: 'Alemania'
      },
      footer: {
        description: 'Desarrollo de software revolucionario desde Alemania. Creamos el futuro a través de tecnologías de vanguardia.',
        quickLinks: 'Enlaces Rápidos',
        services: 'Servicios',
        contact: 'Contacto',
        copyright: '© {{year}} Velyzo. Todos los derechos reservados.',
        impressum: 'Aviso Legal',
        allRights: 'Todos los derechos reservados.',
        language: 'Idioma'
      },
      services: {
        iosApp: 'Desarrollo de Apps iOS',
        webDev: 'Desarrollo Web',
        reactNative: 'React Native',
        customSolutions: 'Soluciones Personalizadas'
      },
      impressum: {
        title: 'Aviso Legal',
        provider: 'Proveedor de Información',
        contact: 'Información de Contacto',
        liability: 'Responsabilidad',
        liabilityText: 'Los contenidos de nuestras páginas han sido creados con el máximo cuidado. Sin embargo, no podemos garantizar la exactitud, integridad o actualidad de los contenidos.',
        copyright: 'Derechos de Autor',
        copyrightText: 'El contenido y las obras creadas por los operadores del sitio en estas páginas están sujetas a la ley de derechos de autor alemana.',
        dataProtection: 'Protección de Datos',
        dataProtectionText: 'Tomamos muy en serio la protección de sus datos personales. Tratamos sus datos personales de forma confidencial.'
      },
      cookies: {
        title: 'Aviso de Cookies',
        message: 'Utilizamos cookies para mejorar su experiencia de navegación y recordar su preferencia de idioma. Al continuar usando nuestro sitio, acepta nuestro uso de cookies.',
        accept: 'Aceptar Todo',
        decline: 'Rechazar',
        necessary: 'Solo Necesarias'
      },
      cookiePolicy: {
        title: 'Política de Cookies',
        subtitle: 'Esta política explica cómo Velyzo utiliza cookies y tecnologías similares en nuestro sitio web para mejorar su experiencia de navegación y proporcionar servicios personalizados.',
        lastUpdated: 'Última actualización',
        whatAreCookies: {
          title: '¿Qué son las Cookies?',
          description: 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Ayudan a los sitios web a recordar información sobre su visita, lo que puede hacer que su próxima visita sea más fácil y el sitio web más útil para usted.',
          ourUse: 'Utilizamos cookies para mejorar su experiencia en nuestro sitio web, recordar sus preferencias de idioma y analizar cómo se utiliza nuestro sitio web para hacer mejoras.'
        },
        categoriesTitle: 'Categorías de Cookies',
        categories: {
          necessary: {
            title: 'Cookies Estrictamente Necesarias',
            description: 'Estas cookies son esenciales para que el sitio web funcione correctamente. Habilitan funcionalidades básicas como seguridad, gestión de red y accesibilidad. No puede deshabilitar estas cookies.'
          },
          functional: {
            title: 'Cookies Funcionales',
            description: 'Estas cookies habilitan funcionalidades mejoradas y personalización, como recordar su preferencia de idioma y otras configuraciones. Pueden ser establecidas por nosotros o por proveedores terceros.'
          },
          analytics: {
            title: 'Cookies de Análisis',
            description: 'Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando e informando información de forma anónima. Actualmente no utilizamos cookies de análisis.'
          }
        },
        cookies: {
          i18next: {
            purpose: 'Almacena su preferencia de idioma para mostrar el sitio web en su idioma elegido',
            duration: '1 año',
            type: 'Funcional'
          },
          cookieConsent: {
            purpose: 'Recuerda sus preferencias de consentimiento de cookies',
            duration: 'Persistente (hasta eliminación manual)',
            type: 'Necesaria'
          }
        },
        table: {
          name: 'Nombre de Cookie',
          purpose: 'Propósito',
          duration: 'Duración',
          type: 'Tipo'
        },
        noCookiesInCategory: 'Actualmente no se utilizan cookies en esta categoría.',
        yourChoices: {
          title: 'Sus Opciones',
          browserSettings: {
            title: 'Configuraciones del Navegador',
            description: 'Puede controlar y/o eliminar cookies como desee. Puede eliminar todas las cookies que ya están en su computadora y configurar la mayoría de navegadores para evitar que se coloquen.'
          },
          ourSettings: {
            title: 'Nuestras Configuraciones de Cookies',
            description: 'Cuando visite nuestro sitio web por primera vez, verá un aviso de cookies que le permite elegir qué categorías de cookies desea aceptar. Puede cambiar sus preferencias en cualquier momento borrando los datos de su navegador y volviendo a visitar nuestro sitio web.'
          }
        },
        contact: {
          title: 'Contáctanos',
          description: 'Si tiene alguna pregunta sobre nuestro uso de cookies, contáctenos en'
        }
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        projects: 'Projets',
        team: 'Équipe',
        contact: 'Contact'
      },
      hero: {
        title: 'Développement de Logiciels',
        subtitle: 'Révolutionnaire',
        location: "d'Allemagne",
        description: "Nous créons l'avenir grâce aux technologies de pointe. Des applications iOS aux solutions web complexes - Velyzo transforme vos visions en réalité numérique avec des solutions personnalisées et performantes.",
        exploreProjects: 'Explorer les Projets',
        freeConsultation: 'Consultation Gratuite',
        scrollDown: 'Faire Défiler',
        stats: {
          activeProjects: 'Projets Actifs',
          founded: 'Fondé',
          openSource: 'Open Source',
          coreDeveloper: 'Développeur Principal'
        }
      },
      about: {
        title: 'À propos de Velyzo',
        subtitle: 'Velyzo est une organisation de développement fondée par Devin Oldenburg',
        description: "Notre objectif est de développer des applications mobiles pratiques, des outils web et des projets open source qui répondent aux besoins réels des utilisateurs.",
        mission: 'Notre Mission',
        missionText: "Nous créons des solutions logicielles innovantes qui améliorent la vie des gens et aident les entreprises à atteindre leurs objectifs.",
        values: {
          innovation: {
            title: "L'Innovation d'Abord",
            description: 'Nous utilisons des technologies et méthodes de pointe pour développer des solutions qui sont en avance sur leur temps.'
          },
          creative: {
            title: 'Solutions Créatives',
            description: 'Notre équipe combine expertise technique et pensée créative pour résoudre élégamment les problèmes complexes.'
          },
          performance: {
            title: 'Haute Performance',
            description: 'Nous priorisons la performance et l\'efficacité dans chaque projet pour garantir des expériences utilisateur optimales.'
          }
        }
      },
      projects: {
        title: 'Nos Projets',
        subtitle: 'Explorez notre portfolio de projets innovants qui démontrent notre expertise et notre engagement pour l\'excellence.',
        openSource: 'Tous nos projets principaux sont open source et disponibles sur GitHub',
        visitGithub: 'Visiter notre GitHub',
        connecto: {
          description: 'Outil de requêtes HTTP pour iPhone et Apple Watch. Envoyez et gérez des requêtes HTTP directement depuis vos appareils iOS avec une synchronisation parfaite.'
        },
        widgetdock: {
          description: 'Magasin et plateforme innovants pour Mac pour ajouter des widgets personnalisés à la Touch Bar des MacBook Pros. Découvrez, installez et gérez des widgets.'
        },
        passkit: {
          description: 'Outil macOS puissant pour lire et afficher toutes les données disponibles et informations système d\'un appareil iOS connecté.'
        },
        velink: {
          description: 'Alternative moderne à Linktree avec des options de personnalisation avancées. Créez des pages de liens belles et personnalisées.'
        },
        stryd: {
          description: 'Compteur de pas avancé et outil de comparaison de fitness. Suivez votre activité quotidienne et comparez les performances avec des amis.'
        },
        pivision: {
          description: 'Outil de surveillance Raspberry Pi complet pour iPhone. Surveillez les performances de votre Pi et gérez les services à distance.'
        },
        buttons: {
          github: 'GitHub',
          liveDemo: 'Démo En Direct',
          website: 'Site Web',
          download: 'Télécharger',
          testflight: 'TestFlight'
        }
      },
      technologies: {
        title: 'Technologies que Nous Utilisons',
        subtitle: 'Nous utilisons des technologies de pointe pour construire des solutions robustes et évolutives',
        continuous: 'Développement Continu',
        continuousText: 'Nous restons toujours à jour avec la technologie et élargissons continuellement notre stack technologique.'
      },
      journey: {
        title: 'Notre Parcours',
        subtitle: 'Étapes clés dans l\'évolution et la croissance de Velyzo',
        future: 'L\'Avenir',
        futureText: 'Nous ne sommes qu\'au début de notre voyage. Avec chaque nouveau projet, nous élargissons nos compétences.',
        milestones: {
          velisFounded: 'Velis Fondé',
          velisFoundedDesc: 'Devin Oldenburg a fondé Velis avec l\'objectif de développer des outils logiciels pratiques.',
          initialProjects: 'Projets Initiaux',
          initialProjectsDesc: 'Début du développement de projets principaux incluant Connecto, Velink, Stryd et PiVision.',
          openSource: 'Engagement Open Source',
          openSourceDesc: 'Tous les projets principaux ont été rendus open source et disponibles sur GitHub.',
          rebranding: 'Rebranding vers Velyzo',
          rebrandingDesc: 'Changement de marque de Velis vers Velyzo pour créer une identité de marque plus forte.',
          continued: 'Développement Continu',
          continuedDesc: 'Amélioration et maintenance continues des projets existants sous la nouvelle marque Velyzo.'
        }
      },
      team: {
        title: 'Notre Équipe',
        subtitle: 'Le fondateur et développeur principal derrière les projets et la vision de Velyzo',
        founder: {
          title: 'Fondateur et Développeur Full-Stack',
          description: 'Leader visionnaire qui gère et développe tout chez Velyzo. Expert en développement full-stack, gestion de projet et solutions technologiques innovantes.'
        },
        servicesTitle: 'Services',
        services: {
          iosApp: 'Développement d\'Apps iOS',
          webDev: 'Développement Web',
          reactNative: 'React Native',
          customSolutions: 'Solutions Personnalisées'
        },
        teamwork: {
          title: 'Travail d\'Équipe et Communauté',
          description: 'Bien que Velyzo soit actuellement dirigé par une personne, nous croyons fermement en la collaboration et la communauté. À travers des projets open source, nous travaillons avec des développeurs du monde entier pour construire ensemble l\'avenir du logiciel.'
        }
      },
      contact: {
        title: 'Contact',
        subtitle: 'Vous avez un projet en tête ? Parlons-en et créons quelque chose de formidable ensemble.',
        sendMessage: 'Envoyer un Message',
        name: 'Nom',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        sending: 'Envoi en cours...',
        contactInfo: 'Informations de Contact',
        followUs: 'Suivez-nous',
        readyProject: 'Prêt pour votre projet ?',
        readyProjectText: 'Que vous ayez besoin d\'une application mobile, d\'une application web ou d\'une solution logicielle personnalisée - nous sommes là pour donner vie à vos idées.',
        successMessage: 'Merci pour votre message ! Nous vous contacterons bientôt.',
        errorMessage: 'Il y a eu un problème lors de l\'envoi de votre message. Veuillez réessayer plus tard ou nous contacter directement par email.',
        emailLabel: 'E-mail',
        location: 'Localisation',
        germany: 'Allemagne'
      },
      footer: {
        description: 'Développement de logiciels révolutionnaire d\'Allemagne. Nous créons l\'avenir grâce aux technologies de pointe.',
        quickLinks: 'Liens Rapides',
        services: 'Services',
        contact: 'Contact',
        copyright: '© {{year}} Velyzo. Tous droits réservés.',
        impressum: 'Mentions Légales',
        allRights: 'Tous droits réservés.',
        language: 'Langue'
      },
      services: {
        iosApp: 'Développement d\'Apps iOS',
        webDev: 'Développement Web',
        reactNative: 'React Native',
        customSolutions: 'Solutions Personnalisées'
      },
      impressum: {
        title: 'Mentions Légales',
        provider: 'Fournisseur d\'Information',
        contact: 'Informations de Contact',
        liability: 'Responsabilité',
        liabilityText: 'Le contenu de nos pages a été créé avec le plus grand soin. Cependant, nous ne pouvons garantir l\'exactitude, l\'exhaustivité ou l\'actualité du contenu.',
        copyright: 'Droits d\'Auteur',
        copyrightText: 'Le contenu et les œuvres créées par les opérateurs du site sur ces pages sont soumis au droit d\'auteur allemand.',
        dataProtection: 'Protection des Données',
        dataProtectionText: 'Nous prenons très au sérieux la protection de vos données personnelles. Nous traitons vos données personnelles de manière confidentielle.'
      },
      cookies: {
        title: 'Avis sur les Cookies',
        message: 'Nous utilisons des cookies pour améliorer votre expérience de navigation et mémoriser votre préférence linguistique. En continuant à utiliser notre site, vous acceptez notre utilisation des cookies.',
        accept: 'Accepter Tout',
        decline: 'Refuser',
        necessary: 'Nécessaires Seulement'
      },
      cookiePolicy: {
        title: 'Politique des Cookies',
        subtitle: 'Cette politique explique comment Velyzo utilise les cookies et technologies similaires sur notre site web pour améliorer votre expérience de navigation et fournir des services personnalisés.',
        lastUpdated: 'Dernière mise à jour',
        whatAreCookies: {
          title: 'Que sont les Cookies ?',
          description: 'Les cookies sont de petits fichiers texte qui sont stockés sur votre appareil lorsque vous visitez un site web. Ils aident les sites web à mémoriser des informations sur votre visite, ce qui peut rendre votre prochaine visite plus facile et le site web plus utile pour vous.',
          ourUse: 'Nous utilisons des cookies pour améliorer votre expérience sur notre site web, mémoriser vos préférences linguistiques et analyser comment notre site web est utilisé pour apporter des améliorations.'
        },
        categoriesTitle: 'Catégories de Cookies',
        categories: {
          necessary: {
            title: 'Cookies Strictement Nécessaires',
            description: 'Ces cookies sont essentiels au bon fonctionnement du site web. Ils permettent des fonctionnalités de base telles que la sécurité, la gestion du réseau et l\'accessibilité. Vous ne pouvez pas désactiver ces cookies.'
          },
          functional: {
            title: 'Cookies Fonctionnels',
            description: 'Ces cookies permettent des fonctionnalités améliorées et la personnalisation, comme mémoriser votre préférence linguistique et autres paramètres. Ils peuvent être définis par nous ou par des fournisseurs tiers.'
          },
          analytics: {
            title: 'Cookies d\'Analyse',
            description: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web en collectant et rapportant des informations de manière anonyme. Nous n\'utilisons actuellement aucun cookie d\'analyse.'
          }
        },
        cookies: {
          i18next: {
            purpose: 'Stocke votre préférence linguistique pour afficher le site web dans votre langue choisie',
            duration: '1 an',
            type: 'Fonctionnel'
          },
          cookieConsent: {
            purpose: 'Mémorise vos préférences de consentement aux cookies',
            duration: 'Persistant (jusqu\'à suppression manuelle)',
            type: 'Nécessaire'
          }
        },
        table: {
          name: 'Nom du Cookie',
          purpose: 'Objectif',
          duration: 'Durée',
          type: 'Type'
        },
        noCookiesInCategory: 'Aucun cookie n\'est actuellement utilisé dans cette catégorie.',
        yourChoices: {
          title: 'Vos Choix',
          browserSettings: {
            title: 'Paramètres du Navigateur',
            description: 'Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies qui sont déjà sur votre ordinateur et configurer la plupart des navigateurs pour les empêcher d\'être placés.'
          },
          ourSettings: {
            title: 'Nos Paramètres de Cookies',
            description: 'Lorsque vous visitez notre site web pour la première fois, vous verrez un avis de cookie qui vous permet de choisir quelles catégories de cookies vous voulez accepter. Vous pouvez changer vos préférences à tout moment en effaçant vos données de navigateur et en revisitant notre site web.'
          }
        },
        contact: {
          title: 'Nous Contacter',
          description: 'Si vous avez des questions sur notre utilisation des cookies, veuillez nous contacter à'
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    
    // Default language if detection fails
    fallbackLng: 'en',
    
    // Whitelist of supported languages
    supportedLngs: ['en', 'de', 'es', 'fr'],
    
    // Language detection
    detection: detectionOptions,
    
    // Debug in development
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    
    // React specific options
    react: {
      useSuspense: false, // Set to false to avoid issues with SSR
    },
  });

export default i18n;
