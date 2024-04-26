// console.log(
//   itemsheading.flatMap((card) => {
//     if (card.card.card.itemCards) {
//       return card.card.card.itemCards.map((item) => item.card.info.name);
//     } else if (card.card.card.categories) {
//       return card.card.card.categories.flatMap((category) => {
//         if (category.itemCards) {
//           return category.itemCards.map((item) => item.card.info.name);
//         } else {
//           return [];
//         }
//       });
//     } else {
//       return [];
//     }
//   })
// );

// console.log(
//   itemsheading.flatMap((card) => {
//     if (card.card.card.title) {
//       return card.card.card.title;
//     } else if (card.card.card.categories) {
//       return card.card.card.categories.flatMap((category) => {
//         if (category.title) {
//           return category.title;
//         } else {
//           return [];
//         }
//       });
//     } else {
//       return [];
//     }
//   })
// );

{
  /* {itemsheading.slice(1).map((items,index)=>(<Cardlist key={index} title={items?.card?.card?.title}/>))} */
}

{
  /* {itemsheading.map(
              (items, index) =>
                items?.card?.card?.title && (
                  <Cardlist key={index} title={items.card.card.title} />
                )
            )} */
}

// const showIndex,setShowIndex = useState(0)
// showItems={index === showIndex ? true : false}
// setShowIndex={()=> setShowIndex(index)}