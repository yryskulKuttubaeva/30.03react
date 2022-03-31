const Table = () => {
    const classA={
        color: "blue",
        border:  "1px solid blue",
        padding: "3px",
        margin: "15px"


    }
  const users = [
    {
      userId: 1,
      id: 1,
      age: 28,
      name: "Guldana",
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 1,
      age: 38,
      name: "Namat",
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 1,
      age: 58,
      name: "Talgarbek",
      title: "quidem molestiae enim",
    },
    {
      userId: 5,
      id: 2,
      age: 78,
      name: "Aziz",
      title: "quidem molestiae enim",
    },
    {
      userId: 2,
      id: 5,
      age: 27,
      name: "Gulnaz",
      title: "quidem molestiae enim",
    },
  
  ];
const usersList =users.map((user) => {
    return (
        <tr>
            <td style={classA}>{user.userId}</td>
            <td style={classA}>{user.id}</td>
            <td style={classA}>{user.age}</td>
            <td style={classA}>{user.name}</td>
            <td style={classA}>{user.title}</td>


        </tr>
    )
    
});
return <table style={classA}>{usersList}</table>;
        
};

export default Table;
