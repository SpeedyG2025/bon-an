// CAPSYS — Multilingual Translation System
// Languages: fr (Français), ht (Kreyòl Ayisyen), en (English), es (Español)

const TRANSLATIONS = {

  // ── SHARED / GLOBAL ──────────────────────────────────────────────
  shared: {
    nav: {
      home:       { fr:"Accueil",    ht:"Akèy",        en:"Home",        es:"Inicio" },
      activities: { fr:"Activités",  ht:"Aktivite",    en:"Activities",  es:"Actividades" },
      appt:       { fr:"Rendez-vous",ht:"Randevou",    en:"Appointments",es:"Citas" },
      about:      { fr:"À propos",   ht:"Sou nou",     en:"About",       es:"Nosotros" },
      contact:    { fr:"Contact",    ht:"Kontak",      en:"Contact",     es:"Contacto" },
      donate:     { fr:"Faire un don",ht:"Fè yon don", en:"Donate",      es:"Donar" },
    },
    footer: {
      tagline:  { fr:"Centre d'Appui Psychologique et Social — accompagner, écouter, transformer.", ht:"Sant Sipò Sikolojik ak Sosyal — akonpaye, koute, transfòme.", en:"Center for Psychological and Social Support — accompany, listen, transform.", es:"Centro de Apoyo Psicológico y Social — acompañar, escuchar, transformar." },
      services: { fr:"Services",    ht:"Sèvis",       en:"Services",    es:"Servicios" },
      nav_col:  { fr:"Navigation",  ht:"Navigasyon",  en:"Navigation",  es:"Navegación" },
      contact:  { fr:"Contact",     ht:"Kontak",      en:"Contact",     es:"Contacto" },
      copy:     { fr:"© 2025 CAPSYS. Tous droits réservés.", ht:"© 2025 CAPSYS. Tout dwa rezève.", en:"© 2025 CAPSYS. All rights reserved.", es:"© 2025 CAPSYS. Todos los derechos reservados." },
      consult:  { fr:"Consultation psychologique", ht:"Konsiltasyon sikolojik", en:"Psychological consultation", es:"Consulta psicológica" },
      social:   { fr:"Travail social", ht:"Travay sosyal", en:"Social work", es:"Trabajo social" },
      workshops:{ fr:"Ateliers collectifs", ht:"Atelye kolektif", en:"Group workshops", es:"Talleres grupales" },
      training: { fr:"Formations", ht:"Fòmasyon", en:"Training", es:"Formaciones" },
      donate_btn:{ fr:"❤ Faire un don", ht:"❤ Fè yon don", en:"❤ Donate", es:"❤ Donar" },
    },

    stats: {
      consult: { fr:"Consultations réalisées", ht:"Konsiltasyon fèt", en:"Consultations completed", es:"Consultas realizadas" },
      communities: { fr:"Communautés desservies", ht:"Kominote ki sèvi", en:"Communities served", es:"Comunidades atendidas" },
      pros: { fr:"Professionnels dévoués", ht:"Pwofesyonèl dedye", en:"Dedicated professionals", es:"Profesionales dedicados" },
      years: { fr:"D'accompagnement", ht:"Ane akonpayman", en:"Years of support", es:"Años de acompañamiento" },
    },

    activities_data: {
      1: {
        tag:  { fr:"Atelier",       ht:"Atelye",      en:"Workshop",    es:"Taller" },
        title:{ fr:"Résilience et Santé Mentale", ht:"Reziyans ak Sante Mantal", en:"Resilience and Mental Health", es:"Resiliencia y Salud Mental" },
        desc: { fr:"Un atelier communautaire sur la gestion du stress post-traumatique dans les communautés haïtiennes.", ht:"Yon atelye kominotè sou jesyon estrès post-twomatik nan kominote ayisyèn yo.", en:"A community workshop on managing post-traumatic stress in Haitian communities.", es:"Un taller comunitario sobre el manejo del estrés postraumático en comunidades haitianas." },
        date: "15 Jan 2025 · Port-au-Prince",
        full_date: { fr:"15 Janvier 2025", ht:"15 Janvye 2025", en:"January 15, 2025", es:"15 de enero de 2025" },
        location: { fr:"Port-au-Prince, Haïti", ht:"Pòtoprens, Ayiti", en:"Port-au-Prince, Haiti", es:"Puerto Príncipe, Haití" },
        duration: { fr:"Journée complète (8h–17h)", ht:"Jounen konplè (8h–17h)", en:"Full day (8am–5pm)", es:"Día completo (8h–17h)" },
        full_desc: {
          fr: `<p>Cet atelier communautaire a réuni plus de 80 participants pour explorer ensemble les outils de résilience face aux traumatismes collectifs et individuels vécus en Haïti.</p><p>Animé par notre équipe de psychologues et de travailleurs sociaux, il a abordé des thèmes comme la gestion du stress post-traumatique, les techniques de régulation émotionnelle, et les ressources communautaires disponibles.</p><p>Les participants ont pu expérimenter des exercices pratiques de pleine conscience, de respiration, et de groupe de parole dans un cadre sûr et bienveillant.</p>`,
          ht: `<p>Atelye kominotè sa a te rasanble plis pase 80 patisipan pou eksplore ansanm zouti reziyans fas ak twoma kolektif ak endividyèl ki viv ann Ayiti.</p><p>Anime pa ekip sikolojis ak travayè sosyal nou yo, li te abòde tèm tankou jesyon estrès post-twomatik, teknik regil emosyon, ak resous kominotè ki disponib.</p><p>Patisipan yo te kapab fè egzèsis pratik sou konsyans, respirasyon, ak gwoup lapawòl nan yon kad ki an sekirite ak byenveyant.</p>`,
          en: `<p>This community workshop brought together more than 80 participants to explore resilience tools for collective and individual traumas experienced in Haiti.</p><p>Led by our team of psychologists and social workers, it addressed topics such as post-traumatic stress management, emotional regulation techniques, and available community resources.</p><p>Participants practiced mindfulness exercises, breathing techniques, and group discussions in a safe and supportive environment.</p>`,
          es: `<p>Este taller comunitario reunió a más de 80 participantes para explorar herramientas de resiliencia ante los traumas colectivos e individuales vividos en Haití.</p><p>Dirigido por nuestro equipo de psicólogos y trabajadores sociales, abordó temas como el manejo del estrés postraumático, técnicas de regulación emocional y recursos comunitarios disponibles.</p><p>Los participantes practicaron ejercicios de atención plena, respiración y grupos de diálogo en un entorno seguro y acogedor.</p>`,
        },
        img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=85",
        hasAppt: true,
      },
      2: {
        tag:  { fr:"Sensibilisation", ht:"Sansibilizasyon", en:"Awareness", es:"Sensibilización" },
        title:{ fr:"Journée Portes Ouvertes", ht:"Jounen Pòt Louvri", en:"Open House Day", es:"Jornada de Puertas Abiertas" },
        desc: { fr:"Rencontre avec nos équipes pour mieux comprendre les services offerts et briser les tabous autour de la santé mentale.", ht:"Rankontre ak ekip nou yo pou pi byen konprann sèvis ki ofri yo epi kraze tabou yo sou sante mantal.", en:"Meet our teams to better understand the services offered and break taboos around mental health.", es:"Encuentro con nuestros equipos para comprender mejor los servicios ofrecidos y romper tabúes sobre la salud mental." },
        date: "10 Déc 2024 · Pétion-Ville",
        full_date: { fr:"10 Décembre 2024", ht:"10 Desanm 2024", en:"December 10, 2024", es:"10 de diciembre de 2024" },
        location: { fr:"Pétion-Ville, Haïti", ht:"Petyonvil, Ayiti", en:"Pétion-Ville, Haiti", es:"Pétion-Ville, Haití" },
        duration: { fr:"10h–16h", ht:"10h–16h", en:"10am–4pm", es:"10h–16h" },
        full_desc: {
          fr: `<p>La Journée Portes Ouvertes de CAPSYS a accueilli plus de 150 visiteurs désireux d'en apprendre davantage sur nos services et sur la santé mentale en général.</p><p>L'événement visait à briser les tabous culturels entourant la santé mentale en Haïti, en offrant un espace de dialogue ouvert avec nos professionnels.</p><p>Des mini-consultations gratuites, des expositions interactives, et des témoignages de clients ont marqué cette journée mémorable.</p>`,
          ht: `<p>Jounen Pòt Louvri CAPSYS te akèyi plis pase 150 vizitè ki te vle aprann plis sou sèvis nou yo ak sante mantal an jeneral.</p><p>Evènman an te vize kraze tabou kiltirèl ki antoure sante mantal ann Ayiti, pandan y ap ofri yon espas dyalòg ouvè ak pwofesyonèl nou yo.</p><p>Konsiltasyon gratis, ekspozisyon entèaktif, ak temwayaj kliyan yo te make jounen memorab sa a.</p>`,
          en: `<p>CAPSYS' Open House Day welcomed more than 150 visitors eager to learn more about our services and mental health in general.</p><p>The event aimed to break cultural taboos surrounding mental health in Haiti, offering an open dialogue space with our professionals.</p><p>Free mini-consultations, interactive exhibitions, and client testimonials marked this memorable day.</p>`,
          es: `<p>La Jornada de Puertas Abiertas de CAPSYS recibió a más de 150 visitantes deseosos de aprender más sobre nuestros servicios y la salud mental en general.</p><p>El evento buscó romper los tabúes culturales en torno a la salud mental en Haití, ofreciendo un espacio de diálogo abierto con nuestros profesionales.</p><p>Mini-consultas gratuitas, exposiciones interactivas y testimonios de clientes marcaron esta jornada memorable.</p>`,
        },
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=85",
        hasAppt: false,
      },
      3: {
        tag:  { fr:"Formation", ht:"Fòmasyon", en:"Training", es:"Formación" },
        title:{ fr:"Formation des Agents de Santé", ht:"Fòmasyon Ajan Sante", en:"Health Worker Training", es:"Formación de Agentes de Salud" },
        desc: { fr:"Formation de première ligne pour les travailleurs communautaires en santé mentale et premiers secours psychologiques.", ht:"Fòmasyon premye liy pou travayè kominotè nan sante mantal ak premye swen sikolojik.", en:"Frontline training for community workers in mental health and psychological first aid.", es:"Formación de primera línea para trabajadores comunitarios en salud mental y primeros auxilios psicológicos." },
        date: "5 Nov 2024 · Jacmel",
        full_date: { fr:"5 Novembre 2024", ht:"5 Novanm 2024", en:"November 5, 2024", es:"5 de noviembre de 2024" },
        location: { fr:"Jacmel, Haïti", ht:"Jakmèl, Ayiti", en:"Jacmel, Haiti", es:"Jacmel, Haití" },
        duration: { fr:"3 jours (3–5 Nov)", ht:"3 jou (3–5 Nov)", en:"3 days (Nov 3–5)", es:"3 días (3–5 Nov)" },
        full_desc: {
          fr: `<p>Cette formation intensive de trois jours a certifié 35 agents de santé communautaire en premiers secours psychologiques.</p><p>Les participants ont appris à identifier les signes de détresse mentale, à offrir un soutien de première ligne, et à orienter les personnes vers des professionnels.</p><p>Cette formation s'inscrit dans notre mission d'étendre l'accès aux soins psychologiques dans les zones rurales d'Haïti.</p>`,
          ht: `<p>Fòmasyon entansif twa jou sa a te sètifye 35 ajan sante kominotè nan premye swen sikolojik.</p><p>Patisipan yo te aprann idantifye siy detrès mantal, ofri sipò premye liy, ak gide moun yo vè pwofesyonèl.</p><p>Fòmasyon sa a fè pati misyon nou pou elaji aksè a swen sikolojik nan zòn riral Ayiti.</p>`,
          en: `<p>This intensive three-day training certified 35 community health workers in psychological first aid.</p><p>Participants learned to identify signs of mental distress, provide frontline support, and refer people to professionals.</p><p>This training is part of our mission to extend access to psychological care in rural Haiti.</p>`,
          es: `<p>Esta formación intensiva de tres días certificó a 35 agentes de salud comunitaria en primeros auxilios psicológicos.</p><p>Los participantes aprendieron a identificar señales de angustia mental, brindar apoyo de primera línea y referir personas a profesionales.</p><p>Esta formación forma parte de nuestra misión de ampliar el acceso a la atención psicológica en las zonas rurales de Haití.</p>`,
        },
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=85",
        hasAppt: false,
      },
      4: {
        tag:  { fr:"Communautaire", ht:"Kominotè", en:"Community", es:"Comunitario" },
        title:{ fr:"Groupes de Parole — Jeunes", ht:"Gwoup Lapawòl — Jèn", en:"Discussion Groups — Youth", es:"Grupos de Diálogo — Jóvenes" },
        desc: { fr:"Programme dédié aux adolescents pour leur offrir un espace d'expression, de soutien et de développement personnel.", ht:"Pwogram dedye pou adolesan pou ba yo yon espas ekspresyon, sipò ak devlopman pèsonèl.", en:"A programme dedicated to teenagers offering a space for expression, support and personal development.", es:"Programa dedicado a los adolescentes para ofrecerles un espacio de expresión, apoyo y desarrollo personal." },
        date: "20 Oct 2024 · Delmas",
        full_date: { fr:"20 Octobre 2024", ht:"20 Oktòb 2024", en:"October 20, 2024", es:"20 de octubre de 2024" },
        location: { fr:"Delmas, Haïti", ht:"Delma, Ayiti", en:"Delmas, Haiti", es:"Delmas, Haití" },
        duration: { fr:"Chaque samedi, 10h–12h", ht:"Chak samdi, 10h–12h", en:"Every Saturday, 10am–12pm", es:"Cada sábado, 10h–12h" },
        full_desc: {
          fr: `<p>Ce programme hebdomadaire crée un espace sûr où les jeunes haïtiens peuvent parler librement de leurs défis, émotions, et aspirations.</p><p>Encadrés par nos psychologues spécialisés, les groupes de parole permettent aux adolescents de développer leur intelligence émotionnelle et leur résilience.</p>`,
          ht: `<p>Pwogram chak semèn sa a kreye yon espas ki an sekirite kote jèn ayisyen yo ka pale lib sou defi, emosyon, ak aspirasyon yo.</p><p>Ankadre pa sikolojis espesyalize nou yo, gwoup lapawòl yo pèmèt adolesan yo devlope entèlijans emosyonèl ak reziyans yo.</p>`,
          en: `<p>This weekly programme creates a safe space where young Haitians can freely discuss their challenges, emotions, and aspirations.</p><p>Guided by our specialist psychologists, the discussion groups allow teenagers to develop their emotional intelligence and resilience.</p>`,
          es: `<p>Este programa semanal crea un espacio seguro donde los jóvenes haitianos pueden hablar libremente sobre sus desafíos, emociones y aspiraciones.</p><p>Guiados por nuestros psicólogos especializados, los grupos de diálogo permiten a los adolescentes desarrollar su inteligencia emocional y resiliencia.</p>`,
        },
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=85",
        hasAppt: false,
      },
      5: {
        tag:  { fr:"Atelier", ht:"Atelye", en:"Workshop", es:"Taller" },
        title:{ fr:"Art-Thérapie et Expression", ht:"Teyapi-Atistik ak Ekspresyon", en:"Art Therapy and Expression", es:"Arte-Terapia y Expresión" },
        desc: { fr:"L'art comme outil de guérison — atelier ouvert à tous utilisant la créativité pour traiter les traumatismes.", ht:"Atistik kòm zouti gerizon — atelye ouvè pou tout moun k ap itilize kreyativite pou trete twoma.", en:"Art as a healing tool — open workshop using creativity to process trauma.", es:"El arte como herramienta de sanación — taller abierto a todos que utiliza la creatividad para procesar traumas." },
        date: "8 Sep 2024 · Cap-Haïtien",
        full_date: { fr:"8 Septembre 2024", ht:"8 Septanm 2024", en:"September 8, 2024", es:"8 de septiembre de 2024" },
        location: { fr:"Cap-Haïtien, Haïti", ht:"Okap, Ayiti", en:"Cap-Haïtien, Haiti", es:"Cap-Haïtien, Haití" },
        duration: { fr:"Weekend complet", ht:"Wikènn konplè", en:"Full weekend", es:"Fin de semana completo" },
        full_desc: {
          fr: `<p>L'art-thérapie est une approche reconnue pour aider les personnes à exprimer et traiter des émotions difficiles à verbaliser.</p><p>Notre atelier au Cap-Haïtien a permis à 40 participants d'explorer la peinture, le dessin, et la musique comme outils de guérison psychologique.</p>`,
          ht: `<p>Teyapi-atistik se yon apwòch rekonèt pou ede moun eksprime ak trete emosyon ki difisil pou vèbalize.</p><p>Atelye nou yo nan Okap te pèmèt 40 patisipan eksplore penti, desen, ak mizik kòm zouti gerizon sikolojik.</p>`,
          en: `<p>Art therapy is a recognised approach to help people express and process emotions that are difficult to verbalise.</p><p>Our workshop in Cap-Haïtien allowed 40 participants to explore painting, drawing, and music as psychological healing tools.</p>`,
          es: `<p>La arte-terapia es un enfoque reconocido para ayudar a las personas a expresar y procesar emociones difíciles de verbalizar.</p><p>Nuestro taller en Cap-Haïtien permitió a 40 participantes explorar la pintura, el dibujo y la música como herramientas de sanación psicológica.</p>`,
        },
        img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1200&q=85",
        hasAppt: false,
      },
      6: {
        tag:  { fr:"Sensibilisation", ht:"Sansibilizasyon", en:"Awareness", es:"Sensibilización" },
        title:{ fr:"Campagne: Briser le Stigma", ht:"Kanpay: Kraze Stigma a", en:"Campaign: Breaking the Stigma", es:"Campaña: Romper el Estigma" },
        desc: { fr:"Campagne de sensibilisation contre la stigmatisation de la maladie mentale dans les communautés haïtiennes.", ht:"Kanpay sansibilizasyon kont stigmatizasyon maladi mantal nan kominote ayisyèn yo.", en:"Awareness campaign against the stigmatisation of mental illness in Haitian communities.", es:"Campaña de sensibilización contra la estigmatización de las enfermedades mentales en comunidades haitianas." },
        date: "1 Août 2024 · Nationwide",
        full_date: { fr:"1 Août 2024", ht:"1 Out 2024", en:"August 1, 2024", es:"1 de agosto de 2024" },
        location: { fr:"À l'échelle nationale", ht:"Nan tout peyi a", en:"Nationwide", es:"A nivel nacional" },
        duration: { fr:"Tout le mois d'août", ht:"Tout mwa Out la", en:"Throughout August", es:"Durante todo agosto" },
        full_desc: {
          fr: `<p>Cette campagne nationale a touché des milliers de personnes à travers les réseaux sociaux, la radio, et des événements communautaires dans 12 départements d'Haïti.</p><p>L'objectif : normaliser les conversations sur la santé mentale et encourager les Haïtiens à chercher de l'aide sans honte.</p>`,
          ht: `<p>Kanpay nasyonal sa a te touche dè milye de moun atravè rezo sosyo, radyo, ak evènman kominotè nan 12 depatman Ayiti.</p><p>Objektif la: nòmalize konvèsasyon sou sante mantal ak ankouraje Ayisyen yo chèche èd san wont.</p>`,
          en: `<p>This national campaign reached thousands of people through social media, radio, and community events across 12 departments of Haiti.</p><p>The goal: normalise conversations about mental health and encourage Haitians to seek help without shame.</p>`,
          es: `<p>Esta campaña nacional llegó a miles de personas a través de redes sociales, radio y eventos comunitarios en 12 departamentos de Haití.</p><p>El objetivo: normalizar las conversaciones sobre salud mental y animar a los haitianos a buscar ayuda sin vergüenza.</p>`,
        },
        img: "https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?w=1200&q=85",
        hasAppt: false,
      },
    },
  },

  // ── INDEX PAGE ──────────────────────────────────────────────────
  index: {
    meta_title: { fr:"CAPSYS – Centre d'Appui Psychologique et Social", ht:"CAPSYS – Sant Sipò Sikolojik ak Sosyal", en:"CAPSYS – Center for Psychological and Social Support", es:"CAPSYS – Centro de Apoyo Psicológico y Social" },
    hero_eyebrow: { fr:"Centre d'Appui Psychologique et Social", ht:"Sant Sipò Sikolojik ak Sosyal", en:"Center for Psychological and Social Support", es:"Centro de Apoyo Psicológico y Social" },
    hero_title1: { fr:"Prendre soin de", ht:"Pran swen", en:"Caring for the", es:"Cuidando el" },
    hero_title2: { fr:"l'âme haïtienne", ht:"nanm ayisyen an", en:"Haitian soul", es:"alma haitiana" },
    hero_sub: { fr:"Nous offrons un soutien psychologique et social ancré dans la réalité et la culture haïtienne — parce que chaque personne mérite d'être entendue, comprise, et accompagnée.", ht:"Nou ofri sipò sikolojik ak sosyal ki anrasinen nan reyalite ak kilti ayisyèn — paske chak moun merite yo tande li, konprann li, epi akonpaye li.", en:"We offer psychological and social support rooted in Haitian reality and culture — because every person deserves to be heard, understood, and accompanied.", es:"Ofrecemos apoyo psicológico y social arraigado en la realidad y la cultura haitiana — porque toda persona merece ser escuchada, comprendida y acompañada." },
    btn_appt:   { fr:"Prendre un rendez-vous", ht:"Pran yon randevou", en:"Book an Appointment", es:"Solicitar una cita" },
    btn_about:  { fr:"Découvrir CAPSYS",       ht:"Dekouvri CAPSYS",   en:"Discover CAPSYS",     es:"Descubrir CAPSYS" },
    scroll:     { fr:"Défiler",               ht:"Woule",             en:"Scroll",             es:"Desplazar" },

    services_tag:   { fr:"Nos Services", ht:"Sèvis Nou", en:"Our Services", es:"Nuestros Servicios" },
    services_title: { fr:"Un soutien adapté\nà chaque besoin", ht:"Sipò ki adapte\npou chak bezwen", en:"Support tailored\nto every need", es:"Apoyo adaptado\na cada necesidad" },
    s1_title: { fr:"Psychologie Clinique", ht:"Sikoloji Klinik",  en:"Clinical Psychology", es:"Psicología Clínica" },
    s1_desc:  { fr:"Évaluation, thérapie individuelle et suivi psychologique par des professionnels certifiés, dans un espace sûr et confidentiel.", ht:"Evalyasyon, terapi endividyèl ak swivi sikolojik pa pwofesyonèl sètifye, nan yon espas ki an sekirite ak konfidansyèl.", en:"Assessment, individual therapy and psychological follow-up by certified professionals, in a safe and confidential space.", es:"Evaluación, terapia individual y seguimiento psicológico por profesionales certificados, en un espacio seguro y confidencial." },
    s2_title: { fr:"Travail Social",        ht:"Travay Sosyal",    en:"Social Work",         es:"Trabajo Social" },
    s2_desc:  { fr:"Accompagnement social, aide aux démarches administratives, connexion aux ressources communautaires et soutien aux familles.", ht:"Akonpayman sosyal, èd nan demach administratif, koneksyon ak resous kominotè ak sipò pou fanmi.", en:"Social support, assistance with administrative procedures, connection to community resources and family support.", es:"Acompañamiento social, ayuda en gestiones administrativas, conexión a recursos comunitarios y apoyo a familias." },
    s3_title: { fr:"Ateliers Collectifs",   ht:"Atelye Kolektif",  en:"Group Workshops",     es:"Talleres Grupales" },
    s3_desc:  { fr:"Groupes de parole, ateliers de résilience et programmes communautaires pour renforcer le bien-être collectif.", ht:"Gwoup lapawòl, atelye reziyans ak pwogram kominotè pou ranfòse byennèt kolektif la.", en:"Discussion groups, resilience workshops and community programmes to strengthen collective well-being.", es:"Grupos de diálogo, talleres de resiliencia y programas comunitarios para fortalecer el bienestar colectivo." },
    s_link_consult: { fr:"Consulter →",         ht:"Konsilte →",        en:"Consult →",           es:"Consultar →" },
    s_link_act:     { fr:"Voir les activités →", ht:"Wè aktivite yo →",  en:"See activities →",    es:"Ver actividades →" },

    act_tag:   { fr:"Activités Récentes",       ht:"Aktivite Resan",     en:"Recent Activities",   es:"Actividades Recientes" },
    act_title: { fr:"Ce que nous faisons\nsur le terrain", ht:"Sa nou fè\nsou teren an", en:"What we do\nin the field", es:"Lo que hacemos\nen el terreno" },
    act_all:   { fr:"Toutes les activités",     ht:"Tout aktivite yo",   en:"All activities",      es:"Todas las actividades" },

    testi_tag:   { fr:"Témoignages",      ht:"Temwayaj",     en:"Testimonials",   es:"Testimonios" },
    testi_title: { fr:"Des vies transformées", ht:"Lavi ki chanje", en:"Lives transformed", es:"Vidas transformadas" },
    t1: { fr:"Grâce à CAPSYS, j'ai appris à gérer mon anxiété. Le psychologue m'a aidé à comprendre mes émotions dans un cadre culturel qui me ressemble.", ht:"Gras ak CAPSYS, mwen te aprann jere ansyete mwen. Sikolojis la te ede m konprann emosyon m nan yon kad kiltirèl ki sanble avèk mwen.", en:"Thanks to CAPSYS, I learned to manage my anxiety. The psychologist helped me understand my emotions in a cultural framework that resonates with me.", es:"Gracias a CAPSYS, aprendí a manejar mi ansiedad. El psicólogo me ayudó a entender mis emociones en un marco cultural con el que me identifico." },
    t1_name: "Marie-Josée T.", t1_role: { fr:"Cliente, Port-au-Prince", ht:"Kliyan, Pòtoprens", en:"Client, Port-au-Prince", es:"Clienta, Puerto Príncipe" },
    t2: { fr:"Le travail social de CAPSYS nous a aidés à reconstruire notre famille après une période très difficile. Leur accompagnement a été essentiel.", ht:"Travay sosyal CAPSYS te ede nou rekonstri fanmi nou apre yon peryòd ki trè difisil. Akonpayman yo te esansyèl.", en:"CAPSYS' social work helped us rebuild our family after a very difficult period. Their support was essential.", es:"El trabajo social de CAPSYS nos ayudó a reconstruir nuestra familia después de un período muy difícil. Su acompañamiento fue esencial." },
    t2_name: "Jean-Robert M.", t2_role: { fr:"Client, Jacmel", ht:"Kliyan, Jakmèl", en:"Client, Jacmel", es:"Cliente, Jacmel" },
    t3: { fr:"Les ateliers collectifs m'ont redonné confiance. Je me sentais seul, mais CAPSYS m'a rappelé que je fais partie d'une communauté forte.", ht:"Atelye kolektif yo te ban m konfyans ankò. Mwen te santi m pou kont mwen, men CAPSYS te raple m ke mwen fè pati yon kominote ki fò.", en:"The group workshops restored my confidence. I felt alone, but CAPSYS reminded me that I am part of a strong community.", es:"Los talleres grupales me devolvieron la confianza. Me sentía solo, pero CAPSYS me recordó que formo parte de una comunidad fuerte." },
    t3_name: "Christelle N.", t3_role: { fr:"Participante, Pétion-Ville", ht:"Patisipan, Petyonvil", en:"Participant, Pétion-Ville", es:"Participante, Pétion-Ville" },

    donate_title: { fr:"Soutenez la santé mentale en Haïti", ht:"Sipòte sante mantal ann Ayiti", en:"Support mental health in Haiti", es:"Apoya la salud mental en Haití" },
    donate_desc:  { fr:"Votre don permet à CAPSYS d'étendre ses services aux communautés les plus vulnérables. Chaque contribution fait une différence réelle.", ht:"Don ou pèmèt CAPSYS elaji sèvis li yo nan kominote ki pi vilnerab yo. Chak kontribisyon fè yon diferans reyèl.", en:"Your donation allows CAPSYS to extend its services to the most vulnerable communities. Every contribution makes a real difference.", es:"Su donación permite a CAPSYS extender sus servicios a las comunidades más vulnerables. Cada contribución marca una diferencia real." },
    donate_btn:   { fr:"Faire un don maintenant", ht:"Fè yon don kounye a", en:"Donate Now", es:"Donar ahora" },
  },

  // ── ABOUT PAGE ──────────────────────────────────────────────────
  about: {
    meta_title: { fr:"À propos – CAPSYS", ht:"Sou nou – CAPSYS", en:"About – CAPSYS", es:"Nosotros – CAPSYS" },
    header_tag: { fr:"Qui sommes-nous", ht:"Ki nou ye", en:"Who we are", es:"Quiénes somos" },
    header_h1:  { fr:"À propos de CAPSYS", ht:"Sou CAPSYS", en:"About CAPSYS", es:"Sobre CAPSYS" },
    header_sub: { fr:"Fondé avec la conviction que chaque Haïtien mérite un accès à des soins psychologiques et sociaux de qualité.", ht:"Fonde ak konviksyon ke chak Ayisyen merite aksè a swen sikolojik ak sosyal de kalite.", en:"Founded on the conviction that every Haitian deserves access to quality psychological and social care.", es:"Fundado con la convicción de que todo haitiano merece acceso a una atención psicológica y social de calidad." },

    history_tag:   { fr:"Notre histoire",        ht:"Istwa nou",         en:"Our story",           es:"Nuestra historia" },
    history_title: { fr:"Nés de la nécessité,",  ht:"Ne nan nesesite,",  en:"Born from necessity,", es:"Nacidos de la necesidad," },
    history_em:    { fr:"portés par la conviction", ht:"pote pa konviksyon", en:"driven by conviction", es:"impulsados por la convicción" },
    history_p1:    { fr:"CAPSYS a été fondé en 2022 par une équipe de psychologues et de travailleurs sociaux haïtiens face au constat alarmant : la santé mentale en Haïti est gravement sous-investie, et pourtant les besoins sont immenses.", ht:"CAPSYS te fonde an 2022 pa yon ekip sikolojis ak travayè sosyal ayisyèn fas ak konsta alaman: sante mantal ann Ayiti manke envestisman grav, men bezwen yo imens.", en:"CAPSYS was founded in 2022 by a team of Haitian psychologists and social workers in response to an alarming reality: mental health in Haiti is severely under-resourced, yet the needs are immense.", es:"CAPSYS fue fundado en 2022 por un equipo de psicólogos y trabajadores sociales haitianos ante una realidad alarmante: la salud mental en Haití está gravemente desatendida, pero las necesidades son inmensas." },
    history_p2:    { fr:"Face aux crises répétées — catastrophes naturelles, instabilité sociale, pauvreté — des milliers d'Haïtiens portent des traumatismes non traités. CAPSYS est là pour changer cela.", ht:"Fas ak kriz repete yo — katastwòf natirèl, enStabilite sosyal, povrete — dè milye Ayisyen pote twoma ki pa trete. CAPSYS la pou chanje sa.", en:"Faced with repeated crises — natural disasters, social instability, poverty — thousands of Haitians carry untreated trauma. CAPSYS is here to change that.", es:"Ante las crisis repetidas — desastres naturales, inestabilidad social, pobreza — miles de haitianos cargan traumas no tratados. CAPSYS está aquí para cambiar eso." },

    mission_title: { fr:"Notre Mission",     ht:"Misyon Nou",      en:"Our Mission",     es:"Nuestra Misión" },
    mission_desc:  { fr:"Offrir des services psychologiques et sociaux accessibles, culturellement adaptés et de haute qualité aux individus, familles et communautés d'Haïti — en particulier aux plus vulnérables.", ht:"Ofri sèvis sikolojik ak sosyal ki aksesib, adepte kiltirèlman ak wo kalite pou endividi, fanmi ak kominote ann Ayiti — sitou pou pi vilnerab yo.", en:"To provide accessible, culturally adapted, high-quality psychological and social services to individuals, families and communities in Haiti — particularly the most vulnerable.", es:"Ofrecer servicios psicológicos y sociales accesibles, culturalmente adaptados y de alta calidad a individuos, familias y comunidades de Haití — en particular a los más vulnerables." },
    vision_title:  { fr:"Notre Vision",      ht:"Vizyon Nou",      en:"Our Vision",      es:"Nuestra Visión" },
    vision_desc:   { fr:"Un Haïti où la santé mentale n'est plus un tabou, où chaque personne peut accéder à un soutien psychologique digne, et où les communautés sont résilientes face aux défis collectifs.", ht:"Yon Ayiti kote sante mantal pa yon tabou ankò, kote chak moun ka jwenn sipò sikolojik diy, epi kote kominote yo rezistan fas ak defi kolektif yo.", en:"A Haiti where mental health is no longer a taboo, where every person can access dignified psychological support, and where communities are resilient in the face of collective challenges.", es:"Un Haití donde la salud mental ya no sea un tabú, donde cada persona pueda acceder a un apoyo psicológico digno y donde las comunidades sean resilientes ante los desafíos colectivos." },
    who_title:     { fr:"Qui nous servons",  ht:"Kiyès nou sèvi",  en:"Who we serve",    es:"A quiénes servimos" },
    who_desc:      { fr:"Individus en détresse psychologique, familles, survivants de traumatismes, adolescents et jeunes adultes, travailleurs communautaires, et organisations locales nécessitant un soutien professionnel.", ht:"Endividi nan detrès sikolojik, fanmi, sivivan twoma, adolesan ak jèn adilt, travayè kominotè, ak òganizasyon lokal ki bezwen sipò pwofesyonèl.", en:"Individuals in psychological distress, families, trauma survivors, adolescents and young adults, community workers, and local organisations in need of professional support.", es:"Individuos en angustia psicológica, familias, sobrevivientes de traumas, adolescentes y adultos jóvenes, trabajadores comunitarios y organizaciones locales que necesitan apoyo profesional." },
    values_title:  { fr:"Nos valeurs",       ht:"Valè nou",        en:"Our values",      es:"Nuestros valores" },
    values_desc:   { fr:"Dignité humaine · Confidentialité · Ancrage culturel · Accessibilité · Excellence professionnelle · Collaboration communautaire · Innovation sociale.", ht:"Diyite imen · Konfidansyalite · Ankadreman kiltirèl · Aksesibilite · Ekselans pwofesyonèl · Kolaborasyon kominotè · Inovasyon sosyal.", en:"Human dignity · Confidentiality · Cultural grounding · Accessibility · Professional excellence · Community collaboration · Social innovation.", es:"Dignidad humana · Confidencialidad · Anclaje cultural · Accesibilidad · Excelencia profesional · Colaboración comunitaria · Innovación social." },

    team_tag:   { fr:"Notre Équipe",       ht:"Ekip Nou",        en:"Our Team",        es:"Nuestro Equipo" },
    team_title: { fr:"Des professionnels dévoués", ht:"Pwofesyonèl dedye", en:"Dedicated professionals", es:"Profesionales dedicados" },
    team_sub:   { fr:"Une équipe multidisciplinaire unie par la passion d'améliorer le bien-être mental en Haïti.", ht:"Yon ekip miltidisiplinè ini pa pasyon pou amelyore byennèt mantal ann Ayiti.", en:"A multidisciplinary team united by the passion to improve mental well-being in Haiti.", es:"Un equipo multidisciplinario unido por la pasión de mejorar el bienestar mental en Haití." },

    cta_title: { fr:"Rejoignez notre mission", ht:"Rantre nan misyon nou", en:"Join our mission", es:"Únase a nuestra misión" },
    cta_desc:  { fr:"Que ce soit en prenant un rendez-vous, en participant à nos activités, ou en faisant un don — chaque geste compte.", ht:"Kèlkeswa si se pran randevou, patisipe nan aktivite nou yo, oswa fè yon don — chak jès konte.", en:"Whether it is booking an appointment, participating in our activities, or making a donation — every gesture counts.", es:"Ya sea reservando una cita, participando en nuestras actividades o haciendo una donación — cada gesto cuenta." },
    cta_btn1:  { fr:"Consulter un professionnel", ht:"Konsilte yon pwofesyonèl", en:"Consult a professional", es:"Consultar a un profesional" },
    cta_btn2:  { fr:"Faire un don",             ht:"Fè yon don",              en:"Donate",               es:"Donar" },
  },

  // ── ACTIVITIES PAGE ──────────────────────────────────────────────
  activities: {
    meta_title: { fr:"Activités – CAPSYS",    ht:"Aktivite – CAPSYS",    en:"Activities – CAPSYS",   es:"Actividades – CAPSYS" },
    header_tag: { fr:"Nos Activités",        ht:"Aktivite Nou",        en:"Our Activities",       es:"Nuestras Actividades" },
    header_h1:  { fr:"Initiatives & Événements", ht:"Inisyativ & Evènman", en:"Initiatives & Events", es:"Iniciativas y Eventos" },
    header_sub: { fr:"Ateliers, formations, et programmes communautaires pour promouvoir le bien-être psychologique et social en Haïti.", ht:"Atelye, fòmasyon, ak pwogram kominotè pou pwomouvoir byennèt sikolojik ak sosyal ann Ayiti.", en:"Workshops, training, and community programmes to promote psychological and social well-being in Haiti.", es:"Talleres, formaciones y programas comunitarios para promover el bienestar psicológico y social en Haití." },
    filter_all: { fr:"Tous",             ht:"Tout",           en:"All",           es:"Todo" },
    filter_w:   { fr:"Ateliers",         ht:"Atelye",         en:"Workshops",     es:"Talleres" },
    filter_t:   { fr:"Formations",       ht:"Fòmasyon",       en:"Training",      es:"Formaciones" },
    filter_a:   { fr:"Sensibilisation",  ht:"Sansibilizasyon",en:"Awareness",     es:"Sensibilización" },
    filter_c:   { fr:"Communautaire",    ht:"Kominotè",       en:"Community",     es:"Comunitario" },
  },

  // ── ACTIVITY DETAIL ──────────────────────────────────────────────
  detail: {
    back:     { fr:"← Retour aux activités", ht:"← Retounen nan aktivite yo", en:"← Back to activities", es:"← Volver a actividades" },
    detail_h: { fr:"Détails de l'activité",  ht:"Detay aktivite a",           en:"Activity details",     es:"Detalles de la actividad" },
    date_l:   { fr:"Date",    ht:"Dat",      en:"Date",    es:"Fecha" },
    loc_l:    { fr:"Lieu",    ht:"Kote",     en:"Location",es:"Lugar" },
    dur_l:    { fr:"Durée",   ht:"Dire",     en:"Duration",es:"Duración" },
    cat_l:    { fr:"Catégorie",ht:"Kategori",en:"Category",es:"Categoría" },
    appt_btn: { fr:"Prendre un rendez-vous lié", ht:"Pran yon randevou asosye", en:"Book a related appointment", es:"Reservar una cita relacionada" },
    all_btn:  { fr:"← Toutes les activités", ht:"← Tout aktivite yo", en:"← All activities", es:"← Todas las actividades" },
    related_tag:  { fr:"À découvrir",     ht:"Pou dekouvri",   en:"Discover more",  es:"Para descubrir" },
    related_title:{ fr:"Autres activités",ht:"Lòt aktivite yo",en:"Other activities",es:"Otras actividades" },
  },

  // ── APPOINTMENTS PAGE ──────────────────────────────────────────
  appt: {
    meta_title: { fr:"Rendez-vous – CAPSYS",    ht:"Randevou – CAPSYS",    en:"Appointments – CAPSYS", es:"Citas – CAPSYS" },
    header_tag: { fr:"Prise de Rendez-vous",   ht:"Pran Randevou",       en:"Book an Appointment",  es:"Reservar una Cita" },
    header_h1:  { fr:"Réservez votre consultation", ht:"Rezève konsiltasyon ou", en:"Book your consultation", es:"Reserve su consulta" },
    header_sub: { fr:"Choisissez le type de professionnel, sélectionnez vos disponibilités, et réglez en ligne en toute sécurité.", ht:"Chwazi tip pwofesyonèl, chwazi disponibilite ou, epi peye sou entènèt an tout sekirite.", en:"Choose the type of professional, select your availability, and pay online securely.", es:"Elija el tipo de profesional, seleccione su disponibilidad y pague en línea de forma segura." },
    form_h3:    { fr:"Votre demande de consultation", ht:"Demann konsiltasyon ou", en:"Your consultation request", es:"Su solicitud de consulta" },
    step1:      { fr:"1. Type de professionnel", ht:"1. Tip pwofesyonèl",  en:"1. Type of professional",  es:"1. Tipo de profesional" },
    t_psy_h:    { fr:"Psychologue",              ht:"Sikolojis",           en:"Psychologist",             es:"Psicólogo" },
    t_psy_s:    { fr:"Thérapie individuelle",    ht:"Terapi endividyèl",   en:"Individual therapy",       es:"Terapia individual" },
    t_soc_h:    { fr:"Travailleur Social",       ht:"Travayè Sosyal",      en:"Social Worker",            es:"Trabajador Social" },
    t_soc_s:    { fr:"Soutien & accompagnement", ht:"Sipò & akonpayman",   en:"Support & accompaniment",  es:"Apoyo y acompañamiento" },
    step2:      { fr:"2. Vos informations",      ht:"2. Enfòmasyon ou",    en:"2. Your information",      es:"2. Su información" },
    l_fname:    { fr:"Prénom *",                 ht:"Prenon *",            en:"First name *",             es:"Nombre *" },
    l_lname:    { fr:"Nom de famille *",         ht:"Siyati *",            en:"Last name *",              es:"Apellido *" },
    l_email:    { fr:"Email *",                  ht:"Imèl *",              en:"Email *",                  es:"Correo *" },
    l_phone:    { fr:"Téléphone *",              ht:"Telefòn *",           en:"Phone *",                  es:"Teléfono *" },
    l_reason:   { fr:"Motif de la consultation", ht:"Rezon konsiltasyon",  en:"Reason for consultation",  es:"Motivo de la consulta" },
    p_reason:   { fr:"Décrivez brièvement la raison de votre consultation (optionnel — tout reste confidentiel)...", ht:"Dekri kout koz konsiltasyon ou (opsyonèl — tout rete konfidansyèl)...", en:"Briefly describe the reason for your consultation (optional — all remains confidential)...", es:"Describa brevemente el motivo de su consulta (opcional — todo permanece confidencial)..." },
    step3:      { fr:"3. Date & heure",          ht:"3. Dat & lè",         en:"3. Date & time",           es:"3. Fecha y hora" },
    l_date:     { fr:"Date souhaitée *",         ht:"Dat ou vle *",        en:"Preferred date *",         es:"Fecha deseada *" },
    l_time:     { fr:"Heure préférée *",         ht:"Lè ou prefere *",     en:"Preferred time *",         es:"Hora preferida *" },
    p_time:     { fr:"Choisir un créneau",       ht:"Chwazi yon peryòd",   en:"Choose a slot",            es:"Elegir un horario" },
    l_mode:     { fr:"Mode de consultation",     ht:"Mòd konsiltasyon",    en:"Consultation mode",        es:"Modalidad de consulta" },
    m1:         { fr:"En présentiel (Port-au-Prince)", ht:"An pèsòn (Pòtoprens)", en:"In person (Port-au-Prince)", es:"Presencial (Puerto Príncipe)" },
    m2:         { fr:"En ligne (vidéo)",         ht:"Sou entènèt (videyo)",en:"Online (video)",           es:"En línea (vídeo)" },
    m3:         { fr:"Par téléphone",            ht:"Pa telefòn",          en:"By phone",                 es:"Por teléfono" },
    step4:      { fr:"4. Paiement de la consultation", ht:"4. Peman konsiltasyon", en:"4. Consultation payment", es:"4. Pago de la consulta" },
    per_session:{ fr:"par séance (≈ $11 USD)",  ht:"pa seyans (≈ $11 USD)",en:"per session (≈ $11 USD)", es:"por sesión (≈ $11 USD)" },
    btn_submit: { fr:"Confirmer et payer le rendez-vous", ht:"Konfime epi peye randevou a", en:"Confirm and pay for the appointment", es:"Confirmar y pagar la cita" },
    secure_note:{ fr:"🔒 Paiement sécurisé · Remboursable jusqu'à 24h avant la séance · Confidentiel", ht:"🔒 Peman an sekirite · Ranbousab jiska 24h anvan seyans · Konfidansyèl", en:"🔒 Secure payment · Refundable up to 24h before the session · Confidential", es:"🔒 Pago seguro · Reembolsable hasta 24h antes de la sesión · Confidencial" },
    sidebar_h:  { fr:"Ce qui vous attend",  ht:"Sa k ap tann ou",    en:"What awaits you",    es:"Lo que le espera" },
    feat1_h:    { fr:"Espace confidentiel", ht:"Espas konfidansyèl", en:"Confidential space",  es:"Espacio confidencial" },
    feat1_p:    { fr:"Toutes les séances sont protégées par le secret professionnel.", ht:"Tout seyans yo pwoteje pa sekrè pwofesyonèl.", en:"All sessions are protected by professional secrecy.", es:"Todas las sesiones están protegidas por el secreto profesional." },
    feat2_h:    { fr:"Ancré dans la culture", ht:"Anrasinen nan kilti a", en:"Culturally grounded", es:"Arraigado en la cultura" },
    feat2_p:    { fr:"Nos professionnels comprennent la réalité haïtienne.", ht:"Pwofesyonèl nou yo konprann reyalite ayisyèn nan.", en:"Our professionals understand the Haitian reality.", es:"Nuestros profesionales comprenden la realidad haitiana." },
    feat3_h:    { fr:"Flexible & accessible", ht:"Fleksib & aksesib",    en:"Flexible & accessible",es:"Flexible y accesible" },
    feat3_p:    { fr:"Consultations en présentiel, vidéo, ou téléphone.", ht:"Konsiltasyon an pèsòn, videyo, oswa telefòn.", en:"Consultations in person, video, or phone.", es:"Consultas presenciales, por vídeo o teléfono." },
    feat4_h:    { fr:"Tarifs accessibles",   ht:"Pri aksesib",         en:"Accessible pricing",  es:"Precios accesibles" },
    feat4_p:    { fr:"Réductions disponibles pour les personnes dans le besoin.", ht:"Rediksyon disponib pou moun ki nan bezwen.", en:"Reductions available for those in need.", es:"Descuentos disponibles para personas necesitadas." },
    urgent_h:   { fr:"Besoin d'une aide urgente?", ht:"Bezwen èd ijan?", en:"Need urgent help?",    es:"¿Necesita ayuda urgente?" },
    urgent_p:   { fr:"Si vous traversez une crise, appelez-nous directement ou envoyez un message d'urgence.", ht:"Si w nan yon kriz, rele nou dirèkteman oswa voye yon mesaj ijans.", en:"If you are going through a crisis, call us directly or send an emergency message.", es:"Si atraviesa una crisis, llámenos directamente o envíe un mensaje de emergencia." },
    urgent_btn: { fr:"📞 Ligne d'urgence",   ht:"📞 Liy ijans",       en:"📞 Emergency line",   es:"📞 Línea de emergencia" },
    modal_icon: "📅",
    modal_h:    { fr:"Rendez-vous confirmé!", ht:"Randevou konfime!", en:"Appointment confirmed!", es:"¡Cita confirmada!" },
    modal_p:    { fr:"Votre rendez-vous a été enregistré. Vous recevrez une confirmation par email sous peu.", ht:"Randevou ou anrejistre. Ou pral resevwa yon konfirmasyon pa imèl byento.", en:"Your appointment has been recorded. You will receive an email confirmation shortly.", es:"Su cita ha sido registrada. Recibirá una confirmación por correo electrónico en breve." },
    modal_close:{ fr:"Fermer", ht:"Fèmen", en:"Close", es:"Cerrar" },
  },

  // ── CONTACT PAGE ──────────────────────────────────────────────
  contact: {
    meta_title: { fr:"Contact – CAPSYS",      ht:"Kontak – CAPSYS",     en:"Contact – CAPSYS",     es:"Contacto – CAPSYS" },
    header_tag: { fr:"Nous contacter",       ht:"Kontakte nou",       en:"Contact us",           es:"Contáctenos" },
    header_h1:  { fr:"Entrons en contact",   ht:"Ann antre an kontak", en:"Let's get in touch",  es:"Pongámonos en contacto" },
    header_sub: { fr:"Nous sommes disponibles pour répondre à vos questions, ou pour vous guider vers les services qui correspondent à vos besoins.", ht:"Nou disponib pou reponn kesyon ou yo, oswa pou gide ou vè sèvis ki koresponn ak bezwen ou.", en:"We are available to answer your questions, or to guide you towards the services that best suit your needs.", es:"Estamos disponibles para responder sus preguntas o guiarle hacia los servicios que mejor se adapten a sus necesidades." },
    coord_tag:  { fr:"Nos coordonnées",      ht:"Enfòmasyon kontak nou",en:"Our contact details", es:"Nuestros datos de contacto" },
    coord_h2:   { fr:"Nous sommes",          ht:"Nou la",             en:"We are",               es:"Estamos" },
    coord_em:   { fr:"à votre écoute",       ht:"ap koute ou",        en:"listening",            es:"escuchándole" },
    addr_h:     { fr:"Adresse",              ht:"Adrès",              en:"Address",              es:"Dirección" },
    addr_p:     { fr:"Port-au-Prince, Haïti\nRue de la Résilience, Pétion-Ville", ht:"Pòtoprens, Ayiti\nRi Reziyans, Petyonvil", en:"Port-au-Prince, Haiti\nRue de la Résilience, Pétion-Ville", es:"Puerto Príncipe, Haití\nRue de la Résilience, Pétion-Ville" },
    phone_h:    { fr:"Téléphone",            ht:"Telefòn",            en:"Phone",                es:"Teléfono" },
    phone_hours:{ fr:"Lun–Ven, 8h–17h",     ht:"Lendi–Vandredi, 8h–17h",en:"Mon–Fri, 8am–5pm", es:"Lun–Vie, 8h–17h" },
    email_h:    { fr:"Email",               ht:"Imèl",               en:"Email",                es:"Correo" },
    email_delay:{ fr:"Réponse sous 48h",    ht:"Repons anba 48h",    en:"Response within 48h",  es:"Respuesta en 48h" },
    hours_h:    { fr:"Heures d'ouverture",  ht:"Orè ouvertu",        en:"Opening hours",        es:"Horario de atención" },
    hours_p:    { fr:"Lundi–Vendredi: 8h00–17h00\nSamedi: 9h00–13h00\nDimanche: Fermé", ht:"Lendi–Vandredi: 8h00–17h00\nSamdi: 9h00–13h00\nDimanche: Fèmen", en:"Monday–Friday: 8:00am–5:00pm\nSaturday: 9:00am–1:00pm\nSunday: Closed", es:"Lunes–Viernes: 8:00–17:00\nSábado: 9:00–13:00\nDomingo: Cerrado" },
    urg_h:      { fr:"Urgence psychologique?", ht:"Ijans sikolojik?", en:"Psychological emergency?", es:"¿Emergencia psicológica?" },
    urg_p:      { fr:"Si vous traversez une crise ou avez besoin d'aide immédiate, appelez notre ligne d'urgence disponible 24h/24.", ht:"Si w nan yon kriz oswa bezwen èd imedya, rele liy ijans nou an ki disponib 24h/24.", en:"If you are going through a crisis or need immediate help, call our emergency line available 24/7.", es:"Si atraviesa una crisis o necesita ayuda inmediata, llame a nuestra línea de emergencia disponible 24/7." },
    urg_btn:    { fr:"📞 Ligne d'urgence: +509 0000 0000", ht:"📞 Liy ijans: +509 0000 0000", en:"📞 Emergency line: +509 0000 0000", es:"📞 Línea de emergencia: +509 0000 0000" },
    social_h:   { fr:"Retrouvez-nous sur",  ht:"Jwenn nou sou",      en:"Find us on",           es:"Encuéntrenos en" },
    form_h3:    { fr:"Envoyez-nous un message", ht:"Voye nou yon mesaj", en:"Send us a message", es:"Envíenos un mensaje" },
    form_sub:   { fr:"Toutes les communications sont traitées de façon confidentielle.", ht:"Tout kominikasyon yo trete konfidansyèlman.", en:"All communications are handled confidentially.", es:"Todas las comunicaciones se gestionan de forma confidencial." },
    l_fname:    { fr:"Prénom *",   ht:"Prenon *",  en:"First name *",es:"Nombre *" },
    l_lname:    { fr:"Nom *",      ht:"Siyati *",  en:"Last name *", es:"Apellido *" },
    l_email:    { fr:"Email *",    ht:"Imèl *",    en:"Email *",     es:"Correo *" },
    l_phone:    { fr:"Téléphone",  ht:"Telefòn",   en:"Phone",       es:"Teléfono" },
    l_subject:  { fr:"Sujet",      ht:"Sijè",      en:"Subject",     es:"Asunto" },
    sub_opts:   {
      fr:["Renseignements généraux","Prise de rendez-vous","Demande de partenariat","Question sur un don","Urgence psychologique","Autre"],
      ht:["Enfòmasyon jeneral","Pran randevou","Demann patenarya","Kesyon sou yon don","Ijans sikolojik","Lòt"],
      en:["General enquiries","Book an appointment","Partnership request","Donation enquiry","Psychological emergency","Other"],
      es:["Información general","Reservar una cita","Solicitud de asociación","Consulta sobre donación","Emergencia psicológica","Otro"],
    },
    l_msg:      { fr:"Message *",  ht:"Mesaj *",   en:"Message *",   es:"Mensaje *" },
    p_msg:      { fr:"Comment pouvons-nous vous aider?", ht:"Kijan nou ka ede ou?", en:"How can we help you?", es:"¿Cómo podemos ayudarle?" },
    privacy:    { fr:"J'accepte que mes informations soient utilisées pour traiter ma demande, en conformité avec la politique de confidentialité de CAPSYS.", ht:"Mwen aksepte ke enfòmasyon m yo itilize pou trete demann mwen, konfòmeman ak politik konfidansyalite CAPSYS.", en:"I agree that my information will be used to process my request, in accordance with CAPSYS' privacy policy.", es:"Acepto que mi información sea utilizada para tramitar mi solicitud, de conformidad con la política de privacidad de CAPSYS." },
    btn_submit: { fr:"Envoyer le message →", ht:"Voye mesaj la →", en:"Send message →", es:"Enviar mensaje →" },
    modal_icon: "✅",
    modal_h:    { fr:"Message envoyé!",   ht:"Mesaj voye!",   en:"Message sent!",   es:"¡Mensaje enviado!" },
    modal_p:    { fr:"Nous vous répondrons dans les 48 heures. Merci de nous avoir contactés.", ht:"Nou pral reponn ou nan 48 èdtan. Mèsi pou kontakte nou.", en:"We will respond within 48 hours. Thank you for contacting us.", es:"Le responderemos en 48 horas. Gracias por contactarnos." },
    modal_close:{ fr:"Fermer", ht:"Fèmen", en:"Close", es:"Cerrar" },
  },

  // ── DONATE PAGE ──────────────────────────────────────────────
  donate: {
    meta_title: { fr:"Faire un Don – CAPSYS",  ht:"Fè yon Don – CAPSYS", en:"Donate – CAPSYS",     es:"Donar – CAPSYS" },
    header_tag: { fr:"❤ Soutenir CAPSYS",     ht:"❤ Sipòte CAPSYS",    en:"❤ Support CAPSYS",    es:"❤ Apoyar CAPSYS" },
    header_h1a: { fr:"Soutenez la santé",    ht:"Sipòte sante",       en:"Support mental",      es:"Apoya la salud" },
    header_em:  { fr:"mentale en Haïti",     ht:"mantal ann Ayiti",   en:"health in Haiti",     es:"mental en Haití" },
    header_sub: { fr:"Chaque don, grand ou petit, contribue à rendre les soins psychologiques accessibles à ceux qui en ont le plus besoin.", ht:"Chak don, gran oswa piti, kontribye pou rann swen sikolojik aksesib pou moun ki bezwen yo plis.", en:"Every donation, large or small, helps make psychological care accessible to those who need it most.", es:"Cada donación, grande o pequeña, contribuye a hacer la atención psicológica accesible para quienes más la necesitan." },
    form_h3:    { fr:"Votre contribution",   ht:"Kontribisyon ou",    en:"Your contribution",   es:"Su contribución" },
    amount_tag: { fr:"Choisissez un montant (USD)", ht:"Chwazi yon montan (USD)", en:"Choose an amount (USD)", es:"Elija un monto (USD)" },
    custom_btn: { fr:"Autre",               ht:"Lòt",                en:"Other",               es:"Otro" },
    custom_l:   { fr:"Montant personnalisé (USD)", ht:"Montan pèsonalize (USD)", en:"Custom amount (USD)", es:"Monto personalizado (USD)" },
    info_tag:   { fr:"Vos informations",    ht:"Enfòmasyon ou",      en:"Your information",    es:"Su información" },
    l_fname:    { fr:"Prénom",              ht:"Prenon",             en:"First name",          es:"Nombre" },
    l_lname:    { fr:"Nom",                ht:"Siyati",             en:"Last name",           es:"Apellido" },
    l_email:    { fr:"Email *",            ht:"Imèl *",             en:"Email *",             es:"Correo *" },
    l_msg:      { fr:"Message de soutien (optionnel)", ht:"Mesaj sipò (opsyonèl)", en:"Support message (optional)", es:"Mensaje de apoyo (opcional)" },
    p_msg:      { fr:"Partagez pourquoi vous soutenez CAPSYS...", ht:"Pataje poukisa w sipòte CAPSYS...", en:"Share why you support CAPSYS...", es:"Comparta por qué apoya a CAPSYS..." },
    pay_tag:    { fr:"Méthode de paiement", ht:"Metòd peman",       en:"Payment method",      es:"Método de pago" },
    recurring:  { fr:"Don mensuel récurrent (annulable à tout moment)", ht:"Don mansyèl rekiran (anilèb nenpòt ki lè)", en:"Recurring monthly donation (cancellable at any time)", es:"Donación mensual recurrente (cancelable en cualquier momento)" },
    btn_submit: { fr:"❤ Faire mon don maintenant", ht:"❤ Fè don mwen kounye a", en:"❤ Make my donation now", es:"❤ Hacer mi donación ahora" },
    secure_note:{ fr:"🔒 Paiement 100% sécurisé. Reçu fiscal disponible sur demande.", ht:"🔒 Peman 100% an sekirite. Resi fiskal disponib sou demann.", en:"🔒 100% secure payment. Tax receipt available on request.", es:"🔒 Pago 100% seguro. Recibo fiscal disponible a pedido." },
    impact_tag: { fr:"Impact de vos dons",  ht:"Enpak don ou yo",   en:"Impact of your donations", es:"Impacto de sus donaciones" },
    impact_h3:  { fr:"Chaque dollar\nfait une différence", ht:"Chak dola\nfè yon diferans", en:"Every dollar\nmakes a difference", es:"Cada dólar\nmarca la diferencia" },
    i10:  { fr:"1 consultation psychologique", ht:"1 konsiltasyon sikolojik", en:"1 psychological consultation", es:"1 consulta psicológica" },
    i10s: { fr:"Pour une personne dans le besoin", ht:"Pou yon moun ki nan bezwen", en:"For a person in need", es:"Para una persona en necesidad" },
    i25:  { fr:"Atelier collectif complet",    ht:"Atelye kolektif konplè",     en:"Full group workshop",        es:"Taller grupal completo" },
    i25s: { fr:"Pour 5 à 8 participants",      ht:"Pou 5 a 8 patisipan",        en:"For 5 to 8 participants",    es:"Para 5 a 8 participantes" },
    i50:  { fr:"Semaine de services",          ht:"Semèn sèvis",               en:"Week of services",           es:"Semana de servicios" },
    i50s: { fr:"Dans une communauté rurale",   ht:"Nan yon kominote riral",     en:"In a rural community",       es:"En una comunidad rural" },
    i100: { fr:"Formation d'un agent",         ht:"Fòmasyon yon ajan",          en:"Training one agent",         es:"Formación de un agente" },
    i100s:{ fr:"Premiers secours psychologiques", ht:"Premye swen sikolojik",  en:"Psychological first aid",    es:"Primeros auxilios psicológicos" },
    i250: { fr:"Programme mensuel complet",    ht:"Pwogram mansyèl konplè",     en:"Full monthly programme",     es:"Programa mensual completo" },
    i250s:{ fr:"Groupe de parole pour adolescents", ht:"Gwoup lapawòl pou adolesan", en:"Discussion group for teenagers", es:"Grupo de diálogo para adolescentes" },
    thanks_h:   { fr:"Merci pour votre soutien", ht:"Mèsi pou sipò ou", en:"Thank you for your support", es:"Gracias por su apoyo" },
    thanks_p:   { fr:"La santé mentale est un droit fondamental. En soutenant CAPSYS, vous participez à la reconstruction du tissu social d'Haïti.", ht:"Sante mantal se yon dwa fondamantal. Lè w sipòte CAPSYS, ou patisipe nan rekonstriksyon tisi sosyal Ayiti.", en:"Mental health is a fundamental right. By supporting CAPSYS, you contribute to rebuilding Haiti's social fabric.", es:"La salud mental es un derecho fundamental. Al apoyar a CAPSYS, participa en la reconstrucción del tejido social de Haití." },
    modal_icon: "❤️",
    modal_h:    { fr:"Don reçu avec gratitude!", ht:"Don resevwa ak rekonesans!", en:"Donation received with gratitude!", es:"¡Donación recibida con gratitud!" },
    modal_p:    { fr:"Merci pour votre don. Votre générosité aide des milliers d'Haïtiens à accéder aux soins mentaux.", ht:"Mèsi pou don ou. Jenerozite ou ede dè milye Ayisyen jwenn swen mantal.", en:"Thank you for your donation. Your generosity helps thousands of Haitians access mental health care.", es:"Gracias por su donación. Su generosidad ayuda a miles de haitianos a acceder a la atención de salud mental." },
    modal_close:{ fr:"Fermer", ht:"Fèmen", en:"Close", es:"Cerrar" },
  },
};

