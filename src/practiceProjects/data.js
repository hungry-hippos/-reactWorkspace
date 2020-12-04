const data = [
  {
    id:'1',
    name:'Exotic French Beach',
    price:'$123,000',
    image:'https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/Prado_beach_700x467.jpg',
    text:'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
  },
  {
    id:'2',
    name:'Catalina Wine Mixer',
    price:'$90,000',
    image:'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=511&h=268&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F09%2F09%2FCatalinaMixer21.jpg',
    text:'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
  },
  {
    id:'3',
    name:'Brazilian Favela',
    price:'$5.99',
    image:'https://media3.s-nbcnews.com/i/newscms/2016_31/1652261/favela-rio-ejo-080316_6b63131061ea99e6f915a05c7fb159c7.jpg',
    text:'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
  },
  {
    id:'4',
    name:'Afghanistan Tour of Duty',
    price:'4 year enlistment',
    image:'https://s.wsj.net/public/resources/images/BN-FF526_afmari_M_20141027121355.jpg',
    text:'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
  },
  {
    id:'5',
    name:'Bikini Bottom',
    price:'$15',
    image:'https://www.traveller.com.au/content/dam/images/h/1/7/x/0/q/image.related.articleLeadwide.620x349.h11jqr.png/1542250315601.jpg',
    text:'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
  },
];

const reviews=[
  {
    id:'1',
    image:'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name:'Betsy DeVos',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'2',
    image:'https://i.pinimg.com/originals/6d/ea/46/6dea46a6b54ff8dfbdc56e5b22064379.jpg',
    name:'Mariah Carey',
    review:'Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Et netus et malesuada fames ac. Dignissim sodales ut eu sem integer vitae justo eget magna. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Nibh sed pulvinar proin gravida. Fames ac turpis egestas sed tempus urna et. Morbi tristique senectus et netus et malesuada fames ac. In tellus integer feugiat scelerisque. Enim nunc faucibus a pellentesque. Amet aliquam id diam maecenas ultricies mi. Lorem dolor sed viverra ipsum. Sem viverra aliquet eget sit amet tellus. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Suscipit tellus mauris a diam maecenas sed. Ac ut consequat semper viverra nam libero. Viverra maecenas accumsan lacus vel facilisis volutpat est. Feugiat vivamus at augue eget arcu dictum varius duis. Gravida cum sociis natoque penatibus et magnis dis.'
  },
  {
    id:'3',
    image:'https://image.shutterstock.com/image-photo/happy-dude-striped-top-glasses-260nw-1153500823.jpg',
    name:'Bartholomeus Houses',
    review:'Duis tristique sollicitudin nibh sit amet commodo. Tortor at risus viverra adipiscing at in tellus. Suspendisse sed nisi lacus sed viverra tellus. Egestas maecenas pharetra convallis posuere. Vel orci porta non pulvinar neque. Nulla facilisi cras fermentum odio eu feugiat. At tellus at urna condimentum mattis pellentesque id nibh tortor. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Sed turpis tincidunt id aliquet risus feugiat in ante. Molestie a iaculis at erat pellentesque adipiscing. Purus faucibus ornare suspendisse sed nisi lacus.'
  },
  {
    id:'4',
    image:'https://thumbs.dreamstime.com/b/dude-fashion-pretty-formulaic-trendy-hipster-mustache-long-beard-wearing-jacket-casual-jeans-bearded-man-style-160141208.jpg',
    name:'Dom Plutarth',
    review:'At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Posuere urna nec tincidunt praesent semper. Ut sem nulla pharetra diam sit amet. Tincidunt eget nullam non nisi est sit amet. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Vel eros donec ac odio tempor orci dapibus. Ultrices sagittis orci a scelerisque purus semper eget duis. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Aenean et tortor at risus viverra adipiscing at in. Et tortor consequat id porta nibh.'
  },
  {
    id:'5',
    image:'https://i.imgur.com/JEWpRQU.jpg',
    name:'Turner Tims',
    review:'Bacon ipsum dolor amet salami prosciutto porchetta kevin tail swine. Chuck kevin sausage meatloaf fatback strip steak prosciutto, ribeye alcatra. Chislic filet mignon turkey alcatra bacon sausage pork belly sirloin kevin salami boudin fatback flank. Capicola meatball corned beef, bacon ham alcatra boudin prosciutto andouille short ribs ham hock.'
  }
];

const loginInfo=[
  {
    id:'1',
    title:'Do I have to allow the use of cookies?',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'2',
    title:'How do I change my password?',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'3',
    title:'What is a BankID',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'4',
    title:'Whose birth number can I use?',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'5',
    title:'When do I receive a password ordered by letter?',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]




export default loginInfo;
