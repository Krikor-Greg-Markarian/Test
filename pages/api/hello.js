// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const object = {
    box: [
      {
        title: "Header Aa Bb Cc 38PX",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur",
      },
    ],
    blackBox: [
      {
        title: "Header Aa Bb Cc 38PX",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur",
      },
    ],
    greenButton: [
      {
        buttonName: "primary button",
      },
    ],
    blackButton: [
      {
        buttonName: "secondary",
      },
    ],
    whyMirsad: [
      {
        why: "why",
        mirsad: "mirsad",
        description:
          " With Mirsad, you’re an agent of justice keeping your city safe, an actor of progress from the simple convenience of your phone! Each one of your reports helps shape the world into a better place and earns you a reward.",
      },
    ],
    howitworks: [
      {
        how: "how",
        itworks: "it works",
        pictureDiscription:
          "  Take a picture, film a video, or record an audio file.",
        reportDiscription: " Fill a report with your information.",
        submitDescription: " Submit your report and wait to claim your reward.",
      },
    ],
    WelcomeSignUp: [
      {
        greetings: "welcome on board",
        futureAgent: "future agent!",
        signUp: "sign up",
        description: "sign-up, your city needs you",
        buttonName: "sign up",
      },
    ],

    VerifyPhoneNumber: [
      {
        verify: "verify your",
        phoneNumber: "phone number",
        description: "Verify your number with the code sent",
        didNotReceive: "i did not receive a code",
        resend: "resend",
        buttonName: "verfify",
      },
    ],

    gettingThere: [
      {
        getting: "you're getting",
        there: "there",
        title: "one step closer to become a mirsad agent",
        description:
          " All you have to do is book an appointment with us and help the Mirsad community grow faster.",

        buttonName: "book an appointment",
        name: "skip",
      },
    ],
    skipOrAnyOtherButton: [
      {
        name: "skip",
      },
    ],
    gladToHaveYouHere: [
      {
        glad: "we're glad to have ",
        you: "you",
        here: "here",
        title: "please fill in the registration form to become a mirsad agent",
        attachImage: "attach an image of yourself",
        attachRecord: "attach criminal record paper",
        attachConduct: "attach good conduct and behavior",
        buttonName: "next",
      },
    ],
    gladToHaveYouHere2: [
      {
        glad: "we're glad to have",
        you: "you",
        here: "here",
        title: "additional information, for a more customized experience",
        chooseDates: "choose between the available dates",
        chooseTiming: "choose between the available timings",
        buttonName: "submit",
      },
    ],
    mailBox: [
      {
        mailBox: " turn on your mailbox",
        notification: "notifications",
        checkMailBox: " check your mailbox",
        description:
          "You will receive a QR code by email, which should be shown to our Mirsad team at the chosen location of your quiz.",
        buttonName: "go to homepage",
      },
    ],
    reportType: [
      {
        text: "report type",
      },
    ],
    descriptionBox: [
      {
        text: "description",
      },
    ],
    reportTypeBlack: [
      {
        text: "report type",
      },
    ],
    TermsCondBox: [
      {
        agree: "  I agree to Mirsad's",
        terms: " terms and conditions",
        and: "  and",
        privacyPolicy: "privacy policy",
      },
    ],
    reportSubmitted: [
      {
        title: "your report has",
        been: "been",
        submitted: "submitted",
      },
    ],

    IlligalParking: [
      {
        title: "Illegal parking in wrong spot",
        description: "unpayed parking in the city",
      },
    ],
    
    TypeOfInfringment: [
      {
        title: "Type of infrigement",
        description: "Traffic",
        subTitle: "Subcategory",
        subDescription: "Wrong parking",
      },
    ],

  };
  res.status(200).json(object);
}
