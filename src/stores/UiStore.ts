import {makeAutoObservable} from 'mobx';

class UiStore {
  constructor() {
    makeAutoObservable(this);
  }

  isBottomTabShow: boolean = true;

  setIsBottomTabShow(isShow: boolean) {
    this.isBottomTabShow = isShow;
  }
}

export default UiStore;
