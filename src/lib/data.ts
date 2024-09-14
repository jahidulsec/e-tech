export const heroData = [
  {
    id: 1,
    imagePath:
      "https://rog.asus.com/event/id/ROGIntel12thGen/img/dekstop-banner.jpg",
  },
  {
    id: 2,
    imagePath:
      "https://dlcdnwebimgs.asus.com/gain/D9795103-5CFB-434F-85AC-E7BA1888E946/fwebp",
  },
  {
    id: 3,
    imagePath:
      "https://www.stormforcegaming.co.uk/wp-content/uploads/2022/01/Intel-12th-Gen-Update-v2.jpg",
  },
];

export const featuredCategory = [
  {
    id: 1,
    title: "Desktop",
    icon: "computer-line",
  },
  {
    id: 2,
    title: "Laptop",
    icon: "macbook-line",
  },
  {
    id: 3,
    title: "Gaming Laptop",
    icon: "macbook-fill",
  },
  {
    id: 4,
    title: "Components",
    icon: "cpu-line",
  },
  {
    id: 5,
    title: "Monitor",
    icon: "tv-2-line",
  },
];

export const trendingProducts = [
  {
    id: 1,
    name: 'MSI PRO MP251P 24.5" 100Hz 1ms FHD IPS Monitor',
    imagePath:
      "/assets/msi_monitor.webp",
    price: 19700,
    prevPrice: 20000,
    rating: 5,
  },
  {
    id: 2,
    name: "Intel Core i3-12100 12th Gen Budget Desktop PC",
    imagePath:
      "/assets/i3-12100-500x500.jpg",
    price: 27400,
    prevPrice: null,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Apple MacBook Pro 16 inch M3 Pro Chip Liquid Retina Display 18GB RAM 512GB SSD Space Black",
    imagePath:
      "/assets/macbook-pro-16-inch-m3-pro-black-01-500x500.webp",
    price: 338000,
    prevPrice: 35500,
    rating: 5,
  },
  {
    id: 4,
    name: "AMD Ryzen 5 7600 Gaming Processor",
    imagePath:
      "/assets/ryzen-5-7600-01-500x500.webp",
    price: 20000,
    prevPrice: 21000,
    rating: 4,
  },
  {
    id: 5,
    name: "Intel Arc A750 Limited Edition 8GB GDDR6 Graphics Card",
    imagePath:
      "/assets/arc-a750-01-500x500.jpg",
    price: 29500,
    prevPrice: null,
    rating: 4,
  },
];

export const footerItems = [
  {
    id: 1,
    title: "Products",
    links: ["Bags", "Tees", "Objects", "Home Goods", "Accessories"],
  },
  {
    id: 2,
    title: "Customer Service",
    links: [
      "Contact",
      "Shipping",
      "Returns",
      "Warranty",
      "Secure Payments",
      "FAQ",
      "Find a store",
    ],
  },
  {
    id: 3,
    title: "Company",
    links: [
      "Who we are",
      "Sustainability",
      "Careers",
      "Terms & Conditions",
      "Privacy",
    ],
  },
  {
    id: 4,
    title: "Legal",
    links: [
      "Terms of Service",
      "Return Policy",
      "Privacy Policy",
      "Shipping Policy",
    ],
  },
];

export const productData = {
  id: 1,
  name: "Apple MacBook Pro 16 inch M3 Pro Chip Liquid Retina Display 18GB RAM 512GB SSD Space Black",
  price: 338000,
  status: "in-stock",
  images: [
    {
      id: 1,
      imagePath:
        "/assets/macbook-pro-16-inch-m3-pro-black-01-500x500.webp",
    },
    {
      id: 2,
      imagePath:
        "/assets/macbook-pro-16-inch-m3-pro-black-02-500x500.webp",
    },
    {
      id: 3,
      imagePath:
        "/assets/macbook-pro-16-inch-m3-pro-black-04-500x500.webp",
    },
  ],
};

export const reviewData = [
  {
    id: 1,
    name: "Emily Selman",
    rating: 5,
    imagePath: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    createdAt: new Date("2024-06-16"),
    comment:
      "This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!",
  },
  {
    id: 2,
    name: "Hector Gibbons",
    imagePath: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    rating: 5,
    createdAt: new Date("2024-06-12"),
    comment:
      "Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.",
  },
  {
    id: 1,
    name: "Mark Edwards",
    imagePath: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4,
    createdAt: new Date("2024-04-6"),
    comment:
      "Really happy with look and options of these icons. I've found uses for them everywhere in my recent projects. I hope there will be 20px versions in the future!",
  },
];


export const navCategory = [
  {
    id: 1,
    name: 'Desktop',
    subCategory: [
      {
        id:1,
        name: 'Star PC'
      },
      {
        id:2,
        name: 'Gaming PC'
      },
      {
        id:3,
        name: 'Brand PC'
      },
    ] 
  },
  {
    id: 2,
    name: 'Laptop',
    subCategory: [
      {
        id:1,
        name: 'Gaming Laptop'
      },
      {
        id:2,
        name: 'Premium Ultrabook'
      },
      {
        id:3,
        name: 'All Laptop'
      },
    ] 
  },

  {
    id: 3,
    name: 'Component',
    subCategory: [
      {
        id:1,
        name: 'Processor'
      },
      {
        id:2,
        name: 'Motherboard'
      },
      {
        id:3,
        name: 'RAM'
      },
      {
        id:4,
        name: 'Power Supply'
      },
      {
        id:5,
        name: 'Casing'
      },
    ] 
  },
  {
    id: 4,
    name: "Monitor",
    subCategory: []
  },
  {
    id: 5,
    name: "UPS",
    subCategory: []
  },
  {
    id: 6,
    name: "Office Equipement",
    subCategory: []
  },
  {
    id: 7,
    name: "Security",
    subCategory: []
  },
  {
    id: 7,
    name: "Networking",
    subCategory: []
  },
]


export const filterType = [
  {
    id: 1,
    name: 'Category',
    filters: [
      {
        id: 1,
        name: 'Desktop'
      },
      {
        id: 2,
        name: 'Laptop'
      },
      {
        id: 3,
        name: 'Component'
      },
      {
        id: 4,
        name: 'Motherboard'
      },

    ]
  },
  {
    id: 2,
    name: 'Brand',
    filters: [
      {
        id: 1,
        name: 'Asus'
      },
      {
        id: 2,
        name: 'HP'
      },
      {
        id: 3,
        name: 'Dell'
      },

    ]
  }
]