import { createContext } from 'react';
// Когда React рендерит компонент, который подписан на этот объект, React получит текущее значение контекста из ближайшего подходящего Provider выше в дереве компонентов.
export const AuthContext = createContext({ //default value
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});
