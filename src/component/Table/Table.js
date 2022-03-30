const Table = () => {
    const classB={
        color: "black",
        border:  "1px solid black"


    }
  const users = [
    {
      userId: 1,
      id: 1,
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 2,
      title: "sunt qui excepturi placeat culpa",
    },
    {
      userId: 1,
      id: 3,
      title: "omnis laborum odio",
    },
  ];
const usersList =users.map((user) => {
    return (
        <tr>
            <td style={classB}>{user.userId}</td>
            <td style={classB}>{user.id}</td>
            <td style={classB}>{user.title}</td>

        </tr>
    )
    
});
return <table style={classB}>{usersList}</table>;
        
};

export default Table;
