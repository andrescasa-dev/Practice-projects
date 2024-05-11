import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react"
import { useSelector } from "react-redux"
import { selectUsers } from "./store"


function App() {
  const users = useSelector(selectUsers)
  return (
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
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
    
  )
}

export default App
