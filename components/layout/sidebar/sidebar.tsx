import SidebarList from "./sidebar-list"

const items = [
  { title: 'Tất cả sản phẩm', href:'/collections'},
  { title:"BÁN CHẠY" },
  { title:"Adidas", children: [
      { title: "Tất cả sản phẩm",href:"/collections/adidas"},
      { title: "Adidas super star",href:'/collections/adidas-super-star'}
  ] },
  { title:"Nike"},
  { title:"New Balance", },
  { title:"Converse", },
  { title:"Vans", },
  { title:"MLB", },
]

const Sidebar = () => {
  return (
    <SidebarList data={items}/>
  )
}

export default Sidebar