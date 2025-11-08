import { useState } from "react"
import fetchData from "../hooks/useFetch"
import toast from "react-hot-toast";

function Users() {
  // "https://jsonplaceholder.typicode.com/users"
  // http://localhost:3000/
  let { data: users, loading, error, deleteUser, createUser, formData, editUser } = fetchData("https://jsonplaceholder.typicode.com/users")
  const [modal, setModal] = useState(false)
  let [editmodal, setEditModal] = useState(false)
  let [edituser, setEditUser] = useState(null)
  console.log(users && users);


  return (
    <div className="flex flex-col bg-gray-300 px-5 h-full">
      {modal && <form onSubmit={(e) => {
        e.preventDefault()
        let newUser = formData(e.target)
        createUser(newUser)
        setModal(false)
      }} className="w-screen h-full fixed top-0 bottom-0 z-20 bg-[#00000094] flex items-center justify-center gap-3 flex-col" onClick={() => { setModal(false) }}>
        <div className="flex items-center justify-center gap-3 flex-col bg-white w-[50%] h-[70%] rounded-4xl text-black" onClick={(e) => { e.stopPropagation() }}>
          <label className="text-2xl font-bold" htmlFor="">Name</label>
          <input type="text" className="input placeholder:text-white text-white" placeholder="Enter name" required name="name" id="" />
          <label className="text-2xl font-bold" htmlFor="">Phone</label>
          <input type="number" className="input placeholder:text-white text-white" placeholder="Enter phone" required name="phone" id="" />
          <label className="text-2xl font-bold" htmlFor="">Email</label>
          <input type="email" className="input placeholder:text-white text-white" placeholder="Enter email" required name="email" id="" />
          <label className="text-2xl font-bold" htmlFor="">Role</label>
          <input type="text" className="input placeholder:text-white text-white" placeholder="Enter role" required name="role" id="" />
          <button type="submit" className="btn bg-white text-black text-2xl font-bold">Add</button>
          <button type="button" onClick={() => { setModal(false) }} className="btn bg-white text-black text-2xl font-bold">Close</button>
        </div>
      </form>}
      {editmodal && <form onSubmit={(e) => {
        e.preventDefault()
        let newUser = formData(e.target)
        editUser(edituser.id, newUser)
        setEditModal(false)
      }} className="w-screen h-full fixed top-0 bottom-0 z-20 bg-[#00000094] flex items-center justify-center gap-3 flex-col" onClick={() => { setEditModal(false) }}>
        <div className="flex items-center justify-center gap-3 flex-col bg-white w-[50%] h-[70%] rounded-4xl text-black" onClick={(e) => { e.stopPropagation() }}>
          <label className="text-2xl font-bold" htmlFor="">Name</label>
          <input type="text" className="input placeholder:text-white text-white" placeholder="Enter name" required name="name" id="" />
          <label className="text-2xl font-bold" htmlFor="">Phone</label>
          <input type="number" className="input placeholder:text-white text-white" placeholder="Enter phone" required name="phone" id="" />
          <label className="text-2xl font-bold" htmlFor="">Email</label>
          <input type="email" className="input placeholder:text-white text-white" placeholder="Enter email" required name="email" id="" />
          <label className="text-2xl font-bold" htmlFor="">Role</label>
          <input type="text" className="input placeholder:text-white text-white" placeholder="Enter role" required name="role" id="" />
          <label className="text-2xl font-bold" htmlFor="">Disabled</label>
          <input type="text" className="input placeholder:text-white text-white" placeholder="Enter yes/no" required name="disabled" id="" />
          <button type="submit" className="btn bg-white text-black text-2xl font-bold">Edit</button>
          <button type="button" onClick={() => { setEditModal(false) }} className="btn bg-white text-black text-2xl font-bold">Close</button>
        </div>
      </form>}
      {error && <h1 className="text-2xl font-bold text-center my-5">Error: {error}</h1>}
      {loading && <div className="flex items-center justify-center w-full h-full absolute top-0 bottom-0 z-15 bg-[#00000094] ">
        <h1 className="text-4xl text-center font-bold my-5">Loading <span className="loading loading-dots loading-xl"></span></h1>
      </div>}
      {users?.length === 0 && !loading && !error && <h1 className="text-center text-2xl font-bold my-5">Please create new user!</h1>}
      <h1 className="text-4xl font-bold my-5">Users</h1>
      <form>
        <button className="btn bg-white text-black text-2xl py-5 mr-5" onClick={(e) => {
          e.preventDefault()
          setModal(true)
        }}>New</button>
        <button className="btn bg-white text-black text-2xl py-5 my-5" type="button">Add Filter</button>
        <p className="text-blue-400 my-5">API documenttation for users</p>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-5">
          <table className="table bg-white">
            <thead>
              <tr className="text-black">
                <th>ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Role</th>
                <th>Disabled</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((i) => {
                return (
                  <tr key={i.id}>
                    <th>{i.id}</th>
                    <td>{i.name}</td>
                    <td>{i.phone}</td>
                    <td>{i.email}</td>
                    <td>{i.role}</td>
                    <td>{i.disabled}</td>
                    <td>
                      <button onClick={(e) => {
                        e.preventDefault()
                        setEditUser(i)
                        setEditModal(true)
                      }} className="btn bg-white text-black"><i className="fa-solid fa-user-pen"></i></button>
                    </td>
                    <td>
                      <button onClick={(e) => {
                        e.preventDefault()
                        toast.success('Deleted!')
                        deleteUser(i.id)
                      }} className="btn bg-red-600 border-0"><i className="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  )
}

export default Users
