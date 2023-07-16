import {makeAutoObservable} from 'mobx';
import {UserDto} from 'src/types/CustomData';

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  isLogin: boolean = false;

  userList: Array<UserDto> = [
    {email: 'test@test.com', password: 'test1111', profile: {name: 'test'}},
  ];

  currentUser: UserDto = {email: '', password: '', profile: {name: ''}};

  setIsLogin(isLogin: boolean) {
    this.isLogin = isLogin;
  }

  setUserList(newUser: UserDto) {
    this.userList.push(newUser);
  }

  setCurrentUser(user: UserDto) {
    this.currentUser = user;
  }
}

export default AuthStore;
