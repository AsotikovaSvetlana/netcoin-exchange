
const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    if (!response.success) {
      userForm.setLoginErrorMessage(response.error);
    }

    if (response.success) {
      location.reload();
    }
  });
};

userForm.registerFormCallback = (data) => {
  ApiConnector.register(data, (response) => {
    if (/^[A-z0-9._-]+@[A-z0-9.-]+\.[A-z]{2,4}$/.test(data.login)) {
      if (response.success) {
        location.reload();
      } else {
        userForm.setRegisterErrorMessage(response.error);
      }
    } else {
      const message = 'Некорректный логин или пароль';
      userForm.setRegisterErrorMessage(message);
    }
  });
};
