import photography from "../resources/photography_icon.png";
import webDesign from "../resources/webDesign_icon.png";
import eCommerce from "../resources/e-commerce-icon.png";
import soundDesign from "../resources/sound-design-icon.png";
import ourWorkplaceLarge from "../resources/ourWorkplace.jpg";
import ourWorkplaceNarrow from "../resources/ourWorkplace-banner.jpg";
import hegel from "../resources/team/hegel.jpg";
import kant from "../resources/team/kant.jpg";
import plato from "../resources/team/plato.jpg";

let services = [
  {
    id: "photography",
    title: "Photography",
    description:
      "Eiusmod minim est nisi anim. Deserunt officia tempor culpa in consequat laborum. Velit magna laborum et.",
    image: photography,
  },
  {
    id: "webDesign",
    title: "Web Design",
    description:
      "Enim incididunt duis irure veniam. Do occaecat sit exercitation excepteur cillum reprehenderit. Officia commodo ea do.",
    image: webDesign,
  },
  {
    id: "eCommerce",
    title: "E-Commerce",
    description:
      "Elit labore aliquip qui ea fugiat. Ad aliqua Lorem sint sunt ut adipisicing. Sint officia non proident enim elit anim.",
    image: eCommerce,
  },
  {
    id: "soundDesign",
    title: "Sound Design",
    description:
      "Do esse nostrud pariatur est in ut. Ut exercitation ullamco aute dolore. Sint eiusmod quis sit voluptate non ullamco.",
    image: soundDesign,
  },
];

let aboutUs = {
  title: "About the company",
  subtitle: "A creative agency turning ideas into beautiful things.",
  workplace: {
    title: "Our working place",
    subtitle:
      "Quis dolore laboris eiusmod Lorem ullamco aliquip. Aute Lorem ex exercitation reprehenderit culpa do.",
    content:
      "Nostrud commodo in excepteur sunt reprehenderit proident ullamco. Irure magna cillum amet proident laborum magna. Sit minim cupidatat aliqua magna sunt. Anim voluptate irure ullamco excepteur eu. Cillum qui labproident ullamco. Ad pariatur proident duis consectetur fugiat.",
    pictureLarge: ourWorkplaceLarge,
    pictureSmall: ourWorkplaceNarrow,
  },
  ourWork: {
    title: "What we do",
    content:
      "Est aute cupidatat Lorem ea sunt. Cillum qui labproident ullamco. Irure magna cillum amet proident laborum magna. Sitoris exercitation amet tempor voluptate reprehente irure ullamco excepteur eu.derit. Et ex duis dolor esse dolore fugiat ea.",
  },
  ourProcess: {
    title: "Our work process",
    content:
      "Et ex duis dolor esse dolore fugiat ea. Eagna voluptate minim exercitation esse ipsum Lorem ex. Ad pariatur proident fugiat. Non esse est lx ullamco excepteur cupidatat culpa et enim aliqllamco uip.",
  },
  ourSkills: {
    title: "Our skills",
    content:
      "Ad pariatur proident duis consectetur fugiat. Eagna voluptate minim esse ipsum Lorem ex. Eiusmod proident ad pariatur veniam laboris nulla laboris. Nostrud commodo in excepteur sunt reprehenderit proident ullamco.",
  },
};

let projectCategories = [
  { active: "true", value: "all" },
  { active: "false", value: "web design" },
  { active: "false", value: "graphic" },
  { active: "false", value: "photography" },
  { active: "false", value: "motion video" },
];

const mailAddress = "mailto:info@frost.xyz?subject=Question%20about%20Frost%20services";

let team = [
  {
    id:1,
    name: "G. W. F. Hegel",
    role: "Concept designer",
    description:
      "Non excepteur aliqua ut ea proident aliqua. Culpa ad velit proident dolore magna quis. Aute minim in in adipisicing anim aliqua. Pariatur et incididunt ex aliqua voluptate dolor.",
    photo: hegel,
  },
  {
    id:2,
    name: "Immanuel Kant",
    role: "Perception manager",
    description:
      "Sunt nulla duis cillum in duis laborum. Nostrud deserunt minim occaecat sit pariatur nostrud est. Est eu minim ut ex est nisi. In ullamco officia ea do ut sunt.",
    photo: kant,
  },
  {
    id:3,
    name: "Plato",
    role: "Chief Ideation Officer",
    description:
      "Minim sunt aliqua velit quis magna. Nostrud in amet non consequat voluptate mollit esse. Laboris ea anim cupidatat officia enim ut id. Aute minim anim elit elit excepteur laboris.",
    photo: plato,
  },
];

const quotes = [
  {
    name: "Sigmund Freud",
    role: "Chief Happiness Officer at SublimeID",
    quote: "Id labore veniam adipisicing quis consequat culpa ut pariatur. Duis dolore nostrud sint incididunt esse veniam cillum.",
    id: 1,
  },
  {
    name: "René Descartes",
    role: "Chief Technology Officer at Ratio Tech",
    quote: "Nisi adipisicing voluptate cupidatat qui dolor dolore ipsum.    Eiusmod ipsum amet exercitation duis magna ex est quis.",
    id: 2,
  },
  {
    name: "Alain Badiou",
    role: "Senior Marketing Engineer at Total-Sales.com",
    quote: "Id labore veniam adipisicing quis consequat culpa ut pariatur. Laboris quis laborum aliquip duis pariatur irure est.",
    id: 3,
  },
];

const contactUs = {
  title: "Get in touch",
  subtitle: "Feel free to drop us a line!",
  content:"Culpa consectetur anim cillum amet dolore nisi incididunt. Minim ex labore enim incididunt aliqua reprehenderit ea. Laboris ea anim cupidatat officia enim ut id. Aute minim anim elit elit excepteur laboris. Amet in aute laborum id dolor ea pariatur.",
  address: "Moon Street Light Avenue 14/05, Jupiter, JP 80630",
  phone: "0247 541 65 87",
  email: "support@frost.com"
}

export { services, aboutUs, team, projectCategories, mailAddress, quotes, contactUs };
