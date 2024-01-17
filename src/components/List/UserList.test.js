import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const users = [
  { name: "Nihal", email: "nihal@gmail.com" },
  { name: "Selim", email: "selim@gmail.com" },
  { name: "Ali", email: "ali@gmail.com" },
];
test("renders a table row on the screen for each user", () => {
  render(<UserList users={users} />);

  // get all the row that are in users table (users tablosu icerisindeki tum satirlari al)
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(users.length);
});

test("name and email appears on the screen for each user", () => {
  render(<UserList users={users} />);

  // do you see name and email on the screen for each user
  for (const user of users) {
    // gets name of the user
    const nameCell = screen.getByText(user.name);
    // gets mail of the user
    const mailCell = screen.getByText(user.email);

    // check the results
    expect(nameCell).toBeInTheDocument();
    expect(mailCell).toBeInTheDocument();
  }
});
