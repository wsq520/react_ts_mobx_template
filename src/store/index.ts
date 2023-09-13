import { createContext, useContext } from 'react';
import countStore from './Count';
import userStore from './User';

// 创建一个根store 里面可以管理多个模块的store
class RootStore {
  count = countStore;
  user = userStore;
}

// 根据store创建一个上下文
const rootStore = new RootStore();
const ctx = createContext(rootStore);

export const useStore = () => {
  return useContext(ctx);
}

