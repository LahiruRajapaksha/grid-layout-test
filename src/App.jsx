import React from "react";
import GridLayout from "react-grid-layout";
import './styles.css';

export const  App = () => {

  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 3, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 5, h: 5 },
    { i: "d", x: 10, y: 10, w: 1, h: 2 },
    { i: "e", x: 25, y: 22, w: 1, h: 2 },
  ];
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={16}
      rowHeight={30}
      width={1300}
      style={{backgroundColor:'#ebebbe'}}
    >
      <div style={{backgroundColor:'#d293dd', textAlign:'center'}}key="a">a</div>
      <div style={{backgroundColor:'green',textAlign:'center'}}key="b">b</div>
      <div style={{backgroundColor:'blue',textAlign:'center'}}key="c">c</div>
      <div style={{backgroundColor:'#818b23',textAlign:'center'}}key="d">d</div>
      <div style={{backgroundColor:'#72a772',textAlign:'center'}}key="e">e</div>
    </GridLayout>
  );
}