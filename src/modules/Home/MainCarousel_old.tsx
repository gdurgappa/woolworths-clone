// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
// import * as api from "../../api/request";
// import { db } from "../../App";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     alignItems: "center",
//     display: "flex",
//     height: "64px",
//   },
// }));

// const MainCarousel = () => {
//   const [carouselItems, setCarouselItems] = useState([]);
//   const classes = useStyles();
//   useEffect(() => {
//     const items: any = [];
//     db.collection("carousel")
//       .get()
//       .then(({ docs }) => {
//         docs.forEach((doc) => {
//
//           items.push(doc.data());
//         });
//         setCarouselItems(items);
//       });
//   }, []);
//   return (
//     <div className={classes.root}>
//       <AutoRotatingCarousel
//         label="Get started"
//         open={true}
//         // onClose={() => setHandleOpen({ open: false })}
//         // onStart={() => setHandleOpen({ open: false })}
//         autoplay={false}
//         // mobile={isMobile}
//         style={{ position: "absolute" }}
//       >
//         {carouselItems.map((item: any) => {
//           return (
//             <Slide
//               media={<img src={item.image} />}
//               mediaBackgroundStyle={{ backgroundColor: red[400] }}
//               //   style={{ backgroundColor: red[600] }}
//               title="This is a very cool feature"
//               subtitle="Just using this will blow your mind."
//             >
//               {/* <div className="each-slide">
//                 <div style={{ background: item.background }}>
//                   {item.image && <img src={item.image} />}
//                   <span>Slide 1</span>
//                 </div>
//               </div> */}
//             </Slide>
//           );
//         })}
//       </AutoRotatingCarousel>
//     </div>
//   );
// };

// export default MainCarousel;
