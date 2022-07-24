import React from 'react'

const NavBar = ({filterItem, menuList}) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
            {
                menuList.map((curElemt)=>{
                    return <button className='btn-group__item' onClick={()=>filterItem(curElemt)}>{curElemt}</button>
                })
            }
             {/*yaha fat arrow fn mai filterItem fn is liye call kiya k agar na kare to error bohot ate hein so yeh adat bana lo k hamesha fn fat arrow fn mai call karna */}
        </div>
      </nav>
    </>
  )
}

export default NavBar
