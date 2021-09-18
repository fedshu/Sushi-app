export const api = {
  get(url) {
    switch (url) {
      case "/sushi/all":
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              sushi: [
                {
                  id: 0,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/nigiri_with_roast_tuna.png",
                  name: "Nigiri with roast tuna",
                  types: [0, 1],
                  sizes: [1, 2, 8],
                  price: 3.99,
                  category: "Yaki maki",
                  rating: 4,
                },
                {
                  id: 1,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/tamago_new.png",
                  name: "Tamago",
                  types: [0],
                  sizes: [4, 8],
                  price: 2.3,
                  category: "Yaki maki",
                  rating: 6,
                },
                {
                  id: 2,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/Yaki_syake.jpg",
                  name: "Yaki syake",
                  types: [0],
                  sizes: [1, 4, 8],
                  price: 14.99,
                  category: "Futomaki",
                  rating: 4,
                },
                {
                  id: 3,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/Yaki_tamura.jpg",
                  name: "Yaki tamura",
                  types: [1],
                  sizes: [1, 4, 8],
                  price: 9.99,
                  category: "Futomaki",
                  rating: 2,
                },
                {
                  id: 4,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/karai_maki_b.png",
                  name: "Karai maki",
                  types: [0, 1],
                  sizes: [4, 8],
                  price: 6,
                  category: "Maki",
                  rating: 9,
                },
                {
                  id: 5,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/syace_delux_maki.png",
                  name: "Syace delux maki",
                  types: [0],
                  sizes: [1, 4, 8],
                  price: 8.2,
                  category: "Maki",
                  rating: 2,
                },
                {
                  id: 6,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/Grand%20Unagi%20maki.png",
                  name: "Grand Unagi maki",
                  types: [0, 1],
                  sizes: [1, 4, 8],
                  price: 2,
                  category: "Grand maki",
                  rating: 9,
                },
                {
                  id: 7,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/250x250.png",
                  name: "Grand Philadelphia maki",
                  types: [0, 1],
                  sizes: [4, 8, 16],
                  price: 1.5,
                  category: "Grand maki",
                  rating: 8,
                },
                {
                  id: 8,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/sapporo_maki_b.png",
                  name: "Sapporo maki",

                  types: [0, 1],
                  sizes: [4, 8, 16],
                  price: 1.2,
                  category: "Nigiri",
                  rating: 8,
                },
                {
                  id: 9,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/shimoda_maki_b.png",
                  name: "Shimoda maki",

                  types: [0, 1],
                  sizes: [4, 8],
                  price: 2.1,
                  category: "Nigiri",
                  rating: 6,
                },
              ],
            });
          }, 1000);
        });
      case "/sushi/yaki-maki":
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              sushi: [
                {
                  id: 0,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/nigiri_with_roast_tuna.png",
                  name: "Nigiri with roast tuna",
                  types: [0, 1],
                  sizes: [1, 2, 8],
                  price: 3.99,
                  category: "Yaki maki",
                  rating: 4,
                },
                {
                  id: 1,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/tamago_new.png",
                  name: "Tamago",
                  types: [0],
                  sizes: [4, 8],
                  price: 2.3,
                  category: "Yaki maki",
                  rating: 7,
                },
              ],
            });
          }, 500);
        });
      case "/sushi/futomaki":
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              sushi: [
                {
                  id: 2,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/Yaki_syake.jpg",
                  name: "Yaki syake",
                  types: [0],
                  sizes: [1, 4, 8],
                  price: 14.99,
                  category: "Futomaki",
                  rating: 10,
                },
                {
                  id: 3,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/Yaki_tamura.jpg",
                  name: "Yaki tamura",
                  types: [1],
                  sizes: [1, 4, 8],
                  price: 9.99,
                  category: "Futomaki",
                  rating: 2,
                }
              ],
            });
          }, 500);
        });
      case "/sushi/maki":
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              sushi: [
                {
                  id: 4,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/karai_maki_b.png",
                  name: "Karai maki",
                  types: [0, 1],
                  sizes: [4, 8],
                  price: 6,
                  category: "Maki",
                  rating: 9,
                },
                {
                  id: 5,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/syace_delux_maki.png",
                  name: "Syace delux maki",
                  types: [0],
                  sizes: [1, 4, 8],
                  price: 8.2,
                  category: "Maki",
                  rating: 2,
                }
              ],
            });
          }, 500);
        });
      case "/sushi/grand-maki":
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              sushi: [
                {
                  id: 6,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/Grand%20Unagi%20maki.png",
                  name: "Grand Unagi maki",
                  types: [0, 1],
                  sizes: [1, 4, 8],
                  price: 2,
                  category: "Grand maki",
                  rating: 9,
                },
                {
                  id: 7,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/250x250.png",
                  name: "Grand Philadelphia maki",
                  types: [0, 1],
                  sizes: [4, 8, 16],
                  price: 1.5,
                  category: "Grand maki",
                  rating: 8,
                }
              ],
            });
          }, 500);
        });
      case "/sushi/nigiri":
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              sushi: [
                {
                  id: 8,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/sapporo_maki_b.png",
                  name: "Sapporo maki",

                  types: [0, 1],
                  sizes: [4, 8, 16],
                  price: 1.2,
                  category: "Nigiri",
                  rating: 8,
                },
                {
                  id: 9,
                  imageUrl:
                    "https://sushivesla.by/img/frontend/dishes/shimoda_maki_b.png",
                  name: "Shimoda maki",

                  types: [0, 1],
                  sizes: [4, 8],
                  price: 2.1,
                  category: "Nigiri",
                  rating: 6,
                }
              ],
            });
          }, 500);
        });
      default:
        throw new Error("Unknown adress");
    }
  },
};
