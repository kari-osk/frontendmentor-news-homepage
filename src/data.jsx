import retroPc from './assets/images/image-retro-pcs.jpg'
import topLaptops from './assets/images/image-top-laptops.jpg'
import gamingGrowth from './assets/images/image-gaming-growth.jpg'


export const news = [
  {
    id: 1,
    title: 'Hydrogen VS Electric Cars',
    paragraph: 'Will hydrogen-fueled cars ever catch up to EVs?',
    line: true,
  },
  {
    id: 2,
    title: 'The Downsides of AI Artistry',
    paragraph: 'What are the possible adverse effects of on-demand AI image generation?',
    line: true,
  },
  {
    id: 3,
    title: 'Is VC Funding Drying Up?',
    paragraph: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    line: false
  }
]

export const newsWithImage = [
  {
    id: 1,
    image: retroPc,
    cod: '01',
    title: 'Reviving Retro PCs',
    paragraph: 'What happens when old PCs are given modern upgrades?'
  },
  {
    id: 2,
    image: topLaptops,
    cod: '02',
    title: 'Top 10 Laptops of 2022',
    paragraph: 'Our best picks for various needs and budgets.'
  },
  {
    id: 3,
    image: gamingGrowth,
    cod: '03',
    title: 'The Growth of Gaming',
    paragraph: 'How the pandemic has sparked fresh opportunities.'
  }
]

