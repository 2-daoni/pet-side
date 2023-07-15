import {makeAutoObservable} from 'mobx';
import {UserDto} from 'src/types/CustomData';

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  userList: Array<UserDto> = [
    {email: 'test@test.com', password: 'test1111', name: 'test'},
  ];

  currentUser: UserDto = {email: '', password: '', name: ''};

  setUserList(newUser: UserDto) {
    this.userList.push(newUser);
  }

  setCurrentUser(user: UserDto) {
    this.currentUser = user;
  }
}

export default AuthStore;
