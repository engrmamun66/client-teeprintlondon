/**
 * We will use
 * useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png', 
    keywords: 'Printing,'
  })
 */

const LOGO_URL = '/img/logon_fina.png'

const DESCRIPTIONS = {
  common: `Tee Print London provides the most affordable same day T-shirt printing services across London and the UK. We take great care with each order, ensuring prompt delivery. Our offerings go beyond custom T-shirts to include hoodies, tote bags, caps, sportswear, workwear`, 
}
const KEWORDS = {
  common: `hoodies, tote bags, caps, sportswear, workwear`, 
}


let META_BOX = {
  root: { 
    title: 'Teeprint', 
    description: DESCRIPTIONS.common, 
    ogImage: LOGO_URL,
    keywords: KEWORDS.common,
  },
  pages: {
    "women-t-shirt": {
      "description": "Lorem ipsum description",
      "keywords": KEWORDS.common
    },
    "commodi-nemo-quidem": {
      "description": "Lorem ipsum description for comoodi",
      "keywords": KEWORDS.common
    },
  },
  category_pages: {
    "commodi-nemo-quidem": {
      "description": "Lorem ipsum description for comoodi",
      "keywords": KEWORDS.common
    },
  }
}

function getMeta(key1, key2='', titleFromKey2=false){
  let meta = null

  if(META_BOX?.[key1]) meta = META_BOX?.[key1]
  if(meta){
    if(meta?.[key2]){
      meta = meta?.[key2]
    } else { 
      meta = {
        title: 'Teeprint', 
        description: '', 
        ogImage: LOGO_URL,
        keywords: 'no-keywords',
      }
    }
  }
 
  const constucfirstOfWords = (text, spliter='-') => { // upper case, first char of each words
    if(!text) return '';
    text = String(text);
    const ucFirst = (str) => (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    return text.split(spliter).map(ucFirst).join(' ');
  }

  let titleBySlug = null

  
  if(!meta || !(typeof meta == 'object')){ 
    meta = META_BOX['root']
  }

  if(titleFromKey2){
    meta['title'] = constucfirstOfWords(key2)
  }
  if(!meta?.ogImage){
    meta['ogImage'] = LOGO_URL
  }


  if(meta){
    if(meta?.['title'] !== 'Teeprint'){
      meta['title'] = `Teeprint :: ${meta['title']}`
    } 
    meta['ogTitle'] = titleBySlug || meta?.['title']
    meta['ogDescription'] = meta?.['description']
  }
  
  return meta
}


export default getMeta