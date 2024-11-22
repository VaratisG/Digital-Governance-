var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: "Πιστοποιητικό Σπουδών Πανεπιστημίου",
      pageTitle: "Πιστοποιητικό Σπουδών Πανεπιστημίου",
      infoTitle: "Πληροφορίες για την χορήγηση Πιστοποιητικού Σπουδών Πανεπιστημίου.",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να βρείτε αν δικαιούστε να λάβετε το Πιστοποιητικό Σπουδών Πανεπιστημίου.",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 10 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Υλοποίηση για την εκπόνηση της δεύτερης εργασίας του μαθήματος της Ηλεκτρονικής Διακυβέρνηση από τούς φοιτητές της Εφαρμοσμένης Πληροφορικής:",
      and: "και",
      student1: "Βαράτης Γεώργιος",
      student2: "Αργυριάδου Στυλιανή",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Certificate of University Studies",
      pageTitle: "Certificate of University Studies",
      infoTitle: "Information on the issue of Certificate of University Studies",
      subTitle1: "This questionnaire can help you determine if you are eligible to receive the Certificate of University Studies.",
      subTitle2: "Completing the questionnaire should not take more than 10 minutes.",
      subTitle3: "We will neither store nor share your answers.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",
      footerText: "Implementation for the preparation of the second project for the course of Digital Governance by the students of Applied Informatics:",
      and: "and",
      student1: "Varatis Georgios",
      student2: "Argyriadou Styliani",
      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();