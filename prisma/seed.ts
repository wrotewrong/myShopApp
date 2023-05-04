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
        'Jeans are a type of pants or trousers made from denim or dungaree cloth. Often the term "jeans" refers to a particular style of trousers, called "blue jeans", with copper-riveted pockets which were invented by Jacob W.',
    },
    {
      id: 'd8e661b5-e5a3-42ba-ae24-475a6f1c9b79',
      name: 'Orange Tshirt',
      price: 149,
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
