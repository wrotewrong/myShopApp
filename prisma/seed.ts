/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      name: 'Black Jeans',
      price: 299,
      amount: 4,
      description:
        'Jeans are a type of pants or trousers made from denim or dungaree cloth. Often the term "jeans" refers to a particular style of trousers, called "blue jeans", with copper-riveted pockets which were invented by Jacob W. Davis in 1871[1] and patented by Jacob W. Davis and Levi Strauss on May 20, 1873. Prior to the patent, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue-colored denim. Research on the trade of jean fabric shows that it emerged in the cities of Genoa, Italy, and Nîmes, France. Gênes, the French word for Genoa, may be the origin of the word "jeans". In Nîmes, weavers tried to reproduce jean fabric but instead developed a similar twill fabric that became known as denim, "de Nîmes" , meaning "from Nîmes".',
    },
    {
      id: 'fe859f7f-ba81-4e17-8cb6-2f5f68e4231f',
      name: 'Blue Jeans',
      price: 349,
      amount: 8,
      description:
        'Jeans are a type of pants or trousers made from denim or dungaree cloth. Often the term "jeans" refers to a particular style of trousers, called "blue jeans", with copper-riveted pockets which were invented by Jacob W. Davis in 1871[1] and patented by Jacob W. Davis and Levi Strauss on May 20, 1873. Prior to the patent, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue-colored denim. Research on the trade of jean fabric shows that it emerged in the cities of Genoa, Italy, and Nîmes, France. Gênes, the French word for Genoa, may be the origin of the word "jeans". In Nîmes, weavers tried to reproduce jean fabric but instead developed a similar twill fabric that became known as denim, "de Nîmes" , meaning "from Nîmes".',
    },
    {
      id: 'd8e661b5-e5a3-42ba-ae24-475a6f1c9b79',
      name: 'Orange Tshirt',
      price: 199,
      amount: 10,
      description:
        'A T-shirt (also spelled tee-shirt or tee shirt), or tee for short, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean. The T-shirt evolved from undergarments used in the 19th century and, in the mid-20th century, transitioned from undergarment to general-use casual clothing. They are typically made of cotton textile in a stockinette or jersey knit, which has a distinctively pliable texture compared to shirts made of woven cloth. Some modern versions have a body made from a continuously knitted tube, produced on a circular knitting machine, such that the torso has no side seams. The manufacture of T-shirts has become highly automated and may include cutting fabric with a laser or a water jet. ',
    },
    {
      id: '4e268521-7322-460c-a1f1-861090c52590',
      name: 'Black Tshirt',
      price: 149,
      amount: 20,
      description:
        'A T-shirt (also spelled tee-shirt or tee shirt), or tee for short, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean. The T-shirt evolved from undergarments used in the 19th century and, in the mid-20th century, transitioned from undergarment to general-use casual clothing. They are typically made of cotton textile in a stockinette or jersey knit, which has a distinctively pliable texture compared to shirts made of woven cloth. Some modern versions have a body made from a continuously knitted tube, produced on a circular knitting machine, such that the torso has no side seams. The manufacture of T-shirts has become highly automated and may include cutting fabric with a laser or a water jet. ',
    },
  ];
}

