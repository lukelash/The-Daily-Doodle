window.onload = () => {
// ALL URL ARRAYS CONTAINING IMAGES ARE AT THE BOTTOM OF THIS FILE
console.log("test");

//  let button1 = document.querySelector('#button1'); // left button? TBD...

let pastelArray = [
  "#D7ECD9", // green
  "#F5D5CB", // rose
  "#D5D6EA", // purple
  "#F6ECF5", // lavender
  "#C2DDE6", // lighter blue
  "#BCCBDE", // darker blue
  "#F6E3D4", // champagne
  "#FFBEBC" // orange
];

// goldendoodle images from r/GoldenDoodles
let goldenDoodlesArray = [
  "https://i.redd.it/jeiauos42jd61.jpg",
  "https://i.redd.it/a9ewrhqq1jd61.jpg",
  "https://i.redd.it/d80omv8aild61.jpg",
  "https://i.redd.it/epivdus6mkd61.jpg",
  "https://i.redd.it/s5kpeazp07u41.jpg",
  "https://preview.redd.it/0q57arlvnax51.jpg?width=2438&format=pjpg&auto=webp&s=76ece39f05713f32202778008ce8aa24f84980cf",
  "https://i.redd.it/w6nnraf3zbt51.jpg",
  "https://i.redd.it/12liumpjowv31.png",
  "https://i.redd.it/rul6t3tmgo841.jpg",
  "https://i.redd.it/7b8je1lvv7y51.jpg",
  "https://i.redd.it/kvwqmbw0j6461.jpg",
  "https://i.redd.it/2uycov0ccuy51.jpg",
  "https://i.redd.it/v18v4tfzmrp31.jpg",
  "https://preview.redd.it/no0854gvygs51.jpg?width=3024&format=pjpg&auto=webp&s=de72dd2df005ccb6e1faa2f86568242fe0697080",
  "https://i.redd.it/et8sny6mptv41.jpg",
  "https://i.redd.it/hhou4isndf461.jpg",
  "https://i.redd.it/piuzbyb3f5h21.jpg",
  "https://i.redd.it/g73s583lyu541.jpg",
  "https://i.redd.it/mjcre210y1w51.jpg",
  "https://external-preview.redd.it/Z5B1CFMjdPAmBroFJoXCKMoBmAT0wnaW7aF8Sa65-J4.jpg?auto=webp&s=d19dbebe3bbd4012f4c0aa90e3e90ddb02993a43",
  "https://i.redd.it/60brzk7t6ak41.jpg",
  "https://i.redd.it/anttrghko9c61.jpg",
  "https://i.redd.it/qxpg8zif24o41.jpg",
  "https://i.redd.it/pdu3siwduhp41.jpg",
  "https://i.redd.it/1tksa943jy761.jpg",
  "https://i.redd.it/h0skzry04g041.jpg",
  "https://preview.redd.it/x3mt25wgfy461.jpg?width=3024&format=pjpg&auto=webp&s=d7db951431f6d82c9cd209b88607e56fbb0bc137",
  "https://i.redd.it/anbmq6zfuar41.jpg",
  "https://i.redd.it/lulux4054wc61.jpg",
  "https://i.redd.it/vs51xlbi0xo51.jpg",
  "https://i.redd.it/f7tzwv1ch2h51.jpg",
  "https://i.redd.it/mdlx8tqx4zw21.jpg",
  "https://i.redd.it/04se7fi4pp951.jpg",
  "https://i.redd.it/2z6uc1jxhl061.jpg",
  "https://i.redd.it/0osyoie6w4861.jpg",
  "https://i.redd.it/l1t02d9hfj251.jpg",
  "https://i.redd.it/2vsl5dwo9nb51.jpg",
  "https://i.redd.it/2jplsv3cd0241.jpg",
  "https://i.redd.it/oovved3l5rc61.jpg",
  "https://i.redd.it/ekuf56exp3b61.jpg", // probably the cutest photo of them all
  "https://preview.redd.it/l7qem8wobm461.jpg?width=3024&format=pjpg&auto=webp&s=9b20d4e174dbb913b55b59038fb6358de6df0533",
  "https://i.redd.it/p4cy2ecnthr51.jpg",
  "https://i.redd.it/8kt8w2fodhb51.jpg",
  "https://i.redd.it/o3fygef72lc21.jpg",
  "https://i.redd.it/7f141s4pi2t41.jpg",
  "https://i.redd.it/ofb8qc4lqnc31.jpg",
  "https://i.redd.it/5uqf605lgkj41.jpg",
  "https://i.redd.it/os94cxgmm1a41.jpg",
  "https://external-preview.redd.it/dRED1d7mE4GbidICYuEIMspmk72Fdte_mhpfmVbH7aQ.jpg?auto=webp&s=6c79354e30760102f06cbe65acaf2bd3c8bdd3b7",
  "https://i.redd.it/lbpnh46sdsb41.jpg",
  "https://i.redd.it/vergkzwiii551.jpg",
  "https://i.redd.it/z9ympek8su561.jpg",
  "https://i.redd.it/9yoh0gfie6c61.jpg"// for picking up the next series of links, the link directly to the left here is posted by user u/EpicLifeGaming
]; // stores urls, for now

// imaginary landscapes from r/ImaginaryLandscapes
let imaginaryLandscapesArray = [
  "http://www.mccallstudios.com/includes/uploads/2015/10/0037-005_the_prologue_and_the_promise.jpg", /* this one is actually not from reddit, has some
  scaling issues to deal with */
  "https://external-preview.redd.it/Q1bR7tiHO55VhBWDhEjzGDHOt1Cc0GfY9CzwoDUWeXE.jpg?auto=webp&s=b85e5d3018fb6127b70e1a0f17538252f6bafe68",
  "https://preview.redd.it/e947ut1cz8411.png?width=640&crop=smart&auto=webp&s=741845c3529365575aa50c16ca3bfa9d451a54f0",
  "https://external-preview.redd.it/GNu21kOobdIw5j8csZHBxVmhhsrwjZWugFWFNwiakoo.jpg?width=640&crop=smart&auto=webp&s=34569000b0c4841bb8aebfce9ae29a21d8cf2ad6",
  "https://external-preview.redd.it/9L6J0xLjbM4WJrUC6dZ2RIP-njWpl93g6-yDxuMSyjI.jpg?width=640&crop=smart&auto=webp&s=d67c580329524e0d071e3a37c4f9966753514771",
  "https://external-preview.redd.it/8qd-8fyuP3qGbKm1c_r6e0j-_8_Hr9vAM2uKbMyPWhk.jpg?width=640&crop=smart&auto=webp&s=82cbb322f48eeb03655c88bd5d4e1f9a78f1f81c",
  "https://external-preview.redd.it/l7oAwZlbMVV3fS9--IKME8LK6NIZrvsGmlwCVulABHg.jpg?width=640&crop=smart&auto=webp&s=a4e298f362889039de85b4ffebdf7c0afc48e051",
  "https://external-preview.redd.it/-FpHt27TGVA2JcxP0N0OrHdexzD-Mo9OXhjA8t4rvcM.jpg?width=640&crop=smart&auto=webp&s=0e4e7985d7f11ce490ecf6ce689486322fd2935a",
  "https://external-preview.redd.it/DxdEhc5A-axGXgK2kUEsZusZ_CPG8_loD1sCn3qhlbM.jpg?width=640&crop=smart&auto=webp&s=7aff76af971acba66caa79e10a46e5f20f7a3beb",
  "https://external-preview.redd.it/Wji6V8H2rwsdBzKIFd8WzRwlC7ACfs3sD7ilQjo1Y18.jpg?auto=webp&s=9038c46ec8e8bcac67607a566843eb2d1e17cf81",
  "https://external-preview.redd.it/E7v1cQ0dcKM6nhznbe0WDyr9ffHm_Uv0_-NAs2KXbV4.jpg?width=640&crop=smart&auto=webp&s=0bcf5a0fa5204795752d8f4d4a71f7cf612cb665",
  "https://preview.redd.it/qktea3h09wj01.jpg?width=640&crop=smart&auto=webp&s=0a67b3c2d3b531f6d5cf7cf5fd4baaf0221cd8ea",
  "https://external-preview.redd.it/68wNwDgmaDkJHGtw46dyd30OL_Df29Ilc2cci26o3u0.jpg?width=960&crop=smart&auto=webp&s=a3a117e8779605a2fcf0fe2a0927767a880048b3",
  "https://preview.redd.it/cxgt2t6s5zy01.jpg?width=640&crop=smart&auto=webp&s=11d5f565ac5e6aea302978af8b5d908bf0c26aa3",
  "https://preview.redd.it/2o34jcnmzj411.jpg?width=640&crop=smart&auto=webp&s=5c94335f10164d904996548c64f3d2898d2b06da",
  "https://external-preview.redd.it/qDp0Ch3lsxAaW8EPMBBvfWMNdhQ_lz_nmu8_BuxDb-w.jpg?width=640&crop=smart&auto=webp&s=9cf8d4df412aefd3020fc862e26a4695be920eb5",
  "https://external-preview.redd.it/yc8m5C8DsUF_tLR1saOfhvEoNjy9QOIejM96wmyWNGA.jpg?width=640&crop=smart&auto=webp&s=2623d1bf299826abc26173315a897545fd98b772",
  "https://external-preview.redd.it/wPSeDyIVpjIdduOWH_gUTgIPLUUXyVfyxZTrHcZlAKA.jpg?width=640&crop=smart&auto=webp&s=7d51858bd960866d4caea33eea4491c52845a2e9",
  "https://external-preview.redd.it/qCwz_JFRSrqZbE7iGm9IAVK9Ems6Lzy3PdNsiCyqfEw.jpg?width=640&crop=smart&auto=webp&s=512c5bec52f7881dc2ea360e7e13f8a047f275cc",
  "https://preview.redd.it/wdfbag2omvgz.jpg?width=640&crop=smart&auto=webp&s=5e124fcb1c0680ed63b92d266ee44b15cc85e3fd",
  "https://preview.redd.it/u55050t6nc7z.jpg?width=640&crop=smart&auto=webp&s=e717c5a6d3a6f73937c49c20914ef3fc3bf4ae05",
  "https://preview.redd.it/6qfyh17sunq01.jpg?width=640&crop=smart&auto=webp&s=34c2286b09fa2fbe89a136c02ab2cc3c19f179d9",
  "https://external-preview.redd.it/sYC9-oMEUZdxS_bxroMhVA3F6SpsTjjqWmwpnkcQFWg.jpg?width=640&crop=smart&auto=webp&s=44a6d2b7c51c801432e20662e65be3f67e7e6fbc",
  "https://external-preview.redd.it/U1ELwboaIR58ZqI8U5utgSbs13W0ToyKK-dF8NTXrlQ.jpg?auto=webp&s=929e08310f9ea998406fada6ad7181a061eee693",
  "https://i.redd.it/3kyw47pu7nc01.png",
  "https://external-preview.redd.it/LJnvZu018lvP7tfsW2KblGHTMM7SfyZi9KQkjm6BOI8.jpg?width=640&crop=smart&auto=webp&s=afcec209768eebe3767fbaf2944bc6ededca9ee4",
  "https://external-preview.redd.it/JM_OFYecjGIAcPPKuF1bgTzVHNSgQdZMSZkfgZsiMow.jpg?width=640&crop=smart&auto=webp&s=b4f572067d1dfd0aed7cf28f6aa6882e0efca23a",
  "https://external-preview.redd.it/2ByaAKqOlJib-FEzXyD--hsVufRHnRXsffFNp2DhueE.jpg?width=640&crop=smart&auto=webp&s=c342268dab552ecd36dc5071c6ff677dbb2c4c4b",
  "https://external-preview.redd.it/gKYVixWZaywbSddKU9XLXDvkSotW3K54ISU9Tpfdh84.jpg?width=640&crop=smart&auto=webp&s=14a6b14672bd7d20e6d601bb40be8149d30fa02a",
  "https://external-preview.redd.it/TA7smR0vOlyKpqG9dsd2E3UO1RzNFzkIBAtthAz7wJw.jpg?width=640&crop=smart&auto=webp&s=052f84c29062efc94bd909dcb6fc11dcb2a7a7fc",
  "https://external-preview.redd.it/iPqmLE3SAu8oMQcgrn2Z9hUxlhdZJBY_HEfeDBUDpw8.jpg?width=640&crop=smart&auto=webp&s=4fffd9e63e56f8596e3fbb012ce5e5bd43da7b29",
  "https://preview.redd.it/czxm8i6zy1d11.jpg?width=640&crop=smart&auto=webp&s=cf5cff73e39338f909b29abe78126607be20834e",
  "https://external-preview.redd.it/1CPWmhMv71fGJAfp9QazG99z6gTDMbwQ5I6AdLfAEF8.jpg?auto=webp&s=53e713af017a96348e89822d8531b5529b03bfbe",
  "https://external-preview.redd.it/l1mYh4acn6DCiXrcgYuQ5QZV8ESL4ZuhINsmQIZMfpE.jpg?width=640&crop=smart&auto=webp&s=014849007a9883e1d7e7ae1ab24f6df81fe4f610",
  "https://preview.redd.it/1oexa83ptaa61.jpg?width=640&crop=smart&auto=webp&s=c838a662c4cae1b7e2ecd49ef3e4f40930ca3d3d",
  "https://preview.redd.it/q09vtjd12z551.png?width=640&crop=smart&auto=webp&s=62b5afcf9665c49fde350f31baa4f274039c8e7a",
  "https://preview.redd.it/vu6colvmo0c41.jpg?width=640&crop=smart&auto=webp&s=31cc7c583af67b407d43fd21ae3b33418bd4d32e",
  "https://preview.redd.it/5vujwvqbrp521.jpg?width=640&crop=smart&auto=webp&s=3628ba15cb1e232e95f0f1efabdbdde07cc42368",
  "https://external-preview.redd.it/s8nSBCZIA1NB81ZxyHPOmG8TN9A-zRrsF0RfuWRCga8.jpg?width=640&crop=smart&auto=webp&s=02628b33ff21e7026bc759b86c948c56594f053b",
  "https://preview.redd.it/26uhcyf06xn01.jpg?width=640&crop=smart&auto=webp&s=f0f842d5a158574e3b66d041b10a7a2c5b7adae9",
  "https://external-preview.redd.it/y3m3docLrEveZjXJ7hVaqlTXG7XWhX-eKTty59qU3Gc.jpg?auto=webp&s=f45a174000f8342f087bae6ca86dcc121cead100",
  "https://external-preview.redd.it/5boRQqQH6nZL2K18ChZxSOkgk3Tt5hLEcCV9B6ewaQg.jpg?width=640&crop=smart&auto=webp&s=66e9bbe29cd2607bddce1936a27a6bec4c990a6d",
  "https://external-preview.redd.it/4nLC5zp9w6d2PjH5P2mLW8sQcsicUqzWbo6uwCkZKk0.jpg?width=640&crop=smart&auto=webp&s=0ea4501f7dcb93b5963794b58732ee16095d7c01",
  "https://external-preview.redd.it/RPSMtOe8wxkjoK45tTEUbWo3Y8F5mdTynZxYQvBNIUc.jpg?width=640&crop=smart&auto=webp&s=40304fd18a6571fbfda4747f8b47ffd41a68fd93",
  "https://external-preview.redd.it/Tblqz4nyXFDfJNP--Ev6-DQSO-qUoIs0A4ow5snbaxA.jpg?width=640&crop=smart&auto=webp&s=130c45f871da431b2eec584e35810647217c4aff",
  "https://external-preview.redd.it/KgQDz3rZSVGS3Chx99HMiGF4skLeVeotRzbZFIS5pSg.jpg?width=640&crop=smart&auto=webp&s=7ce75353136ca21adcf2455def9383401ed45c01",
  "https://external-preview.redd.it/Csp-h5841rWJypvON1gTLUnXuCn1-Wp3Nord3zAptXY.jpg?auto=webp&s=b23c5fa892046444602bccc443b4b27da1da6998",
  "https://external-preview.redd.it/EMTddfgyCF82bI4kXcTcEQK-sHbpahPjnw5cLiLntK8.jpg?width=960&crop=smart&auto=webp&s=98e1e16194ee9264dd0c8fdcdcf97d93ec8faf37",
  "https://external-preview.redd.it/PCjVorp0czZrL493N9V4CBL0b-fNwLtUmKTfIm5iJsc.jpg?width=640&crop=smart&auto=webp&s=a5d62013e0bf7f58ba783b4c2a646ede4cc2a4c7"
];

let imaginaryTechnologyArray = [
  "https://external-preview.redd.it/24rrzr4P9Jk65C954cu6zRXIoQkX5j4NrAbccbQ3V5Q.jpg?width=640&crop=smart&auto=webp&s=9a0878d3a5aa768dfe26c9e451e762191bb61586",
  "https://external-preview.redd.it/1kCa1Yex-JVwPlksgGHfTDtR1I2HzvbI4Gn1c8TgpkM.jpg?width=640&crop=smart&auto=webp&s=0deb84caca4d367ae9695130f32ef8abb6633cce",
  "https://external-preview.redd.it/AB3p7MFxuOnia14pOMTQtqwMAfSfiVBEN8aw8Mgdpgk.jpg?width=640&crop=smart&auto=webp&s=497612a0bc98ac633d5e7079c8a8c858369db306",
  "https://external-preview.redd.it/_ttwWSo_kxvdJAwtMqN8XGB-KM0Qe1OooDsijH33y9g.jpg?width=640&crop=smart&auto=webp&s=dbf95cec4aeef1d6e268c54820459e5861ee3ee7",
  "https://preview.redd.it/p4kfrnmpg7o31.jpg?width=640&crop=smart&auto=webp&s=9ac807bdc21875ea85eaac67ad496dda88b3b2bd",
  "https://preview.redd.it/erfs8naabzd51.jpg?width=640&crop=smart&auto=webp&s=4cd32fdee1be2346548aadf0d791088d8b117e03",
  "https://preview.redd.it/iodmaxxq42e61.jpg?width=640&crop=smart&auto=webp&s=fa12324f05efab71d8af0729c764282affa7e5d8",
  "https://external-preview.redd.it/kTjrm3XhPpvhIzcpdl6_Qd2tRIJceK3FkFiKqQK71ZY.jpg?width=640&crop=smart&auto=webp&s=dc1a5e65eac9ff8c95f45c423211ee892d1bf0fd",
  "https://preview.redd.it/gvmwir76zhm51.jpg?width=640&crop=smart&auto=webp&s=c700b91c8ce974d377e823e7679750490d456fae",
  "https://external-preview.redd.it/Y9fN5mXxrzmijfd43tNptf_bT7E5Tst6WP2vI-29FYc.jpg?auto=webp&s=6f5fced96701d611ae79cb698545ae7815d84bca",
  "https://external-preview.redd.it/wIdZIfsawq61c6ylEdTM8UYASgG44ticUObtNEH144E.jpg?width=640&crop=smart&auto=webp&s=f30105f219b1938eed75bd9ea2c3ef00d7224249",
  "https://preview.redd.it/2ga0l8e3khb61.jpg?width=640&crop=smart&auto=webp&s=927e550e5813010bbb92f446e0175c65e36a9f45",
  "https://external-preview.redd.it/Kp38NRJ9the4lYTcA7hT36mOPbYIJzXVwfd0tOJgAws.jpg?width=640&crop=smart&auto=webp&s=8280b1b9ed1a31b943d60ceb4bfe86631c569e6d",
  "https://external-preview.redd.it/E4bg4WDEtgw73rLrvrdNcvTw011kX6ertiRLut1OjF8.jpg?width=640&crop=smart&auto=webp&s=6c7c20bf1a177f4ffe3f4534df290104553e39b2",
  "https://external-preview.redd.it/kSbMiqs9DWY8HKqdg2-2nF6WLVx8nBENwB4SL1Y_bao.jpg?width=640&crop=smart&auto=webp&s=7436e86ca94d95a0d411f4c04a7dcfc83acd3faa",
  "https://external-preview.redd.it/yN5_VdP8hkV-IKCDZ7PoWGFPzbc40su9TuDM2_tpKGU.jpg?width=640&crop=smart&auto=webp&s=8befd23f8ca3ca09855a4a60a19ba4a66140e3bb",
  "https://external-preview.redd.it/wGJihFS-nQ6FPJsIE39lGjEaprZR6hto18sELz863nA.jpg?auto=webp&s=df501a4a28a0c516c916cdf9f65bec5fd7f4860f",
  "https://preview.redd.it/ippyvvdquva61.jpg?width=640&crop=smart&auto=webp&s=659a571a6eeeac8b40dbd4a8f33ec19d44587fea",
  "https://preview.redd.it/ashlhxcz5mj11.jpg?width=640&crop=smart&auto=webp&s=a78e0cef72f49c81573154f636ce7ff1c642d96d",
  "https://external-preview.redd.it/Lxa9xEOSiw4oddqcMALj96hjCo6XworiLV_Oye-CZeE.jpg?width=640&crop=smart&auto=webp&s=4e5c84fcd919e13da098b58bbb15c1fff379f28b",
  "https://preview.redd.it/q3h6sj38eey51.jpg?width=640&crop=smart&auto=webp&s=c69b5a561dc1d7ca9da31b378d1a26981be0e32f"
];
let earthPornArray = [];
let artArray = [];
let starWarsArtArray = []; // what might this be?
let imaginaryMindscapesArray = [];
let sciFiArtArray = [];
let imaginaryFuturismArray =[];
let artOfSciFiArray = [];
let specArtArray = ["https://external-preview.redd.it/caMll1rUrjS3iZnt7xIDaQxOgoxpPtLWHtwwx358Ff8.jpg?auto=webp&s=9b864f5f2168ae0b9bde9e5b51252a1e0f8fdf19",
"https://i.redd.it/u7wh06xxgp251.jpg",
"https://i.redd.it/u7wh06xxgp251.jpg",
"https://i.redd.it/w572oklba0x51.jpg",
"https://i.redd.it/wy4hgat7f6a41.jpg",
"https://i.redd.it/gdjfkeqqp5051.jpg",
"https://i.redd.it/1lpmk3l3cna51.jpg",
"https://i.redd.it/jxqfrqz419v51.jpg",
"https://i.redd.it/8sns0iunp6a61.jpg",
"https://external-preview.redd.it/nzUsPIVYeaM0LPVtpCLDLm29SZRYbTsxfgqD0w8KGqQ.jpg?auto=webp&s=79f3e86925a79884ee75d9c50297e04fb7756285",
"https://external-preview.redd.it/9pGHJ-yROWMNIdpvl6xMpxYc72ID58mkzwZR4n-TuyM.jpg?auto=webp&s=6cad05e6a16902d5b714b9abc88812ab04847218",
"https://i.redd.it/3dynkuas8qg41.png",
"https://i.redd.it/c4h8v1f1w3351.png",
"https://external-preview.redd.it/_7ntYBHIEFF-7kTO7VufCAtL_Ub4Y11_mon5KXZA9Mc.jpg?auto=webp&s=972aab213610457e11990bc67ea6370cbfa7bc50",
"https://i.redd.it/jszlpicyi6u51.jpg",
"https://i.redd.it/t3fpdcpd2b851.jpg",
"https://i.redd.it/inz5jlayrp451.jpg",
"https://i.redd.it/7rs0qawndsv51.jpg",
"https://i.redd.it/0zgbq8suex741.jpg",
"https://i.redd.it/76vi8mj9xqf41.png",
"https://external-preview.redd.it/eyFR-frxb06C9Yeai00RMiYlYiHOs9eTPnJVoEAyLXQ.jpg?auto=webp&s=5b640aef6da90a853f8b44e17c5cc181353aaa00",
"https://external-preview.redd.it/-jo7AoVfAQjxyY_J0YPazP3O-qXNlkekBUIljYSu5dc.jpg?auto=webp&s=a54521601ebb1c75e75af6aa37a9d44bf1ca242c",
"https://external-preview.redd.it/ZOiQQbR66_gcKVGkcSJRVzdr960xcCn-vJ4MJAl4ibE.jpg?auto=webp&s=cc6f2ec78f89c198bc2497f9387c8155f616cd0c",
"https://i.redd.it/4y1com2l3ix41.jpg",
"https://external-preview.redd.it/CIFNZfEg1R6JgIB2r_csbhSTXg4oFX2fQez7CpErG3g.jpg?auto=webp&s=502a93b810088dbf006b15f8be7a4e61abe143ae",
"https://i.redd.it/nmatxb9kc6941.png",
"https://i.redd.it/oyemhbyh75v41.jpg",
"https://i.redd.it/qtsnavqeq0t51.png",
"https://i.redd.it/ej14dmvoexk51.jpg"];

// Be sure to add any new arrays inside allArrays!
let allArrays = goldenDoodlesArray.concat(imaginaryLandscapesArray).concat(imaginaryTechnologyArray).concat(earthPornArray).concat(artArray)
                .concat(starWarsArtArray).concat(imaginaryMindscapesArray).concat(sciFiArtArray).concat(imaginaryFuturismArray).concat(artOfSciFiArray)
                .concat(specArtArray);
let allArrays2 = ["https://external-preview.redd.it/U1ELwboaIR58ZqI8U5utgSbs13W0ToyKK-dF8NTXrlQ.jpg?auto=webp&s=929e08310f9ea998406fada6ad7181a061eee693"]
// CHANGE THIS TO SELECT YOUR DESIRED IMAGE THEME
let urlArray = allArrays;

let image = document.getElementById('img');

//var randomArray = Math.floor(Math.random() * urlArray.length);
//var randomURL = Math.floor(Math.random() * urlArray[randomArray].length);
//image.src = allArrays[1,1];
image.src = urlArray[Math.floor(Math.random() * urlArray.length)]; // set the images's source to the randomly selected url

var randomPastel = Math.floor(Math.random() * pastelArray.length); // generate random pastel color index for background color changes
document.body.style.backgroundColor = pastelArray[randomPastel]; // set the page background to the randomly selected pastel

document.getElementById('img').addEventListener('click', resizeDownPrimary);
var clicks = 0;// this is janky, but it keeps the resizeDown function from being called too many times (effectively allowing only one or two scale downs)
var imgToBeScaled = document.getElementById("img");

function resizeDownPrimary() {
  // first scale down, if the image resolution is too bad and the image needs to be made smaller
  // See that imgToBeScaled.width = imgToBeScaled.width * 0.6; is relative and will not always work proportionally
  // See that imgToBeScaled.style.height = "60%"; is absolute and won't work for successive size changes
  // Also see that scaling the width BY 0.6 and scaling the height TO 60% is not proportional
  // POSSIBLE NEXT STEP: Since scaling by 0.6 works for width and not height, you could call a function that gets the image height (maybe width too)
            // and sets specified heights for those grabbed heights using some conditionals. Kinda messy but should work
  if (clicks == 0) {
    imgToBeScaled.width = imgToBeScaled.width * 0.6; // scales image width by half
    imgToBeScaled.style.height = "55%"; // the above line doesn't work for height (???), so height has to be changed using absolute measure
    /*var initialHeight = imgToBeScaled.style.height;
    var scale = 0.8;
    var newHeight = imgToBeScaled.style.height - scale * initialHeight;

    var initialWidth = imgToBeScaled.style.width;
    var newWidth = imgToBeScaled.style.width - scale * initialWidth;

    imgToBeScaled.style.width = newWidth + "px";
    imgToBeScaled.style.height = newHeight + "px";
*/


        //imgToBeScaled.style.width = 300 + "px";
    clicks++; // increment the number of clicks, lmao
  }
}
/*
document.getElementById('img').addEventListener('click', resizeDownSecondary);

function resizeDownSecondary() {

  // first scale down, if the image resolution is too bad and the image needs to be made smaller
  if (clicks == 1) {
    imgToBeScaled.width = imgToBeScaled.width * 0.6; // scales image width by half
    imgToBeScaled.style.height = "60%"; // the above line doesn't work for height (???), so height has to be changed using absolute measure
    clicks++; // increment the number of clicks, lmao
  }
}*/

/*
setTimeout(function(){
  var randomNum = Math.floor(Math.random() * urlArray.length); // generate random number for use in indexing the urlArray
  img.src = urlArray[randomNum]; // set the images's source to the randomly selected url
}, 5000);
*/

/*
img.addEventListener('click', () => {
  var randomNum = Math.floor(Math.random() * urlArray.length); // generate random number for use in indexing the urlArray
  img.src = urlArray[randomNum]; // set the images's source to the randomly selected url
})
*/


/*
document.getElementById("button3").addEventListener("click", toReddit);

  function toReddit() {
    window.open('https://www.reddit.com/r/Goldendoodles/', '_blank');
  }
*/
document.getElementById('button1').addEventListener("click", myFunction, false);

function myFunction() {

  document.getElementById('button1').style.backgroundColor = 'yellow';
  console.log("test2");
  contentFunction();
}


function contentFunction() {
  console.log("Hello");
  document.body.style.backgroundColor = "BLUE";

}

}
