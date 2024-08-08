const articles = [
  {
    title: "Empowering Communities: The Impact of Local Volunteerism",
    text: "Discover how local volunteer efforts are transforming communities across the globe. From organizing neighborhood clean-ups to supporting local shelters, explore inspiring stories and the tangible benefits that arise when people come together to give back.",
    img: "https://www.esplanade.com/-/media/Esplanade/Images/S-75-Volunteering/volunteering-1680x1050.ashx?rev=1c05d392dbfd4a38a73c85d44ccf08ee&hash=65562884C20BE6FBCE40535B3E84A006",
  },
  {
    title: "Volunteering Abroad: Making a Difference One Project at a Time",
    text: "Ever wondered what it’s like to volunteer in a different country? Join us as we delve into the experiences of volunteers working on global projects, from building schools in remote villages to providing medical care in underserved regions. Learn how these experiences can change lives—both yours and those you help.",
    img: "https://www.galaxydigital.com/hubfs/Galaxy_Digital_February_2022/images/marketing-volunteer-opportunities.jpg",
  },
  {
    title: "The Power of Youth: How Young Volunteers Are Changing the World",
    text: "Youth volunteers are not just the future; they are the present. Explore how young people are stepping up to address global challenges, from climate change activism to educational outreach programs. Get inspired by stories of young changemakers making a significant impact in their communities and beyond.",
    img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9sdW50ZWVyJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

let currentArticle = 0;

function showArticle(index) {
  const article = articles[index];
  const content = document.querySelector(".s3_content");

  // Fade out current content
  content.classList.remove("show");

  // Set new content
  setTimeout(() => {
    document.getElementById("s3_articleTitle").innerText = article.title;
    document.getElementById("s3_articleText").innerText = article.text;
    document.getElementById("s3_articleImage").src = article.img;

    // Fade in new content
    content.classList.add("show");
  }, 500); // Match the duration of the CSS transition
}

document.getElementById("nextBtn").addEventListener("click", function () {
  currentArticle = (currentArticle + 1) % articles.length;
  showArticle(currentArticle);
});

document.getElementById("s3_prevBtn").addEventListener("click", function () {
  currentArticle = (currentArticle - 1 + articles.length) % articles.length;
  showArticle(currentArticle);
});

// Initial load
showArticle(currentArticle);