function getImages() {
  return [
    {
      id: '28b1a2de-a1d9-41e8-955e-8df8d568f790',
      url: 'https://cdn.shopify.com/s/files/1/0306/1645/3256/products/Class_Tee_Black_Front_1024x1024@2x.jpg?v=1581395952',
      productId: '4e268521-7322-460c-a1f1-861090c52590',
    },
    {
      id: '3aaa0b42-b02f-446f-b9b4-39f5517d0d2d',
      url: 'https://images.pexels.com/photos/15937629/pexels-photo-15937629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productId: '4e268521-7322-460c-a1f1-861090c52590',
    },
    {
      id: '40ed95c1-1e5d-4ced-986d-b0d83b4398ef',
      url: 'https://images.pexels.com/photos/15937633/pexels-photo-15937633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productId: '4e268521-7322-460c-a1f1-861090c52590',
    },
    {
      id: '6b036ca4-5e8f-455a-8dab-0e06d0d08b21',
      url: 'https://images.pexels.com/photos/15937632/pexels-photo-15937632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productId: '4e268521-7322-460c-a1f1-861090c52590',
    },
    {
      id: '3e29dbe5-95c2-4074-a083-f7cba5c58fdd',
      url: 'https://www.nuka.pl/img/product_media/6001-7000/Prange-1504.jpg',
      productId: 'd8e661b5-e5a3-42ba-ae24-475a6f1c9b79',
    },
    {
      id: '57824aaa-c107-48a4-ba81-4212e6b321a6',
      url: 'https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1633351059/D16396-2653-D155-Z01/g-star-raw-lash-t-shirt-orange.jpg',
      productId: 'd8e661b5-e5a3-42ba-ae24-475a6f1c9b79',
    },

    {
      id: 'a5aa7dc1-ad79-43a2-a5ca-c6e783103b3c',
      url: 'https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1633350903/D16396-2653-D155-M02/g-star-raw-lash-t-shirt-orange.jpg',
      productId: 'd8e661b5-e5a3-42ba-ae24-475a6f1c9b79',
    },
    {
      id: 'b15cc0bc-2619-440c-a44e-2a2680bcaef7',
      url: 'https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1633350929/D16396-2653-D155-M03/g-star-raw-lash-t-shirt-orange.jpg',
      productId: 'd8e661b5-e5a3-42ba-ae24-475a6f1c9b79',
    },
    {
      id: 'ce034dc4-b1d3-43cd-bd4c-31ed77d86355',
      url: 'https://images.onlyandsons.com/22023853/4007032/001/onlysons-onsfiverelaxwashedblack3853jeans-sort.jpg?v=5bf71bfcebc561ab3438b35161350fc0&format=webp&rsampler=catmull&width=1024&quality=90',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
    },
    {
      id: 'f05b5096-8da3-4d38-8bfc-37505dd6f933',
      url: 'https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1675685603/D19161-D291-A810-M01/g-star-raw-triple-a-regular-straight-jeans-black.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
    },
    {
      id: 'ed972c83-bae2-4bc1-b9f5-5caada77feb9',
      url: 'https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1675044724/D19161-D291-A810-M02/g-star-raw-triple-a-regular-straight-jeans-black.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
    },
    {
      id: 'ed8ae489-9986-487b-a375-aabad7185d3c',
      url: 'https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1675044739/D19161-D291-A810-M03/g-star-raw-triple-a-regular-straight-jeans-black.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
    },
    {
      id: 'a13b17ca-02ec-4977-82b3-23fe713030e3',
      url: 'https://images.hugoboss.com/is/image/boss/hbeu50463090_414_360?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&wid=666&hei=1000&fmt=webp',
      productId: 'fe859f7f-ba81-4e17-8cb6-2f5f68e4231f',
    },
    {
      id: '43ea351f-035b-41f0-b39d-88e1ccc0ae14',
      url: 'https://images.hugoboss.com/is/image/boss/hbeu50463090_414_350?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&wid=666&hei=1000&fmt=webp',
      productId: 'fe859f7f-ba81-4e17-8cb6-2f5f68e4231f',
    },
    {
      id: 'fd00dc9e-3c04-4c10-9480-4d132e8fb35d',
      url: 'https://images.hugoboss.com/is/image/boss/hbeu50463090_414_340?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&wid=666&hei=1000&fmt=webp',
      productId: 'fe859f7f-ba81-4e17-8cb6-2f5f68e4231f',
    },
    {
      id: '22621470-287a-4c4d-a13f-44ca1df43989',
      url: 'https://images.hugoboss.com/is/image/boss/hbeu50463090_414_100?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&wid=666&hei=1000&fmt=webp',
      productId: 'fe859f7f-ba81-4e17-8cb6-2f5f68e4231f',
    },
  ];
}

// function getUsers() {
//   return [
//     {
//       id: 'e519219b-6b62-49a9-9130-5da1be0057ba',
//       email: 'andrzej2@gmail.com',
//       name: 'andrzej',
//       address: 'Lodz',
//       role: Role.USER,
//     },
//   ];
// }

// function getOrderedProducts() {
//   return [
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
//       name: 'Black Jeans',
//       price: 299,
//       amount: 1,
//       details: 'I want XL size',
//       orderId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
//     },
//     {
//       id: 'd8e661b5-e5a3-42ba-ae24-475a6f1c9b79',
//       name: 'Orange Tshirt',
//       price: 149,
//       amount: 1,
//       details: 'I want XL size',
//       orderId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
//     },
//   ];
// }

// function getOrders() {
//   return [
//     {
//       id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
//       userId: '80d710b5-fbfd-4ffd-a8b5-026f755fa3b3',
//       orderedProducts: [
//         '4e268521-7322-460c-a1f1-861090c52590',
//         'd8e661b5-e5a3-42ba-ae24-475a6f1c9b79',
//       ],
//     },
//   ];
// }

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getImages().map((image) => {
      return db.image.create({ data: image });
    }),
  );

  // await Promise.all(
  //   getUsers().map((user) => {
  //     return db.user.create({ data: user });
  //   }),
  // );

  // await Promise.all(
  //   getOrderedProducts().map(({ orderId, ...orderedProductsData }) => {
  //     return db.orderedproduct.create({
  //       data: {
  //         ...orderedProductsData,
  //         order: {
  //           connect: { id: orderId },
  //         },
  //       },
  //     });
  //   }),
  // );

  //   await Promise.all(
  //     getOrders().map(({ userId, ...orderData }) => {
  //       return db.order.create({
  //         data: {
  //           ...orderData,
  //           user: {
  //             connect: { id: userId },
  //           },
  //         },
  //       });
  //     }),
  //   );
}

seed();
