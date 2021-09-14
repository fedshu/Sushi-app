export const api = {
  get(url) {
    switch (url) {
      case "/sushi":
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              {
                sushi: [
                  {
                    id: 0,
                    imageUrl:
                      "https://sushivesla.by/img/frontend/dishes/nigiri_with_roast_tuna.png",
                    name: "Nigiri with roast tuna",
                    types: [0, 1],
                    sizes: [26, 30, 40],
                    price: 803,
                    category: 0,
                    rating: 4,
                  },
                  {
                    id: 1,
                    imageUrl:
                      "https://sushivesla.by/img/frontend/dishes/tamago_new.png",
                    name: "Tamago",
                    types: [0],
                    sizes: [26, 40],
                    price: 245,
                    category: 1,
                    rating: 6,
                  },
                  {
                    id: 2,
                    imageUrl:
                      "https://sushivesla.by/img/frontend/dishes/spicy_maguro-min.png",
                    name: "Spicy Maguro",
                    types: [0],
                    sizes: [26, 40],
                    price: 295,
                    category: 1,
                    rating: 4,
                  },
                  { 
                    id: 3,
                    imageUrl:
                      "https://sushivesla.by/img/frontend/dishes/chuca_mix-min.png",
                    name: "Chuca mix",
                    types: [1],
                    sizes: [26, 30, 40],
                    price: 275,
                    category: 2,
                    rating: 2,
                  },
                  {
                    id: 4,
                    imageUrl:
                      "https://sushivesla.by/img/frontend/dishes/karai_maki_b.png",
                    name: "Karai maki",
                    types: [0, 1],
                    sizes: [26, 30, 40],
                    price: 415,
                    category: 3,
                    rating: 8,
                  },
                  {
                    id: 5,
                    imageUrl:
                      "https://sushivesla.by/img/frontend/dishes/syace_delux_maki.png",
                    name: "Syace delux maki",
                    types: [0],
                    sizes: [30, 40],
                    price: 580,
                    category: 2,
                    rating: 2,
                  },
                  {
                    id: 6,
                    imageUrl:
                      "https://sushivesla.by/img/frontend/dishes/Grand%20Unagi%20maki.png",
                    name: "Grand Unagi maki",
                    types: [0, 1],
                    sizes: [26, 30, 40],
                    price: 675,
                    category: 1,
                    rating: 9,
                  },
                  {
                    id: 7,
                    imageUrl:
                      "https://sushivesla.by/img/frontend/dishes/250x250.png",
                    name: "Grand Philadelphia maki",
                    types: [0, 1],
                    sizes: [26, 30, 40],
                    price: 450,
                    category: 4,
                    rating: 10,
                  },
                  {
                    id: 8,
                    imageUrl:
                      "https://sushivesla.by/img/frontend/dishes/sapporo_maki_b.png",
                    name: "Sapporo maki",
                    types: [0, 1],
                    sizes: [26, 30, 40],
                    price: 395,
                    category: 5,
                    rating: 10,
                  },
                  {
                    id: 9,
                    imageUrl:
                      "https://sushivesla.by/img/frontend/dishes/sapporo_maki_b.png",
                    name: "Sapporo maki",
                    types: [0, 1],
                    sizes: [26, 30, 40],
                    price: 285,
                    category: 5,
                    rating: 7,
                  },
                ],
              },
            );
          }, 1000);
        });
      default:
        throw new Error("Unknown adress");
    }
  },
};
