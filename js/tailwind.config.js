tailwind.config = {
    theme: {
      extend: {
        // color part
        colors: {
          headerpartcolor:'rgba(22, 12, 109, 0.7)',
          hover: '#1BBF00',
          banneroverly:'rgba(106, 98, 197, 0.7)',
        },
        // color parontainer
        // container part
        width:{
            headcontainer:'1170px',
            bannercontainer:'962px',
        },
        // container part
        // fontfamily part
        fontFamily: {
          opensans: ['Open Sans', 'sans-serif',],
          paprika: ['Paprika', 'cursive',],
        },
        // bannerpart
        backgroundImage:{
          bannerimage:"url(image/image.jpg)",
        },
        padding:{
           bannerTop:'265px',
           bannerbottom:'250px',
        },
      // fonts part
      fontSize: {
        bannerhead: '84px',
      },
      // fonts part

      // line height
      lineHeight: {
        lineheight:'40px',
      }
    }
  }
}
  