
// *--- Выход из личного кабинета
const logoutButton = new LogoutButton();
logoutButton.action = (() => {
  ApiConnector.logout((response) => {
    if (response.success) {
      location.reload();
    }
  });
});

// *--- Получение информации о пользователе
ApiConnector.current((response) => {
  if (response.success) {
    ProfileWidget.showProfile(response.data);
  }
});

// *--- Получение текущих курсов валюты
const ratesBoard = new RatesBoard();
function getCurrencyRate() {
  ApiConnector.getStocks((response) => {
    if (response.success) {
      ratesBoard.clearTable();
      ratesBoard.fillTable(response.data);
    }
  });
}
setInterval(getCurrencyRate, 1000);

// *--- Операции с деньгами
// 1 --- Пополнение баланса
const moneyManager = new MoneyManager();
moneyManager.addMoneyCallback = (data) => {
  ApiConnector.addMoney(data, (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
    }
    moneyManager.setMessage(response.success, response.error || 'Операция выполнена успешно');
  });
};

// 2 --- Конвертирование валюты
moneyManager.conversionMoneyCallback = (data) => {
  ApiConnector.convertMoney(data, (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
    }
    moneyManager.setMessage(response.success, response.error || 'Операция выполнена успешно');
  });
};

// 3 --- Перевод валюты
moneyManager.sendMoneyCallback = (data) => {
  ApiConnector.transferMoney(data, (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
    }
    moneyManager.setMessage(response.success, response.error || 'Операция выполнена успешно');
  });
};

// *--- Работа с избранным
const favoritesWidget = new FavoritesWidget();

// 1 --- Запрос начального списка избранного
ApiConnector.getFavorites((response) => {
  if (response.success) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(response.data);
    moneyManager.updateUsersList(response.data);
  }
});

// 2 --- Добавление пользователя в список избранного
favoritesWidget.addUserCallback = (data) => {
  ApiConnector.addUserToFavorites(data, (response) => {
    if (response.success) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(response.data);
      moneyManager.updateUsersList(response.data);
    }
    favoritesWidget.setMessage(response.success, response.error || 'Пользователь добавлен в список избранного');
  });
};

// 2 --- Удаление пользователя из списка избранного
favoritesWidget.removeUserCallback = (data) => {
  ApiConnector.removeUserFromFavorites(data, (response) => {
    if (response.success) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(response.data);
      moneyManager.updateUsersList(response.data);
    }
    favoritesWidget.setMessage(response.success, response.error || 'Пользователь удален из списка избранного');
  });
};
