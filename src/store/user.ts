import { action, runInAction, makeAutoObservable, observable } from 'mobx';

interface IUserInfo {
  name: string;
  age: number;
}

class UserStore {
  userInfo: IUserInfo = {
    name: '',
    age: 0
  };
  constructor() {
    makeAutoObservable(this, {
      userInfo: observable,
      getUserInfo: action.bound,
      setUserInfo: action.bound,
    })
  }

  getUserInfo() {
    // 模拟网络请求
    setTimeout(() => {
      // 保存异步数据
      // 方式 1: 将设置数据的过程抽取到一个action中
      // this.setUserInfo({
      //   name: 'ikun',
      //   age: 20
      // })

      // 2.方式 2：调用runInAction方法
      runInAction(() => {
        this.userInfo.name = 'runInAction';
        this.userInfo.age = 99;
      })
    }, 2000)
  }

  setUserInfo(userInfo: IUserInfo) {
    this.userInfo = userInfo;
  }
}

const userStore = new UserStore();
export default userStore;