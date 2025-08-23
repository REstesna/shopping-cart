
let defaultState = {

        status: 'signup',
        basket: [],
        created_at: '',
        id: '',
        lastname: '...',
        name: '...',
        password: '',
        username: ''
}



const createStore = (initialState) => {
  let state = initialState;
  const listeners = [];

  const getState = () => state;

  const setState = (newState) => {
    state = { ...state, ...newState };
    localStorage.setItem('state', JSON.stringify(state))
    listeners.forEach((l) => l(state));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  return { getState, setState, subscribe };
};


export const userState = createStore(defaultState);






export let products = [


    // book  
    {
        id: 1,
        title:"Atomic habit",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:3.5,
        imgSrc: 'img/book/atomic-habits.webp',
        price:100,
        leftCount:23,
        category: 'book'
    },
    
    {
        id: 2,
        title:"Awaken the Giant Within",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2.5,
        imgSrc: 'img/book/Awaken the Giant Within.jpg',
        price:150,
        leftCount:32,
        category: 'book'
    },

    {
        id: 3,
        title:"Feel Good Productivity",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1.5,
        imgSrc: 'img/book/Feel Good Productivity.jpg',
        price:170,
        leftCount:25,
        category: 'book'
    },

    {
        id: 4,
        title:"How to be a Stoic",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:0.5,
        imgSrc: 'img/book/How to be a Stoic.jpg',
        price:200,
        leftCount:36,
        category: 'book'
    },

    {
        id: 5,
        title:"How to Stop Worrying and Start Living",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:4,
        imgSrc: 'img/book/How to Stop Worrying and Start Living.png',
        price:80,
        leftCount:32,
        category: 'book'
    },

    {
        id: 6,
        title:"How to win friends and influence people",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:5,
        imgSrc: 'img/book/How to win friends and influence people.png',
        price:155,
        leftCount:90,
        category: 'book'
    },

    {
        id: 7,
        title:"The Four Agreements",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:4.2,
        imgSrc: 'img/book/The Four Agreements.jfif',
        price:141,
        leftCount:9,
        category: 'book'
    },

    {
        id: 8,
        title:"The Gifts of Imperfection",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1.2,
        imgSrc: 'img/book/The Gifts of Imperfection.jpg',
        price:137,
        leftCount:10,
        category: 'book'
    },

    {
        id: 9,
        title:"The Power of Habit",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:5,
        imgSrc: 'img/book/The Power of Habit.webp',
        price:211,
        leftCount:15,
        category: 'book'
    },

    {
        id: 10,
        title:"Who moved my cheese",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2.2,
        imgSrc: 'img/book/Who moved my cheese.jpg',
        price:122,
        leftCount:11,
        category: 'book'
    },

    // hat
    {
        id: 11,
        title:"black hat",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2,
        imgSrc: 'img/hat/black-hat.jpg',
        price:38,
        leftCount:8,
        category: 'hat'
    },

    {
        id: 12,
        title:"blue hat",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2.4,
        imgSrc: 'img/hat/blue-hat.avif',
        price:1000,
        leftCount:10,
        category: 'hat'
    },

    {
        id: 13,
        title:"brown hat",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1,
        imgSrc: 'img/hat/brown-hat.webp',
        price:46,
        leftCount:88,
        category: 'hat'
    },

    {
        id: 14,
        title:"green hat",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2.1,
        imgSrc: 'img/hat/green-hat.jpg',
        price:13,
        leftCount:2,
        category: 'hat'
    },

    {
        id: 15,
        title:"orange hat",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1.2,
        imgSrc: 'img/hat/orange-hat.jpg',
        price:75,
        leftCount:50,
        category: 'hat'
    },

    {
        id: 16,
        title:"pink hat",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1.1,
        imgSrc: 'img/hat/pink-hat.jpg',
        price:46,
        leftCount:74,
        category: 'hat'
    },

    {
        id: 17,
        title:"purple hat",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2.8,
        imgSrc: 'img/hat/purple-hat.jpg',
        price:26,
        leftCount:12,
        category: 'hat'
    },

    {
        id: 18,
        title:"red hat",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1.3,
        imgSrc: 'img/hat/red-hat.jpg',
        price:48,
        leftCount:19,
        category: 'hat'
    },

    {
        id: 19,
        title:"white hat",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2.3,
        imgSrc: 'img/hat/white-hat.webp',
        price:15,
        leftCount:73,
        category: 'hat'
    },

    {
        id: 20,
        title:"yellow hat",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:3.3,
        imgSrc: 'img/hat/yellow-hat.webp',
        price:133,
        leftCount:46,
        category: 'hat'
    },
    
    // phone
    
    {
        id: 21,
        title:"iphone 11 pro max",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:4.3,
        imgSrc: 'img/phone/iphone11promax.avif',
        price:699,
        leftCount:82,
        category: 'phone'
    },
    
    {
        id: 22,
        title:"iphone 12 pro max",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:5,
        imgSrc: 'img/phone/iphone12promax.jpg',
        price:799,
        leftCount:28,
        category: 'phone'
    },
    
    
    {
        id: 23,
        title:"iphone 13 pro max",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1,
        imgSrc: 'img/phone/iphone13promax.jpg',
        price:999,
        leftCount:37,
        category: 'phone'
    },
    
    
    {
        id: 24,
        title:"Iphone 14 pro max",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2,
        imgSrc: 'img/phone/iphone14promax.jpg',
        price:355,
        leftCount:64,
        category: 'phone'
    },
    
    {
        id: 25,
        title:"Note 20 Ultra",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:3,
        imgSrc: 'img/phone/note20ultra-phone.webp',
        price:278,
        leftCount:32,
        category: 'phone'
    },
    
    
    {
        id: 26,
        title:"S21 Ultra",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:4,
        imgSrc: 'img/phone/s21ultra.jpg',
        price:255,
        leftCount:34,
        category: 'phone'
    },
    
    
    {
        id: 27,
        title:"S22 Ultra",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:5,
        imgSrc: 'img/phone/s22ultra.webp',
        price:488,
        leftCount:61,
        category: 'phone'
    },
    
    
    {
        id: 28,
        title:"S23 Ultra",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1.7,
        imgSrc: 'img/phone/s23ultra.webp',
        price:166,
        leftCount:43,
        category: 'phone'
    },
    
    {
        id: 29,
        title:"S24 Ultra",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1.8,
        imgSrc: 'img/phone/s24ultra.jpg',
        price:299,
        leftCount:16,
        category: 'phone'
    },
    
    
    {
        id: 30,
        title:"S25 Ultra",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:3.8,
        imgSrc: 'img/phone/s25ultra.jpg',
        price:499,
        leftCount:94,
        category: 'phone'
    },
    
    // shoe

    {
        id: 31,
        title:"black shoe",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:4.8,
        imgSrc: 'img/shoe/black-shoe.webp',
        price:199,
        leftCount:49,
        category: 'shoe'
    },
    
    {
        id: 32,
        title:"blue shoe",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:5,
        imgSrc: 'img/shoe/blue-shoe.webp',
        price:490,
        leftCount:76,
        category: 'shoe'
    },
    
    {
        id: 33,
        title:"brown shoe",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:0.2,
        imgSrc: 'img/shoe/brown-shoe.avif',
        price:569,
        leftCount:67,
        category: 'shoe'
    },
    
    {
        id: 34,
        title:"cyan shoe",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1,
        imgSrc: 'img/shoe/cyan-shoe.webp',
        price:159,
        leftCount:89,
        category: 'shoe'
    },
    
    {
        id: 35,
        title:"green shoe",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:0.8,
        imgSrc: 'img/shoe/green-shoe.webp',
        price:123,
        leftCount:70,
        category: 'shoe'
    },
    
    {
        id: 36,
        title:"orange shoe",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:3.8,
        imgSrc: 'img/shoe/orange-shoe.webp',
        price:111,
        leftCount:15,
        category: 'shoe'
    },
    
    {
        id: 37,
        title:"pink shoe",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:4.8,
        imgSrc: 'img/shoe/pink-shoe.webp',
        price:150,
        leftCount:69,
        category: 'shoe'
    },
    
    {
        id: 38,
        title:"red shoe",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1,
        imgSrc: 'img/shoe/red-shoe.avif',
        price:399,
        leftCount:56,
        category: 'shoe'
    },
    
    {
        id: 39,
        title:"white shoe",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:3,
        imgSrc: 'img/shoe/white-shoe.webp',
        price:299,
        leftCount:11,
        category: 'shoe'
    },
    
    
    {
        id: 40,
        title:"yellow shoe",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2,
        imgSrc: 'img/shoe/yellow-shoe.avif',
        price:399,
        leftCount:18,
        category: 'shoe'
    },
    
    // t-shirt

    {
        id: 41,
        title:"black T-shirt",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:4.2,
        imgSrc: 'img/t-shirt/black-Tshirt.avif',
        price:25,
        leftCount:4,
        category: 't-shirt'
    },

    {
        id: 42,
        title:"darkBlue T-shirt",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:5,
        imgSrc: 'img/t-shirt/darkBlue-Tshirt.jpg',
        price:147,
        leftCount:52,
        category: 't-shirt'
    },

    {
        id: 43,
        title:"gray T-shirt",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1,
        imgSrc: 'img/t-shirt/gray-Tshirt.jpg',
        price:96,
        leftCount:17,
        category: 't-shirt'
    },

    {
        id: 44,
        title:"green T-shirt",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2.1,
        imgSrc: 'img/t-shirt/green-Tshirt.jpg',
        price:147,
        leftCount:71,
        category: 't-shirt'
    },

    {
        id: 45,
        title:"orange T-shirt",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2.2,
        imgSrc: 'img/t-shirt/orange-Tshirt.webp',
        price:256,
        leftCount:82,
        category: 't-shirt'
    },

    {
        id: 46,
        title:"pink T-shirt",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2.3,
        imgSrc: 'img/t-shirt/pink-Tshirt.jpg',
        price:147,
        leftCount:119,
        category: 't-shirt'
    },

    {
        id: 47,
        title:"purple T-shirt",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:2.4,
        imgSrc: 'img/t-shirt/purple-Tshirt.jpeg',
        price:222,
        leftCount:61,
        category: 't-shirt'
    },

    {
        id: 48,
        title:"red T-shirt",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:4.8,
        imgSrc: 'img/t-shirt/red-Tshirt.jpg',
        price:125,
        leftCount:66,
        category: 't-shirt'
    },

    {
        id: 49,
        title:"white T-shirt",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:3,
        imgSrc: 'img/t-shirt/white-Tshirt.jpg',
        price:78,
        leftCount:27,
        category: 't-shirt'
    },

    {
        id: 50,
        title:"yellow T-shirt",
        description:'Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicing...',
        rate:1,
        imgSrc: 'img/t-shirt/yellow-Tshirt.jpg',
        price:52,
        leftCount:72,
        category: 't-shirt'
    },

]