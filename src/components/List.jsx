import React from 'react'

const List = (props) => {
    const fruits = ["apple","banana","orange","grapes"].sort()
     const fruitlist = fruits.map(fruit=><li key={fruit}>{fruit}</li>)


    const veggies = [{id:1, name:"tomato", cal:20},{id:2, name:"potato", cal:10},{id:3, name:"brinjal", cal:23}]

    veggies.sort((a,b)=>a.name.localeCompare(b.name))

    const veglist = veggies.map(veg=><li key={veg.id}>{veg.name}:<b>{veg.cal}</b></li>)

    const lowcalveg = veggies.filter(veg=>veg.cal<=10)
    const lowcalveggies = lowcalveg.map(veg=><li key={veg.id}>{veg.name}:<b>{veg.cal}</b></li>)

    const highcalveg = veggies.filter(veg=>veg.cal>20)
    const highcalveggies = highcalveg.map(veg=><li key={veg.id}>{veg.name}:<b>{veg.cal}</b></li>)


    const countrylist = props.items
    const category = props.category

    const listcountrys = countrylist.map(item=><li key={item.id}>{item.name}</li>)

  return (
    <>
    <h1>Fruits</h1>
    <ul>{fruitlist}</ul>
    <h1>Veggetables</h1>
    <ul>{veglist}</ul>
    {/* --------------filtered list----------------- */}
    <h4>Veggetables less than equal to 10 calories</h4>
    <ul>{lowcalveggies}</ul>
    <h4>Veggetables Greater tha 12 calories</h4>
    <ul>{highcalveggies}</ul>
    {/* --------------list from props--------------- */}
    <h1>{category}</h1>
    <ul>{listcountrys}</ul>
    </>
  )
}

export default List
