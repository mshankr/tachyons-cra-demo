import React from 'react';

const artists = [
  {
    aria: "Beyoncé",
    shopUrl: "https://www.amazon.com/BEYONCÉ-Beyonce/dp/B00KCOMBJC/ref=sr_1_2_twi_lp__3?s=music&ie=UTF8&qid=1480422067&sr=1-2&keywords=beyonce&tag=mrmrs01-20",
    imageUrl: "http://mrmrs.github.io/photos/beyonce.jpg",
    divClass: "fl w-50 w-25-ns"
  },
  {
    aria: "Kaytranada",
    shopUrl: "https://www.amazon.com/99-9-KAYTRANADA/dp/B01D9DBNX2/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480422105&sr=1-1&keywords=kaytranada+vinyl&tag=mrmrs01-20",
    imageUrl: "http://mrmrs.github.io/photos/kaytranada.jpg",
    divClass: "fl w-50 w-25-ns"
  },
  {
    aria: "Woman - Justice",
    shopUrl: "https://www.amazon.com/Woman-2LP-Set-Full-Album/dp/B01LX3E0ET/ref=sr_1_1?s=music&ie=UTF8&qid=1480422119&sr=1-1&keywords=justice&tag=mrmrs01-20",
    imageUrl: "http://mrmrs.github.io/photos/justice.jpg",
    divClass: "fl w-50 w-25-ns"
  },
  {
    aria: "Skin - Flume",
    shopUrl: "https://www.amazon.com/Skin-Flume/dp/B01DD5N35W/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480422133&sr=1-1&keywords=flume&tag=mrmrs01-20",
    imageUrl: "http://mrmrs.github.io/photos/flume.jpg",
    divClass: "fl w-50 w-25-ns"
  },
  {
    aria: "Seat at Table Solange",
    shopUrl: "https://www.amazon.com/Seat-at-Table-Solange/dp/B01LXP7I5N/ref=sr_tnr_p_1_195429011_1_twi_lp__3?s=music&ie=UTF8&qid=1480422087&sr=1-1&keywords=solange+seat+at+the+table&tag=mrmrs01-20",
    imageUrl: "http://mrmrs.github.io/photos/solange.jpg",
    divClass: "fl w-50"
  },
  {
    aria: "Untitled Unmastered - Kendrick Lamar",
    shopUrl: "https://www.amazon.com/99-9-KAYTRANADA/dp/B01D9DBNX2/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480422105&sr=1-1&keywords=kaytranada+vinyl&tag=mrmrs01-20",
    imageUrl: "http://mrmrs.github.io/photos/untitledunmastered.jpg",
    divClass: "fl w-50 w-25-ns"
  },
  {
    aria: "Moon Shaped Pool 2",
    shopUrl: "https://www.amazon.com/Moon-Shaped-Pool-2-LP-Download/dp/B01FDF12UI/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480370971&sr=1-1&keywords=moon+shaped+pool&tag=mrmrs01-20",
    imageUrl: "http://mrmrs.github.io/photos/moonshapedpool.jpg",
    divClass: "fl w-50 w-25-ns"
  },
  {
    aria: "Colour Anything 2",
    shopUrl: "https://www.amazon.com/Colour-Anything-2-LP/dp/B01F8674B8/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480371036&sr=1-1&keywords=color+in+anything&tag=mrmrs01-20",
    imageUrl: "http://mrmrs.github.io/photos/colouranything.jpg",
    divClass: "fl w-50 w-25-ns"
  },
  {
    aria: "Good Luck Do Your Best",
    shopUrl: "https://www.amazon.com/Good-Luck-Do-Your-Best/dp/B01C3IHINI/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480371123&sr=1-1&keywords=good+luck+gold+panda&tag=mrmrs01-20",
    imageUrl: "http://mrmrs.github.io/photos/goldpanda.jpg",
    divClass: "fl w-50 w-25-ns"
  }
]

export default () => (
  <article class="cf">

  {artists.map((item, i) =>
    <div class={item.divClass}>
      <a href={item.shopUrl} class="db aspect-ratio aspect-ratio--1x1 dim">
        <span role="img" aria-label={item.aria} style={{ backgroundImage:`url(${item.imageUrl})` }} class="bg-center cover aspect-ratio--object"></span>
      </a>
    </div>
  )}

</article>
);
