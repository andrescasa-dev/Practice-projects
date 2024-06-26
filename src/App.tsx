import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react"
import { useSelector } from "react-redux"
import { selectUsers } from "./store"
import useAction from "./hooks/useAction"
import AddUserForm from "./components/AddUserForm"



function App() {
  const users = useSelector(selectUsers)
  const { deleteUser } = useAction()

  return (
    <>
      <Card className="m-12">
        <Title>
          users
            <Badge className="ml-2">
              1
            </Badge>
        </Title>
        <Table>
          <TableHead>
              <TableRow>
                {Object.keys(users[0]).map((key)=>(
                  <TableHeaderCell key={key}>{key}</TableHeaderCell>
                ))}
                <TableHeaderCell>
                  actions
                </TableHeaderCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {users.map((user)=>(
                <TableRow key={user.id}>
                  <TableCell>
                    <p>{user.id}</p>
                  </TableCell>
                  <TableCell>
                    <img
                      className="rounded-full inline mr-2"
                      src={`https://unavatar.io/github/${user.name}`}
                      height={24}
                      width={24}
                      alt={`avatar of the ${user.name}`}/>
                    <span>{user.name}</span>
                  </TableCell>
                  <TableCell>
                    <p>{user.email}</p>
                  </TableCell>
                  <TableCell>
                  <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> deleteUser(user.id)}  className="w-6 h-6 cursor-pointer" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
      <Card>
        <AddUserForm />
      </Card>
    </>

  )
}

export default App
