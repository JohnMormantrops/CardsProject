// import "./styles.css";
// import { render } from "react-dom";
// import React, { useState } from "react";
// import { Spring, useSprings, animated, interpolate } from "react-spring/renderprops";
// import { useGesture } from "react-use-gesture";
// import cardArray from "./data";

// // These two are just helpers, they curate spring data, values that are later being interpolated into css
// //y sets how much of the card below we can see
// const to = (i) => ({
//   x: 0,
//   y: i * -1,
//   scale: 1.5,
//   rot: -10 + Math.random() * 1,
//   delay: i * 100
// });

// //cards fly in from x and y coords
// const from = (i) => ({ x: 1000, rot: 100, scale: 0.1, y: 1000 });
// // This is being used down there in the view, it interpolates rotation and scale into a css transform
// const trans = (r, s) =>
//   `perspective(1000px) rotateX(30deg) rotateY(${
//     r / 10
//   }deg) rotateZ(${r}deg) scale(${s})`;

// const cards = cardArray;
// console.log("HERS CARD ARRAY");
// console.log(cards);
// console.log(cards.keys());

// export default function () {
//   const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
//   const [props, set] = useSprings(cards.length, (i) => ({
//     ...to(i),
//     from: from(i)
//   })); // Create a bunch of springs using the helpers above
//   // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
//   const bind = useGesture(
//     ({
//       args: [index],
//       down,
//       delta: [xDelta],
//       distance,
//       direction: [xDir],
//       velocity
//     }) => {
//       const trigger = velocity > 0.01; // If you flick hard enough it should trigger the card to fly out
//       const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
//       if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//       set((i) => {
//         if (index !== i) return; // We're only interested in changing spring-data for the current spring
//         const isGone = gone.has(index);
//         const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
//         const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
//         const scale = down ? 1.6 : 1.5; // Active cards lift up a bit
//         return {
//           x,
//           rot,
//           scale,
//           delay: undefined,
//           config: { friction: 30, tension: down ? 800 : isGone ? 200 : 500 }
//         };
//       });
//       if (!down && gone.size === cards.length)
//         setTimeout(() => gone.clear() || set((i) => to(i)), 600);
//     }
//   );
//   // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)

//   return props.map(({ x, y, rot, scale }, i) => (
//     <animated.div
//       className="spring"
//       key={i}
//       style={{
//         transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
//       }}
//     >
//       {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
//       <animated.div
//         className="innerSpring"
//         {...bind(i)}
//         style={{ transform: interpolate([rot, scale], trans) }}
//       >
//         <div className="cardContainer" id="cardContainer">
//           <div className="card" id={cards[i].nation}>
//             <div className="pic">
//               <p className="heroname">{cards[i].name}</p>
//               <img src={cards[i].image} alt="hero pic" />
//             </div>
//             <div className="ability">
//               <p className="text">{cards[i].attack}</p>
//             </div>
//             <div className="ability">
//               <p className="text">{cards[i].defense}</p>
//             </div>
//           </div>
//         </div>
//       </animated.div>
//     </animated.div>
//   ));
// }
