import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import { observer } from 'mobx-react';
import { useStore } from './store';

function App() {
  const { count, user } = useStore();

  return (
    <div className='app'>
      <div className='nav'>Nav</div>
      <hr />
      <button onClick={() => count.increment()}>count+1</button>
      <h3>count:{count.count}</h3>
      <h3>doubleCount:{count.doubleCount}</h3>
      <hr />
      <h3>用户名：{user.userInfo.name}</h3>
      <h3>年龄：{user.userInfo.age}</h3>
      <button onClick={() => user.getUserInfo()}>获取用户信息</button>
      <Suspense fallback={<span>loading...</span>}>
        <div className='main'>
          {useRoutes(routes)}
        </div>
      </Suspense>
    </div>
  )
}

export default observer(App);
