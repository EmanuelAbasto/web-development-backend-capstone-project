db.categories.insertMany([
  {
    "name": "Algorithms",
    "slug": "algorithms",
    "created_at": "2026-04-09T05:51:54.103Z"
  },
  {
    "name": "Computers",
    "slug": "computers",
    "created_at": "2026-04-09T05:51:54.103Z"
  },
  {
    "name": "Social Science",
    "slug": "social-science",
    "created_at": "2026-04-09T05:51:54.103Z"
  },
  {
    "name": "Programming",
    "slug": "programming",
    "created_at": "2026-04-09T05:51:54.103Z"
  },
  {
    "name": "Language Arts & Disciplines",
    "slug": "language-arts--disciplines",
    "created_at": "2026-04-09T05:51:54.103Z"
  },
  {
    "name": "Poetry",
    "slug": "poetry",
    "created_at": "2026-04-09T05:51:54.103Z"
  },
  {
    "name": "Business & Economics",
    "slug": "business--economics",
    "created_at": "2026-04-09T05:51:54.103Z"
  },
  {
    "name": "Technology & Engineering",
    "slug": "technology--engineering",
    "created_at": "2026-04-09T05:51:54.103Z"
  }
]);

// Colección de Libros
db.books.insertMany([
  {
    "title": "The art of computer programming",
    "author": {
      "name": "Donald Ervin Knuth"
    },
    "cover_image": "http://books.google.com/books/content?id=glg_AQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "categories": [
      "Algorithms"
    ],
    "metrics": {
      "rating": 4.4,
      "review_count": 29,
      "borrowed_count": 0
    },
    "quantity": 10,
    "status": {
      "is_available": true,
      "available_count": 10,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "« New material for Volume 4 will first appear in beta-test form as fascicles of approximately 128 pages each, issued app...",
    "published_at": "2008",
    "summary": "« New material for Volume 4 will first appear in beta-test form as fascicles of approximately 128 pages each, issued approximately twice per year. These fascicles will represent my best attempt to write a comprehensive account; but computer science has grown to the point where I cannot hope to be an authority on all the material covered in these books. Therefore I'll need feedback from readers in order to prepare the official volumes later. For example, the following fascicles appeared before the hardcover editions of Volumes 4A and 4B were complete. »--"
  },
  {
    "title": "Learning RSLogix 5000 Programming",
    "author": {
      "name": "AUSTIN MICHAEL. SCOTT"
    },
    "cover_image": "http://books.google.com/books/content?id=SkJozQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3.5,
      "review_count": 69,
      "borrowed_count": 0
    },
    "quantity": 14,
    "status": {
      "is_available": true,
      "available_count": 14,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "",
    "published_at": "2020-07-03",
    "summary": "No description available."
  },
  {
    "title": "Gamers at Work",
    "author": {
      "name": "Morgan Ramsay"
    },
    "cover_image": "http://books.google.com/books/content?id=lESCCXkdy3YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3,
      "review_count": 3,
      "borrowed_count": 0
    },
    "quantity": 1,
    "status": {
      "is_available": true,
      "available_count": 1,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "\"Gamers at Work is a critical resource for new and experienced business leaders—for anyone who feels unprepared for the ...",
    "published_at": "2012-06-08",
    "summary": "\"Gamers at Work is a critical resource for new and experienced business leaders—for anyone who feels unprepared for the demanding and seemingly insurmountable trials ahead of them.\" —Peter Molyneux OBE, founder, Lionhead Studios \"Gamers at Work explores every imaginable subtlety of the video-game industry through the fascinating stories of those who took the risks and reaped the rewards.\" —Hal Halpin, president, Entertainment Consumers Association \"This is the sort of book that can tear the most hardcore gamers away from their PCs, Macs, or consoles for a few hours of rewarding reading.\" —North County Times \"Gamers at Work is truly an invaluable resource that's well worth adding to your personal library.\" —Wii Love It There are few companies in the video-game industry that have withstood the test of time; most startups exit as quickly as they enter. In Gamers at Work: Stories Behind the Games People Play, the countless challenges of building successful video-game developers and publishers in this unstable industry are explored through interviews containing entertaining stories, humorous anecdotes, and lessons learned the hard way. Gamers at Work presents an inside look at how 18 industry leaders play the odds, seize opportunities, and transform small businesses into great businesses. Here, in Gamers at Work, you will find their stories replete with their personal struggles, corporate intrigue, and insights into strategy, leadership, and management. Gamers at Work: Explores the formation of entertainment software companies from the perspectives of successful founders who played the odds Provides insight into why experienced professionals sacrifice the comfort of gainful employment for theuncertainty and risk of the startup Shares the experiences and lessons that shape the lives, decisions, and struggles of entrepreneurs in this volatile business As an added bonus, check out Online Game Pioneers at Work, published in 2015, for even more incredible stories from leaders in the mobile space. Featured Entrepreneurs: Trip Hawkins, Electronic Arts (Madden NFL) Nolan Bushnell, Atari (Pong) Wild Bill Stealey, MicroProse Software (Sid Meier's Civilization) Tony Goodman, Ensemble Studios (Age of Empires) Feargus Urquhart, Obsidian Entertainment (Star Wars: Knights of the Old Republic II) Tim Cain, Troika Games (Arcanum, Vampire: the Masquerade—Bloodlines) Warren Spector, Junction Point Studios (Disney Epic Mickey) Doug & Gary Carlston, Broderbund Software (Prince of Persia, Carmen Sandiego) Don Daglow, Stormfront Studios (Neverwinter Nights, Tony La Russa Baseball) John Smedley, Verant Interactive (EverQuest, PlanetSide) Ken Williams, Sierra On-Line (King's Quest, Leisure Suit Larry) Lorne Lanning, Oddworld Inhabitants (Oddworld) Chris Ulm, Appy Entertainment (FaceFighter, Trucks & Skulls) Tobi Saulnier, 1st Playable (Kung Zhu, Yogi Bear) Christopher Weaver, Bethesda Softworks (The Elder Scrolls) Jason Rubin, Naughty Dog (Crash Bandicoot, Uncharted) Ted Price, Insomniac Games (Spyro, Resistance) Other books in the Apress At Work Series: Coders at Work, Seibel, 978-1-4302-1948-4 Venture Capitalists at Work, Shah & Shah, 978-1-4302-3837-9 CIOs at Work, Yourdon, 978-1-4302-3554-5 CTOs at Work, Donaldson, Seigel, & Donaldson, 978-1-4302-3593-4 Founders at Work, Livingston, 978-1-4302-1078-8 European Founders at Work, Santos, 978-1-4302-3906-2 Women Leaders at Work, Ghaffari, 978-1-4302-3729-7 Advertisers at Work, Tuten, 978-1-4302-3828-7"
  },
  {
    "title": "IT Through Experiential Learning",
    "author": {
      "name": "Shreekant W Shiralkar"
    },
    "cover_image": "http://books.google.com/books/content?id=ezCIDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 4.2,
      "review_count": 69,
      "borrowed_count": 0
    },
    "quantity": 14,
    "status": {
      "is_available": true,
      "available_count": 14,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "This concise book shows you how experiential learning can be used to overcome the challenges posed in applying and deliv...",
    "published_at": "2016-11-18",
    "summary": "This concise book shows you how experiential learning can be used to overcome the challenges posed in applying and delivering information technology (IT) to your business needs through an innovative, game-based approach. Technology innovations and evolving business models are part of a rapid change that is forcing corporate and management professionals to learn, deploy, and adopt IT in new ways in order to maintain a competitive advantage. Many are doing this through experiential learning. You’ll begin by reviewing the basics of experiential learning and its relevance to IT, followed by six chapters that apply the hands-on concept through various scenarios. Make IT Through Experiential Learning one of your valued resources today. What You'll Learn: Innovative and proven IT-related application scenarios Generic management and leadership skill development Guidance for applying the learning methods for generating extraordinary results over conventional methods Who This Book Is For: IT professionals, higher education students, and those engaged in training and organizational development."
  },
  {
    "title": "The Essential Guide to Flash Games",
    "author": {
      "name": "Jeff Fulton"
    },
    "cover_image": "http://books.google.com/books/content?id=w3DoXr_nH8cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3.4,
      "review_count": 32,
      "borrowed_count": 0
    },
    "quantity": 11,
    "status": {
      "is_available": true,
      "available_count": 11,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "The Essential Guide to Flash Games is a unique tool for Flash game developers. Rather than focusing on a bunch of low-le...",
    "published_at": "2010-04-28",
    "summary": "The Essential Guide to Flash Games is a unique tool for Flash game developers. Rather than focusing on a bunch of low-level how-to material, this book dives straight into building games. The book is divided into specific game genre projects, covering everything from old classics such as a Missile Command-style game, to hot new genres such as retro evolved. The chapters build in complexity through the book, and new tools are introduced along the way that can be reused for other games. The game projects covered start simple and increase in complexity as more and more tools are added to your tool chest. Ten full game projects are discussed in detail. Each solves a very different game development problem and builds on the knowledge gained from the previous project. Many advanced game development techniques are covered, including particle systems, advanced controls, artificial intelligence, blitting, scrolling, and more."
  },
  {
    "title": "The Psychology of Computer Programming",
    "author": {
      "name": "Gerald M. Weinberg"
    },
    "cover_image": "http://books.google.com/books/content?id=jKBQAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 5,
      "review_count": 1,
      "borrowed_count": 0
    },
    "quantity": 7,
    "status": {
      "is_available": true,
      "available_count": 7,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "This classic volume probes how a program reflects its writer's personality; the effects of working environment on produc...",
    "published_at": "1971",
    "summary": "This classic volume probes how a program reflects its writer's personality; the effects of working environment on productivity; and many additional computer psychology issues."
  },
  {
    "title": "Gamification Mindset",
    "author": {
      "name": "Ole Goethe"
    },
    "cover_image": "http://books.google.com/books/content?id=jNqdDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3.7,
      "review_count": 83,
      "borrowed_count": 0
    },
    "quantity": 5,
    "status": {
      "is_available": true,
      "available_count": 5,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "This book explores how gamification techniques are used to leverage users’ natural desires for achievement, competition,...",
    "published_at": "2019-06-17",
    "summary": "This book explores how gamification techniques are used to leverage users’ natural desires for achievement, competition, collaboration, learning and more. Compared to other books on this topic, it gives more than just an introduction and develops the readers understanding through frameworks and models, based on research to make it easier to develop gamified systems. The concept of gamification achieved increased popularity in 2010 when a number of softwares and services started explaining their products as a ‘gamification’ design. Gamification Mindset explains how game elements and mechanics are important, how video games are learning systems and examines how video game aesthetics are vital in the development of gamification. The book will challenge some common beliefs when it comes to gamifications’ abilities to immerse and change the user’s intrinsic and extrinsic motivations. Gamification Mindset aims to develop new models in gamification to enable easier gamification scenarios. It is a comprehensive analysis and discussion about gamification and serves as a useful tool, since it acquaints readers with gamification and how to use it, through illustrated practical theoretical models. Academic researchers, students, educators and professional game and gamification designers will find this book invaluable."
  },
  {
    "title": "The Game Maker's Apprentice",
    "author": {
      "name": "Jacob Habgood"
    },
    "cover_image": "http://books.google.com/books/content?id=PLdsEjKnt5AC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 5,
      "review_count": 1,
      "borrowed_count": 0
    },
    "quantity": 4,
    "status": {
      "is_available": true,
      "available_count": 4,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "The Game Makers Apprentice shows you how to create nine exciting games using the wildly popular Game Maker game creation...",
    "published_at": "2006-12-31",
    "summary": "The Game Makers Apprentice shows you how to create nine exciting games using the wildly popular Game Maker game creation tool. This book covers a range of genres, including action, adventure, and puzzle games complete with professional quality sound effects and visuals. It discusses game design theory and features practical examples of how this can be applied to making games that are more fun to play. Game Maker allows games to be created using a simple drag-and-drop interface, so you don't need to have any prior coding experience. It includes an optional programming language for adding advanced features to your games, when you feel ready to do so. You can obtain more information by visiting book.gamemaker.nl. The authors include the creator of the Game Maker tool and a former professional game programmer, so you'll glean understanding from their expertise. The book also includes a DVD containing Game Maker software and all of the game projects that are created in the book—plus a host of professional-quality graphics and sound effects that you can use in your own games."
  },
  {
    "title": "Mostly Codeless Game Development",
    "author": {
      "name": "Robert Ciesla"
    },
    "cover_image": "http://books.google.com/books/content?id=V70tDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3.4,
      "review_count": 24,
      "borrowed_count": 0
    },
    "quantity": 12,
    "status": {
      "is_available": true,
      "available_count": 12,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "Get a head start in your game development career with this all-genre guide for absolute beginners. Whether you're into a...",
    "published_at": "2017-07-19",
    "summary": "Get a head start in your game development career with this all-genre guide for absolute beginners. Whether you're into action games, role-playing games, or interactive fiction, we've got you covered. Mostly Codeless Game Development empowers new developers with little or no previous programming experience and explores all major areas of game development in a succinct, entertaining fashion. Have you dreamed of making your own video game? Do you find the prospect daunting? Fear not. A new generation of game engines has emerged. Lengthy and complicated feats of programming are largely a thing of the past in video game development. To create commercially viable games you simply need the right tools, many of which are discussed in this book. A gigantic software team isn't a must-have prerequisite for success. The one-person operation is back. What You Will Learn Master the concepts and jargon used in game creation for the beginner Find the best game development suite for your project Make the most out of related graphics and audio production software Discover video game marketing essentials Who This Book Is For People with no programming experience who desire a career in the video game industry as producers or independent, single-person developers./div"
  },
  {
    "title": "Game Programming with Unity and C#",
    "author": {
      "name": "Casey Hardman"
    },
    "cover_image": "http://books.google.com/books/content?id=tlvrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 5,
      "review_count": 2,
      "borrowed_count": 0
    },
    "quantity": 7,
    "status": {
      "is_available": true,
      "available_count": 7,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "​Designed for beginners with no knowledge or experience in game development or programming, this book teaches the essent...",
    "published_at": "2020-06-13",
    "summary": "​Designed for beginners with no knowledge or experience in game development or programming, this book teaches the essentials of the Unity game engine, the C# programming language, and the art of object-oriented programming. New concepts are not only explained, but thoroughly demonstrated. Starting with an introduction to Unity, you'll learn about scenes, GameObjects, prefabs, components, and how to use the various windows to interact with the engine. You'll then dive into the fundamentals of programming by reviewing syntax rules, formatting, methods, variables, objects and types, classes, and inheritance, all while getting your hands dirty writing and testing code yourself. Later, the book explains how to expose script data in the Inspector and the basics of Unity’s serialization system. This carefully crafted work guides you through the planning and development of bare bones, simple game projects designed to exercise programming concepts while keeping less relevant interruptions out of the way, allowing you to focus on the implementation of game mechanics first and foremost. Through these example projects, the book teaches input handling, rigidbodies, colliders, cameras, prefab instantiation, scene loading, user interface design and coding, and more. By the end, you'll have built a solid foundation in programming that will pave your way forward in understanding core C# syntax and fundamentals of object-oriented programming—not just what to type but why it's typed and what it’s really doing. Game Programming with Unity and C# will send you on your way to becoming comfortable with the Unity game engine and its documentation and how to independently seek further information on yet-untouched concepts and challenges. What You'll Learn Understand the fundamentals of object-oriented computer programming, including topics specifically relevant for games. Leverage beginner-to-intermediate-level skills of the C# programming language and its syntax. Review all major component types of the Unity game engine: colliders and rigidbodies, lights, cameras, scripts, etc. Use essential knowledge of the Unity game engine and its features to balance gameplay mechanics for making interesting experiences. Who This Book Is For Beginners who have no prior experience in programming or game development who would like to learn with a solid foundation that prepares them to further develop their skills."
  },
  {
    "title": "Advances in Genetic Programming",
    "author": {
      "name": "Kenneth E. Kinnear"
    },
    "cover_image": "http://books.google.com/books/content?id=5Qwbal3AY6oC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 4.9,
      "review_count": 18,
      "borrowed_count": 0
    },
    "quantity": 7,
    "status": {
      "is_available": true,
      "available_count": 7,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "Advances in Genetic Programming reports significant results in improving the power of genetic programming, presenting te...",
    "published_at": "1994",
    "summary": "Advances in Genetic Programming reports significant results in improving the power of genetic programming, presenting techniques that can be employed immediately in the solution of complex problems in many areas, including machine learning and the simulation of autonomous behavior. Popular languages such as C and C++ are used in manu of the applications and experiments, illustrating how genetic programming is not restricted to symbolic computing languages such as LISP. Researchers interested in getting started in genetic programming will find information on how to begin, on what public-domain code is available, and on how to become part of the active genetic programming community via electronic mail."
  },
  {
    "title": "Representations of Poverty in Videogames",
    "author": {
      "name": "Adam Crowley"
    },
    "cover_image": "http://books.google.com/books/content?id=8YNyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Social Science"
    ],
    "metrics": {
      "rating": 3.1,
      "review_count": 89,
      "borrowed_count": 0
    },
    "quantity": 4,
    "status": {
      "is_available": true,
      "available_count": 4,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "This book argues that videogames address contemporary, middle-class anxieties about poverty in the United States. The ea...",
    "published_at": "2022-05-31",
    "summary": "This book argues that videogames address contemporary, middle-class anxieties about poverty in the United States. The early chapters consider gaming as a modern form of slumming and explore the ways in which titles like The Elder Scrolls V: Skyrim and World of Warcraft thematize poverty. The argument turns to the field of literary studies to identify analytical frameworks for addressing and understanding these themes. Throughout, the book considers how the academic area of inquiry known as game studies has developed over time, and makes use of such scholarship to present, frame, and value its major claims and findings. In its conclusion, the book models how poverty themes might be identified and associated for the purpose of gaining greater insights into how games can shape, and also be shaped by, the player’s economic expectations."
  },
  {
    "title": "Art of Unix Programming",
    "author": {
      "name": "Eric Steven Raymond"
    },
    "cover_image": "",
    "categories": [
      "Programming"
    ],
    "metrics": {
      "rating": 4.4,
      "review_count": 34,
      "borrowed_count": 0
    },
    "quantity": 14,
    "status": {
      "is_available": true,
      "available_count": 14,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "",
    "published_at": "2006",
    "summary": "No description available."
  },
  {
    "title": "Ray Tracing Gems",
    "author": {
      "name": "Eric Haines"
    },
    "cover_image": "http://books.google.com/books/content?id=MNqRDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 4.6,
      "review_count": 89,
      "borrowed_count": 0
    },
    "quantity": 1,
    "status": {
      "is_available": true,
      "available_count": 1,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "This book is a must-have for anyone serious about rendering in real time. With the announcement of new ray tracing APIs ...",
    "published_at": "2019-02-25",
    "summary": "This book is a must-have for anyone serious about rendering in real time. With the announcement of new ray tracing APIs and hardware to support them, developers can easily create real-time applications with ray tracing as a core component. As ray tracing on the GPU becomes faster, it will play a more central role in real-time rendering. Ray Tracing Gems provides key building blocks for developers of games, architectural applications, visualizations, and more. Experts in rendering share their knowledge by explaining everything from nitty-gritty techniques that will improve any ray tracer to mastery of the new capabilities of current and future hardware. What you'll learn: The latest ray tracing techniques for developing real-time applications in multiple domains Guidance, advice, and best practices for rendering applications with Microsoft DirectX Raytracing (DXR) How to implement high-performance graphics for interactive visualizations, games, simulations, and more Who this book is for: Developers who are looking to leverage the latest APIs and GPU technology for real-time rendering and ray tracing Students looking to learn about best practices in these areas Enthusiasts who want to understand and experiment with their new GPUs"
  },
  {
    "title": "Programming the World Wide Web",
    "author": {
      "name": "Robert W. Sebesta"
    },
    "cover_image": "http://books.google.com/books/content?id=GFsZAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 4.9,
      "review_count": 0,
      "borrowed_count": 0
    },
    "quantity": 7,
    "status": {
      "is_available": true,
      "available_count": 7,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "Programming the World Wide Web provides a comprehensive introduction to the programming tools and skills required for bu...",
    "published_at": "2005",
    "summary": "Programming the World Wide Web provides a comprehensive introduction to the programming tools and skills required for building and maintaining server sites on the Web. This book is intended for readers who have experience programming with an object-oriented language."
  },
  {
    "title": "C and the 8051",
    "author": {
      "name": "Thomas W. Schultz"
    },
    "cover_image": "http://books.google.com/books/content?id=rI0c8kWbxooC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 5,
      "review_count": 3,
      "borrowed_count": 0
    },
    "quantity": 12,
    "status": {
      "is_available": true,
      "available_count": 12,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "This totally reworked book combines two previous books with material on networking. It is a complete guide to programmin...",
    "published_at": "2004",
    "summary": "This totally reworked book combines two previous books with material on networking. It is a complete guide to programming and interfacing the 8051 microcontroller-family devices for embedded applications."
  },
  {
    "title": "Pro HTML5 Games",
    "author": {
      "name": "Aditya Ravi Shankar"
    },
    "cover_image": "http://books.google.com/books/content?id=IjUfnNAVeLoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3.5,
      "review_count": 57,
      "borrowed_count": 0
    },
    "quantity": 4,
    "status": {
      "is_available": true,
      "available_count": 4,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "Build your next game on a bigger scale with Pro HTML5 Games. This book teaches you the essentials of advanced game progr...",
    "published_at": "2013-01-29",
    "summary": "Build your next game on a bigger scale with Pro HTML5 Games. This book teaches you the essentials of advanced game programming in HTML5. You’ll learn techniques that you can transfer to any area of HTML5 game development to make your own professional HTML5 games! Led by an expert game programmer, you’ll build two complete games in HTML5: a strategy puzzle game based on the Box2d physics engine and in the style of Angry Birds and a real-time strategy (RTS) game complete with units, buildings, path-finding, artificial intelligence, and multiplayer support. In the process, you’ll learn how to do the following: Create realistic physics in your game by incorporating the Box2d physics engine Design large worlds with lots of characters and let users interact with them Use sprite sheets, panning, parallax scrolling, and sound effects to build a more polished game Incorporate pathfinding and steering to help characters navigate through your world Create challenging levels with intelligent enemies by using decision trees, state machines, and scripted events Add multiplayer in your games using Node.js and the WebSocket API This book will help you take your HTML5/JavaScript programming experience to the next level. It gives you the knowledge and skills you need to develop more complex, bolder games and become an HTML5 games pro."
  },
  {
    "title": "Programming Sudoku",
    "author": {
      "name": "Wei-Meng Lee"
    },
    "cover_image": "http://books.google.com/books/content?id=iK2ze0Lyy8sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3,
      "review_count": 2,
      "borrowed_count": 0
    },
    "quantity": 3,
    "status": {
      "is_available": true,
      "available_count": 3,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "Sudoku is a wildly popular puzzle game. Sudoku puzzles are 9x9 grids, and each square in the grid consists of a 3x3 subg...",
    "published_at": "2006-11-22",
    "summary": "Sudoku is a wildly popular puzzle game. Sudoku puzzles are 9x9 grids, and each square in the grid consists of a 3x3 subgrid called a region. Your goal is to fill in the squares so that each column, row, and region contains the numbers 1 through 9 exactly once. And some squares already contain numbers or symbols, which lend clues toward the solution. Programming Sudoku provides you with great approaches to building and solving Sudoku and other similar puzzles. Using ingenious artificial intelligence and game theory techniques, you'll learn how to get a computer to solve these puzzles for you. This is a fun, intriguing read, whether you're a novice or advanced programmer. It acknowledges the .NET platform as a base, but you'll find this book interesting whatever your programming background. The core techniques in the book enable you to solve Sudoku on any programming platform."
  },
  {
    "title": "MMOs from the Inside Out",
    "author": {
      "name": "Richard A. Bartle"
    },
    "cover_image": "http://books.google.com/books/content?id=SK5PCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3.8,
      "review_count": 85,
      "borrowed_count": 0
    },
    "quantity": 6,
    "status": {
      "is_available": true,
      "available_count": 6,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "This is an astonishing collection of ideas, information, and instruction from one of the true pioneers of Massively-Mult...",
    "published_at": "2015-12-30",
    "summary": "This is an astonishing collection of ideas, information, and instruction from one of the true pioneers of Massively-Multiplayer Online Role-Playing Games. MMOs from the Inside Out: The History, Design, Fun, and Art of Massively-Multiplayer Role-playing Games speaks to the designers and players of MMOs, taking it as axiomatic that such games are inspirational and boundless forces for good. The aim of this book is to enthuse an up-coming generation of designers, to inspire and educate players and designers-to-be, and to reinvigorate those already working in the field who might be wondering if it’s still all worthwhile. Playing MMOs is about fun, immersion, and identity. Creating MMOs is about imagination, expression, and art. MMOs are so packed with potential that today's examples are little more than small, pioneering colonies on the shore of a vast, uncharted continent. What wonders wait beyond the horizon? What treasures will explorers bring back to amaze us? MMOs from the Inside Out is for people with a spark of creativity: it pours gasoline on that spark. It: Explains what MMOs are, what they once were, and what they could – and should – become. Delves into why players play, and why designers design. Encourages, enthuses, enrages, engages, enlightens, envisions, and enchants. Doesn't tell you what to think, it tells you to think. What You Will Learn: Myriad ways to improve MMOs – and to decide for yourself whether these are improvements. What MMOs are; who plays them, and why. How MMOs became what they are, and what this means for what they will become. That you have it in you to make MMOs yourself. Whom This Book is For:MMOs from the Inside Out is a book for those who wish to know more about game design in general and MMO design in particular. It's for people who play MMOs, for people who design MMOs, and for people who study MMOs. It's for people with a yearning to see beyond the world around them and to make manifest the worlds of their imagination."
  },
  {
    "title": "Optimization Techniques",
    "author": {
      "name": "L. R. Foulds"
    },
    "cover_image": "http://books.google.com/books/content?id=2u9QAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "categories": [
      "Language Arts & Disciplines"
    ],
    "metrics": {
      "rating": 4.1,
      "review_count": 8,
      "borrowed_count": 0
    },
    "quantity": 3,
    "status": {
      "is_available": true,
      "available_count": 3,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "This is a practical introduction to optimization, covering the main optimization techniques currently in use--e.g., math...",
    "published_at": "1981-11-09",
    "summary": "This is a practical introduction to optimization, covering the main optimization techniques currently in use--e.g., mathematical programming, network, and classical methods--at an advanced undergraduate level. Using arguments which are intuitive rather than highly technical, the author focuses on familiar real-life problems, proceeding by induction to the underlying theory. New formulations and models in integer programming are covered, and algorithms are simply explained with illustrative numerical examples. [It] includes numerous exercises suitable for mathematics, engineering, and business courses; the straightforward style of the text makes it useful for researchers in transport planning as well as operations research and planning personnel."
  },
  {
    "title": "The Pragmatic Programmer",
    "author": {
      "name": "Andrew Hunt"
    },
    "cover_image": "http://books.google.com/books/content?id=5wBQEp6ruIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 4.5,
      "review_count": 7,
      "borrowed_count": 0
    },
    "quantity": 12,
    "status": {
      "is_available": true,
      "available_count": 12,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "What others in the trenches say about The Pragmatic Programmer... “The cool thing about this book is that it’s great for...",
    "published_at": "1999-10-20",
    "summary": "What others in the trenches say about The Pragmatic Programmer... “The cool thing about this book is that it’s great for keeping the programming process fresh. The book helps you to continue to grow and clearly comes from people who have been there.” — Kent Beck, author of Extreme Programming Explained: Embrace Change “I found this book to be a great mix of solid advice and wonderful analogies!” — Martin Fowler, author of Refactoring and UML Distilled “I would buy a copy, read it twice, then tell all my colleagues to run out and grab a copy. This is a book I would never loan because I would worry about it being lost.” — Kevin Ruland, Management Science, MSG-Logistics “The wisdom and practical experience of the authors is obvious. The topics presented are relevant and useful.... By far its greatest strength for me has been the outstanding analogies—tracer bullets, broken windows, and the fabulous helicopter-based explanation of the need for orthogonality, especially in a crisis situation. I have little doubt that this book will eventually become an excellent source of useful information for journeymen programmers and expert mentors alike.” — John Lakos, author of Large-Scale C++ Software Design “This is the sort of book I will buy a dozen copies of when it comes out so I can give it to my clients.” — Eric Vought, Software Engineer “Most modern books on software development fail to cover the basics of what makes a great software developer, instead spending their time on syntax or technology where in reality the greatest leverage possible for any software team is in having talented developers who really know their craft well. An excellent book.” — Pete McBreen, Independent Consultant “Since reading this book, I have implemented many of the practical suggestions and tips it contains. Across the board, they have saved my company time and money while helping me get my job done quicker! This should be a desktop reference for everyone who works with code for a living.” — Jared Richardson, Senior Software Developer, iRenaissance, Inc. “I would like to see this issued to every new employee at my company....” — Chris Cleeland, Senior Software Engineer, Object Computing, Inc. “If I’m putting together a project, it’s the authors of this book that I want. . . . And failing that I’d settle for people who’ve read their book.” — Ward Cunningham Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse. Read this book, and you'll learn how to Fight software rot; Avoid the trap of duplicating knowledge; Write flexible, dynamic, and adaptable code; Avoid programming by coincidence; Bullet-proof your code with contracts, assertions, and exceptions; Capture real requirements; Test ruthlessly and effectively; Delight your users; Build teams of pragmatic programmers; and Make your developments more precise with automation. Written as a series of self-contained sections and filled with entertaining anecdotes, thoughtful examples, and interesting analogies, The Pragmatic Programmer illustrates the best practices and major pitfalls of many different aspects of software development. Whether you're a new coder, an experienced programmer, or a manager responsible for software projects, use these lessons daily, and you'll quickly see improvements in personal productivity, accuracy, and job satisfaction. You'll learn skills and develop habits and attitudes that form the foundation for long-term success in your career. You'll become a Pragmatic Programmer."
  },
  {
    "title": "What Computers Still Can't Do",
    "author": {
      "name": "Hubert L. Dreyfus"
    },
    "cover_image": "http://books.google.com/books/content?id=lN6MEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 4,
      "review_count": 99,
      "borrowed_count": 0
    },
    "quantity": 4,
    "status": {
      "is_available": true,
      "available_count": 4,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "When it was first published in 1972, Hubert Dreyfus's manifesto on the inherent inability of disembodied machines to mim...",
    "published_at": "1992-10-30",
    "summary": "When it was first published in 1972, Hubert Dreyfus's manifesto on the inherent inability of disembodied machines to mimic higher mental functions caused an uproar in the artificial intelligence community. The world has changed since then. Today it is clear that \"good old-fashioned AI,\" based on the idea of using symbolic representations to produce general intelligence, is in decline (although several believers still pursue its pot of gold), and the focus of the Al community has shifted to more complex models of the mind. It has also become more common for AI researchers to seek out and study philosophy. For this edition of his now classic book, Dreyfus has added a lengthy new introduction outlining these changes and assessing the paradigms of connectionism and neural networks that have transformed the field. At a time when researchers were proposing grand plans for general problem solvers and automatic translation machines, Dreyfus predicted that they would fail because their conception of mental functioning was naive, and he suggested that they would do well to acquaint themselves with modern philosophical approaches to human beings. What Computers Can't Do was widely attacked but quietly studied. Dreyfus's arguments are still provocative and focus our attention once again on what it is that makes human beings unique."
  },
  {
    "title": "The Atlas of AI",
    "author": {
      "name": "Kate Crawford"
    },
    "cover_image": "http://books.google.com/books/content?id=KfodEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3.3,
      "review_count": 21,
      "borrowed_count": 0
    },
    "quantity": 15,
    "status": {
      "is_available": true,
      "available_count": 15,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "The hidden costs of artificial intelligence, from natural resources and labor to privacy and freedom What happens when a...",
    "published_at": "2021-04-06",
    "summary": "The hidden costs of artificial intelligence, from natural resources and labor to privacy and freedom What happens when artificial intelligence saturates political life and depletes the planet? How is AI shaping our understanding of ourselves and our societies? In this book Kate Crawford reveals how this planetary network is fueling a shift toward undemocratic governance and increased inequality. Drawing on more than a decade of research, award-winning science, and technology, Crawford reveals how AI is a technology of extraction: from the energy and minerals needed to build and sustain its infrastructure, to the exploited workers behind \"automated\" services, to the data AI collects from us. Rather than taking a narrow focus on code and algorithms, Crawford offers us a political and a material perspective on what it takes to make artificial intelligence and where it goes wrong. While technical systems present a veneer of objectivity, they are always systems of power. This is an urgent account of what is at stake as technology companies use artificial intelligence to reshape the world."
  },
  {
    "title": "Cybernetics Or Control and Communication in the Animal and the Machine",
    "author": {
      "name": "Norbert Wiener"
    },
    "cover_image": "http://books.google.com/books/content?id=NnM-uISyywAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 5,
      "review_count": 1,
      "borrowed_count": 0
    },
    "quantity": 7,
    "status": {
      "is_available": true,
      "available_count": 7,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "It appers impossible for anyone seriously interested in our civilization to ignore this book. It is a 'must' book for th...",
    "published_at": "1961",
    "summary": "It appers impossible for anyone seriously interested in our civilization to ignore this book. It is a 'must' book for those in every branch of science . . . in addition, economists, politicians, statesmen, and businessmen cannot afford to overlook cybernetics and its tremendous, even terrifying implications."
  },
  {
    "title": "The Lady from the Sea",
    "author": {
      "name": "Henrik Ibsen"
    },
    "cover_image": "http://books.google.com/books/content?id=PW3_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Poetry"
    ],
    "metrics": {
      "rating": 4.5,
      "review_count": 87,
      "borrowed_count": 0
    },
    "quantity": 2,
    "status": {
      "is_available": true,
      "available_count": 2,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "The Lady from the Sea\" is a play written by Henrik Ibsen, first performed in 1888. Set in a small Norwegian coastal town...",
    "published_at": "2024-04-05",
    "summary": "The Lady from the Sea\" is a play written by Henrik Ibsen, first performed in 1888. Set in a small Norwegian coastal town, the play explores themes of duty, freedom, and personal fulfillment. The story revolves around Ellida Wangel, the lady of the sea, who is trapped in a marriage to Dr. Wangel, a widower with two daughters. Ellida feels a deep connection to the sea and longs for the freedom it represents. Her sense of unease is compounded by the arrival of a mysterious stranger, the Stranger, who claims to have a previous connection to Ellida. As the play unfolds, Ellida is torn between her sense of duty to her family and her desire for personal autonomy. The presence of the Stranger awakens conflicting emotions within her, leading to a series of dramatic confrontations and revelations."
  },
  {
    "title": "Darwin Among The Machines",
    "author": {
      "name": "George Dyson"
    },
    "cover_image": "http://books.google.com/books/content?id=v8DaAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 5,
      "review_count": 72,
      "borrowed_count": 0
    },
    "quantity": 8,
    "status": {
      "is_available": true,
      "available_count": 8,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "In this astonishing prediction of the World Wide Web's ultimate challenge to human civilization--a globally networked, e...",
    "published_at": "1997-05",
    "summary": "In this astonishing prediction of the World Wide Web's ultimate challenge to human civilization--a globally networked, electronic, sentient being--Dyson traces the course of the information revolution, illuminating the lives, work, and ideas of visionaries who foresaw the development of artificial intelligence, artificial life, and the global mind."
  },
  {
    "title": "TinyML",
    "author": {
      "name": "Pete Warden"
    },
    "cover_image": "http://books.google.com/books/content?id=tn3EDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3.4,
      "review_count": 66,
      "borrowed_count": 0
    },
    "quantity": 6,
    "status": {
      "is_available": true,
      "available_count": 6,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "Deep learning networks are getting smaller. Much smaller. The Google Assistant team can detect words with a model just 1...",
    "published_at": "2019-12-16",
    "summary": "Deep learning networks are getting smaller. Much smaller. The Google Assistant team can detect words with a model just 14 kilobytes in size—small enough to run on a microcontroller. With this practical book you’ll enter the field of TinyML, where deep learning and embedded systems combine to make astounding things possible with tiny devices. Pete Warden and Daniel Situnayake explain how you can train models small enough to fit into any environment. Ideal for software and hardware developers who want to build embedded systems using machine learning, this guide walks you through creating a series of TinyML projects, step-by-step. No machine learning or microcontroller experience is necessary. Build a speech recognizer, a camera that detects people, and a magic wand that responds to gestures Work with Arduino and ultra-low-power microcontrollers Learn the essentials of ML and how to train your own models Train models to understand audio, image, and accelerometer data Explore TensorFlow Lite for Microcontrollers, Google’s toolkit for TinyML Debug applications and provide safeguards for privacy and security Optimize latency, energy usage, and model and binary size"
  },
  {
    "title": "Audio Sampling",
    "author": {
      "name": "Sam McGuire"
    },
    "cover_image": "http://books.google.com/books/content?id=L81Gkb0z3UUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 4.4,
      "review_count": 1,
      "borrowed_count": 0
    },
    "quantity": 4,
    "status": {
      "is_available": true,
      "available_count": 4,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "Bringing sampling to a new generation of audio engineers and composers Audio Sampling explains how to record and create ...",
    "published_at": "2008",
    "summary": "Bringing sampling to a new generation of audio engineers and composers Audio Sampling explains how to record and create sampled instruments in a software setting. There are many things that go into creating a sampled instrument and many things that can go wrong, this book is a step by step guide through the process, from introducing sampling, where it begins to recording editing and using samples, providing much sought after detailed information on the actual process of sampling, creating sampled instruments as well as the different ways they can be used. The software used is the NN-XT a sampler that is a part of the Reason studio software and ProTools LE, however the material discussed is applicable and can be used with any sampler. The companion website has exclusive material including a comprehensive comparison of the different hardware software available, as well as audio examples and video clips from each stage of the process"
  },
  {
    "title": "Das Social-Media-Marketing-Buch",
    "author": {
      "name": "Dan Zarrella"
    },
    "cover_image": "http://books.google.com/books/content?id=ULYRhQucUKMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 4.4,
      "review_count": 60,
      "borrowed_count": 0
    },
    "quantity": 13,
    "status": {
      "is_available": true,
      "available_count": 13,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "Unternehmen, Agenturen und Freiberufler stromen in soziale Netzwerke wie Facebook und entdecken die vielen anderen Mogli...",
    "published_at": "2012",
    "summary": "Unternehmen, Agenturen und Freiberufler stromen in soziale Netzwerke wie Facebook und entdecken die vielen anderen Moglichkeiten im Social Web. Doch aller Anfang ist schwer: Wer noch nicht Social Media-affin ist - und das sind nach wie vor so einige -, muss sich zunachst einmal einen Uberblick uber diese noch junge Medienlandschaft verschaffen. Wem es so geht, der findet in diesem Buchlein optimale Unterstutzung. Kompakt, prazise und gut verstandlich fuhrt Dan Zarrella in die vielseitigen \"sozialen\" Mediengattungen ein. Die deutsche Ausgabe prasentiert zusatzlich deutsche Dienste wie XING und Qype sowie Fallbeispiele aus dem deutschsprachigen Raum. Fur die 2. Auflage wurde das Buch komplett uberarbeitet und aktualisiert. Aus dem Inhalt: Was ist Social Media Marketing? Bloggen Twitter und Microblogging Soziale Netzwerke Mediasharing Social News, Bookmarking und Curation Social Location Sharing Verbraucherportale Foren Strategien fur Ihren Social Media-Auftritt Erfolgskontrolle"
  },
  {
    "title": "Network Security Assessment",
    "author": {
      "name": "Chris McNab"
    },
    "cover_image": "http://books.google.com/books/content?id=fpSpDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3.1,
      "review_count": 99,
      "borrowed_count": 0
    },
    "quantity": 5,
    "status": {
      "is_available": true,
      "available_count": 5,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "How secure is your network? The best way to find out is to attack it, using the same tactics attackers employ to identif...",
    "published_at": "2016-12-06",
    "summary": "How secure is your network? The best way to find out is to attack it, using the same tactics attackers employ to identify and exploit weaknesses. With the third edition of this practical book, you’ll learn how to perform network-based penetration testing in a structured manner. Security expert Chris McNab demonstrates common vulnerabilities, and the steps you can take to identify them in your environment. System complexity and attack surfaces continue to grow. This book provides a process to help you mitigate risks posed to your network. Each chapter includes a checklist summarizing attacker techniques, along with effective countermeasures you can use immediately. Learn how to effectively test system components, including: Common services such as SSH, FTP, Kerberos, SNMP, and LDAP Microsoft services, including NetBIOS, SMB, RPC, and RDP SMTP, POP3, and IMAP email services IPsec and PPTP services that provide secure network access TLS protocols and features providing transport security Web server software, including Microsoft IIS, Apache, and Nginx Frameworks including Rails, Django, Microsoft ASP.NET, and PHP Database servers, storage protocols, and distributed key-value stores"
  },
  {
    "title": "Microsoft Secrets",
    "author": {
      "name": "Michael A. Cusumano"
    },
    "cover_image": "http://books.google.com/books/content?id=GixEgGs5qXcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Business & Economics"
    ],
    "metrics": {
      "rating": 5,
      "review_count": 1,
      "borrowed_count": 0
    },
    "quantity": 5,
    "status": {
      "is_available": true,
      "available_count": 5,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "Based on highly confidential interviews with personnel, internal memos, and top-secret company documents, this compellin...",
    "published_at": "1998-12-04",
    "summary": "Based on highly confidential interviews with personnel, internal memos, and top-secret company documents, this compelling portrait reveals the philosophy, style, and competitive strategies that have taken Microsoft to the heights of the high-tech industry."
  },
  {
    "title": "The Circuits and Filters Handbook (Five Volume Slipcase Set)",
    "author": {
      "name": "Wai-Kai Chen"
    },
    "cover_image": "http://books.google.com/books/content?id=I2C1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Technology & Engineering"
    ],
    "metrics": {
      "rating": 4.4,
      "review_count": 40,
      "borrowed_count": 0
    },
    "quantity": 8,
    "status": {
      "is_available": true,
      "available_count": 8,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "Standard-setting, groundbreaking, authoritative, comprehensive—these often overused words perfectly describe The Circuit...",
    "published_at": "2018-12-14",
    "summary": "Standard-setting, groundbreaking, authoritative, comprehensive—these often overused words perfectly describe The Circuits and Filters Handbook, Third Edition. This standard-setting resource has documented the momentous changes that have occurred in the field of electrical engineering, providing the most comprehensive coverage available. More than 150 contributing experts offer in-depth insights and enlightened perspectives into standard practices and effective techniques that will make this set the first—and most likely the only—tool you select to help you with problem solving. In its third edition, this groundbreaking bestseller surveys accomplishments in the field, providing researchers and designers with the comprehensive detail they need to optimize research and design. All five volumes include valuable information on the emerging fields of circuits and filters, both analog and digital. Coverage includes key mathematical formulas, concepts, definitions, and derivatives that must be mastered to perform cutting-edge research and design. The handbook avoids extensively detailed theory and instead concentrates on professional applications, with numerous examples provided throughout. The set includes more than 2500 illustrations and hundreds of references. Available as a comprehensive five-volume set, each of the subject-specific volumes can also be purchased separately."
  },
  {
    "title": "Search Methodologies",
    "author": {
      "name": "Edmund K. Burke"
    },
    "cover_image": "http://books.google.com/books/content?id=V-O5BAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Business & Economics"
    ],
    "metrics": {
      "rating": 3.2,
      "review_count": 23,
      "borrowed_count": 0
    },
    "quantity": 10,
    "status": {
      "is_available": true,
      "available_count": 10,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "The first edition of Search Methodologies: Introductory Tutorials in Optimization and Decision Support Techniques was or...",
    "published_at": "2013-10-18",
    "summary": "The first edition of Search Methodologies: Introductory Tutorials in Optimization and Decision Support Techniques was originally put together to offer a basic introduction to the various search and optimization techniques that students might need to use during their research, and this new edition continues this tradition. Search Methodologies has been expanded and brought completely up to date, including new chapters covering scatter search, GRASP, and very large neighborhood search. The chapter authors are drawn from across Computer Science and Operations Research and include some of the world’s leading authorities in their field. The book provides useful guidelines for implementing the methods and frameworks described and offers valuable tutorials to students and researchers in the field. “As I embarked on the pleasant journey of reading through the chapters of this book, I became convinced that this is one of the best sources of introductory material on the search methodologies topic to be found. The book’s subtitle, “Introductory Tutorials in Optimization and Decision Support Techniques”, aptly describes its aim, and the editors and contributors to this volume have achieved this aim with remarkable success. The chapters in this book are exemplary in giving useful guidelines for implementing the methods and frameworks described.” Fred Glover, Leeds School of Business, University of Colorado Boulder, USA “[The book] aims to present a series of well written tutorials by the leading experts in their fields. Moreover, it does this by covering practically the whole possible range of topics in the discipline. It enables students and practitioners to study and appreciate the beauty and the power of some of the computational search techniques that are able to effectively navigate through search spaces that are sometimes inconceivably large. I am convinced that this second edition will build on the success of the first edition and that it will prove to be just as popular.” Jacek Blazewicz, Institute of Computing Science, Poznan University of Technology and Institute of Bioorganic Chemistry, Polish Academy of Sciences"
  },
  {
    "title": "Information Security Risk Analysis",
    "author": {
      "name": "Thomas R. Peltier"
    },
    "cover_image": "http://books.google.com/books/content?id=O0_fO2Xvp98C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Business & Economics"
    ],
    "metrics": {
      "rating": 4.5,
      "review_count": 15,
      "borrowed_count": 0
    },
    "quantity": 9,
    "status": {
      "is_available": true,
      "available_count": 9,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "Risk is a cost of doing business. The question is, \"What are the risks, and what are their costs?\" Knowing the vulnerabi...",
    "published_at": "2001-01-23",
    "summary": "Risk is a cost of doing business. The question is, \"What are the risks, and what are their costs?\" Knowing the vulnerabilities and threats that face your organization's information and systems is the first essential step in risk management. Information Security Risk Analysis shows you how to use cost-effective risk analysis techniques to id"
  },
  {
    "title": "Distributed Systems",
    "author": {
      "name": "George F. Coulouris"
    },
    "cover_image": "http://books.google.com/books/content?id=Kd5QAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 5,
      "review_count": 61,
      "borrowed_count": 0
    },
    "quantity": 9,
    "status": {
      "is_available": true,
      "available_count": 9,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "This new edition represents a significant update of this best-selling textbook for distributed systems. It incorporates ...",
    "published_at": "1988",
    "summary": "This new edition represents a significant update of this best-selling textbook for distributed systems. It incorporates and anticipates the major developments in distributed systems technology. All chapters have been thoroughly revised and updated, including emphasis on the Internet, intranets, mobility and middleware. There is increased emphasis on algorithms and discussion of security has been brought forward in the text and integrated with other related technologies. As with previous editions, this book is intended to provide knowledge of the principles and practice of distributed system design. Information is conveyed in sufficient depth to allow readers to eveluate existing systems or design new ones. Case studies illustrate the design concepts for each major topic."
  },
  {
    "title": "Machines Who Think",
    "author": {
      "name": "Pamela McCorduck"
    },
    "cover_image": "http://books.google.com/books/content?id=r2C1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 4.3,
      "review_count": 56,
      "borrowed_count": 0
    },
    "quantity": 2,
    "status": {
      "is_available": true,
      "available_count": 2,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "This book is a history of artificial intelligence, that audacious effort to duplicate in an artifact what we consider to...",
    "published_at": "2004-03-17",
    "summary": "This book is a history of artificial intelligence, that audacious effort to duplicate in an artifact what we consider to be our most important property—our intelligence. It is an invitation for anybody with an interest in the future of the human race to participate in the inquiry."
  },
  {
    "title": "Mastering Ethereum",
    "author": {
      "name": "Carlo Parisi"
    },
    "cover_image": "http://books.google.com/books/content?id=oKCNEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Business & Economics"
    ],
    "metrics": {
      "rating": 4.8,
      "review_count": 81,
      "borrowed_count": 0
    },
    "quantity": 5,
    "status": {
      "is_available": true,
      "available_count": 5,
      "next_availability_date": null
    },
    "flags": {
      "is_new": true,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "As the first blockchain platform to introduce the concept of smart contracts, Ethereum is the gateway to a worldwide dec...",
    "published_at": "2025-10-06",
    "summary": "As the first blockchain platform to introduce the concept of smart contracts, Ethereum is the gateway to a worldwide decentralized computing paradigm. With this practical guide, the authors provide everything you need to know to start building smart contracts and DApps on Ethereum and other virtual machine blockchains. Through comprehensive coverage of Ethereum's internal workings, you'll understand not just the how but also the why of Ethereum's innovative technology. And practical deep dives into the architecture and operational mechanics will equip you with the knowledge and tools to explore further developments in Ethereum and the wider blockchain world. Run an Ethereum client, create and transmit basic transactions, and program smart contracts Learn the essentials of public key cryptography, hashes, and digital signatures Understand how \"wallets\" hold digital keys that control funds and smart contracts Learn security best practices, design patterns, and antipatterns with real-world examples Learn the essentials about DeFi and zero knowledge proofs Understand how the Consensus of Ethereum works and the challenges it presents Read and write basic Solidity and Vyper code"
  },
  {
    "title": "Hermann and Dorothea",
    "author": {
      "name": "Wolfgang Johann Von Goethe"
    },
    "cover_image": "http://books.google.com/books/content?id=hJX7EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Poetry"
    ],
    "metrics": {
      "rating": 3.5,
      "review_count": 7,
      "borrowed_count": 0
    },
    "quantity": 6,
    "status": {
      "is_available": true,
      "available_count": 6,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": false,
      "is_wishlisted": false
    },
    "summary_short": "\"Hermann and Dorothea\" by Johann Wolfgang von Goethe is a timeless epic poem that unfolds against the backdrop of rural ...",
    "published_at": "2024-03-17",
    "summary": "\"Hermann and Dorothea\" by Johann Wolfgang von Goethe is a timeless epic poem that unfolds against the backdrop of rural Germany. Set during a time of social upheaval and political change, Goethe's narrative follows the love story of Hermann and Dorothea, two young individuals from different social classes. As their romance blossoms amidst the chaos of the French Revolution, Goethe weaves a rich tapestry of themes including love, friendship, and the search for identity. Through vivid descriptions and lyrical language, he captures the essence of small-town life, while also addressing larger societal issues of the time. \"Hermann and Dorothea\" stands as a masterpiece of German literature, showcasing Goethe's unparalleled skill in blending the personal and the political into a captivating narrative that continues to resonate with readers today."
  },
  {
    "title": "Elements of Programming",
    "author": {
      "name": "Alexander A. Stepanov"
    },
    "cover_image": "http://books.google.com/books/content?id=tjOlkl7ecVQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 4.7,
      "review_count": 2,
      "borrowed_count": 0
    },
    "quantity": 4,
    "status": {
      "is_available": true,
      "available_count": 4,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "A truly foundational book on the discipline of generic programming reveals how to write better software by mastering the...",
    "published_at": "2009",
    "summary": "A truly foundational book on the discipline of generic programming reveals how to write better software by mastering the development of abstract components. The authors show programmers how to use mathematics to compose reliable algorithms from components, and to design effective interfaces between algorithms and data structures."
  },
  {
    "title": "Pascal User Manual and Report",
    "author": {
      "name": "Kathleen Jensen"
    },
    "cover_image": "http://books.google.com/books/content?id=wCmzAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "categories": [
      "Computers"
    ],
    "metrics": {
      "rating": 3.7,
      "review_count": 3,
      "borrowed_count": 0
    },
    "quantity": 13,
    "status": {
      "is_available": true,
      "available_count": 13,
      "next_availability_date": null
    },
    "flags": {
      "is_new": false,
      "is_popular": true,
      "is_wishlisted": false
    },
    "summary_short": "Software -- Programming Languages....",
    "published_at": "1985",
    "summary": "Software -- Programming Languages."
  }
]);
    