import { render, screen, waitFor } from "@testing-library/react";
import UserForm from "./UserForm";
import user from "@testing-library/user-event";

// userForm bileşenin diğer bileşenlerden izole bir şekilde test edicez
// form gönderilince tabloya eleman ekleniyo mu kontrolü yapmıycaz
//! formun mantığı doğru şekilde çalışıyor mu?
// name ve email inputlatlarını doldurdaktan sonra
// formu gönderilince addUser fonksiyonu çalışiyor mu?
// addUser fonksiyonuna doğru parametre gönderiliyor mu?

test("Does the user function run with the correct parameters when the form is submitted?", () => {
  const mock = jest.fn();
  render(<UserForm addUser={mock} />);

  // get necessary elements
  const nameInput = screen.getByLabelText("Name");
  const mailInput = screen.getByLabelText("Email");
  const submitBtn = screen.getByRole("button");

  // write sth to nameInput (1.yol)
  user.click(nameInput);
  user.keyboard("bilal");

  // write mail to mailInput (2.yol)
  user.type(mailInput, "bilal@gmail.com");

  // submit form
  user.click(submitBtn);

  // Is the addUser function called when the form is submitted?
  expect(mock).toHaveBeenCalled();
  // Are the right parameters sent when the addUser function is called?
  expect(mock).toHaveBeenCalledWith({
    name: "bilal",
    email: "bilal@gmail.com",
  });
});

// toHaveBeenCalledWith:fonksiyonlar calisirken gonderilen parametreleri test etmeye yariyor.
// toHaveBeenCalledTimes:kac kez cagrildigini test ediyor
// type: hem click hem keyboard gibi.daha modern ve az kod

test("Are the inputs clean after the form is submitted?", async () => {
  render(<UserForm addUser={() => {}} />);

  // get necessary elements
  const nameInp = screen.getByLabelText("Name");
  const mailInp = screen.getByLabelText("Email");
  const button = screen.getByRole("button");

  // write sth to inputs
  user.type(nameInp, "mahmut");
  user.type(mailInp, "mahmut@gmail.com");

  // Is the text written to the inputs added as value?
  expect(nameInp).toHaveValue("mahmut");
  expect(mailInp).toHaveValue("mahmut@gmail.com");

  // submit form
  user.click(button);
  //  Is the name input clean?
  // state değişikliği direkt olarak gerçekleşmediği için (waitFor) ile gerçekleşmesini bekledik
  await waitFor(() => expect(nameInp).toHaveValue(""));
  await waitFor(() => expect(mailInp.value).toBe(""));
});
