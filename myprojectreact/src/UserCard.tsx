type User = {
  id: number;
  name: string;
  age: number;
};

function UserCard({ users }: { users: User[] }) {
  return (
    <div style={{ margin : "7%", padding:"10%"}}>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}
export default UserCard;