// ── LANG ENGINE ──────────────────────────────────────────────────
const CAPSYS_LANG = {
  current: localStorage.getItem('capsys_lang') || 'fr',

  set(lang) {
    this.current = lang;
    localStorage.setItem('capsys_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    this.applyAll();
  },

  t(obj) {
    if (!obj) return '';
    return obj[this.current] || obj['fr'] || '';
  },

  applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keys = el.dataset.i18n.split('.');
      let val = TRANSLATIONS;
      for (const k of keys) { val = val?.[k]; }
      if (val && typeof val === 'object') {
        const text = val[this.current] || val['fr'] || '';
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });

    // select options
    document.querySelectorAll('[data-i18n-options]').forEach(sel => {
      const keys = sel.dataset.i18nOptions.split('.');
      let val = TRANSLATIONS;
      for (const k of keys) { val = val?.[k]; }
      if (val && val[this.current]) {
        const opts = val[this.current];
        sel.innerHTML = opts.map(o => `<option>${o}</option>`).join('');
      }
    });

    // title
    const titleKey = document.body.dataset.page;
    if (titleKey && TRANSLATIONS[titleKey]?.meta_title) {
      document.title = this.t(TRANSLATIONS[titleKey].meta_title);
    }
  },

  init() {
    document.documentElement.setAttribute('lang', this.current);
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.set(btn.dataset.lang));
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
    this.applyAll();
  }
};
