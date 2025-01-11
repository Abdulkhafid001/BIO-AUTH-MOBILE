// module.exports = {
//   presets: [
//     [
//       "@babel/preset-react",
//       {
//         runtime: "automatic",
//       },
//     ],
//   ],
  // plugins: [
  //   "nativewind/babel",
  //   [
  //     "module-resolver",
  //     {
  //       root: ["./src"],
  //       alias: {
  //         "@": "./src",
  //       },
  //     },
  //   ],
  // ],
// };
module.exports = function(api){
  api.cache(true);
  return{
    presets: ["babel-preset-expo"]
  }
}
