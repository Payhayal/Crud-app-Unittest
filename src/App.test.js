import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("is the application working properly?", async () => {
  render(<App />);

  // get necessary elements
  const nameInp = screen.getByLabelText("Name");
  const mailInp = screen.getByLabelText("Email");
  const button = screen.getByRole("button", { name: "Add User" });

  //   fill the form
  user.type(nameInp, "Elif");
  user.type(mailInp, "elif@gmail.com");

  // submit form
  user.click(button);

  // Is a table cell corresponding to the name and mail value rendered on the screen?
  // !!!state güncellenmesi sonucu ekrana basıldığından async elemanları getiren find komutunu kullandık
  await screen.findByRole("cell", { name: "Elif" });
  await screen.findByRole("cell", { name: "elif@gmail.com" });
});
