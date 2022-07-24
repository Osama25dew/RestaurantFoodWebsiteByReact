import React, {useState} from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './menuCard'
import NavBar from './navBar'
const menuListItem=[...new Set(Menu.map((curElem)=>{return curElem.category})),"All"] 
{/*new Set is liye k yeh bar bar repeat nai kare ga category ko jese breakfast ek bar hi aye ga list ya array mai........par agar hum console mai dekhe to yeh object mai values hein inhe array mai karne k liye ak bar pher square brackets mai likh do......is k bawajood kahi na kahi object hota array k andar so hum spread operator laga lete...*/}
const Resturant = () => {
  const [menuData, setMenuData]=useState(Menu)
  const [menuList, setMenuList]=useState(menuListItem)
  const filterItem=(categorys)=>{
    if(categorys==="All")
      {
        setMenuData(Menu)
        return
      }
    const updatedList=Menu.filter((curElem)=>{
      return curElem.category===categorys
    })
   setMenuData(updatedList) 
  }
  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
