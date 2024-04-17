const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const progressDots = document.getElementById("progress-dots");

const testimonials = [
  {
    name: "Lidija Bicker",
    position: "Training Consultant",
    photo: "/img/lidija.jpg",
    text:
      "I have mentored and coached Kazi through his IT Professional Year programme, focusing on business skills. I have found Kazi very professional and dedicated to his chosen area of expertise, always delivering high quality of reports, blogs, and presentations. His attitude is always positive towards his peers, workload and teamwork. I would strongly recommend Kazi to any suitable workplace as I believe he will always contribute to the best of his abilities."
  },
  {
    name: "MD Asif Iqbal",
    position: "Data Analyst @ Hydro Tasmania",
    photo: "/img/asif.jpg",
    text:
      "I am pleased to recommend Kazi Faruque for his exceptional work as an IT intern at Travel With A Cause. Kazi was a valuable member of our team and contributed greatly to our IT department during his internship. Kazi's hard work, dedication, and positive attitude were evident throughout his time at our company."
  },
  {
    name: "Atiq Khan",
    position: "Technologist @ABC",
    photo: "/img/atiq.jpg",
    text:
      "I highly recommend working with Kazi on any future group projects as he consistently brings positive energy, strong leadership skills, and valuable insights to the team. His technical proficiency, professionalism, and dedication to growth are exceptional. Kazi quickly grasps complex concepts and applies them effectively."
  },
  {
    name: "Alex Afshar",
    position: "SAN Administrator @SeaRoad",
    photo: "/img/alex.jpg",
    text:
      "Working with Kazi, I learned that how someone can give us great ideas to overcome challenges in our Project Management activities. I really liked working with him in a group specially because of his attention to the details and reminding us to put more attention on them. Kazi is also very professional in his Front End skills as he has been spending so much time to learn, practice and implement new skills!"
  }

];

let idx = 0;

testimonials.forEach((testimonial) => {
  const dot = document.createElement("div");
  dot.classList.add("progress-dot");
  progressDots.appendChild(dot);
});

function displayTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  updateProgressDots();
}

function updateProgressDots() {
  const dots = progressDots.children;
  [...dots].forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[idx].classList.add("active");
}

btnNext.addEventListener("click", () => {
  idx === testimonials.length - 1 ? (idx = 0) : idx++;
  console.log(idx);

  displayTestimonial();
});

btnPrev.addEventListener("click", () => {
  idx === 0 ? (idx = testimonials.length - 1) : idx--;
  console.log(idx);

  displayTestimonial();
});

displayTestimonial();
