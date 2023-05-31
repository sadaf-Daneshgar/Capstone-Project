const speakersData = [
  // create array for speakers part to add the detials instead of adding in html
  {
    speakerName: 'SohYeong Noh',
    speakerAffiliation: 'Director of Art Centre Nabi and a board member of CC Korea',
    speakerInfo: 'Emad Aghajani is a postdoctoral researcher at the SEART research group, at Software Institute, USI, Switzerland.',
    speakerImage: 'image/speaker1.png',
  },
  {
    speakerName: 'Yochai Benkler',
    speakerAffiliation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speakerInfo: 'Juliana is a Lecturer (Assistant Professor) in Software Engineering at the School of Computing Science, University of Glasgow, United Kingdom.',
    speakerImage: 'image/speaker6.png',
  },
  {
    speakerName: 'Lila tretikov',
    speakerAffiliation: 'Executive Director of the Wikimedia Foundation',
    speakerInfo: 'Saba Alimadadi is an Assistant Professor in the Department of Computer Science and Engineering at Simon Fraser University.',
    speakerImage: 'image/speaker3.png',
  },
  {
    speakerName: 'Kilnam Chon',
    speakerAffiliation: 'Saarland University',
    speakerInfo: 'Sven Apel is an associate professor in the School of Electrical Engineering and Computer Science at Washington State University, Pullman.',
    speakerImage: 'image/speaker4.png',
  },
  {
    speakerName: 'SohYeong Noh',
    speakerAffiliation: 'Director of Art Centre Nabi and a board member of CC Korea',
    speakerInfo: 'Emad Aghajani is a postdoctoral researcher at the SEART research group, at Software Institute, USI, Switzerland.',
    speakerImage: 'image/speaker5.png',
  },
  {
    speakerName: 'SohYeong Noh',
    speakerAffiliation: 'Director of Art Centre Nabi and a board member of CC Korea',
    speakerInfo: 'Emad Aghajani is a postdoctoral researcher at the SEART research group, at Software Institute, USI, Switzerland.',
    speakerImage: 'image/speaker6.png',
  },
];

// create function for speakers part
function renderFeaturedSpeakers() {
  const featureSection = document.querySelector('.featured-speakers');
  const projectOverlay = document.createElement('div');
  projectOverlay.classList.add('container');

  let cardContent = `<h2>Featured Speakers</h2>
          <hr class="heading-undeline">
          <ul class="speakers">`;

  for (let i = 0; i < speakersData.length; i += 1) {
    const featuredSpeakerInf = speakersData[i];

    cardContent += `
                
              <li class="speaker speaker-${i + 1}">
                  <div class="bgFrame"><img class="Contributor" src="${featuredSpeakerInf.speakerImage}" alt="Speaker Picture"></div>
                  <ul class="Contributor-detail">
                      <li class="Contributor-name">
                          <h3>${featuredSpeakerInf.speakerName}</h3>
                      </li>
                      <li class="Contributor-affiliation">
                          <h4>${featuredSpeakerInf.speakerAffiliation}</h4>
                      </li>
                      <li class="contributor-description">
                          <p>${featuredSpeakerInf.speakerInfo}
                          </p>
                      </li>
                  </ul>
              </li>`;
  }

  cardContent += `</ul>
          <button class="seeMoreBtn">More <i class="fa-solid fa-angle-down down-arrow"></i></button>
          <button class="speaker-3 less">Less <i class="fa-solid fa-angle-up down-arrow"></i></button>`;
  projectOverlay.innerHTML = cardContent;
  featureSection.appendChild(projectOverlay);

  const seeMoreBtn = document.querySelector('.seeMoreBtn');
  const seeLessBtn = document.querySelector('.less');
  const speaker3 = document.querySelector('.speaker-3');
  const speaker4 = document.querySelector('.speaker-4');
  const speaker5 = document.querySelector('.speaker-5');
  const speaker6 = document.querySelector('.speaker-6');

  function seeMore() {
    seeMoreBtn.setAttribute('class', 'speaker-3');
    speaker3.classList.remove('speaker-3');
    speaker4.classList.remove('speaker-4');
    speaker5.classList.remove('speaker-5');
    speaker6.classList.remove('speaker-6');
    seeLessBtn.setAttribute('class', 'seeMoreBtn');
  }

  function seeLess() {
    seeLessBtn.setAttribute('class', 'speaker-3 less');
    speaker3.classList.add('speaker-3');
    speaker4.classList.add('speaker-4');
    speaker5.classList.add('speaker-5');
    speaker6.classList.add('speaker-6');
    seeMoreBtn.setAttribute('class', 'seeMoreBtn');
  }

  // add the eventlistener for add action on seemore or seeless button
  seeMoreBtn.addEventListener('click', seeMore);
  seeLessBtn.addEventListener('click', seeLess);
}

window.addEventListener('load', renderFeaturedSpeakers);