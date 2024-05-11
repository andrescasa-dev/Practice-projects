import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title, Badge} from "@tremor/react"

function App() {
  const users: {id:number, name:string, email:string}[] = [
    {id:1, name:"andres", email:"andres@gmail.com"},
    {id:2, name:"casa", email:"andres@gmail.com"},
  ]

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
