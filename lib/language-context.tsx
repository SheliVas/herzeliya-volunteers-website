"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "he" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    "site.title": "Herzeliya Volunteers",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.programs": "Programs",
    "nav.getInvolved": "Get Involved",
    "nav.contact": "Contact",
    "nav.donate": "Donate",
    "nav.gallery": "Gallery",
    "home.title": "Welcome to Herzeliya Volunteers",
    "home.description":
      "Join our community of dedicated volunteers making a positive impact in Herzeliya. Together, we can build a stronger, more caring community.",
    "home.hero.headline": "Building a Stronger Community Together",
    "home.hero.tagline":
      "Empowering volunteers to create lasting positive change in Herzeliya through meaningful programs and community engagement.",
    "home.hero.joinUs": "Join Us",
    "home.hero.donateNow": "Donate Now",
    "home.hero.supportedFamilies":
      "Our food packages reach single-parent families, large families, and elderly individuals across Herzeliya on a weekly basis",
    "home.impact.title": "Our Impact",
    "home.impact.volunteers": "Active Volunteers",
    "home.impact.programs": "Community Programs",
    "home.impact.years": "Years of Service",
    "home.impact.families": "Families Helped",
    "home.programs.title": "Our Programs",
    "home.programs.subtitle": "Discover the various ways you can make a difference in our community",
    "home.programs.learnMore": "Learn More",
    "home.programs.elderly.title": "Senior Support",
    "home.programs.elderly.description":
      "Providing companionship and assistance to elderly community members through regular visits and support services.",
    "home.programs.youth.title": "Youth Mentorship",
    "home.programs.youth.description":
      "Guiding and inspiring young people through educational support, life skills training, and positive role modeling.",
    "home.programs.environment.title": "Environmental Care",
    "home.programs.environment.description":
      "Protecting and beautifying our community through cleanup initiatives, tree planting, and sustainability education.",
    "home.about.title": "About Us",
    "home.about.mission.title": "Our Mission",
    "home.about.mission.description":
      "To strengthen the Herzeliya community by connecting passionate volunteers with meaningful opportunities to create lasting positive change and support those in need.",
    "home.about.operations.title": "How We Work",
    "home.about.operations.subtitle":
      "Our foundation operates through a comprehensive system that ensures maximum impact for families in need",
    "home.about.warehouse.title": "Food Distribution Center",
    "home.about.warehouse.description":
      "Our dedicated warehouse serves as the heart of our operations, where volunteers carefully pack grocery packages for families in need. These packages are delivered weekly by our distribution volunteers to single-parent families, large families, and elderly individuals across Herzeliya.",
    "home.about.shops.title": "Community Thrift Stores",
    "home.about.shops.description":
      "We operate 3 second-hand shops throughout Herzeliya, selling clothing, jewelry, shoes, toys, books, and more. All earnings from these stores go directly toward purchasing groceries for our warehouse, creating a sustainable cycle of community support.",
    "home.about.donations.title": "Financial Support",
    "home.about.donations.description":
      "Money donations from generous community members enable us to purchase fresh groceries and essential items. Combined with proceeds from our thrift stores, we ensure consistent weekly food distribution to those who need it most.",
    "home.about.distribution.title": "Volunteer Distribution Network",
    "home.about.distribution.description":
      "Our dedicated distribution volunteers follow regular weekly routes throughout Herzeliya, ensuring reliable delivery to families in need. The more volunteers we have, the more families we can reach and support with consistent food assistance.",
    "home.about.values.title": "Our Core Values",
    "home.about.values.compassion": "Compassion",
    "home.about.values.compassion.desc": "We approach every interaction with empathy and understanding",
    "home.about.values.integrity": "Integrity",
    "home.about.values.integrity.desc": "We act with honesty and transparency in all our endeavors",
    "home.about.values.community": "Community",
    "home.about.values.community.desc": "We believe in the power of collective action and mutual support",
    "home.about.founder.title": "Our Founder",
    "home.about.founder.name": "Yoav Ilanberg",
    "home.about.founder.bio":
      "Yoav founded Herzeliya Volunteers in 2016 with a vision to create a more connected and caring community. With over 15 years of experience in community development, he continues to lead our organization with passion and dedication.",
    "home.about.milestones.title": "Our Journey",
    "home.about.milestones.2016": "Founded with 12 volunteers",
    "home.about.milestones.2018": "Launched Senior Support Program",
    "home.about.milestones.2020": "Adapted programs for COVID-19 response",
    "home.about.milestones.2022": "Reached 200+ active volunteers",
    "home.about.milestones.2024": "Expanded to 15 community programs",
    "home.getInvolved.title": "Get Involved",
    "home.getInvolved.subtitle": "Join our community of volunteers and make a difference today",
    "home.getInvolved.form.title": "Volunteer Signup",
    "home.getInvolved.form.name": "Full Name",
    "home.getInvolved.form.email": "Email Address",
    "home.getInvolved.form.phone": "Phone Number",
    "home.getInvolved.form.area": "Preferred Volunteering Area",
    "home.getInvolved.form.area.elderly": "Senior Support",
    "home.getInvolved.form.area.youth": "Youth Mentorship",
    "home.getInvolved.form.area.environment": "Environmental Care",
    "home.getInvolved.form.area.events": "Event Organization",
    "home.getInvolved.form.area.admin": "Administrative Support",
    "home.getInvolved.form.availability": "Availability",
    "home.getInvolved.form.availability.weekdays": "Weekdays",
    "home.getInvolved.form.availability.weekends": "Weekends",
    "home.getInvolved.form.availability.evenings": "Evenings",
    "home.getInvolved.form.availability.flexible": "Flexible",
    "home.getInvolved.form.submit": "Sign Me Up",
    "home.getInvolved.form.success": "Thank you for signing up! We'll be in touch soon.",
    "home.getInvolved.form.error.name": "Please enter your full name",
    "home.getInvolved.form.error.email": "Please enter a valid email address",
    "home.getInvolved.form.error.phone": "Please enter a valid phone number",
    "home.getInvolved.form.error.area": "Please select a volunteering area",
    "home.getInvolved.form.error.availability": "Please select your availability",
    "home.getInvolved.donation.title": "Support Our Mission",
    "home.getInvolved.donation.description":
      "Your generous donations help us expand our programs and reach more community members in need. Every contribution, no matter the size, makes a meaningful difference in building a stronger, more caring Herzeliya.",
    "home.getInvolved.donation.button": "Donate Now",
    "home.getInvolved.testimonials.title": "What Our Volunteers Say",
    "home.getInvolved.testimonials.sarah":
      "Volunteering with Herzeliya Volunteers has been incredibly rewarding. The senior support program has allowed me to make real connections and help where it's needed most.",
    "home.getInvolved.testimonials.sarah.name": "Sarah M., Senior Support Volunteer",
    "home.getInvolved.testimonials.david":
      "Being a youth mentor has taught me as much as I've taught the kids. It's amazing to see young people grow and develop confidence through our programs.",
    "home.getInvolved.testimonials.david.name": "David L., Youth Mentorship Volunteer",
    "home.getInvolved.testimonials.rachel":
      "The environmental care program gives me a chance to make a tangible difference in our community while working alongside like-minded people who care about our future.",
    "home.getInvolved.testimonials.rachel.name": "Rachel K., Environmental Care Volunteer",
    "home.contact.title": "Contact Us",
    "home.contact.subtitle": "Get in touch with us - we'd love to hear from you",
    "home.contact.info.title": "Get In Touch",
    "home.contact.email": "Email",
    "home.contact.phone": "Phone",
    "home.contact.address": "Address",
    "home.contact.hours": "Office Hours",
    "home.contact.email.value": "info@herzeliyavolunteers.org",
    "home.contact.phone.value": "+972-9-123-4567",
    "home.contact.address.value": "123 Ben Gurion Street, Herzeliya, Israel 46733",
    "home.contact.hours.value": "Sunday-Thursday: 9:00 AM - 5:00 PM",
    "home.contact.map.title": "Find Us",
    "gallery.title": "Our Community in Action",
    "gallery.subtitle":
      "Explore moments of impact, connection, and positive change as our volunteers work together to strengthen the Herzeliya community through meaningful programs and initiatives.",
    "gallery.viewImage": "View image",
    "gallery.clickToView": "Click to view",
    "gallery.lightbox.close": "Close gallery",
    "gallery.lightbox.previous": "Previous image",
    "gallery.lightbox.next": "Next image",
    "gallery.cta.title": "Be Part of Our Story",
    "gallery.cta.description":
      "Every photo tells a story of community impact. Join us and help create more moments of positive change in Herzeliya.",
    "gallery.cta.volunteer": "Join Our Volunteers",
    "gallery.cta.donate": "Support Our Mission",
    "lang.toggle": "Switch to Hebrew",
    "accessibility.skipToMain": "Skip to main content",
    "accessibility.mainNavigation": "Main navigation",
    "accessibility.toggleMobileMenu": "Toggle mobile menu",
    "accessibility.currentPage": "Current page",
    "accessibility.openInNewTab": "Opens in new tab",
    "footer.copyright": "© 2025 Herzeliya Volunteers. All rights reserved.",
    "footer.credits": "Built with care for our community",
    "footer.social.facebook": "Follow us on Facebook",
    "footer.social.instagram": "Follow us on Instagram",
    "footer.social.twitter": "Follow us on Twitter",
    "footer.social.linkedin": "Connect with us on LinkedIn",
  },
  he: {
    "site.title": "עמותת מתנדבי הרצליה",
    "nav.home": "בית",
    "nav.about": "אודותינו",
    "nav.programs": "תוכניות",
    "nav.getInvolved": "הצטרפו אלינו",
    "nav.contact": "צור קשר",
    "nav.donate": "תרומה",
    "nav.gallery": "גלריה",
    "home.title": "ברוכים הבאים למתנדבי הרצליה",
    "home.description":
      "הצטרפו לקהילת המתנדבים המסורים שלנו ועשו השפעה חיובית בהרצליה. יחד, נוכל לבנות קהילה חזקה ואכפתית יותר.",
    "home.hero.headline": "מצטרפים לעשייה ותומכים בקהילה",
    "home.hero.tagline":
      "עמותת מתנדבי הרצליה פועלת משנת 1994 בעזרת עשרות תושבים מתנדבים שמאמינים שקהילה חזקה נבנית ממעשים טובים",
    "home.hero.joinUs": "הצטרפו אלינו",
    "home.hero.donateNow": "תרמו עכשיו",
    "home.hero.supportedFamilies":
      "חבילות המזון שלנו מגיעות למשפחות חד הוריות, משפחות מרובות ילדים וקשישים ברחבי העיר הרצליה בתדירות שבועית",
    "home.impact.title": "ההשפעה שלנו",
    "home.impact.volunteers": "משפחות נתמכות",
    "home.impact.programs": "תוכניות קהילתיות",
    "home.impact.years": "שנות פעילות",
    "home.impact.families": "משפחות שנעזרו",
    "home.programs.title": "התוכניות שלנו",
    "home.programs.subtitle": "גלו את הדרכים השונות בהן תוכלו לעשות הבדל בקהילה שלנו",
    "home.programs.learnMore": "למידע נוסף",
    "home.programs.elderly.title": "תמיכה בקשישים",
    "home.programs.elderly.description": "מתן ליווי וסיוע לחברי הקהילה הקשישים באמצעות ביקורים קבועים ושירותי תמיכה.",
    "home.programs.youth.title": "חונכות נוער",
    "home.programs.youth.description": "הדרכה והשראה לצעירים באמצעות תמיכה חינוכית, הכשרת כישורי חיים ומודלים חיוביים.",
    "home.programs.environment.title": "שמירה על הסביבה",
    "home.programs.environment.description":
      "הגנה ויפוי של הקהילה שלנו באמצעות יוזמות ניקיון, נטיעת עצים וחינוך לקיימות.",
    "home.about.title": "אודותינו",
    "home.about.mission.title": "המשימה שלנו",
    "home.about.mission.description":
      "לחזק את קהילת הרצליה על ידי חיבור מתנדבים נלהבים עם הזדמנויות משמעותיות ליצור שינוי חיובי מתמשך ולתמוך בנזקקים.",
    "home.about.operations.title": "איך אנחנו עובדים",
    "home.about.operations.subtitle":
      "העמותה שלנו פועלת באמצעות מערכת מקיפה המבטיחה השפעה מקסימלית למשפחות הזקוקות לעזרה",
    "home.about.warehouse.title": "מרכז חלוקת מזון",
    "home.about.warehouse.description":
      "המחסן המיועד שלנו משמש כלב הפעילות שלנו, שם מתנדבים אורזים בקפידה חבילות מזון למשפחות נזקקות. החבילות הללו מחולקות מדי שבוע על ידי מתנדבי החלוקה שלנו למשפחות חד הוריות, משפחות מרובות ילדים וקשישים ברחבי הרצליה.",
    "home.about.shops.title": "חנויות יד שנייה קהילתיות",
    "home.about.shops.description":
      "אנו מפעילים 3 חנויות יד שנייה ברחבי הרצליה, המוכרות בגדים, תכשיטים, נעליים, צעצועים, ספרים ועוד. כל הרווחים מהחנויות הללו מועברים ישירות לרכישת מצרכים למחסן שלנו, ויוצרים מעגל קיים של תמיכה קהילתית.",
    "home.about.donations.title": "תמיכה כספית",
    "home.about.donations.description":
      "תרומות כספיות מחברי קהילה נדיבים מאפשרות לנו לרכוש מצרכים טריים ופריטים חיוניים. בשילוב עם הכנסות מחנויות היד השנייה שלנו, אנו מבטיחים חלוקת מזון שבועית עקבית לאלה הזקוקים לכך ביותר.",
    "home.about.distribution.title": "רשת חלוקה מתנדבת",
    "home.about.distribution.description":
      "מתנדבי החלוקה המסורים שלנו עוקבים אחר מסלולים שבועיים קבועים ברחבי הרצליה, ומבטיחים משלוח אמין למשפחות הזקוקות לעזרה. ככל שיש לנו יותר מתנדבים, כך נוכל להגיע ולתמוך ביותר משפחות עם סיוע מזון עקבי.",
    "home.about.values.title": "הערכים המרכזיים שלנו",
    "home.about.values.compassion": "חמלה",
    "home.about.values.compassion.desc": "אנו ניגשים לכל אינטראקציה עם אמפתיה והבנה",
    "home.about.values.integrity": "יושרה",
    "home.about.values.integrity.desc": "אנו פועלים בכנות ושקיפות בכל המאמצים שלנו",
    "home.about.values.community": "קהילה",
    "home.about.values.community.desc": "אנו מאמינים בכוח של פעולה קולקטיבית ותמיכה הדדית",
    "home.about.founder.title": "המייסד שלנו",
    "home.about.founder.name": "יואב אילנברג",
    "home.about.founder.bio":
      "יואב הקים את מתנדבי הרצליה ב-2016 עם חזון ליצור קהילה מחוברת ואכפתית יותר. עם למעלה מ-15 שנות ניסיון בפיתוח קהילתי, הוא ממשיך להוביל את הארגון שלנו בתשוקה ומסירות.",
    "home.about.milestones.title": "המסע שלנו",
    "home.about.milestones.2016": "נוסד עם 12 מתנדבים",
    "home.about.milestones.2018": "השקת תוכנית תמיכה בקשישים",
    "home.about.milestones.2020": "התאמת תוכניות למענה לקורונה",
    "home.about.milestones.2022": "הגענו ל-200+ מתנדבים פעילים",
    "home.about.milestones.2024": "הרחבנו ל-15 תוכניות קהילתיות",
    "home.getInvolved.title": "הצטרפו אלינו",
    "home.getInvolved.subtitle": "הצטרפו לקהילת המתנדבים שלנו ועשו הבדל היום",
    "home.getInvolved.form.title": "הרשמה להתנדבות",
    "home.getInvolved.form.name": "שם מלא",
    "home.getInvolved.form.email": "כתובת אימייל",
    "home.getInvolved.form.phone": "מספר טלפון",
    "home.getInvolved.form.area": "תחום התנדבות מועדף",
    "home.getInvolved.form.area.elderly": "תמיכה בקשישים",
    "home.getInvolved.form.area.youth": "חונכות נוער",
    "home.getInvolved.form.area.environment": "שמירה על הסביבה",
    "home.getInvolved.form.area.events": "ארגון אירועים",
    "home.getInvolved.form.area.admin": "תמיכה מנהלית",
    "home.getInvolved.form.availability": "זמינות",
    "home.getInvolved.form.availability.weekdays": "ימי חול",
    "home.getInvolved.form.availability.weekends": "סופי שבוע",
    "home.getInvolved.form.availability.evenings": "שעות ערב",
    "home.getInvolved.form.availability.flexible": "גמיש",
    "home.getInvolved.form.submit": "הרשמה",
    "home.getInvolved.form.success": "תודה על ההרשמה! ניצור איתכם קשר בקרוב.",
    "home.getInvolved.form.error.name": "אנא הזינו את שמכם המלא",
    "home.getInvolved.form.error.email": "אנא הזינו כתובת אימייל תקינה",
    "home.getInvolved.form.error.phone": "אנא הזינו מספר טלפון תקין",
    "home.getInvolved.form.error.area": "אנא בחרו תחום התנדבות",
    "home.getInvolved.form.error.availability": "אנא בחרו את הזמינות שלכם",
    "home.getInvolved.donation.title": "תמכו במשימה שלנו",
    "home.getInvolved.donation.description":
      "התרומות הנדיבות שלכם עוזרות לנו להרחיב את התוכניות שלנו ולהגיע ליותר חברי קהילה הזקוקים לעזרה. כל תרומה, ללא קשר לגודלה, עושה הבדל משמעותי בבניית הרצליה חזקה ואכפתית יותר.",
    "home.getInvolved.donation.button": "תרמו עכשיו",
    "home.getInvolved.testimonials.title": "מה המתנדבים שלנו אומרים",
    "home.getInvolved.testimonials.sarah":
      "התנדבות עם מתנדבי הרצליה הייתה מתגמלת מאוד. תוכנית התמיכה בקשישים אפשרה לי ליצור קשרים אמיתיים ולעזור במקום שבו זה הכי נחוץ.",
    "home.getInvolved.testimonials.sarah.name": "שרה מ., מתנדבת תמיכה בקשישים",
    "home.getInvolved.testimonials.david":
      "להיות חונך נוער לימד אותי לא פחות ממה שלימדתי את הילדים. מדהים לראות צעירים גדלים ומפתחים ביטחון עצמי דרך התוכניות שלנו.",
    "home.getInvolved.testimonials.david.name": "דוד ל., מתנדב חונכות נוער",
    "home.getInvolved.testimonials.rachel":
      "תוכנית השמירה על הסביבה נותנת לי הזדמנות לעשות הבדל מוחשי בקהילה שלנו תוך עבודה לצד אנשים בעלי דעות דומות שאכפת להם מהעתיד שלנו.",
    "home.getInvolved.testimonials.rachel.name": "רחל כ., מתנדבת שמירה על הסביבה",
    "home.contact.title": "צור קשר",
    "home.contact.subtitle": "צרו איתנו קשר - נשמח לשמוע מכם",
    "home.contact.info.title": "יצירת קשר",
    "home.contact.email": "אימייל",
    "home.contact.phone": "טלפון",
    "home.contact.address": "כתובת",
    "home.contact.hours": "שעות פעילות",
    "home.contact.email.value": "info@herzeliyavolunteers.org",
    "home.contact.phone.value": "09-123-4567",
    "home.contact.address.value": "רחוב בן גוריון 123, הרצליה, ישראל 46733",
    "home.contact.hours.value": "ראשון-חמישי: 09:00-17:00",
    "home.contact.map.title": "מצאו אותנו",
    "gallery.title": "הקהילה שלנו בפעולה",
    "gallery.subtitle":
      "חקרו רגעים של השפעה, חיבור ושינוי חיובי כשהמתנדבים שלנו עובדים יחד לחזק את קהילת הרצליה באמצעות תוכניות ויוזמות משמעותיות.",
    "gallery.viewImage": "צפה בתמונה",
    "gallery.clickToView": "לחץ לצפייה",
    "gallery.lightbox.close": "סגור גלריה",
    "gallery.lightbox.previous": "תמונה קודמת",
    "gallery.lightbox.next": "תמונה הבאה",
    "gallery.cta.title": "היו חלק מהסיפור שלנו",
    "gallery.cta.description":
      "כל תמונה מספרת סיפור של השפעה קהילתית. הצטרפו אלינו ועזרו ליצור עוד רגעים של שינוי חיובי בהרצליה.",
    "gallery.cta.volunteer": "הצטרפו למתנדבים שלנו",
    "gallery.cta.donate": "תמכו במשימה שלנו",
    "lang.toggle": "Switch to English",
    "accessibility.skipToMain": "דלג לתוכן הראשי",
    "accessibility.mainNavigation": "ניווט ראשי",
    "accessibility.toggleMobileMenu": "הצג/הסתר תפריט נייד",
    "accessibility.currentPage": "עמוד נוכחי",
    "accessibility.openInNewTab": "נפתח בכרטיסייה חדשה",
    "footer.copyright": "© 2025 מתנדבי הרצליה. כל הזכויות שמורות.",
    "footer.credits": "נבנה באהבה עבור הקהילה שלנו",
    "footer.social.facebook": "עקבו אחרינו בפייסבוק",
    "footer.social.instagram": "עקבו אחרינו באינסטגרם",
    "footer.social.twitter": "עקבו אחרינו בטוויטר",
    "footer.social.linkedin": "התחברו אלינו בלינקדאין",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Update document direction and lang attribute
    document.documentElement.dir = language === "he" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
