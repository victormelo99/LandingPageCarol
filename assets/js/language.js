document.addEventListener("DOMContentLoaded", () => {

    i18next.init({
        lng: "fr",
        debug: true,
        resources: {
            en: {
                translation: {
                    "header.home": "Home",
                    "header.services": "Services",
                    "header.about": "About",
                    "slogan": "Rejuvenate even further.",
                    "intro.subtitle": "Discover a new you with our personalized care: trendy haircuts, laser hair removal, and facial treatments for total well-being.",
                    "booking": "Book your slot",
                    "intro.subtitle2": "Do you feel like your skin no longer reflects your <strong>youth?</strong></h2>",
                    "subtitle2": "Over time, the body changes, but it is possible to preserve its beauty and vitality with treatments such as new haircuts, laser hair removal, and facial treatments to restore radiance and confidence.</br></br>",
                    "focus": `Allow yourself this transformation! Schedule an appointment and feel renewed, beautiful, and confident at every stage of life.`,
                    "typesProcediments": `Procedures Performed`,
                    "titleProcediments": `Exclusive procedures for <strong>every need</strong>`,
                    "subtitleProcediments": `Each face has a story, and each person needs a unique treatment. <strong>Discover our procedures:</strong>`,
                    "titleCard1":`Hair`,
                    "textCard1":`Renew your look with precise cuts, vibrant colors, and unique styles.`,
                    "titleCard2":`Laser Hair Removal`,
                    "textCard2":`Ensure smooth, hair-free skin with long-lasting results.`,
                    "titleCard3":`Facial Treatment`,
                    "textCard3":`Revitalize your skin with deep hydration and personalized treatments.`,
                    "initialResult": `Results`,
                    "titleResult":`Inspiring Transformations`,
                    "titleAdvertising": `Incredible results with <strong>naturalness and excellence</strong>`,
                    "subtitleAdvertising": ` With our aesthetic treatments, you can rejuvenate without losing your identity.<strong> Our procedures offer benefits such as:</strong><br>`,
                    "liAdvertising":`Enhancing beauty with customized haircuts and treatments`,
                    "liAdvertising2":`Restoring self-esteem and highlighting your unique identity`,
                    "liAdvertising3":`Effective and long-lasting hair removal.`,
                    "liAdvertising4":`Softer skin and without irritations`,
                    "liAdvertising5":`Reduction of spots and signs of aging`,
                    "liAdvertising6":`Deep skin revitalization with intensive hydration`,
                    "initialText": `NATURALNESS AND BEAUTY`,
                    "titleAdvertising2":`Your <strong>Beauty</strong>, Our <strong>Mission</strong>`,
                    "subtitleAdvertising2":` Each stage of life brings <strong>changes</strong>, but it is possible to preserve your <strong>beauty and confidence.</strong><br>`,
                    "textAdvertising2":`Our commitment is to offer you treatments that <strong>respect your individuality</strong> and
                        highlight the best of you in a natural and harmonious way. Here, we are ready to take care of you and support your journey, offering you a <strong>unique and transformative experience</strong>.<br>`,
                    "focusAdvertising2":`<strong>Together, let’s value your beauty at every stage of life.</strong>`,
                    "initialResult":`Testimonials`,
                    "titleResult":`What our clients say`,
                    "titleAbout":`Who Am I`,
                    "textAbout":`>During my 3 years as a hairdresser and beautician, I have <strong>discovered much more than a profession – I found the opportunity to transform lives.</strong><br><br>
                                I believe that true beauty lies in the essence of each person and that enhancing it in a unique way <strong>is the path to boosting confidence and well-being.</strong>
                                <br><br>
                                My work goes beyond haircuts and aesthetic treatments: it is about offering my clients moments of care and transformation, highlighting their beauty with 
                                naturalness and style.<br><br>
                                With a dedicated and personalized approach, my goal is <strong>to deliver results that combine health, self-esteem, and the authenticity of each individual.</strong>`,
                    "textBrand":`Carolina Hairdresser & Aesthetician ©<br>`,
                    "rightsReserved":`All rights reserved`,
                }
            },
            fr: {
                translation: {
                    "header.home": "Accueil",
                    "header.services": "Services",
                    "header.about": "Sur",
                    "slogan": "Rajeunissez encore davantage.",
                    "intro.subtitle": "Découvrez une nouvelle vous avec nos soins sur mesure: coupes tendance, épilation laser et soins visage pour un bien-être total.",
                    "booking": "Réservez votre créneau",
                    "intro.subtitle2": "Vous avez l'impression que votre peau ne reflète plus votre <strong>jeunesse ?</strong>",
                    "subtitle2": `Avec le temps, le corps change, mais il est possible de préserver sa beauté et sa vitalité grâce à des soins tels que de nouvelles coupes de cheveux, 
                    l’épilation au laser et des traitements faciaux pour raviver l’éclat et la confiance.</br></br>`,
                    "focus": `Permettez-vous cette transformation! Prenez rendez-vous et sentez-vous renouvelée, belle et confiante à toutes les étapes de la vie.`,
                    "typesProcediments": `Procédures réalisées`,
                    "titleProcediments": `Procédures exclusives pour <strong>chaque besoin</strong>`,
                    "subtitleProcediments": `Chaque visage a une histoire, et chaque personne a besoin d'un traitement unique. <strong>Découvrez nos procédures:</strong>`,
                    "titleCard1":`Cheveux`,
                    "textCard1":`Renouvelez votre apparence avec des coupes précises, des couleurs vibrantes et des modèles uniques.`,
                    "titleCard2":`Épilation au laser`,
                    "textCard2":`Assurez-vous une peau douce et sans poils avec des résultats durables.`,
                    "titleCard3":`Traitement facial`,
                    "textCard3":`Revitalisez votre peau avec une hydratation profonde et des traitements personnalisés.`,
                    "initialResult": `Résultats`,
                    "titleResult":`Transformations inspirantes`,
                    "titleAdvertising": `Résultats incroyables avec <strong>naturel et excellence</strong>`,
                    "subtitleAdvertising": `Avec nos traitements esthétiques, vous pouvez rajeunir sans perdre votre identité.<strong> Nos procédures offrent des avantages tels que:</strong><br>`,
                    "liAdvertising":`Mise en valeur de la beauté avec des coupes et des traitements personnalisés.`,
                    "liAdvertising2":`Restauration de l’estime de soi et mise en valeur de votre identité unique.`,
                    "liAdvertising3":`Élimination des poils de manière durable et efficace.`,
                    "liAdvertising4":`Peau plus douce et sans irritations`,
                    "liAdvertising5":`Réduction des taches et des signes de vieillissement`,
                    "liAdvertising6":`Revitalisation profonde de la peau avec une hydratation intensive`,
                    "initialText": `NATURALITÉ ET BEAUTÉ`,
                    "titleAdvertising2":`Votre <strong>Beauté</strong>, Notre <strong>Mission</strong>`,
                    "subtitleAdvertising2":`Chaque étape de la vie apporte des <strong>changements</strong>, mais il est possible de préserver sa <strong>beauté et sa confiance.</strong><br>`,
                    "textAdvertising2":`Notre engagement est de vous offrir des traitements qui <strong>respectent votre individualité</strong> et mettent en valeur le meilleur de vous-même, de manière naturelle
                        et harmonieuse. Ici, nous sommes prêts à prendre soin de vous et à accompagner votre parcours, en vous offrant une <strong>expérience unique et transformatrice</strong>.<br>`,
                    "focusAdvertising2":`<strong>Valorisons ensemble votre beauté à toutes les étapes de la vie.</strong>`,
                    "initialResult":`Témoignages`,
                    "titleResult":`Ce que disent nos clients`,
                    "titleAbout":`Qui suis-je`,
                    "textAbout":`Au cours de mes 3 années en tant que coiffeuse et esthéticienne, j'ai <strong>découvert bien plus qu'une profession – j'ai trouvé l'opportunité de transformer des vies.</strong><br><br>

                                Je crois que la véritable beauté réside dans l'essence de chaque personne et que la valoriser de manière unique <strong>est le chemin pour renforcer la confiance et le bien-être.</strong>
                                <br><br>

                                Mon travail va au-delà des coupes et des traitements esthétiques: il s'agit d'offrir à mes clients des moments de soin et de transformation, en mettant en valeur
                                leur beauté avec naturel et style.<br><br>

                                Avec une approche dédiée et personnalisée, mon objectif est <strong>de fournir des résultats qui allient santé, estime de soi et l'authenticité de chacun.</strong>`,
                    "textBrand":`Carolina Coiffeuse Esthetique ©<br>`,
                    "rightsReserved":`Tous droits réservés`,
                }
            }
        }
    }, function (err, t) {
        updateContent(); // Atualiza o conteúdo ao iniciar
    });

    // Função para atualizar o conteúdo traduzido
    function updateContent() {
        document.querySelectorAll("[data-i18n]").forEach((elem) => {
            const key = elem.getAttribute("data-i18n");
            elem.innerHTML = i18next.t(key); // Atualiza o texto com base na chave de tradução
        });
    }

    // Troca de idioma ao clicar nos botões
    document.querySelectorAll(".change").forEach((a) => {
        a.addEventListener("click", (event) => {
            event.preventDefault(); // Impede o comportamento padrão do link
            const lang = a.getAttribute("data-lang"); // Obtém o idioma do atributo data-lang
            i18next.changeLanguage(lang, () => {
                updateContent(); // Atualiza o conteúdo após a troca de idioma
            });
        });
    })
})