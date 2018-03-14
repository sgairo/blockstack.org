const data = [
  {
    name: 'Ryan Shea',
    company: 'Blockstack',
    jobTitle: 'Co-Founder',
    twitter: '@ryaneshea',
    day: 'March 2',
    time: '9:07 AM',
    talkTitle: 'Blockstack, Web 3, and Decentralized Apps',
    headshot: 'https://blockstack.imgix.net/7a92e818-1126-4e5e-a9e0-7fc5e75da3b3_ryan+shea_blockstack_founder.jpg'
  },
  {
    name: 'Dr. Muneeb Ali',
    company: 'Blockstack',
    jobTitle: 'Co-Founder',
    twitter: '@muneeb',
    day: 'March 2',
    time: '9:24 AM',
    talkTitle: 'From Cloud Computing to Decentralized Computing',
    headshot: 'https://blockstack.imgix.net/479a5d92-8812-4768-a31b-d7d074f2aa56_muneeb+ali_blockstack_founder.png'
  },
  {
    name: 'Ken Seiff',
    company: 'Blockchange Ventures',
    jobTitle: 'Managing Partner',
    twitter: '@seiff',
    day: 'March 2',
    time: '9:41 AM',
    talkTitle: 'Interview with Melanie Shapiro and Ken Seiff',
    headshot: 'https://blockstack.imgix.net/2a6d9dd1-9675-4f78-85f1-6a7778f1d06a_ken-seiff.jpg'
  },
  {
    name: 'Melanie Shapiro',
    company: 'Token',
    jobTitle: 'CEO and Co-Founder',
    twitter: '@melshapiro',
    day: 'March 2',
    time: '9:41 AM',
    talkTitle: 'Interview with Melanie Shapiro and Ken Seiff',
    headshot: 'https://blockstack.imgix.net/bb14fd78-52b2-4fa3-bc9a-9a7eb6a3a4e1_melanie.jpg'
  },
  {
    name: 'Dr. Jutta Steiner',
    company: 'Parity Tech',
    jobTitle: 'CEO and Co-Founder',
    twitter: '@jutta_steiner ‏',
    day: 'March 2',
    time: '9:58 AM',
    talkTitle: 'Web3 and the Decentralized Internet',
    headshot: 'https://blockstack.imgix.net/9900ff64-1f63-4eba-bd7b-44bf8a7a5878_jutta_steiner.jpg'
  },
  {
    name: 'Santiago Siri',
    company: 'The Democracy Earth Foundation',
    jobTitle: 'Founder',
    twitter: '@santisiri',
    day: 'March 2',
    time: '10:10 AM',
    talkTitle: 'Crypto Politics: Beyond the Nation-State',
    headshot: 'https://blockstack.imgix.net/f1a24617-447f-486c-b66d-5b5eb36f20a4_santiago_siri.width-1360.jpg'
  },
  {
    name: 'Dr. Steven "Seven" Waterhouse',
    company: 'Orchid Labs',
    jobTitle: 'CEO and Co-Founder',
    twitter: '@deseventral',
    day: 'March 2',
    time: '10:22 AM',
    talkTitle: 'Building a Censorship and Surveillance Free Internet',
    headshot: 'https://blockstack.imgix.net/f0e01716-d771-4cf9-9852-4b0b46f005fd_steve_orchid.jpg'
  },
  {
    name: 'Andy Bromberg',
    company: 'CoinList',
    jobTitle: 'Co-Founder and CEO',
    twitter: '@andy_bromberg',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
    headshot: 'https://blockstack.imgix.net/d976b947-36d2-4585-9eb8-368bd97210ea_andy_bromberg_headshot.jpg'
  },
  {
    name: 'Ari Paul',
    company: 'BlockTower Capital',
    jobTitle: 'Co-Founder and CIO',
    twitter: '@AriDavidPaul',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
    headshot: 'https://blockstack.imgix.net/ac9f4a81-58a3-4118-9d18-bdab1f1d9993_ari+paul.png'
  },
  {
    name: 'Brittany Laughlin',
    company: 'Lattice Ventures',
    jobTitle: 'Partner',
    twitter: '@br_ttany',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
    headshot: 'https://blockstack.imgix.net/5909e678-a6dd-495c-93dc-1f42e7cd5705_brittany+laughlin.jpg'
  },
  {
    name: 'Richard Muirhead',
    company: 'Fabric Ventures and OpenOcean',
    jobTitle: 'Fabric Ventures, Founding Partner & OpenOcean, General Partner',
    twitter: '@richardmuirhead',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
    headshot: 'https://blockstack.imgix.net/400f2ce0-144f-40e0-9336-9a33208960d0_richardmuirhead.jpg'
  },
  {
    name: 'William Mougayar',
    company: 'Self',
    jobTitle: 'Author: "The Business Blockchain." Technology Futurist',
    twitter: '@wmougayar',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
    headshot: 'https://blockstack.imgix.net/0f41ec47-d4e6-458a-9406-19c8a3ada9da_william-mougayar.jpg'
  },
  {
    name: 'Larry Salibra',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@larrysalibra',
    day: 'March 1',
    time: '11:05 AM',
    talkTitle: 'Blockstack Identity & Authentication',
    headshot: 'https://blockstack.imgix.net/d70de42e-5056-4cec-af87-55ab20055c5d_larry.jpg'
  },
  {
    name: 'Nick Szabo',
    company: 'Self',
    jobTitle: 'Blockchain, Cryptocurrency & Smart Contracts Pioneer',
    twitter: '@NickSzabo4',
    day: 'March 2',
    time: '11:20 AM',
    talkTitle: 'Social Scalability and Blockchains',
    headshot: 'https://blockstack.imgix.net/66fff681-9862-4fdb-b57a-2677670d1a69_nick-szabo.jpg'
  },
  {
    name: 'Jude Nelson',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@JudeCNelson',
    day: 'March 1',
    time: '11:25 AM',
    talkTitle: 'Subdomains',
  },
  {
    name: 'Elizabeth Stark',
    company: 'Lightning Labs',
    jobTitle: 'Co-Founder and CEO',
    twitter: '@starkness',
    day: 'March 2',
    time: '11:42 AM',
    talkTitle: 'Building the Future of Layer 2',
    headshot: 'https://blockstack.imgix.net/bb29c187-86d9-4af5-af62-a250dfec9023_elizabeth+stark_lightning+labs_co-founder+and+ceo.jpeg'
  },
  {
    name: 'Ken Liao',
    company: 'Blockstack',
    jobTitle: null,
    twitter: null,
    day: 'March 1',
    time: '11:45 AM',
    talkTitle: 'Building a Blockstack App',
  },
  {
    name: null,
    company: null,
    jobTitle: null,
    twitter: null,
    day: null,
    time: '11:59 AM',
    talkTitle: 'Stable Coins Interview',
  },
  {
    name: 'Nader Al-Naji',
    company: 'Basecoin',
    jobTitle: 'Founder, CEO',
    twitter: '@nadertheory',
    day: 'March 2',
    time: '11:59 AM',
    talkTitle: 'Stable Coins Interview',
    headshot: 'https://blockstack.imgix.net/975731a9-abea-42aa-b17c-aee8698153c8_nader.jpg'
  },
  {
    name: 'Aaron Blankstein',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@AaronBlankstein',
    day: 'March 1',
    time: '12:05 PM',
    talkTitle: 'Gaia Storage',
  },
  {
    name: 'Chase Wackerfuss',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@vockerfoos',
    day: 'March 1',
    time: '12:55 PM',
    talkTitle: 'Blockstack.js Storage Strategies',
  },
  {
    name: 'Brett Sun',
    company: 'Aragon',
    jobTitle: 'EVM',
    twitter: '@sohkai',
    day: 'March 1',
    time: '1:15 PM',
    talkTitle:
      'Approaching Infinity: Governance & The Case for Experimentation',
  },
  {
    name: 'Edward Snowden',
    company: 'Self',
    jobTitle: 'Former U.S. Intelligence Officer and Whistleblower',
    twitter: '@Snowden',
    day: 'March 2',
    time: '1:15 PM',
    talkTitle: 'Edward Snowden Interview with Peter Van Valkenburgh',
    headshot: 'https://blockstack.imgix.net/29ba0191-dcba-44bb-95cf-f21372358219_edward+snowden_former+u.s+intelligence+officer+and+whistleblower.jpg'
  },
  {
    name: 'Peter Van Valkenburgh',
    company: 'Coin Center',
    jobTitle: 'Director of Research',
    twitter: '@valkenburgh',
    day: 'March 2',
    time: '1:15 PM',
    talkTitle: 'Edward Snowden Interview with Peter Van Valkenburgh',
    headshot: 'https://blockstack.imgix.net/dd9fb610-ba5c-400d-9e6a-86df26347ab0_peter-van-valkenburgh.jpg'
  },
  {
    name: 'Xan Ditkoff',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@XanDitkoff ‏',
    day: 'March 1',
    time: '1:35 PM',
    talkTitle: 'Resources for Building Apps on Blockstack',
  },
  {
    name: 'Albert Wenger',
    company: 'Union Square Ventures',
    jobTitle: 'General Partner',
    twitter: '@albertwenger',
    day: 'March 2',
    time: '2:17 PM',
    talkTitle: 'Privacy',
    headshot: 'https://blockstack.imgix.net/80d1f4de-541e-415a-b97f-06ba878ab84c_albert+wenger_union+square+venture_general+partner.png'
  },
  {
    name: 'George Gilder',
    company: 'Self',
    jobTitle: 'Book: "Life After Google." Information Theorist',
    twitter: '@ScandalOfMoney',
    day: 'March 2',
    time: '2:34 PM',
    talkTitle: 'Life After Google',
    headshot: 'https://blockstack.imgix.net/2f9dc725-549d-469c-bf41-585f7254900d_george+gilder.jpg'
  },
  {
    name: 'Patrick Stanley',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@PatrickWStanley',
    day: 'March 2',
    time: '3:00 PM',
    talkTitle: 'Intro to Blockstack App - Casa',
  },
  {
    name: 'Jeremy Welch',
    company: 'Casa',
    jobTitle: 'Founder',
    twitter: '@jeremyrwelch',
    day: 'March 2',
    time: '3:02 PM',
    talkTitle: 'Casa - Launching the Best Key System on the Planet',
  },
  {
    name: null,
    company: null,
    jobTitle: null,
    twitter: null,
    day: null,
    time: '3:14 PM',
    talkTitle: "Intro to Blockstack Live App Demo's",
  },
  {
    name: 'Justin Carter',
    company: 'Misthos',
    jobTitle: null,
    twitter: null,
    day: 'March 2',
    time: '3:18 PM',
    talkTitle: 'Misthos App Demo',
  },
  {
    name: 'Bill Hessert',
    company: 'DotPodcast',
    jobTitle: null,
    twitter: '@BillHessert',
    day: 'March 2',
    time: '3:28 PM',
    talkTitle: 'DotPodcast App Demo',
  },
  {
    name: 'Aneela Qureshi',
    company: 'Symmitree',
    jobTitle: null,
    twitter: null,
    day: 'March 2',
    time: '3:37 PM',
    talkTitle: 'Symmitree App Demo',
  },
  {
    name: 'Ryan Wells',
    company: 'Health Here',
    jobTitle: null,
    twitter: null,
    day: 'March 2',
    time: '3:46 PM',
    talkTitle: 'Health Here App Demo',
  },
  {
    name: 'Thomas Osmonson',
    company: 'Coins',
    jobTitle: 'Independent Designer & Developer',
    twitter: '@aulneau_',
    day: 'March 2',
    time: '3:55 PM',
    talkTitle: 'Coins App Demo',
  },
  {
    name: 'Aron Beierschmitt',
    company: 'Postly',
    jobTitle: null,
    twitter: '@abearschmitt',
    day: 'March 2',
    time: '4:02 PM',
    talkTitle: 'Postly App Demo',
  },
  {
    name: 'Dirk Lueth',
    company: 'The Global Content Network',
    jobTitle: null,
    twitter: '@DirkLueth',
    day: 'March 2',
    time: '4:11 PM',
    talkTitle: 'Global Content Network App Demo',
  },
  {
    name: 'Justin Hunter',
    company: 'Graphite',
    jobTitle: null,
    twitter: '@jehunter5811',
    day: 'March 2',
    time: '4:20 PM',
    talkTitle: 'Graphite App Demo',
  },
  {
    name: 'Adam Breckler',
    company: 'Prism IO',
    jobTitle: null,
    twitter: '@adambreckler ‏',
    day: 'March 2',
    time: '4:29 PM',
    talkTitle: 'Prism App Demo',
  },
  {
    name: 'Matt Moody',
    company: 'Bellwethr',
    jobTitle: null,
    twitter: null,
    day: 'March 2',
    time: '4:38 PM',
    talkTitle: 'Bellwethr App Demo',
  },
  {
    name: 'Chris Burniske',
    company: 'Placeholder',
    jobTitle: 'Partner',
    twitter: '@cburniske',
    day: 'March 2',
    time: '4:58 PM',
    talkTitle: 'A Conversation on Digital Art & Cryptokitties',
    headshot: 'https://blockstack.imgix.net/7ba2bc6f-24d3-41ef-8b07-f2feab1f6bad_chris+burniske.png',
  },
  {
    name: 'Dieter Shirley',
    company: 'Axiom Zen',
    jobTitle: 'Director of Blockchain Technology',
    twitter: '@dete73',
    day: 'March 2',
    time: '4:58 PM',
    talkTitle: 'A Conversation on Digital Art & Cryptokitties',
    headshot: 'https://blockstack.imgix.net/3f2d0d11-5668-4dc6-b97f-76634e8d2327_dieter+wesbited+edited+2+%28no+hat%29.png'
  },
  {
    name: 'Mik Naayem',
    company: 'Axiom Zen',
    jobTitle: 'Strategic Partnerships',
    twitter: '@Mik_Naayem',
    day: 'March 2',
    time: '4:58 PM',
    talkTitle: 'A Conversation on Digital Art & Cryptokitties',
    headshot: 'https://blockstack.imgix.net/f672e139-35b9-4fd2-ad88-b3228bc08463_mik+website+%28edited%29.png'
  },
  {
    name: 'Juan Benet',
    company: 'Protocol Labs, Filecoin, IPFS',
    jobTitle: 'CEO and Founder',
    twitter: '@juanbenet',
    day: 'March 2',
    time: '5:15 PM',
    talkTitle: 'Filecoin',
    headshot: 'https://blockstack.imgix.net/81c8bdfc-fe1b-4aff-8c18-f86a24236608_juan+benet.png'
  },
  {
    name: 'Felix Petersen',
    company: 'Samsung NEXT Europe',
    jobTitle: 'Managing Director',
    twitter: '@fiahless',
    day: 'March 2',
    time: '5:32 PM',
    talkTitle: 'Berlin Eco-System & What the Future Holds...',
    headshot: 'https://blockstack.imgix.net/66cb56ee-352d-46e2-86ec-a9ac10dcb7e4_felix_petersen.jpg'
  },
];


export default data;