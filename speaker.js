const arraOfspeakerPart = [

  {
    Name: 'Yochai Benkler',
    speakerPosition: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speakerBio: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    Image: 'image/speaker2.png',
  },

  {
    Name: 'Kilnam Chon',
    speakerPosition: '',
    speakerBio: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    Image: 'image/speaker4.png',
  },
  {
    Name: 'SohYeong Noh',
    speakerPosition: 'Director of Art Centre Nabi and a board member of CC Korea',
    speakerBio: 'Emad Aghajani is a postdoctoral researcher at the SEART research group, at Software Institute, USI, Switzerland.',
    Image: 'image/speaker1.png',
  },
  {
    Name: 'Julia Leda',
    speakerPosition: 'President of Young Pirates of Europe',
    speakerBio: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July.',
    Image: 'image/speaker6.png',
  },
  {
    Name: 'Lila tretikov',
    speakerPosition: 'Executive Director of the Wikimedia Foundation',
    speakerBio: 'Saba Alimadadi is an Assistant Professor in the Department of Computer Science and Engineering at Simon Fraser University.',
    Image: 'image/speaker3.png',
  },

  {
    Name: 'Ryan Merkley',
    speakerPosition: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    speakerBio: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment.',
    Image: 'image/speaker5.png',
  },
];

function speakerHtmlPart() {
  const featureAspectSection = document.querySelector('.speaker-aspect');
  const speakerCreateDiv = document.createElement('div');
  speakerCreateDiv.classList.add('container');

  let aspectOfCard = `<h3>Featured Speakers</h3>
          <hr>
          <ul class="speakers">`;

  for (let i = 0; i < arraOfspeakerPart.length; i += 1) {
    const speakerDataSecion = arraOfspeakerPart[i];

    aspectOfCard += `
                
              <li class="speaker speaker${i + 1}">
                  <div class="bgFrame"><img class="Contri" src="${speakerDataSecion.Image}" alt="Speaker Picture"></div>
                  <ul class="Contri-detail">
                      <li class="Contri-name">
                          <h3>${speakerDataSecion.Name}</h3>
                      </li>
                      <li class="Contri-affiliation">
                          <h4>${speakerDataSecion.speakerPosition}</h4>
                      </li>
                      <li class="contri-description">
                          <p>${speakerDataSecion.speakerBio}
                          </p>
                      </li>
                  </ul>
              </li>`;
  }

  aspectOfCard += `</ul>
          <button class="seeMore">More <i class="fa-solid fa-angle-down down-arrow"></i></button>
          <button class="speaker3 less">Less <i class="fa-solid fa-angle-up down-arrow"></i></button>`;
  speakerCreateDiv.innerHTML = aspectOfCard;
  featureAspectSection.appendChild(speakerCreateDiv);

  const seeMore = document.querySelector('.seeMore');
  const seeLess = document.querySelector('.less');
  const speakerthree = document.querySelector('.speaker3');
  const speakerfour = document.querySelector('.speaker4');
  const speakerfive = document.querySelector('.speaker5');
  const speakersix = document.querySelector('.speaker6');

  function seeMoreB() {
    seeMore.setAttribute('class', 'speaker3');
    speakerthree.classList.remove('speaker3');
    speakerfour.classList.remove('speaker4');
    speakerfive.classList.remove('speaker5');
    speakersix.classList.remove('speaker6');
    seeLess.setAttribute('class', 'seeMore');
  }

  function seeLessB() {
    seeLess.setAttribute('class', 'speaker3 less');
    speakerthree.classList.add('speaker3');
    speakerfour.classList.add('speaker4');
    speakerfive.classList.add('speaker5');
    speakersix.classList.add('speaker6');
    seeMore.setAttribute('class', 'seeMore');
  }

  seeMore.addEventListener('click', seeMoreB);
  seeLess.addEventListener('click', seeLessB);
}

window.addEventListener('load', speakerHtmlPart);