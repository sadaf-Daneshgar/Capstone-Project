const speakersDataInfo = [
  // create array for speakers part to add the detials instead of adding in html
  {
    Name: 'SohYeong Noh',
    speakerPosition: 'Director of Art Centre Nabi and a board member of CC Korea',
    speakerBio: 'Emad Aghajani is a postdoctoral researcher at the SEART research group, at Software Institute, USI, Switzerland.',
    Image: 'image/speaker1.png',
  },
  {
    Name: 'Yochai Benkler',
    speakerPosition: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speakerBio: 'Juliana is a Lecturer (Assistant Professor) in Software Engineering at the School of Computing Science, University of Glasgow, United Kingdom.',
    Image: 'image/speaker2.png',
  },
  {
    Name: 'Lila tretikov',
    speakerPosition: 'Executive Director of the Wikimedia Foundation',
    speakerBio: 'Saba Alimadadi is an Assistant Professor in the Department of Computer Science and Engineering at Simon Fraser University.',
    Image: 'image/speaker3.png',
  },
  {
    Name: 'Kilnam Chon',
    speakerPosition: 'Saarland University',
    speakerBio: 'Sven Apel is an associate professor in the School of Electrical Engineering and Computer Science at Washington State University, Pullman.',
    Image: 'image/speaker4.png',
  },
  {
    Name: 'SohYeong Noh',
    speakerPosition: 'Director of Art Centre Nabi and a board member of CC Korea',
    speakerBio: 'Emad Aghajani is a postdoctoral researcher at the SEART research group, at Software Institute, USI, Switzerland.',
    Image: 'image/speaker5.png',
  },
  {
    Name: 'SohYeong Noh',
    speakerPosition: 'Director of Art Centre Nabi and a board member of CC Korea',
    speakerBio: 'Emad Aghajani is a postdoctoral researcher at the SEART research group, at Software Institute, USI, Switzerland.',
    Image: 'image/speaker6.png',
  },
];

// create function for speakers part
function renderFeatureSpeaker() {
  const featureSection = document.querySelector('.featured-speakers');
  const projectOverlay = document.createElement('div');
  projectOverlay.classList.add('container');

  let cardContent = `<h2>Featured Speakers</h2>
          <hr class="heading-undeline">
          <ul class="speakers">`;

  for (let i = 0; i < speakersDataInfo.length; i += 1) {
    const featuredSpeakerInf = speakersDataInfo[i];

    cardContent += `
                
              <li class="speaker speaker-${i + 1}">
                  <div class="bgFrame"><img class="Contri" src="${featuredSpeakerInf.Image}" alt="Speaker Picture"></div>
                  <ul class="Contri-detail">
                      <li class="Contri-name">
                          <h3>${featuredSpeakerInf.Name}</h3>
                      </li>
                      <li class="Contri-affiliation">
                          <h4>${featuredSpeakerInf.speakerPosition}</h4>
                      </li>
                      <li class="contri-description">
                          <p>${featuredSpeakerInf.speakerInfo}
                          </p>
                      </li>
                  </ul>
              </li>`;
  }

  cardContent += `</ul>
          <button class="seeMoreBtn">More <i class="fa-solid fa-angle-down down-arrow"></i></button>
          <button class="speaker3 less">Less <i class="fa-solid fa-angle-up down-arrow"></i></button>`;
  projectOverlay.innerHTML = cardContent;
  featureSection.appendChild(projectOverlay);

  const seeMoreBtn = document.querySelector('.seeMoreBtn');
  const seeLessBtn = document.querySelector('.less');
  const speakerthree = document.querySelector('.speaker-3');
  const speakerfour = document.querySelector('.speaker-4');
  const speakerfive = document.querySelector('.speaker-5');
  const speakersix = document.querySelector('.speaker-6');

  function seeMore() {
    seeMoreBtn.setAttribute('class', 'speaker-3');
    speakerthree.classList.remove('speaker-3');
    speakerfour.classList.remove('speaker-4');
    speakerfive.classList.remove('speaker-5');
    speakersix.classList.remove('speaker-6');
    seeLessBtn.setAttribute('class', 'seeMoreBtn');
  }

  function seeLess() {
    seeLessBtn.setAttribute('class', 'speaker3 less');
    speakerthree.classList.add('speaker-3');
    speakerfour.classList.add('speaker-4');
    speakerfive.classList.add('speaker-5');
    speakersix.classList.add('speaker-6');
    seeMoreBtn.setAttribute('class', 'seeMoreBtn');
  }

  // add the eventlistener for add action on seemore or seeless button
  seeBtn.addEventListener('click', seeMore);
  seeLessBtn.addEventListener('click', seeLess);
}

window.addEventListener('load', renderFeatureSpeaker);